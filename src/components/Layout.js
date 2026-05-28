import React from "react";
import { Link, withPrefix } from "gatsby";
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
            <Link to="/" activeClassName="site-header__link--active">候補者一覧</Link>
            <Link to="/compare" activeClassName="site-header__link--active">質問ごとに比較する</Link>
            <Link to="/about" activeClassName="site-header__link--active">About Us</Link>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {children}
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© 2026 子育て環境向上委員会@中野</p>
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
      <link rel="icon" href={withPrefix("/images/favicon.png")} />
    </>
  );
};

export default Layout;
