/**
 * Optimize downloaded stock images: resize, sharpen, convert to WebP.
 * Writes to public/images/optimized/ to avoid overwriting locked source files.
 *
 * Usage: node scripts/optimize-stock-images.js
 */

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const optimizedDir = path.join(process.cwd(), "public", "images", "optimized");

const targets = [
  { src: "public/images/marketing/employer-hero.webp", out: "employer-hero.webp", maxWidth: 1920, quality: 82 },
  { src: "public/images/marketing/senior-wellness.webp", out: "senior-wellness.webp", maxWidth: 1200, quality: 80 },
  { src: "public/images/clinical/pharmacy-lab.webp", out: "pharmacy-lab.webp", maxWidth: 1200, quality: 80 },
  { src: "public/images/clinical/doctor-consultation.webp", out: "doctor-consultation.webp", maxWidth: 1200, quality: 80 },
  { src: "public/images/clinical/medical-laboratory.webp", out: "medical-laboratory.webp", maxWidth: 1200, quality: 80 },
  { src: "public/images/clinical/round-table.webp", out: "round-table.webp", maxWidth: 1200, quality: 80 },
  { src: "public/images/brokers/employer-summary-preview.webp", out: "employer-summary-preview.webp", maxWidth: 1200, quality: 80 },
  { src: "public/images/brokers/employer-checklist-preview.webp", out: "employer-checklist-preview.webp", maxWidth: 1200, quality: 80 },
];

async function optimizeOne({ src, out, maxWidth, quality }) {
  const abs = path.join(process.cwd(), src);
  const dest = path.join(optimizedDir, out);

  if (!fs.existsSync(abs)) {
    console.warn(`⚠️  Missing: ${src}`);
    return;
  }

  const buffer = await sharp(abs)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .sharpen({ sigma: 0.8, m1: 0.5, m2: 0.3 })
    .webp({ quality, effort: 4 })
    .toBuffer();

  fs.writeFileSync(dest, buffer);
  const kb = Math.round(buffer.length / 1024);
  console.log(`✅ ${out} → ${kb} KB (max ${maxWidth}px)`);
}

async function main() {
  console.log("🔧 Optimizing stock images...\n");
  if (!fs.existsSync(optimizedDir)) fs.mkdirSync(optimizedDir, { recursive: true });
  for (const target of targets) {
    await optimizeOne(target);
  }
  console.log("\n📁 Output: public/images/optimized/");
}

main().catch(console.error);
