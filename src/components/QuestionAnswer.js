import React, { useState, useEffect } from "react";
import axios from "axios";
import Papa from "papaparse";
import { getAnswerClass } from "./CandidateCard";

/** 回答値を日本語ラベルに変換 */
function getAnswerLabel(value) {
  if (!value || value.trim() === "") return "未回答";
  return value;
}

/** 追加回答取得コンポーネント */
const AdditionalAnswersFetcher = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url || !url.includes("docs.google.com/spreadsheets")) {
      setError("無効なURLです");
      setLoading(false);
      return;
    }

    const idMatch = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
    const gidMatch = url.match(/[?&]gid=([0-9]+)/);
    
    if (!idMatch) {
      setError("スプレッドシートIDが見つかりません");
      setLoading(false);
      return;
    }

    const id = idMatch[1];
    const gid = gidMatch ? gidMatch[1] : "0";
    const csvUrl = `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:csv&gid=${gid}`;

    axios.get(csvUrl)
      .then(response => {
        Papa.parse(response.data, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
             setData(results.data);
             setLoading(false);
          },
          error: (err) => {
             setError(err.message);
             setLoading(false);
          }
        });
      })
      .catch(err => {
        setError("データの取得に失敗しました。シートが「リンクを知っている全員」に公開されていない可能性があります。");
        setLoading(false);
      });
  }, [url]);

  if (loading) return <div style={{ padding: "2rem", color: "var(--color-text-muted)" }}>追加回答を読み込み中...</div>;
  if (error) return <div style={{ padding: "2rem", color: "red" }}>{error}</div>;
  if (!data || data.length === 0) return null;

  return (
    <div style={{ padding: "var(--space-6) var(--space-8)" }}>
      <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--color-text)", marginBottom: "1.5rem" }}>
        その他の質問への回答
      </h3>
      {data.map((row, index) => {
        const keys = Object.keys(row);
        if (keys.length < 2) return null;
        
        const qKey = keys.find(k => k.includes("質問")) || keys[0];
        const aKey = keys.find(k => k.includes("回答")) || keys[1] || keys[keys.length - 1];
        const questionText = row[qKey];
        const answerText = row[aKey];
        
        if (!questionText && !answerText) return null;

        return (
          <div key={index} style={{ marginBottom: "1.5rem", borderTop: index === 0 ? "1px dashed var(--color-border)" : "1px dashed var(--color-border)", paddingTop: "1.5rem" }}>
            <div style={{ marginBottom: "0.5rem", fontSize: "1.1rem", fontWeight: "bold", color: "var(--color-primary)" }}>
              質問番号: {index + 1}
            </div>
            <div style={{ background: "var(--color-surface-2)", padding: "1rem", borderRadius: "8px", marginBottom: "1rem", color: "var(--color-primary)", lineHeight: "1.6", fontSize: "0.95rem" }}>
              {questionText}
            </div>
            <div style={{ fontSize: "1rem", lineHeight: "1.8", color: "var(--color-text)" }}>
              <span style={{ fontWeight: 'bold' }}>回答:</span> {answerText}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const QuestionAnswer = ({ answers }) => {
  if (!answers || answers.length === 0) {
    return (
      <div className="answers-section">
        <div style={{ padding: "2rem", textAlign: "center", color: "var(--color-text-muted)" }}>
          回答データがありません。
        </div>
      </div>
    );
  }

  const normalAnswers = answers.filter(a => ["Q2", "Q3"].includes(a.key));
  const q4Num = answers.find(a => a.key === "Q4_num")?.value;
  const q4Content = answers.find(a => a.key === "Q4_content")?.value;
  const q4Answer = answers.find(a => a.key === "Q4_answer")?.value;
  const additionalUrl = answers.find(a => a.key === "additional_url");

  return (
    <div className="answers-section" aria-label="アンケート回答">
      
      {/* Q2〜Q3 */}
      {normalAnswers.map((answer, index) => {
        const qNum = answer.key.replace("Q", "");
        
        // 質問2と質問3は横並びのレイアウトにする
        if (qNum === "2" || qNum === "3") {
          return (
            <div key={answer.key} style={{ padding: "var(--space-6) var(--space-8)", borderBottom: "1px solid var(--color-border)" }}>
              <div style={{ display: "flex", alignItems: "baseline", marginBottom: "1rem" }}>
                <div style={{ fontSize: "1.1rem", fontWeight: "bold", color: "var(--color-primary)", marginRight: "1rem", whiteSpace: "nowrap" }}>
                  質問{qNum}
                </div>
                <div style={{ color: "var(--color-primary)", fontSize: "1.1rem", fontWeight: "bold" }}>
                  {answer.label}
                </div>
              </div>
              <div style={{ fontSize: "1rem", lineHeight: "1.8", color: "var(--color-text)" }}>
                <span style={{ fontWeight: 'bold', color: "var(--color-text)" }}>回答:</span> {answer.value || "未回答"}
              </div>
            </div>
          );
        }

        // それ以外は従来のレイアウト
        return (
          <div key={answer.key} style={{ padding: "var(--space-6) var(--space-8)", borderBottom: "1px solid var(--color-border)" }}>
            <div style={{ marginBottom: "0.5rem", fontSize: "1.1rem", fontWeight: "bold", color: "var(--color-primary)" }}>
              質問{qNum}
            </div>
            <div style={{ background: "var(--color-surface-2)", padding: "1rem", borderRadius: "8px", marginBottom: "1rem", color: "var(--color-primary)", lineHeight: "1.6", fontSize: "0.95rem" }}>
              {answer.label}
            </div>
            <div style={{ fontSize: "1rem", lineHeight: "1.8", color: "var(--color-text)" }}>
              <span style={{ fontWeight: 'bold' }}>回答:</span> {answer.value || "未回答"}
            </div>
          </div>
        );
      })}

      {/* Q4 (有権者からの質問) */}
      {(q4Num || q4Content || q4Answer) && (
        <div style={{ padding: "var(--space-6) var(--space-8)", borderBottom: "1px solid var(--color-border)" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "1rem", borderBottom: "1px dashed var(--color-border)", paddingBottom: "0.5rem" }}>
            質問４．有権者からの質問に一つお答えください
          </h3>
          
          <div style={{ marginBottom: "1rem", fontSize: "1rem" }}>
            <span style={{ color: "var(--color-primary)", marginRight: "0.5rem", fontWeight: "bold" }}>お答えいただける質問番号</span>
            👉 <span style={{ color: "var(--color-primary)", fontWeight: "bold" }}>{q4Num || "未回答"}</span>
          </div>

          {q4Content && (
            <div style={{ background: "var(--color-surface-2)", padding: "1rem", borderRadius: "8px", marginBottom: "1rem", color: "var(--color-primary)", lineHeight: "1.6", fontSize: "0.95rem" }}>
              {q4Num ? `[質問内容${q4Num}] ` : ""}{q4Content}
            </div>
          )}

          {q4Answer && (
            <div style={{ fontSize: "1rem", lineHeight: "1.8", color: "var(--color-text)" }}>
              <span style={{ fontWeight: 'bold' }}>回答:</span> {q4Answer}
            </div>
          )}
        </div>
      )}

      {/* 追加回答URLからのデータ表示 */}
      {additionalUrl && additionalUrl.value && (
        <AdditionalAnswersFetcher url={additionalUrl.value} />
      )}
    </div>
  );
};

export default QuestionAnswer;
