import React, { useState } from "react";
import Layout, { PageHead } from "../components/Layout";

const ComparePage = ({ pageContext }) => {
  const { candidates, questions } = pageContext;

  // 比較対象とする質問を定義 (Q2, Q3, Q4_answer のみ表示する)
  const compareQuestions = questions.filter(q => 
    ["Q2", "Q3", "Q4_answer"].includes(q.key)
  );

  const [activeQuestion, setActiveQuestion] = useState(compareQuestions[0]?.key);

  return (
    <Layout
      title="質問ごとに比較する"
      description="各候補者のアンケート回答を質問ごとに比較できます。"
    >
      <div className="compare-header">
        <div className="compare-tabs">
          {compareQuestions.map(q => (
            <button
              key={q.key}
              className={`compare-tab ${activeQuestion === q.key ? "compare-tab--active" : ""}`}
              onClick={() => setActiveQuestion(q.key)}
            >
              {q.label}
            </button>
          ))}
        </div>
      </div>

      <section className="container compare-content">
        <div className="compare-grid">
          {candidates.map(candidate => {
            const answerObj = candidate.answers?.find(a => a.key === activeQuestion);
            let answerText = answerObj?.value || "未回答";
            
            // Q4_answerの場合は、選択した質問内容(Q4_content)も表示
            let q4Context = null;
            if (activeQuestion === "Q4_answer") {
               const q4Content = candidate.answers?.find(a => a.key === "Q4_content")?.value;
               if (q4Content) {
                 q4Context = <div className="compare-card__q4-context">選択した質問：{q4Content}</div>;
               }
            }

            return (
              <div key={candidate.id} className="compare-card">
                <div className="compare-card__avatar-wrapper">
                  {candidate.imageUrl ? (
                    <img src={candidate.imageUrl} alt={candidate.name} className="compare-card__avatar" />
                  ) : (
                    <div className="compare-card__avatar-placeholder">{candidate.name[0]}</div>
                  )}
                </div>
                <div className="compare-card__name">{candidate.name}</div>
                <div className="compare-card__answer-box">
                  {q4Context}
                  <div className="compare-card__answer-text">{answerText}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => <PageHead title="質問ごとに比較する" />;
export default ComparePage;
