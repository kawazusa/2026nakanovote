import React from "react";
import { getAnswerClass } from "./CandidateCard";

/** 回答値を日本語ラベルに変換 */
function getAnswerLabel(value) {
  if (!value || value.trim() === "") return "未回答";
  return value;
}

/** 回答バッジコンポーネント */
const AnswerBadge = ({ value }) => {
  const cls = getAnswerClass(value);
  return (
    <span className={`answer-badge answer-badge--${cls}`}>
      {getAnswerLabel(value)}
    </span>
  );
};

/** アンケート回答一覧コンポーネント */
const QuestionAnswer = ({ answers }) => {
  if (!answers || answers.length === 0) {
    return (
      <div className="answers-section">
        <div className="answers-section__header">
          <h2 className="answers-section__title">📋 アンケート回答</h2>
        </div>
        <div style={{ padding: "2rem", textAlign: "center", color: "var(--color-text-muted)" }}>
          回答データがありません。
        </div>
      </div>
    );
  }

  return (
    <div className="answers-section" aria-label="アンケート回答">
      <div className="answers-section__header">
        <h2 className="answers-section__title">📋 アンケート回答</h2>
      </div>
      {answers.map((answer, index) => (
        <div key={answer.key} className="answer-item">
          <div className="answer-item__question">
            <span className="answer-item__question-num">Q{index + 1}</span>
            {answer.label}
          </div>
          <AnswerBadge value={answer.value} />
        </div>
      ))}
    </div>
  );
};

export default QuestionAnswer;
