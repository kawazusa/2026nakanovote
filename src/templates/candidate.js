import React from "react";
import { Link } from "gatsby";
import Layout, { PageHead } from "../components/Layout";
import QuestionAnswer from "../components/QuestionAnswer";

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
    answers,
  } = candidate;

  const initial = name ? name[0] : "?";

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
                  src={imageUrl}
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
              {profile && (
                <p className="candidate-profile-card__profile-text">
                  {profile}
                </p>
              )}

              {(website || twitter) && (
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
                </div>
              )}
            </div>
          </article>

          {/* アンケート回答 */}
          <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <QuestionAnswer answers={answers} />
          </div>

        </div>
      </div>
    </Layout>
  );
};

export const Head = ({ pageContext }) => {
  const { candidate } = pageContext;
  const { name, party, district } = candidate;
  return (
    <PageHead
      title={name}
      description={`${name}（${party || ""}${district ? " / " + district : ""}）のアンケート回答結果`}
    />
  );
};

export default CandidatePage;
