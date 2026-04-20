import React from "react";
import { Link } from "gatsby";
import "../styles/global.css";

const Layout = ({ children, title, description }) => {
  return (
    <>
      {/* Gatsby 5 の Head API で SEO メタタグを注入 */}
      {/* 各ページから <Head> を export する形式になります */}
      <header className="site-header">
        <div className="container">
          <Link to="/" className="site-header__logo">
            🗳️ なかの2026
            <span>候補者アンケート結果</span>
          </Link>
          <nav className="site-header__nav" aria-label="メインナビゲーション">
            <Link to="/">候補者一覧</Link>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {children}
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>
            © 2026 なかの2026 候補者アンケート &nbsp;|&nbsp;{" "}
            このサイトは選挙に関する情報を中立的に提供することを目的としています。
          </p>
        </div>
      </footer>
    </>
  );
};

// Gatsby 5 Head API: 各ページで呼び出す用のヘルパー
export const PageHead = ({ title, description }) => {
  const siteTitle = "なかの2026 | 候補者アンケート";
  const siteDescription = "2026年選挙候補者へのアンケート結果を掲載しています。";
  const pageTitle = title ? `${title} | なかの2026` : siteTitle;
  const pageDescription = description || siteDescription;

  return (
    <>
      <html lang="ja" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🗳️</text></svg>"
      />
    </>
  );
};

export default Layout;
