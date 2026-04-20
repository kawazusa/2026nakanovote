import React, { useState, useMemo } from "react";
import Layout, { PageHead } from "../components/Layout";
import CandidateCard from "../components/CandidateCard";
import FilterBar from "../components/FilterBar";

const IndexPage = ({ pageContext }) => {
  const rawCandidates = pageContext?.candidates;
  // pageContext.candidates は通常変更されないためメモ化
  const candidates = useMemo(() => rawCandidates || [], [rawCandidates]);

  const [selectedElectionType, setSelectedElectionType] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedParty, setSelectedParty] = useState("");

  // ユニークな選挙種類・選挙区・政党リスト
  const electionTypes = useMemo(
    () => [...new Set(candidates.map((c) => c.electionType).filter(Boolean))].sort(),
    [candidates]
  );

  const districts = useMemo(
    () => [...new Set(candidates.map((c) => c.district).filter(Boolean))].sort(),
    [candidates]
  );

  const parties = useMemo(
    () => [...new Set(candidates.map((c) => c.party).filter(Boolean))].sort(),
    [candidates]
  );

  // フィルタリング
  const filteredCandidates = useMemo(() => {
    return candidates.filter((c) => {
      if (selectedElectionType && c.electionType !== selectedElectionType) return false;
      if (selectedDistrict && c.district !== selectedDistrict) return false;
      if (selectedParty && c.party !== selectedParty) return false;
      return true;
    });
  }, [candidates, selectedElectionType, selectedDistrict, selectedParty]);

  return (
    <Layout
      title="候補者一覧"
      description="2026年選挙候補者へのアンケート結果一覧ページです。選挙区・政党で絞り込めます。"
    >
      {/* ヒーローセクション */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <h1 className="hero__title" id="hero-title">
            🗳️ なかの2026<br />候補者アンケート結果
          </h1>
          <p className="hero__subtitle">
            2026年の選挙に立候補する候補者へのアンケートをまとめています。<br />
            政策への考え方を比較して、投票の参考にしてください。
          </p>
          {candidates.length > 0 && (
            <div className="hero__stats" aria-label="統計情報">
              <div className="hero__stat">
                <span className="hero__stat-value">{candidates.length}</span>
                <span className="hero__stat-label">候補者数</span>
              </div>
              {parties.length > 0 && (
                <div className="hero__stat">
                  <span className="hero__stat-value">{parties.length}</span>
                  <span className="hero__stat-label">政党数</span>
                </div>
              )}
              {electionTypes.length > 0 && (
                <div className="hero__stat">
                  <span className="hero__stat-value">{electionTypes.length}</span>
                  <span className="hero__stat-label">選挙数</span>
                </div>
              )}
              {districts.length > 0 && (
                <div className="hero__stat">
                  <span className="hero__stat-value">{districts.length}</span>
                  <span className="hero__stat-label">選挙区数</span>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* フィルターバー */}
      <FilterBar
        electionTypes={electionTypes}
        districts={districts}
        parties={parties}
        selectedElectionType={selectedElectionType}
        selectedDistrict={selectedDistrict}
        selectedParty={selectedParty}
        onElectionTypeChange={setSelectedElectionType}
        onDistrictChange={setSelectedDistrict}
        onPartyChange={setSelectedParty}
        totalCount={candidates.length}
        filteredCount={filteredCandidates.length}
      />

      {/* 候補者グリッド */}
      <section className="candidates-section" aria-labelledby="candidates-heading">
        <div className="container">
          <h2 id="candidates-heading" className="visually-hidden">候補者一覧</h2>

          {filteredCandidates.length > 0 ? (
            <div className="candidates-grid">
              {filteredCandidates.map((candidate) => (
                <CandidateCard key={candidate.id} candidate={candidate} />
              ))}
            </div>
          ) : candidates.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state__icon">📋</div>
              <h3 className="empty-state__title">データが見つかりません</h3>
              <p className="empty-state__body">
                <code>site-config.js</code> の <code>spreadsheetId</code> を設定してください。
              </p>
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-state__icon">🔍</div>
              <h3 className="empty-state__title">該当する候補者がいません</h3>
              <p className="empty-state__body">
                フィルター条件を変更してみてください。
              </p>
            </div>
          )}
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
