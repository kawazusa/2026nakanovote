const axios = require("axios");
const Papa = require("papaparse");
const config = require("./site-config");

async function run() {
  const csvUrl = `https://docs.google.com/spreadsheets/d/${config.spreadsheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(config.sheetName)}`;
  console.log("Fetching: " + csvUrl);
  const response = await axios.get(csvUrl);
  const result = Papa.parse(response.data, {
    header: true,
    skipEmptyLines: true,
    transformHeader: (h) => h.trim(),
  });

  console.log("Total candidates: " + result.data.length);
  result.data.forEach((row, i) => {
    const name = row[config.columns.name];
    const election = row[config.columns.electionType];
    const img = row[config.columns.imageUrl];
    console.log(`${i+1}: ${name} | ${election} | ${img}`);
  });
}

run().catch(console.error);
