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
  spreadsheetId: "YOUR_SPREADSHEET_ID_HERE",

  // シート名 (デフォルトは "シート1" または "Sheet1")
  sheetName: "シート1",

  // ===== 認証方式 =====
  // "service_account" : Google Cloud サービスアカウント (非公開スプレッドシート向け)
  // "public_csv"      : 公開スプレッドシートをCSVで直接取得 (認証不要)
  authMode: "service_account",

  // サービスアカウントのキーファイルパス
  // ローカル開発時: credentials/service-account.json に配置
  // GitHub Actions: Secrets から自動で生成されます
  serviceAccountKeyPath: "./credentials/service-account.json",

  // ===== スプレッドシートの列マッピング =====
  // 実際のスプレッドシートの1行目の列名 (ヘッダー行) に合わせてください
  columns: {
    id: "ID",                    // 候補者ID (なければ自動生成)
    name: "候補者名",
    electionType: "選挙種類",    // 区長選挙、区議補欠選挙など
    district: "選挙区",
    party: "政党",
    age: "年齢",
    profile: "プロフィール",
    imageUrl: "写真URL",         // 候補者写真のURL (任意)
    website: "ウェブサイト",     // 候補者サイトURL (任意)
    twitter: "Twitter/X",        // SNSアカウント (任意)
  },

  // ===== アンケート質問一覧 =====
  // key      : 内部識別子 (URLなどに使用)
  // label    : サイトに表示する質問文
  // column   : スプレッドシートの列名 (ヘッダー行の文字列)
  questions: [
    { key: "Q1", label: "質問1のタイトル", column: "Q1" },
    { key: "Q2", label: "質問2のタイトル", column: "Q2" },
    // 必要に応じて追加してください
  ],

  // ===== フィルタリング設定 =====
  enableElectionTypeFilter: true, // 選挙種類フィルター
  enableDistrictFilter: true,   // 選挙区フィルター
  enablePartyFilter: true,      // 政党フィルター

  // ===== GitHub Pages のパスプレフィックス =====
  // リポジトリ名がルートでない場合に設定
  pathPrefix: "/2026nakanovote",
};
