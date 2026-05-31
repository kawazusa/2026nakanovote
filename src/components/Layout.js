import React from "react";
import { Link, withPrefix } from "gatsby";
import "../styles/global.css";
import siteConfig from "../../site-config";

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
            <Link to="/questionnaire" activeClassName="site-header__link--active">アンケートについて</Link>
            <Link to="/about" activeClassName="site-header__link--active">About Us</Link>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {children}
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="site-footer__links">
            <a href="https://nakanokosodate.localinfo.jp/" target="_blank" rel="noopener noreferrer">🌐 公式サイト</a>
            <a href="mailto:kosodate.nakano@gmail.com">✉️ お問い合わせ</a>
            <a href="https://twitter.com/kosodatenakano" target="_blank" rel="noopener noreferrer">𝕏 Twitter/X</a>
            <a href="https://www.facebook.com/nakanokosodate/" target="_blank" rel="noopener noreferrer">📘 Facebook</a>
          </div>
          <p className="site-footer__copy">© 2026 子育て環境向上委員会@中野</p>
        </div>
      </footer>
    </>
  );
};

// Gatsby 5 Head API: 各ページで呼び出す用のヘルパー
// imageUrl: og:image に使う画像URL。未指定時はデフォルト OGP 画像を使用
// pageUrl:  og:url に使う正規URL。未指定時はサイトトップURLを使用
export const PageHead = ({ title, description, imageUrl, pageUrl, useExactTitle }) => {
  const siteTitle = "なかの2026 | 候補者アンケート";
  const siteDescription = "2026年選挙候補者へのアンケート結果を掲載しています。";
  const siteUrl = siteConfig.siteUrl || "";

  const pageTitle = useExactTitle && title ? title : (title ? `${title} | なかの2026` : siteTitle);
  const pageDescription = description || siteDescription;

  // og:image: 引数で渡された画像 → デフォルト OGP 画像の順でフォールバック
  // siteUrl（例: https://kawazusa.github.io/2026nakanovote）は pathPrefix を既に含む
  const defaultOgImage = `${siteUrl}/images/ogp.png`;
  const ogImage = imageUrl || defaultOgImage;

  // ビルド（デプロイ）毎に一意のキャッシュバスターを付与してSNS側のキャッシュを強制更新する
  const buildTimestamp = Date.now();
  const getCacheBustedUrl = (url) => {
    if (!url) return url;
    // 自サイトの画像（絶対URLまたは相対パス）にのみキャッシュバスターを適用
    if (url.startsWith(siteUrl) || url.startsWith("/") || !url.startsWith("http")) {
      const separator = url.includes("?") ? "&" : "?";
      return `${url}${separator}v=${buildTimestamp}`;
    }
    return url;
  };
  const ogImageWithBuster = getCacheBustedUrl(ogImage);

  // og:url: 引数で渡された URL → サイトトップの順でフォールバック
  const canonicalUrl = pageUrl || siteUrl;

  return (
    <>
      <html lang="ja" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#1a56db" />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="なかの2026 | 候補者アンケート" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={ogImageWithBuster} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={pageTitle} />

      {/* Twitter / X Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImageWithBuster} />
      <meta name="twitter:image:alt" content={pageTitle} />

      <link rel="canonical" href={canonicalUrl} />
      <link rel="icon" type="image/png" href={withPrefix("/images/favicon.png")} />
      <link rel="apple-touch-icon" href={withPrefix("/images/favicon.png")} />
    </>
  );
};

export default Layout;
