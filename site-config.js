/**
 * site-config.js
 * サイト設定ファイル — ここを編集してスプレッドシートのURLや列名を設定してください
 */

module.exports = {
  // ===== サイト基本情報 =====
  siteTitle: "なかの2026 | 候補者アンケート",
  siteDescription: "2026年選挙候補者へのアンケート結果を掲載しています。",
  siteUrl: "https://kawazusa.github.io/2026nakanovote", // GitHub Pages URL

  // ===== Google スプレッドシート設定 =====
  // スプレッドシートID (URLの /d/ と /edit の間の文字列)
  // 例: https://docs.google.com/spreadsheets/d/【ここ】/edit
  spreadsheetId: "1SzMWS7C4YL94G66MRMXiiZMxQL6nYCCaajJAa1NiMwQ",

  // シート名 (デフォルトは "シート1" または "Sheet1")
  sheetName: "シート1",

  // ===== 認証方式 =====
  // "service_account" : Google Cloud サービスアカウント (非公開スプレッドシート向け)
  // "public_csv"      : 公開スプレッドシートをCSVで直接取得 (認証不要)
  authMode: "public_csv",

  // サービスアカウントのキーファイルパス
  // ローカル開発時: credentials/service-account.json に配置
  // GitHub Actions: Secrets から自動で生成されます
  serviceAccountKeyPath: "./credentials/service-account.json",

  // ===== スプレッドシートの列マッピング =====
  // 実際のスプレッドシートの1行目の列名 (ヘッダー行) に合わせてください
  columns: {
    id: "ID",
    name: "お名前",
    electionType: "立候補予定なのはどちらですか？",
    district: "選挙区", // シートにない場合は空欄になります
    party: "所属政党・推薦",
    age: "年齢", // シートにない場合は空欄になります
    profile: "自由記述",
    imageUrl: "顔写真URL",
    website: "公式ウェブサイト",
    twitter: "X",
    sns: "公式SNS",
    line: "LINE",
    youtube: "Youtube",
    facebook: "Facebook",
    instagram: "Instagram",
    tiktok: "tiktok",
  },

  // ===== アンケート質問一覧 =====
  // key      : 内部識別子 (URLなどに使用)
  // label    : サイトに表示する質問文
  // column   : スプレッドシートの列名 (ヘッダー行の文字列)
  questions: [
    { key: "Q1", label: "子育て世代へアピールしたいことは何ですか？", column: "質問１. 子育て世代へアピールしたいことは何ですか？" },
    { key: "Q2", label: "ご自身が小学生や中学生の頃、どこで何をして遊んでいましたか？", column: "質問２．ご自身が小学生や中学生の頃、どこで何をして遊んでいましたか？" },
    { key: "Q3", label: "子育て支援で、何に一番力を入れたいですか？", column: "質問３．子育て支援で、何に一番力を入れたいですか？" },
    { key: "Q4_num", label: "お答えいただける質問番号", column: "お答えいただける質問番号" },
    { key: "Q4_content", label: "質問内容", column: "質問内容" },
    { key: "Q4_answer", label: "選択した質問に対する回答", column: "選択した質問に対する回答" },
    { key: "additional_url", label: "追加回答URL", column: "追加回答URL" },
  ],

  // ===== フィルタリング設定 =====
  enableElectionTypeFilter: true, // 選挙種類フィルター
  enableDistrictFilter: true,   // 選挙区フィルター
  enablePartyFilter: true,      // 政党フィルター

  // ===== GitHub Pages のパスプレフィックス =====
  // リポジトリ名がルートでない場合に設定
  pathPrefix: "/2026nakanovote",
};
