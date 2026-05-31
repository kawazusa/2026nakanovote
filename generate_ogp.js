const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const photoWidth = 300;
const photoHeight = 380;

async function getSlicePhoto(imagePath) {
  if (!fs.existsSync(imagePath)) {
    console.warn(`Warning: Image not found at ${imagePath}`);
    // 代替のプレースホルダーを作成
    return await sharp({
      create: {
        width: photoWidth,
        height: photoHeight,
        channels: 4,
        background: { r: 220, g: 225, b: 230, alpha: 1 }
      }
    })
    .png()
    .toBuffer();
  }

  // 縦長にリサイズ・クロップ（頭部が切れないようにposition: 'top'を指定）
  return await sharp(imagePath)
    .resize(photoWidth, photoHeight, { fit: 'cover', position: 'top' })
    .png()
    .toBuffer();
}

async function generate() {
  console.log("Generating OGP image (Reference layout style)...");

  // グラデーションマスク ＆ 写真境界の仕切り線
  const bgSvg = Buffer.from(`
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="maskGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0" />
      <stop offset="40%" stop-color="#ffffff" stop-opacity="0" />
      <stop offset="57%" stop-color="#ffffff" stop-opacity="0.85" />
      <stop offset="60%" stop-color="#ffffff" stop-opacity="1" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="1" />
    </linearGradient>
  </defs>
  
  <!-- 写真の下端（380px）が溶け込むグラデーションマスク -->
  <rect width="1200" height="630" fill="url(#maskGrad)" />

  <!-- 縦の仕切り線（写真部分のみ） -->
  <line x1="300" y1="0" x2="300" y2="380" stroke="#ffffff" stroke-width="2" stroke-opacity="0.4" />
  <line x1="600" y1="0" x2="600" y2="380" stroke="#ffffff" stroke-width="2" stroke-opacity="0.4" />
  <line x1="900" y1="0" x2="900" y2="380" stroke="#ffffff" stroke-width="2" stroke-opacity="0.4" />
</svg>
`);

  // テキストレイヤー (緑色の白フチ文字と日程)
  const textSvg = Buffer.from(`
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <style>
    .title-large-1 { font-family: 'Noto Sans JP', 'Noto Sans CJK JP', 'Yu Gothic', sans-serif; font-size: 58px; font-weight: 800; }
    .title-large-2 { font-family: 'Noto Sans JP', 'Noto Sans CJK JP', 'Yu Gothic', sans-serif; font-size: 48px; font-weight: 800; }
    .title-medium { font-family: 'Yu Gothic', 'Meiryo', 'MS Gothic', sans-serif; font-size: 26px; font-weight: bold; fill: #0f172a; }
    .title-small { font-family: 'Yu Gothic', 'Meiryo', 'MS Gothic', sans-serif; font-size: 18px; fill: #4b5563; font-weight: bold; }
  </style>

  <!-- 「中野区長選挙＆区議補欠選挙」 (大) -->
  <text x="600" y="425" class="title-large-1" text-anchor="middle" stroke="#ffffff" stroke-width="16" stroke-linejoin="round" fill="#ffffff">中野区長選挙＆区議補欠選挙</text>
  <text x="600" y="425" class="title-large-1" text-anchor="middle" fill="#047857">中野区長選挙＆区議補欠選挙</text>

  <!-- 「立候補者アンケート 2026」 (大) -->
  <text x="600" y="512" class="title-large-2" text-anchor="middle" stroke="#ffffff" stroke-width="12" stroke-linejoin="round" fill="#ffffff">立候補者アンケート 2026</text>
  <text x="600" y="512" class="title-large-2" text-anchor="middle" fill="#047857">立候補者アンケート 2026</text>
  
  <!-- 仕切り線 -->
  <line x1="150" y1="540" x2="1050" y2="540" stroke="#9ca3af" stroke-width="2" />

  <!-- 「子育て世代の声を、区政へ。　5月31日告示　6月7日投開票」 (中) -->
  <text x="600" y="578" class="title-medium" text-anchor="middle" letter-spacing="1">子育て世代の声を、区政へ。　5月31日告示　<tspan fill="#dc2626" font-size="32px" font-weight="900">6月7日投開票</tspan></text>
  
  <!-- 「子育て環境向上委員会@中野」 (小) -->
  <text x="600" y="612" class="title-small" text-anchor="middle" letter-spacing="1">子育て環境向上委員会@中野</text>
</svg>
`);

  const p1 = await getSlicePhoto("static/images/sakai_sample.jpg");
  const p2 = await getSlicePhoto("static/images/yoshida_sample.jpg");
  const p3 = await getSlicePhoto("static/images/ishikura.png");
  const p4 = await getSlicePhoto("static/images/morikawa.jpg");

  const targetDir = path.join("static", "images");
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  const outputPath = path.join(targetDir, "ogp.png");

  // バックアップを作成（既存のものがあれば）
  if (fs.existsSync(outputPath)) {
    const backupPath = path.join(targetDir, "ogp_backup.png");
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(outputPath, backupPath);
    }
  }

  // 真っ白なベース画像を作成
  const baseImg = await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  }).png().toBuffer();

  // 写真、グラデーションマスク、テキストを重ねて合成
  await sharp(baseImg)
    .composite([
      { input: p1, left: 0, top: 0 },
      { input: p2, left: 300, top: 0 },
      { input: p3, left: 600, top: 0 },
      { input: p4, left: 900, top: 0 },
      { input: bgSvg, left: 0, top: 0 },
      { input: textSvg, left: 0, top: 0 }
    ])
    .png()
    .toFile(outputPath);

  console.log(`Success! OGP image generated at: ${outputPath}`);
}

generate().catch(console.error);
