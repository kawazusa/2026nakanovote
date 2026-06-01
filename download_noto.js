const fs = require("fs");
const path = require("path");
const axios = require("axios");

const fontDir = path.join(__dirname, "static", "fonts");
const fontPath = path.join(fontDir, "NotoSansJP-Variable.ttf");
const fontUrl = "https://raw.githubusercontent.com/google/fonts/main/ofl/notosansjp/NotoSansJP%5Bwght%5D.ttf";

async function run() {
  if (!fs.existsSync(fontDir)) {
    fs.mkdirSync(fontDir, { recursive: true });
  }

  console.log("Downloading Noto Sans JP Variable font...");
  const response = await axios({
    method: "get",
    url: fontUrl,
    responseType: "stream"
  });
  
  const writer = fs.createWriteStream(fontPath);
  response.data.pipe(writer);
  
  await new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
  console.log("Noto Sans JP downloaded successfully at " + fontPath);
}

run().catch(console.error);
