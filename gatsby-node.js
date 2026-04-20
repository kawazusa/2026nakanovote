const { google } = require("googleapis");
const path = require("path");
const fs = require("fs");
const config = require("./site-config");

// ===== Google Sheets API でデータ取得 =====
async function fetchWithServiceAccount() {
  const keyPath = path.resolve(config.serviceAccountKeyPath);

  let auth;

  // GitHub Actions 環境: Secrets から JSON を直接読み込む
  if (process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
    const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
    auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });
    console.log("  認証: 環境変数 GOOGLE_SERVICE_ACCOUNT_JSON を使用");

  // ローカル開発: credentials/service-account.json を使用
  } else if (fs.existsSync(keyPath)) {
    auth = new google.auth.GoogleAuth({
      keyFile: keyPath,
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });
    console.log(`  認証: ${keyPath} を使用`);

  } else {
    throw new Error(
      `サービスアカウントキーが見つかりません。\n` +
      `  ・ローカル: ${keyPath} に配置してください\n` +
      `  ・GitHub Actions: Secrets に GOOGLE_SERVICE_ACCOUNT_JSON を設定してください`
    );
  }

  const sheets = google.sheets({ version: "v4", auth });

  console.log(`  スプレッドシートID: ${config.spreadsheetId}`);
  console.log(`  シート名: ${config.sheetName}`);

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: config.spreadsheetId,
    range: config.sheetName,
  });

  const rows = response.data.values;
  if (!rows || rows.length < 2) {
    throw new Error("スプレッドシートにデータがありません (ヘッダー行 + データ行が必要です)");
  }

  // 1行目をヘッダーとしてオブジェクト配列に変換
  const headers = rows[0].map((h) => h.trim());
  const data = rows.slice(1).map((row) => {
    const obj = {};
    headers.forEach((header, i) => {
      obj[header] = row[i] !== undefined ? row[i] : "";
    });
    return obj;
  });

  console.log(`  ${data.length} 件の候補者データを取得しました。`);
  return data;
}

// ===== 公開CSV方式 (公開スプレッドシート向け) =====
async function fetchWithPublicCsv() {
  const axios = require("axios");
  const Papa = require("papaparse");
  const { spreadsheetId, sheetName } = config;

  const csvUrl = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;
  console.log(`  CSV URL: ${csvUrl}`);

  const response = await axios.get(csvUrl, { timeout: 15000 });
  const result = Papa.parse(response.data, {
    header: true,
    skipEmptyLines: true,
    transformHeader: (h) => h.trim(),
  });

  console.log(`  ${result.data.length} 件の候補者データを取得しました。`);
  return result.data;
}

// ===== スプレッドシートからデータを取得するメイン関数 =====
async function fetchSpreadsheetData() {
  console.log("\nスプレッドシートからデータを取得中...");

  try {
    if (config.authMode === "service_account") {
      return await fetchWithServiceAccount();
    } else {
      return await fetchWithPublicCsv();
    }
  } catch (err) {
    console.error(
      "\n⚠️  スプレッドシートの取得に失敗しました。",
      "\n  エラー:", err.message,
      "\n  → サンプルデータを使用してビルドを続行します。\n"
    );
    return getSampleData();
  }
}

// ===== 開発・テスト用サンプルデータ =====
function getSampleData() {
  const { columns, questions } = config;
  const sampleAnswers = (suffix) =>
    questions.reduce((acc, q) => {
      const vals = ["賛成", "反対", "どちらでもない", "未回答"];
      acc[q.column] = vals[suffix % vals.length];
      return acc;
    }, {});

  return [
    {
      [columns.id]: "1",
      [columns.name]: "サンプル 太郎",
      [columns.electionType]: "区長選挙",
      [columns.district]: "中野区",
      [columns.party]: "サンプル党",
      [columns.age]: "45",
      [columns.profile]: "サンプル候補者のプロフィールです。地域の課題解決に取り組みます。",
      [columns.website]: "https://example.com",
      ...sampleAnswers(0),
    },
    {
      [columns.id]: "2",
      [columns.name]: "サンプル 花子",
      [columns.electionType]: "区長選挙",
      [columns.district]: "中野区",
      [columns.party]: "テスト党",
      [columns.age]: "38",
      [columns.profile]: "サンプル候補者のプロフィールです。子育て支援に力を入れます。",
      [columns.website]: "https://example.com",
      ...sampleAnswers(1),
    },
    {
      [columns.id]: "3",
      [columns.name]: "見本 次郎",
      [columns.electionType]: "区議補欠選挙",
      [columns.district]: "中野区",
      [columns.party]: "サンプル党",
      [columns.age]: "52",
      [columns.profile]: "サンプル候補者のプロフィールです。経済活性化を目指します。",
      [columns.website]: "https://example.com",
      ...sampleAnswers(2),
    },
  ];
}

// ===== URLスラッグ変換 =====
function toSlug(str) {
  if (!str) return "";
  // URLセーフな文字（英数字、ハイフン、アンダースコア）以外を削除
  const slug = str
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
  return slug;
}

// ===== Gatsby: ページ生成 =====
exports.createPages = async ({ actions }) => {
  const { createPage, deletePage } = actions;
  const candidateTemplate = require.resolve("./src/templates/candidate.js");
  const { columns, questions } = config;

  const rawData = await fetchSpreadsheetData();

  // データを正規化
  const candidates = rawData
    .filter((row) => row[columns.name]?.trim()) // 名前のない行を除外
    .map((row, index) => {
      const id = row[columns.id]?.trim() || String(index + 1);
      const name = row[columns.name].trim();
      const slugBase = toSlug(name);
      const slug = slugBase || `candidate-${id}`;

      const answers = questions.map((q) => ({
        key: q.key,
        label: q.label,
        value: (row[q.column] || "").trim(),
      }));

      return {
        id,
        slug,
        name,
        electionType: (row[columns.electionType] || "").trim(),
        district: (row[columns.district] || "").trim(),
        party: (row[columns.party] || "").trim(),
        age: (row[columns.age] || "").trim(),
        profile: (row[columns.profile] || "").trim(),
        imageUrl: (row[columns.imageUrl] || "").trim(),
        website: (row[columns.website] || "").trim(),
        twitter: (row[columns.twitter] || "").trim(),
        answers,
      };
    });

  // 候補者詳細ページを生成
  candidates.forEach((candidate) => {
    createPage({
      path: `/candidates/${candidate.slug}/`,
      component: candidateTemplate,
      context: { candidate, allCandidates: candidates },
    });
  });

  // トップページ
  createPage({
    path: "/",
    component: require.resolve("./src/templates/index.js"),
    context: { candidates },
  });
};


