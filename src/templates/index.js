import React, { useMemo } from "react";
import { Link } from "gatsby";
import Layout, { PageHead } from "../components/Layout";
import CandidateCard from "../components/CandidateCard";
import siteConfig from "../../site-config";

const IndexPage = ({ pageContext }) => {
  const rawCandidates = pageContext?.candidates;
  // pageContext.candidates は通常変更されないためメモ化
  const candidates = useMemo(() => rawCandidates || [], [rawCandidates]);

  // 選挙種類でグループ化
  const groupedCandidates = useMemo(() => {
    const groups = {};
    candidates.forEach((c) => {
      const type = c.electionType || "その他";
      if (!groups[type]) groups[type] = [];
      groups[type].push(c);
    });
    return groups;
  }, [candidates]);

  return (
    <Layout
      title="候補者一覧"
      description="2026年選挙候補者へのアンケート結果一覧ページです。選挙区・政党で絞り込めます。"
    >
      {/* ヒーローセクション */}
      <section className="hero" aria-labelledby="hero-title">
        <h1 className="visually-hidden" id="hero-title">
          なかの2026 候補者アンケート結果
        </h1>
      </section>

      <section className="intro-section">
        <div className="container">
          <p>
            こんにちは。子育て環境向上委員会@中野 です。<br />
            私たちは、子育て世代の声を区政や議員の皆様へ届ける活動などをしている団体で、主に子育て中の母親で構成され、超党派で活動しています。<br />
            当団体では、1人でも多くの有権者に区政へ関心を持っていただくこと、また子育て世代の有権者がどのようなことに関心を持っているのかを立候補予定者の皆様に知っていただくことを目的に、公開アンケートを実施しました。<br />
            アンケートの詳細は<Link to="/questionnaire" style={{ color: 'var(--color-primary)', fontWeight: '600', textDecoration: 'underline' }}>アンケート＆意見交換について</Link>をご覧ください。
          </p>
          <h2 style={{
            marginTop: '2.5rem',
            fontSize: '1.3rem',
            fontWeight: 'bold',
            background: 'var(--color-primary-light)',
            padding: '1rem 1.5rem',
            borderLeft: '6px solid var(--color-primary)',
            borderRadius: '0 8px 8px 0'
          }}>
            質問１. 子育て世代へアピールしたいことは何ですか？
            <span style={{ fontSize: '0.85rem', fontWeight: 'normal', color: 'var(--color-text-muted)', display: 'inline-block', marginLeft: '0.5rem' }}>
              （回答は２０文字以内）
            </span>
          </h2>
        </div>
      </section>

      {/* 候補者グリッド */}
      <section className="candidates-section" aria-labelledby="candidates-heading">
        <div className="container">
          <h2 id="candidates-heading" className="visually-hidden">候補者一覧</h2>

          {candidates.length > 0 ? (
            <div className="candidates-groups">
              {Object.entries(groupedCandidates).map(([type, candidatesInGroup]) => {
                const gridClass = `candidates-grid candidates-grid--4cols`;

                return (
                  <div key={type} className="candidate-group">
                    <h3 className="candidate-group__title">{type}</h3>
                    <div className={gridClass}>
                      {candidatesInGroup.map((candidate) => (
                        <CandidateCard key={candidate.id} candidate={candidate} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-state__icon">📋</div>
              <h3 className="empty-state__title">データが見つかりません</h3>
              <p className="empty-state__body">
                <code>site-config.js</code> の <code>spreadsheetId</code> を設定してください。
              </p>
            </div>
          )}

          <p style={{ marginTop: '2rem', fontSize: '0.8rem', color: '#475569', textAlign: 'left' }}>
            ※並び順は、左から右にむかって、議員としての当選回数が多い順　＞　立候補回数が多い順　＞　アンケートに答えた順　となっております。
          </p>

          {/* SNS 共有 */}
          <div className="share-section" style={{ marginTop: '2.5rem' }}>
            <p className="share-section__label">このサイトをシェアする</p>
            <div className="share-section__buttons">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('中野区長選挙2026 候補者アンケート結果を公開しています！子育て世代の声を区政へ。 #中野区 #中野区長選挙 #中野区議補欠選挙')}&url=${encodeURIComponent(siteConfig.siteUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn share-btn--x"
                aria-label="X (Twitter) でシェア"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zM17.083 20.012h1.833L7.084 4.126H5.117L17.083 20.012z" /></svg>
                X でシェア
              </a>
              <a
                href={`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(siteConfig.siteUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn share-btn--line"
                aria-label="LINE でシェア"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" /></svg>
                LINE でシェア
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteConfig.siteUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn share-btn--facebook"
                aria-label="Facebook でシェア"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                Facebook でシェア
              </a>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export const Head = () => (
  <PageHead
    title="中野区長選挙 区議補欠選挙 立候補者アンケート 2026"
    useExactTitle={true}
    description="2026年中野区の選挙立候補者へのアンケート結果一覧です。"
  />
);

export default IndexPage;
