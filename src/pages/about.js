import React from "react";
import Layout, { PageHead } from "../components/Layout";

const AboutPage = () => {
  return (
    <Layout
      title="About Us"
      description="子育て環境向上委員会@中野 の活動内容や過去のアンケート結果について。"
    >
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <h1 className="hero__title" id="hero-title">
            About us
          </h1>
          <p className="hero__subtitle">
            子育て環境向上委員会@中野 について
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem 1rem" }}>
          <div className="about-content" style={{ backgroundColor: "var(--color-surface)", padding: "2rem", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)" }}>
            <h2 style={{ fontSize: "1.5rem", borderBottom: "2px solid var(--color-primary)", paddingBottom: "0.5rem", marginBottom: "1.5rem" }}>
              ごあいさつ
            </h2>
            <p style={{ marginBottom: "1rem", lineHeight: "1.8" }}>
              こんにちは。<strong>子育て環境向上委員会@中野</strong> です。
            </p>
            <p style={{ marginBottom: "1rem", lineHeight: "1.8" }}>
              私たちは「子育て世代、子ども達の声を届けよう！」をモットーに活動している団体です。<br />
              選挙アンケート、要望書提出、データ可視化などしています。
            </p>
            <p style={{ marginBottom: "2rem", lineHeight: "1.8" }}>
              2018年発足。子育てに悩み、問題意識を持った母親たちが出会い、みんなで区長候補に会いにいったことがきっかけで団体を立ち上げました。<br />
              以後、超党派で活動しています。
            </p>

            <h3 style={{ fontSize: "1.25rem", color: "var(--color-primary-dark)", marginTop: "2rem", marginBottom: "1rem" }}>
              👉 立候補予定者への公開アンケート
            </h3>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "2rem", lineHeight: "1.6" }}>
              <li><a href="https://script.google.com/macros/s/AKfycbxqWug6Hza9NWn3HW2TuCPWwntXG9oWdozsfA9Hab2exIgkIAfkR3AXV5b_-y990YJheg/exec" target="_blank" rel="noopener noreferrer">2025年 都議選 公開アンケート</a></li>
              <li><a href="https://refletsdansleau.github.io/" target="_blank" rel="noopener noreferrer">2024年 都議補選(中野選挙区)｜立候補予定者に聞いてみた！</a></li>
              <li><a href="https://refletsdansleau.github.io/2023/index.html" target="_blank" rel="noopener noreferrer">2023年 中野区 区議選 立候補者に聞いてみた！</a></li>
              <li><a href="http://refletsdansleau.sakura.ne.jp/index.html" target="_blank" rel="noopener noreferrer">2022年 中野区選挙 立候補者に聞いてみた！</a></li>
              <li><a href="https://kosodatenakano.wixsite.com/kugisen" target="_blank" rel="noopener noreferrer">2019年 中野区議会議員選挙 公開アンケート</a></li>
              <li><a href="https://nakanokosodate.localinfo.jp/posts/4287641" target="_blank" rel="noopener noreferrer">2018年 中野区長選挙 公開アンケート</a></li>
            </ul>

            <h3 style={{ fontSize: "1.25rem", color: "var(--color-primary-dark)", marginTop: "2rem", marginBottom: "1rem" }}>
              👉 市民向けアンケート
            </h3>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "2rem", lineHeight: "1.6" }}>
              <li><a href="https://nakanokosodate.localinfo.jp/posts/53996722" target="_blank" rel="noopener noreferrer">2023年 【結果報告書】「未来の都議さんに聞いてみたいこと、 ありますか?」</a></li>
              <li><a href="https://nakanokosodate.localinfo.jp/posts/41085319?categoryIds=1154770" target="_blank" rel="noopener noreferrer">2023年【結果報告書】アンケート「未来の中野区議さんへ 聞いてみたいことは何ですか？」</a></li>
              <li><a href="https://nakanokosodate.localinfo.jp/posts/33820094?categoryIds=1154770" target="_blank" rel="noopener noreferrer">2022年【結果報告書】アンケート「未来の中野区長・区議さんに質問したいこと、ありますか？」</a></li>
              <li><a href="https://nakanokosodate.localinfo.jp/posts/18803153" target="_blank" rel="noopener noreferrer">2021年「中野区立児童館　利用状況＆利用希望アンケート」【本報告】</a></li>
              <li><a href="https://nakanokosodate.localinfo.jp/posts/8157945?categoryIds=1154770" target="_blank" rel="noopener noreferrer">2020年【結果報告書】保護者による学校休校・オンライン授業 自主アンケート</a></li>
              <li><a href="https://nakanokosodate.localinfo.jp/posts/5810801?categoryIds=1154770" target="_blank" rel="noopener noreferrer">2019年　アンケート「未来の中野区議さんへ質問したいこと、ありますか？」結果報告書</a></li>
              <li><a href="https://nakanokosodate.localinfo.jp/posts/4466490?categoryIds=1154770" target="_blank" rel="noopener noreferrer">2018年　「保活におけるIT活用に関するニーズ調査＠中野区」 結果報告</a></li>
              <li><a href="https://nakanokosodate.localinfo.jp/posts/4403427?categoryIds=1154770" target="_blank" rel="noopener noreferrer">2018年　「子育ての悩みどこに？」アンケート結果報告</a></li>
              <li><a href="https://nakanokosodate.localinfo.jp/posts/4038203?categoryIds=1154770" target="_blank" rel="noopener noreferrer">2018年　中野区保活実態調査【2018年度入園】結果報告</a></li>
            </ul>

            <h3 style={{ fontSize: "1.25rem", color: "var(--color-primary-dark)", marginTop: "2rem", marginBottom: "1rem" }}>
              👉 データ可視化
            </h3>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "2rem", lineHeight: "1.6" }}>
              <li><a href="https://nakanokosodate.localinfo.jp/posts/51760873" target="_blank" rel="noopener noreferrer">【続】中野区オープンデータの可視化</a></li>
              <li><a href="https://nakanokosodate.localinfo.jp/posts/45837560" target="_blank" rel="noopener noreferrer">2023年 中野区議会議員選挙 年齢別 有権者数と投票者数</a></li>
              <li><a href="https://nakanokosodate.localinfo.jp/posts/38696310?categoryIds=2554884" target="_blank" rel="noopener noreferrer">2022年 中野区長選挙 年代別 有権者数＆投票者数</a></li>
              <li><a href="https://nakanokosodate.localinfo.jp/posts/10772454?categoryIds=2554884" target="_blank" rel="noopener noreferrer">中野区オープンデータの可視化　第二弾</a></li>
              <li><a href="https://nakanokosodate.localinfo.jp/posts/10648891?categoryIds=2554884" target="_blank" rel="noopener noreferrer">中野区オープンデータの可視化（①地図で見る０歳の人数）</a></li>
              <li><a href="https://nakanokosodate.localinfo.jp/posts/8116375?categoryIds=2554884" target="_blank" rel="noopener noreferrer">【比較表作成中！】各自治体のオンライン授業について</a></li>
              <li><a href="https://nakanokosodate.localinfo.jp/posts/7259633?categoryIds=2554884" target="_blank" rel="noopener noreferrer">2019年　中野区議会議員選挙　年代別　有権者数と投票者数</a></li>
              <li><a href="https://nakanokosodate.localinfo.jp/posts/5334791?categoryIds=2554884" target="_blank" rel="noopener noreferrer">中野区児童館　平成29年度利用者数</a></li>
              <li><a href="https://nakanokosodate.localinfo.jp/posts/4911372?categoryIds=2554884" target="_blank" rel="noopener noreferrer">2018年　中野区長選　年代別投票率</a></li>
              <li><a href="https://nakanokosodate.localinfo.jp/posts/4420164?categoryIds=2554884" target="_blank" rel="noopener noreferrer">「少子化？」中野区では子どもが増えている！</a></li>
            </ul>

            <h3 style={{ fontSize: "1.25rem", color: "var(--color-primary-dark)", marginTop: "2rem", marginBottom: "1rem" }}>
              👉 CONTACT
            </h3>
            <p style={{ marginBottom: "1rem" }}>
              お問い合わせは、以下のいずれかでお願いします。<br />
              管理人の状況によっては、お返事が遅くなる場合があります。何卒ご了承ください。
            </p>
            <ul style={{ listStyleType: "none", paddingLeft: "0", marginBottom: "2rem", lineHeight: "1.8" }}>
              <li>🌐 ウェブサイト: <a href="https://nakanokosodate.localinfo.jp/" target="_blank" rel="noopener noreferrer">https://nakanokosodate.localinfo.jp/</a></li>
              <li>✉️ メールアドレス: <a href="mailto:kosodate.nakano@gmail.com">kosodate.nakano@gmail.com</a></li>
              <li>🐦 Twitterアカウント: <a href="https://twitter.com/kosodatenakano" target="_blank" rel="noopener noreferrer">@KosodateNakano</a></li>
              <li>📘 Facebookアカウント: <a href="https://www.facebook.com/nakanokosodate/" target="_blank" rel="noopener noreferrer">子育て環境向上委員会@中野</a></li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => (
  <PageHead
    title="About Us"
    description="子育て環境向上委員会@中野 の活動内容や過去のアンケート結果について。"
  />
);

export default AboutPage;
