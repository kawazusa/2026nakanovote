import React, { useMemo } from "react";
import Layout, { PageHead } from "../components/Layout";
import CandidateCard from "../components/CandidateCard";

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
            当団体では、1人でも多くの有権者に区政へ関心を持っていただくこと、また子育て世代の有権者がどのようなことに関心を持っているのかを立候補予定者の皆様に知っていただくことを目的に、公開アンケートを実施しました。
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
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => (
  <PageHead
    title="候補者一覧"
    description="2026年選挙候補者へのアンケート結果一覧です。選挙区・政党で絞り込めます。"
  />
);

export default IndexPage;
