import React from "react";
import { Link } from "gatsby";

/** 回答値から表示用クラスを返す */
export function getAnswerClass(value) {
  if (!value) return "na";
  const v = value.trim().toLowerCase();
  if (["賛成", "yes", "○", "〇", "支持", "あり"].includes(v)) return "yes";
  if (["反対", "no", "×", "✕", "不支持", "なし"].includes(v)) return "no";
  if (["どちらでもない", "中立", "条件付き", "△"].includes(v)) return "neutral";
  if (["未回答", "無回答", "-", "―", ""].includes(v)) return "na";
  return "other";
}

/** 候補者カード */
const CandidateCard = ({ candidate }) => {
  const { slug, name, district, party, age, profile, imageUrl, answers } = candidate;
  const initial = name ? name[0] : "?";

  return (
    <Link
      to={`/candidates/${slug}/`}
      className="candidate-card"
      aria-label={`${name} の詳細を見る`}
    >
      <div className="candidate-card__header">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`${name} の写真`}
            className="candidate-card__avatar"
            loading="lazy"
          />
        ) : (
          <div
            className="candidate-card__avatar-placeholder"
            aria-hidden="true"
          >
            {initial}
          </div>
        )}
        <div className="candidate-card__info">
          <h2 className="candidate-card__name">{name}</h2>
          <div className="candidate-card__meta">
            {candidate.electionType && <span className="badge badge--election">{candidate.electionType}</span>}
            {party && <span className="badge badge--party">{party}</span>}
            {district && <span className="badge badge--district">{district}</span>}
            {age && <span className="badge badge--age">{age}歳</span>}
          </div>
        </div>
      </div>

      {(profile || answers?.length > 0) && (
        <div className="candidate-card__body">
          {profile && (
            <p className="candidate-card__profile">{profile}</p>
          )}
          {answers && answers.length > 0 && (
            <div
              className="candidate-card__answers-preview"
              aria-label="回答状況プレビュー"
              title={answers.map((a) => `${a.label}: ${a.value || "未回答"}`).join(" / ")}
            >
              {answers.map((answer) => {
                const cls = getAnswerClass(answer.value);
                return (
                  <span
                    key={answer.key}
                    className={`answer-dot answer-dot--${cls}`}
                    aria-hidden="true"
                  />
                );
              })}
            </div>
          )}
        </div>
      )}

      <div className="candidate-card__footer">
        詳細を見る →
      </div>
    </Link>
  );
};

export default CandidateCard;
