import React, { useState } from "react";
import { withPrefix } from "gatsby";
import Layout, { PageHead } from "../components/Layout";

// アコーディオン用コンポーネント
const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div style={{
      border: "1px solid var(--color-border)",
      borderRadius: "var(--radius-lg)",
      marginBottom: "1rem",
      overflow: "hidden",
    }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: "1rem 1.5rem",
          background: isOpen ? "var(--color-primary-light)" : "var(--color-surface-2)",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          fontWeight: "700",
          fontSize: "1rem",
          color: "var(--color-primary-dark)",
          transition: "background 0.2s",
        }}
      >
        {title}
        <span style={{
          fontSize: "1rem",
          color: "var(--color-primary)",
          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          display: "inline-block",
          transition: "transform 0.25s ease",
          flexShrink: 0,
          marginLeft: "1rem",
        }}>▼</span>
      </button>
      <div style={{
        overflow: "hidden",
        maxHeight: isOpen ? "9999px" : "0",
        transition: "max-height 0.3s ease",
      }}>
        <div style={{ padding: "1.5rem" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

// 設問カード
const QuestionCard = ({ number, label, description, note }) => (
  <div style={{
    background: "var(--color-surface)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-md)",
    padding: "1.25rem 1.5rem",
    marginBottom: "1rem",
    borderLeft: "4px solid var(--color-primary)",
  }}>
    <div style={{
      display: "flex",
      alignItems: "baseline",
      gap: "0.75rem",
      marginBottom: description || note ? "0.75rem" : 0,
    }}>
      <span style={{
        background: "var(--color-primary)",
        color: "#fff",
        fontWeight: "700",
        fontSize: "0.8rem",
        padding: "0.2rem 0.6rem",
        borderRadius: "var(--radius-full)",
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}>
        質問{number}
      </span>
      <span style={{ fontWeight: "600", color: "var(--color-text)", lineHeight: "1.6" }}>
        {label}
      </span>
    </div>
    {description && (
      <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.7", margin: 0 }}>
        {description}
      </p>
    )}
    {note && (
      <p style={{
        fontSize: "0.85rem",
        color: "var(--color-primary-dark)",
        background: "var(--color-primary-light)",
        padding: "0.5rem 0.75rem",
        borderRadius: "var(--radius-sm)",
        marginTop: "0.5rem",
        marginBottom: 0,
      }}>
        📌 {note}
      </p>
    )}
  </div>
);

const SectionTitle = ({ children }) => (
  <h2 style={{
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "var(--color-primary-dark)",
    background: "var(--color-primary-light)",
    padding: "0.6rem 1.25rem",
    borderLeft: "5px solid var(--color-primary)",
    borderRadius: "0 var(--radius-md) var(--radius-md) 0",
    marginBottom: "1.25rem",
    marginTop: "2rem",
  }}>
    {children}
  </h2>
);

const QuestionnairePage = () => {
  return (
    <Layout
      title="アンケート＆意見交換について"
      description="なかの2026 候補者アンケートの実施概要、設問内容、有権者アンケートについて。"
    >
      <section className="hero" aria-labelledby="questionnaire-hero-title">
        <h1 className="visually-hidden" id="questionnaire-hero-title">
          アンケート＆意見交換について
        </h1>
      </section>

      <section style={{ padding: "2rem 0 4rem" }}>
        <div className="container" style={{ maxWidth: "820px", margin: "0 auto" }}>

          {/* ページタイトル */}
          <div style={{ marginBottom: "2rem" }}>
            <h1 style={{
              fontSize: "1.8rem",
              fontWeight: "800",
              color: "var(--color-text)",
              marginBottom: "0.5rem",
            }}>
              🗳️ アンケート＆意見交換について
            </h1>
            <p style={{ color: "var(--color-text-muted)", lineHeight: "1.7" }}>
              子育て環境向上委員会@中野が実施した、2026年選挙 立候補予定者への公開アンケートの概要と設問内容です。
            </p>
          </div>

          {/* ─── 1. 候補者へのアンケートのお願い ─── */}
          <div style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-xl)",
            padding: "2rem",
            marginBottom: "2.5rem",
            boxShadow: "var(--shadow-sm)",
          }}>
            <SectionTitle>立候補予定者への公開アンケートのお願い</SectionTitle>

            <p style={{ lineHeight: "1.8", marginBottom: "1rem" }}>
              こんにちは。<strong>子育て環境向上委員会@中野</strong>と申します。
            </p>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem" }}>
              私たちは、子育て世代の声を区政や議員の皆様へ届ける活動などをしている団体で、主に子育て中の母親で構成され、超党派で活動しています。
            </p>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem" }}>
              当団体では、1人でも多くの有権者に区政へ関心を持っていただくこと、また子育て世代の有権者がどのようなことに関心を持っているのかを立候補予定者の皆様に知っていただくことを目的に、公開アンケートを実施しました。
            </p>
            <p style={{ lineHeight: "1.8", marginBottom: "1.5rem" }}>
              皆様からいただいたご回答はウェブサイトやSNSを活用して発信してまいります。ご多忙中のところ大変恐縮ですが、ぜひともご協力いただけますようよろしくお願い致します。
            </p>

            <div style={{
              background: "var(--color-surface-2)",
              borderRadius: "var(--radius-md)",
              padding: "1rem 1.25rem",
              fontSize: "0.9rem",
              color: "var(--color-text-muted)",
            }}>
              <div>🌐 公式ウェブサイト：
                <a href="https://nakanokosodate.localinfo.jp/" target="_blank" rel="noopener noreferrer"
                  style={{ color: "var(--color-primary)" }}>
                  https://nakanokosodate.localinfo.jp/
                </a>
              </div>
              <div style={{ marginTop: "0.25rem" }}>✉️ お問い合わせ：
                <a href="mailto:kosodate.nakano@gmail.com" style={{ color: "var(--color-primary)" }}>
                  kosodate.nakano@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* ─── 意見交換会の報告 ─── */}
          <div style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-xl)",
            padding: "2rem",
            marginBottom: "2.5rem",
            boxShadow: "var(--shadow-sm)",
          }}>
            <SectionTitle>立候補予定者の皆様との意見交換</SectionTitle>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem" }}>
              アンケートの実施にあたり、子育て環境向上委員会@中野のメンバーが、立候補予定者の皆様と直接お会いし、子育て政策や中野の未来について意見交換を行いました。
            </p>
            <p style={{ lineHeight: "1.8", marginBottom: "1.5rem" }}>
              お忙しい中、貴重なお時間をいただき、熱心にお話を聞かせていただきましたことに心より感謝申し上げます。
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "1.5rem",
              marginTop: "1.5rem"
            }}>
              {[
                { src: "/images/meeting_sakai.jpg", alt: "酒井直人 氏との意見交換", name: "酒井直人 氏" },
                { src: "/images/meeting_yoshida.jpg", alt: "吉田康一郎 氏との意見交換", name: "吉田康一郎 氏" },
                { src: "/images/meeting_ishikura.jpg", alt: "石倉こうじろう 氏（一緒にお会いできた橋本さんと森川さん）との意見交換", name: "石倉こうじろう 氏（一緒にお会いできた橋本さんと森川さん）" },
                { src: "/images/meeting_morikawa.jpg", alt: "森川岳大 氏との意見交換", name: "森川岳大 氏" },
                { src: "/images/meeting_ootsuka.jpg", alt: "大塚けいじゅ 氏との意見交換", name: "大塚けいじゅ 氏" },
                { src: "/images/meeting_hashimoto.jpg", alt: "橋本正太郎 氏との意見交換", name: "橋本正太郎 氏" },
                { src: "/images/meeting_itoh.jpg", alt: "伊藤さゆり 氏との意見交換", name: "伊藤さゆり 氏" }
              ].map((photo, index) => (
                <div key={index} style={{
                  background: "var(--color-surface-2)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-sm)"
                }}>
                  <img
                    src={withPrefix(photo.src)}
                    alt={photo.alt}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                      display: "block"
                    }}
                  />
                  <div style={{ padding: "0.75rem 1rem", fontSize: "0.9rem", fontWeight: "700", textAlign: "center", color: "var(--color-text)" }}>
                    {photo.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── 2. 設問内容 ─── */}
          <div style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-xl)",
            padding: "2rem",
            marginBottom: "2.5rem",
            boxShadow: "var(--shadow-sm)",
          }}>
            <SectionTitle>設問内容</SectionTitle>

            <div style={{ marginBottom: "1rem" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: "700", color: "var(--color-text-muted)", marginBottom: "0.75rem" }}>
                ■ 基本情報
              </h3>
              {[
                { label: "お名前" },
                { label: "立候補予定なのはどちらですか？（区長選挙 / 区議会議員選挙）" },
                { label: "所属政党・推薦" },
                { label: "顔写真の利用について（公式サイトの写真URLか、画像ファイルをメールにてご送付ください）" },
                { label: "公式ウェブサイト・SNS各種URL" },
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                  padding: "0.5rem 0",
                  borderBottom: "1px solid var(--color-border)",
                  fontSize: "0.95rem",
                  color: "var(--color-text)",
                }}>
                  <span style={{ color: "var(--color-primary)", fontWeight: "700", flexShrink: 0 }}>・</span>
                  {item.label}
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: "1rem", fontWeight: "700", color: "var(--color-text-muted)", margin: "1.5rem 0 0.75rem" }}>
              ■ アンケート設問
            </h3>

            <QuestionCard
              number="1"
              label="子育て世代へアピールしたいことは何ですか？"
              note="20文字以内でお願いします。トップページのカードに表示される一言です。"
            />

            <QuestionCard
              number="2"
              label="もし、今、自分が中野区の子どもだったら、お気に入りの場所はどこですか？"
            />

            <QuestionCard
              number="3"
              label="子育て支援で、何に一番力を入れたいですか？"
              description="最近では「不登校」「こどもの居場所」「こども食堂」「子どもの意見表明」「プレーパーク」「児童館」「孤育て・ワンオペ育児」「保育園の配置基準改善」「学童クラブ」「小１の壁・小４の壁」「教員不足」「公園」「児童手当の所得制限」等の声がSNS等で挙がっています。"
            />

            <QuestionCard
              number="4"
              label="子育て世代の有権者からたくさんの質問が届いております。質問一覧の中からひとつお選びいただき回答ください。"
              description="お答えいただける質問番号と、質問に対する回答をご記入ください。追加で複数の質問に回答いただける場合は、スプレッドシートをダウンロードの上、記入したものをメールにてご送付ください。"
            />

            <div style={{
              background: "var(--color-surface-2)",
              borderRadius: "var(--radius-md)",
              padding: "1rem 1.25rem",
              fontSize: "0.9rem",
              color: "var(--color-text-muted)",
              marginTop: "0.5rem",
            }}>
              <div style={{ marginBottom: "0.25rem" }}>📄 有権者からの質問一覧（Google Drive）：</div>
              <a
                href="https://drive.google.com/file/d/14Yj5awL8WFwpwRI7JzieoI6XFOWSdZXT/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--color-primary)", wordBreak: "break-all" }}
              >
                https://drive.google.com/file/d/14Yj5awL8WFwpwRI7JzieoI6XFOWSdZXT/view?usp=sharing
              </a>
            </div>

            <div style={{ marginTop: "1rem" }}>
              <QuestionCard
                number="自由記述"
                label="ご自身のウェブサイトのURLを記載いただいても構いません。好きなことをご自由にお書きください。"
              />
            </div>
          </div>

          {/* ─── 3. 有権者アンケートについて ─── */}
          <div style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-xl)",
            padding: "2rem",
            marginBottom: "2.5rem",
            boxShadow: "var(--shadow-sm)",
          }}>
            <SectionTitle>区民（有権者）アンケートについて</SectionTitle>

            <p style={{ lineHeight: "1.8", marginBottom: "1rem" }}>
              上記の設問４「有権者からの質問」は、当団体が事前に子育て世代の有権者を対象に実施した区民アンケートにて募集した質問をもとに作成しています。
            </p>
            <p style={{ lineHeight: "1.8", marginBottom: "1.5rem" }}>
              この機会に『子育てについて困っていること・聞いてみたいこと』を未来の議員さんに伝えてみませんか？本アンケート結果は立候補予定者の皆様にお渡しし、有権者の皆さんがどのようなことに関心を持っているかを伝える機会としています。
            </p>

            <Accordion title="📋 有権者アンケートの設問（参考）" defaultOpen={false}>
              <div style={{ fontSize: "0.95rem", color: "var(--color-text)", lineHeight: "1.8" }}>
                <div style={{ padding: "0.6rem 0", borderBottom: "1px dashed var(--color-border)" }}>
                  <span style={{ color: "var(--color-primary)", fontWeight: "700" }}>質問１．</span>
                  未来の中野区長＆区議さんに聞いてみたいことは何ですか？（300字以内）
                </div>
                <div style={{ padding: "0.6rem 0", borderBottom: "1px dashed var(--color-border)" }}>
                  <span style={{ color: "var(--color-primary)", fontWeight: "700" }}>質問２．</span>
                  あなたのお住まいはどこですか？
                </div>
                <div style={{ padding: "0.6rem 0" }}>
                  <span style={{ color: "var(--color-primary)", fontWeight: "700" }}>質問３．</span>
                  あなたの年齢を教えてください。
                </div>
              </div>
            </Accordion>

            <div style={{
              background: "var(--color-primary-light)",
              borderRadius: "var(--radius-md)",
              padding: "1rem 1.25rem",
              fontSize: "0.9rem",
              color: "var(--color-primary-dark)",
              marginTop: "1rem",
              lineHeight: "1.7",
            }}>
              ※ お寄せいただいた質問は、当団体のウェブサイトで公開いたします。立候補予定者の方からの回答は個別の判断によるものであり、必ずしもすべての質問にご回答いただけるわけではありません。あらかじめご了承ください。
            </div>
          </div>

          {/* ─── 4. 過去のアンケート ─── */}
          <div style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-xl)",
            padding: "2rem",
            boxShadow: "var(--shadow-sm)",
          }}>
            <SectionTitle>過去の公開アンケート実施例</SectionTitle>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { year: "2025年", label: "都議選 公開アンケート", href: "https://script.google.com/macros/s/AKfycbxqWug6Hza9NWn3HW2TuCPWwntXG9oWdozsfA9Hab2exIgkIAfkR3AXV5b_-y990YJheg/exec" },
                { year: "2024年", label: "都議補選(中野選挙区)｜立候補予定者に聞いてみた！", href: "https://refletsdansleau.github.io/" },
                { year: "2023年", label: "中野区 区議選 立候補者に聞いてみた！", href: "https://refletsdansleau.github.io/2023/index.html" },
                { year: "2022年", label: "中野区選挙 立候補者に聞いてみた！", href: "http://refletsdansleau.sakura.ne.jp/index.html" },
                { year: "2019年", label: "中野区議会議員選挙 公開アンケート", href: "https://kosodatenakano.wixsite.com/kugisen" },
                { year: "2018年", label: "中野区長選挙 公開アンケート", href: "https://nakanokosodate.localinfo.jp/posts/4287641" },
              ].map((item, i) => (
                <li key={i} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  padding: "0.75rem 0",
                  borderBottom: "1px solid var(--color-border)",
                }}>
                  <span style={{
                    background: "var(--color-surface-2)",
                    color: "var(--color-text-muted)",
                    fontSize: "0.8rem",
                    fontWeight: "700",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "var(--radius-sm)",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    marginTop: "0.1rem",
                  }}>
                    {item.year}
                  </span>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--color-primary)", lineHeight: "1.6" }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export const Head = () => (
  <PageHead
    title="アンケート＆意見交換について"
    description="なかの2026 候補者アンケートの実施概要、設問内容、市民アンケートについて。子育て環境向上委員会@中野による2026年選挙の取り組み。"
  />
);

export default QuestionnairePage;
