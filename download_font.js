const fs = require("fs");
const path = require("path");
const axios = require("axios");
const sharp = require("sharp");

const fontDir = path.join(__dirname, "static", "fonts");
const fontPath = path.join(fontDir, "DelaGothicOne-Regular.ttf");
const fontUrl = "https://raw.githubusercontent.com/google/fonts/main/ofl/delagothicone/DelaGothicOne-Regular.ttf";

async function run() {
  if (!fs.existsSync(fontDir)) {
    fs.mkdirSync(fontDir, { recursive: true });
  }

  if (!fs.existsSync(fontPath)) {
    console.log("Downloading Dela Gothic One font...");
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
    console.log("Font downloaded successfully!");
  } else {
    console.log("Font already exists.");
  }

  // Register font in Sharp
  try {
    sharp.registerFont(fontPath, { family: "Dela Gothic One" });
    console.log("Font registered successfully in Sharp!");
  } catch (e) {
    console.error("Error registering font:", e.message);
  }
}

run().catch(console.error);
