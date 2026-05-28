import React from "react";
import { Link, withPrefix } from "gatsby";

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

const formatQ1 = (text) => {
  if (!text || text.length <= 10) return text;
  
  // 10文字目以降の連続する禁則文字（句読点や閉じ括弧）を含めて1行目にする
  const match = text.slice(10).match(/^[。、！？』」】〉》\]）)}]+/);
  const breakPoint = 10 + (match ? match[0].length : 0);
  
  if (breakPoint >= text.length) return text;

  const line1 = text.slice(0, breakPoint);
  const line2 = text.slice(breakPoint);
  
  return (
    <>
      {line1}
      <br />
      {line2}
    </>
  );
};

/** 候補者カード */
const CandidateCard = ({ candidate }) => {
  const { slug, name, district, party, age, imageUrl, website, answers } = candidate;
  const initial = name ? name[0] : "?";

  // 質問1の回答を取得
  const q1Answer = answers?.find((a) => a.key === "Q1")?.value;

  return (
    <div className="candidate-card" style={{ cursor: 'default' }}>
      <Link
        to={`/candidates/${slug}/`}
        aria-label={`${name} の詳細を見る`}
        style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
      >
        {q1Answer && (
          <div className="candidate-card__speech-bubble">
            {formatQ1(q1Answer)}
          </div>
        )}
        
        <div className="candidate-card__avatar-wrapper">
          {imageUrl ? (
            <img
              src={imageUrl?.startsWith('/') ? withPrefix(imageUrl) : imageUrl}
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
        </div>

        <div className="candidate-card__info">
          <h2 className="candidate-card__name">{name}</h2>
          <div className="candidate-card__meta">
            {party && <span className="badge badge--party">{party}</span>}
          </div>
        </div>
      </Link>

      <div style={{ marginTop: '1rem', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem' }}>
        <Link
          to={`/candidates/${slug}/`}
          style={{
            display: 'inline-block',
            border: '1.5px solid var(--color-primary)',
            color: 'var(--color-primary)',
            padding: '0.4rem 1.2rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.85rem',
            fontWeight: '600',
            textDecoration: 'none',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = 'var(--color-primary-light)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
          }}
        >
          質問2以降を見る
        </Link>

        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              color: '#475569',
              fontSize: '0.8rem',
              textDecoration: 'underline'
            }}
            onMouseOver={(e) => {
              e.target.style.color = 'var(--color-primary)';
            }}
            onMouseOut={(e) => {
              e.target.style.color = '#475569';
            }}
          >
            公式ウェブサイト
          </a>
        )}
      </div>
    </div>
  );
};

export default CandidateCard;
