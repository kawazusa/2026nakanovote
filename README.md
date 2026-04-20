# なかの2026 — 候補者アンケート結果サイト

2026年の選挙候補者へのアンケート結果を掲載する静的サイトです。  
Gatsby で構築し、GitHub Pages で公開しています。

## 🔗 公開URL

`https://<your-github-username>.github.io/2026nakanovote/`

---

## 🚀 セットアップ手順

### 必要なもの

- Node.js 18 以上
- npm

### インストール

```bash
npm install
```

### ローカル開発サーバー

```bash
npm run develop
```

`http://localhost:8000` でサイトが確認できます。

### ビルド

```bash
npm run build
```

---

## ⚙️ 設定方法

### 1. スプレッドシートの準備

Googleスプレッドシートを **「リンクを知っている全員が閲覧可能」** に設定してください。

### 2. `site-config.js` を編集

```js
// スプレッドシートIDを設定 (URLの /d/ と /edit の間の文字列)
spreadsheetId: "YOUR_SPREADSHEET_ID_HERE",

// シート名
sheetName: "シート1",

// 列名マッピング (実際のスプレッドシートの列名に合わせてください)
columns: {
  name: "候補者名",
  district: "選挙区",
  party: "政党",
  // ...
},

// アンケート質問一覧
questions: [
  { key: "Q1", label: "質問1", column: "Q1の列名" },
  // ...
],
```

### 3. GitHub Pagesの設定

1. GitHubリポジトリの **Settings → Pages** を開く
2. Source を **gh-pages ブランチ** に設定
3. `main` ブランチに push すると自動でビルド & デプロイされます

---

## 📊 スプレッドシートの形式

| 列名 | 説明 |
|------|------|
| 候補者名 | 候補者のフルネーム |
| 選挙区 | 立候補している選挙区 |
| 政党 | 所属政党 |
| 年齢 | 年齢 (数字) |
| プロフィール | 候補者の説明文 |
| Q1, Q2, ... | 各質問への回答 |

回答の値として以下を使用すると、自動的に色分けされます：

- **賛成 / yes / ○** → 🟢 緑
- **反対 / no / ×** → 🔴 赤  
- **どちらでもない / △** → 🟡 黄
- **未回答 / -** → ⚫ グレー

---

## 🔄 データ更新

- `main` ブランチに push するたびに自動ビルドされます
- 手動更新: GitHub Actions の **"Run workflow"** ボタンから実行できます
- 定期更新: `.github/workflows/deploy.yml` のスケジュール設定をアンコメントしてください

---

## 🛠️ 技術スタック

- [Gatsby](https://www.gatsbyjs.com/) — 静的サイトジェネレーター
- [React](https://react.dev/) — UIフレームワーク
- [GitHub Pages](https://pages.github.com/) — ホスティング
- [GitHub Actions](https://github.com/features/actions) — CI/CD
- Google Sheets CSV Export — データ取得
