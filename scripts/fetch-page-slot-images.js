/**
 * Fetch Pexels stock images for specific page slots where Cloudinary
 * infographics/PDF crops don't fit aspect-video or hero layouts.
 *
 * Usage: node scripts/fetch-page-slot-images.js
 */

const fs = require("fs");
const path = require("path");
const https = require("https");

require("dotenv").config({ path: path.join(process.cwd(), ".env.local") });

const imagesDir = path.join(process.cwd(), "public", "images");
const marketingDir = path.join(imagesDir, "marketing");
const clinicalDir = path.join(imagesDir, "clinical");
const brokersDir = path.join(imagesDir, "brokers");

/** Landscape-first slots: hero, aspect-video cards, 4:3 previews */
const PAGE_SLOTS = [
  {
    query: "small business team meeting office diverse",
    filename: "employer-hero.webp",
    dir: marketingDir,
    orientation: "landscape",
    minWidth: 1920,
  },
  {
    query: "pharmacy laboratory medical testing",
    filename: "pharmacy-lab.webp",
    dir: clinicalDir,
    orientation: "landscape",
    minWidth: 1200,
  },
  {
    query: "doctor patient consultation modern clinic",
    filename: "doctor-consultation.webp",
    dir: clinicalDir,
    orientation: "landscape",
    minWidth: 1200,
  },
  {
    query: "medical laboratory research healthcare",
    filename: "medical-laboratory.webp",
    dir: clinicalDir,
    orientation: "landscape",
    minWidth: 1200,
  },
  {
    query: "doctor team medical consultation",
    filename: "round-table.webp",
    dir: clinicalDir,
    orientation: "landscape",
    minWidth: 1200,
  },
  {
    query: "senior wellness healthcare active",
    filename: "senior-wellness.webp",
    dir: marketingDir,
    orientation: "landscape",
    minWidth: 1200,
  },
  {
    query: "HR benefits presentation business meeting",
    filename: "employer-summary-preview.webp",
    dir: brokersDir,
    orientation: "landscape",
    minWidth: 1200,
  },
  {
    query: "business professional reviewing documents office",
    filename: "employer-checklist-preview.webp",
    dir: brokersDir,
    orientation: "landscape",
    minWidth: 1200,
  },
];

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
          downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
          return;
        }
        if (response.statusCode !== 200) {
          reject(new Error(`Download failed: ${response.statusCode}`));
          return;
        }
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);
        fileStream.on("finish", () => {
          fileStream.close();
          resolve();
        });
      })
      .on("error", reject);
  });
}

function pickPhoto(photos, minWidth) {
  if (!photos?.length) return null;
  const sorted = [...photos].sort((a, b) => {
    const aScore = (a.width >= minWidth ? 2 : 0) + (a.width / a.height > 1.3 ? 1 : 0);
    const bScore = (b.width >= minWidth ? 2 : 0) + (b.width / b.height > 1.3 ? 1 : 0);
    return bScore - aScore;
  });
  return sorted[0];
}

async function fetchFromPexels(slot) {
  const apiKey = process.env.PEXELS_API_KEY;
  if (!apiKey) throw new Error("PEXELS_API_KEY not set in .env.local");

  const searchUrl = `https://api.pexels.com/v1/search?query=${encodeURIComponent(slot.query)}&per_page=8&orientation=${slot.orientation}&size=large`;

  const response = await fetch(searchUrl, {
    headers: { Authorization: apiKey },
  });

  if (!response.ok) {
    throw new Error(`Pexels HTTP ${response.status}: ${response.statusText}`);
  }

  const data = await response.json();
  const photo = pickPhoto(data.photos, slot.minWidth);

  if (!photo) {
    console.warn(`⚠️  No results for "${slot.query}"`);
    return false;
  }

  const imageUrl = photo.src.original || photo.src.large2x || photo.src.large;
  const filepath = path.join(slot.dir, slot.filename);
  await downloadImage(imageUrl, filepath);

  console.log(
    `✅ ${slot.filename} ← "${slot.query}" (${photo.width}x${photo.height}, photographer: ${photo.photographer})`
  );
  return true;
}

async function main() {
  console.log("🖼️  Fetching page-slot stock images from Pexels...\n");

  [marketingDir, clinicalDir, brokersDir].forEach((dir) => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  });

  let ok = 0;
  let fail = 0;

  for (const slot of PAGE_SLOTS) {
    try {
      const success = await fetchFromPexels(slot);
      success ? ok++ : fail++;
    } catch (err) {
      console.error(`❌ ${slot.filename}: ${err.message}`);
      fail++;
    }
    await new Promise((r) => setTimeout(r, 1200));
  }

  console.log(`\n📊 Done: ${ok} succeeded, ${fail} failed`);
}

main().catch(console.error);
