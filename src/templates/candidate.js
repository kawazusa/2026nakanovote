import React from "react";
import { Link, withPrefix } from "gatsby";
import Layout, { PageHead } from "../components/Layout";
import QuestionAnswer from "../components/QuestionAnswer";
import siteConfig from "../../site-config";

const CandidatePage = ({ pageContext }) => {
  const { candidate } = pageContext;
  const {
    name,
    district,
    party,
    age,
    profile,
    imageUrl,
    website,
    twitter,
    sns,
    line,
    youtube,
    facebook,
    instagram,
    tiktok,
    answers,
  } = candidate;

  const initial = name ? name[0] : "?";
  const buildTimestamp = Date.now();
  const q1Answer = answers?.find((a) => a.key === "Q1")?.value;
  const displayText = q1Answer || profile;

  return (
    <Layout
      title={name}
      description={`${name}（${party || ""}${district ? " / " + district : ""}）のアンケート回答結果`}
    >
      <div className="candidate-detail">
        <div className="container">

          {/* 戻るリンク */}
          <Link to="/" className="candidate-detail__back">
            ← 候補者一覧に戻る
          </Link>

          {/* プロフィールカード */}
          <article className="candidate-profile-card animate-fade-in-up">
            <div className="candidate-profile-card__hero">
              {imageUrl ? (
                <img
                  src={imageUrl?.startsWith('/') ? withPrefix(imageUrl) : imageUrl}
                  alt={`${name} の写真`}
                  className="candidate-profile-card__avatar"
                />
              ) : (
                <div
                  className="candidate-profile-card__avatar-placeholder"
                  aria-hidden="true"
                >
                  {initial}
                </div>
              )}
              <div>
                <h1 className="candidate-profile-card__title">{name}</h1>
                <div className="candidate-profile-card__badges">
                  {candidate.electionType && (
                    <span className="badge badge--light">🗳️ {candidate.electionType}</span>
                  )}
                  {party && (
                    <span className="badge badge--light">{party}</span>
                  )}
                  {district && (
                    <span className="badge badge--light">📍 {district}</span>
                  )}
                  {age && (
                    <span className="badge badge--light">🎂 {age}歳</span>
                  )}
                </div>
              </div>
            </div>

            <div className="candidate-profile-card__body">
              {displayText && (
                <p className="candidate-profile-card__profile-text">
                  {displayText}
                </p>
              )}

              {(website || twitter || facebook || instagram || tiktok || sns || line || youtube) && (
                <div className="candidate-profile-card__links">
                  {website && (
                    <a
                      href={website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--primary"
                      aria-label={`${name} の公式ウェブサイト（新しいタブで開く）`}
                    >
                      🌐 公式サイト
                    </a>
                  )}
                  {facebook && (
                    <a
                      href={facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--outline"
                      aria-label={`${name} の Facebook（新しいタブで開く）`}
                    >
                      📘 Facebook
                    </a>
                  )}
                  {instagram && (
                    <a
                      href={instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--outline"
                      aria-label={`${name} の Instagram（新しいタブで開く）`}
                    >
                      📷 Instagram
                    </a>
                  )}
                  {tiktok && (
                    <a
                      href={tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--outline"
                      aria-label={`${name} の TikTok（新しいタブで開く）`}
                    >
                      🎵 TikTok
                    </a>
                  )}
                  {sns && (
                    <a
                      href={sns}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--outline"
                      aria-label={`${name} の公式SNS（新しいタブで開く）`}
                    >
                      📱 公式SNS
                    </a>
                  )}
                  {twitter && (
                    <a
                      href={
                        twitter.startsWith("http")
                          ? twitter
                          : `https://twitter.com/${twitter.replace("@", "")}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--outline"
                      aria-label={`${name} の Twitter/X（新しいタブで開く）`}
                    >
                      𝕏 Twitter/X
                    </a>
                  )}
                  {line && (
                    <a
                      href={line}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--outline"
                      aria-label={`${name} の LINE（新しいタブで開く）`}
                    >
                      💬 LINE
                    </a>
                  )}
                  {youtube && (
                    <a
                      href={youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--outline"
                      aria-label={`${name} の YouTube（新しいタブで開く）`}
                    >
                      ▶️ YouTube
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>

          {/* アンケート回答 */}
          <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <QuestionAnswer answers={answers} profile={profile} />
          </div>

          {/* SNS 共有 */}
          <div className="share-section animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <p className="share-section__label">この候補者の回答をシェアする</p>
            <div className="share-section__buttons">
              {/* X (Twitter) */}
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${name}さんのアンケート回答を見てみよう！ #中野区長選挙 #中野区議補欠選挙 #中野区`)}&url=${encodeURIComponent(`${siteConfig.siteUrl}/candidates/${candidate.slug}/?v=${buildTimestamp}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn share-btn--x"
                aria-label="X (Twitter) でシェア"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zM17.083 20.012h1.833L7.084 4.126H5.117L17.083 20.012z"/></svg>
                X でシェア
              </a>
              {/* LINE */}
              <a
                href={`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(`${siteConfig.siteUrl}/candidates/${candidate.slug}/?v=${buildTimestamp}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn share-btn--line"
                aria-label="LINE でシェア"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>
                LINE でシェア
              </a>
              {/* Facebook */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${siteConfig.siteUrl}/candidates/${candidate.slug}/?v=${buildTimestamp}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn share-btn--facebook"
                aria-label="Facebook でシェア"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook でシェア
              </a>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export const Head = ({ pageContext }) => {
  const { candidate } = pageContext;
  const { name, party, district, imageUrl, slug } = candidate;

  const siteConfig = require("../../site-config");
  const siteUrl = siteConfig.siteUrl || "";

  // 候補者の正規 URL（slug が gatsby-node.js で設定されている前提）
  // siteUrl（例: https://kawazusa.github.io/2026nakanovote）は pathPrefix を既に含む
  const candidateUrl = slug
    ? `${siteUrl}/candidates/${slug}/`
    : siteUrl;

  // og:image: 顔写真が外部 URL の場合はそのまま使用
  // （http で始まらない場合は siteUrl 基準の絶対URLに変換）
  let ogImage;
  if (imageUrl) {
    ogImage = imageUrl.startsWith("http")
      ? imageUrl
      : `${siteUrl}${imageUrl}`;
  }

  return (
    <PageHead
      title={name}
      description={`${name}（${party || ""}${district ? " / " + district : ""}）のアンケート回答結果`}
      imageUrl={ogImage}
      pageUrl={candidateUrl}
    />
  );
};

export default CandidatePage;
