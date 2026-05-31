import React from "react";
import Layout, { PageHead } from "../components/Layout";
import siteConfig from "../../site-config";

const AboutPage = () => {
  const buildTimestamp = Date.now();
  return (
    <Layout
      title="About Us"
      description="子育て環境向上委員会@中野 の活動内容や過去のアンケート結果について。"
    >
      <section className="hero" aria-labelledby="hero-title">
        <h1 className="visually-hidden" id="hero-title">
          About us
        </h1>
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

            </p>
            <p style={{ marginBottom: "2rem", lineHeight: "1.8" }}>
              2018年発足。子育てに悩み、問題意識を持った母親たちが出会い、みんなで区長候補に会いにいったことがきっかけで団体を立ち上げました。<br />
              そこで出会った母親たちの支持政党がバラバラであったことから、超党派で活動する方針となりました。<br />
              主な活動として、選挙アンケート、要望書提出、データ可視化などをしています。
            </p>

            <h3 style={{ fontSize: "1.2rem", color: "var(--color-primary-dark)", background: "var(--color-primary-light)", padding: "0.5rem 1rem", borderLeft: "4px solid var(--color-primary)", borderRadius: "4px", marginTop: "2rem", marginBottom: "1rem" }}>
              立候補予定者への公開アンケート
            </h3>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "2rem", lineHeight: "1.6" }}>
              <li><a href="https://script.google.com/macros/s/AKfycbxqWug6Hza9NWn3HW2TuCPWwntXG9oWdozsfA9Hab2exIgkIAfkR3AXV5b_-y990YJheg/exec" target="_blank" rel="noopener noreferrer">2025年 都議選 公開アンケート</a></li>
              <li><a href="https://refletsdansleau.github.io/" target="_blank" rel="noopener noreferrer">2024年 都議補選(中野選挙区)｜立候補予定者に聞いてみた！</a></li>
              <li><a href="https://refletsdansleau.github.io/2023/index.html" target="_blank" rel="noopener noreferrer">2023年 中野区 区議選 立候補者に聞いてみた！</a></li>
              <li><a href="http://refletsdansleau.sakura.ne.jp/index.html" target="_blank" rel="noopener noreferrer">2022年 中野区選挙 立候補者に聞いてみた！</a></li>
              <li><a href="https://kosodatenakano.wixsite.com/kugisen" target="_blank" rel="noopener noreferrer">2019年 中野区議会議員選挙 公開アンケート</a></li>
              <li><a href="https://nakanokosodate.localinfo.jp/posts/4287641" target="_blank" rel="noopener noreferrer">2018年 中野区長選挙 公開アンケート</a></li>
            </ul>

            <h3 style={{ fontSize: "1.2rem", color: "var(--color-primary-dark)", background: "var(--color-primary-light)", padding: "0.5rem 1rem", borderLeft: "4px solid var(--color-primary)", borderRadius: "4px", marginTop: "2rem", marginBottom: "1rem" }}>
              市民向けアンケート
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

            <h3 style={{ fontSize: "1.2rem", color: "var(--color-primary-dark)", background: "var(--color-primary-light)", padding: "0.5rem 1rem", borderLeft: "4px solid var(--color-primary)", borderRadius: "4px", marginTop: "2rem", marginBottom: "1rem" }}>
              データ可視化
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

            <h3 style={{ fontSize: "1.2rem", color: "var(--color-primary-dark)", background: "var(--color-primary-light)", padding: "0.5rem 1rem", borderLeft: "4px solid var(--color-primary)", borderRadius: "4px", marginTop: "2rem", marginBottom: "1rem" }}>
              CONTACT
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

          {/* SNS 共有 */}
          <div className="share-section" style={{ marginTop: '2.5rem' }}>
            <p className="share-section__label">このページをシェアする</p>
            <div className="share-section__buttons">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('子育て環境向上委員会@中野 について紹介します！ #中野区長選挙 #中野区議補欠選挙 #中野区')}&url=${encodeURIComponent(`${siteConfig.siteUrl}/about/?v=${buildTimestamp}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn share-btn--x"
                aria-label="X (Twitter) でシェア"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zM17.083 20.012h1.833L7.084 4.126H5.117L17.083 20.012z" /></svg>
                X でシェア
              </a>
              <a
                href={`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(`${siteConfig.siteUrl}/about/?v=${buildTimestamp}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn share-btn--line"
                aria-label="LINE でシェア"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" /></svg>
                LINE でシェア
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${siteConfig.siteUrl}/about/?v=${buildTimestamp}`)}`}
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
    title="About Us"
    description="子育て環境向上委員会@中野 の活動内容や過去のアンケート結果について。"
  />
);

export default AboutPage;
