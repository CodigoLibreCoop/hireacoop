import sharp from "sharp";
import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, "..", "public");
const OUT_DIR = path.join(PUBLIC_DIR, "images", "optimized");

const QUALITY = 80;

// width, in pixels: max width the image is ever rendered at, per next/image `sizes`
const GROUPS = {
  hero: { maxWidth: 1920, files: ["hero.jpg"] },
  wide: { maxWidth: 1200, files: ["HAC_1.jpg", "HAC_2.jpg", "WOIP_1.jpg"] },
  listing: {
    maxWidth: 600,
    files: [
      // service cards
      "virtual-queue.png",
      "software-development.png",
      "design-uxui.png",
      "community-manager.png",
      "staff-augmentation.png",
      "branding.png",
      "social-impact.png",
      // hire cards
      "circle1.jpeg",
      "circle2.jpeg",
      "circle3.jpeg",
      // cooperativism icons
      "Icono_1.jpg",
      "Icono_2.jpg",
      "Icono_3.jpg",
      "Icono_4.jpg",
      // partner / financier logos
      "Animus.png",
      "LOGOS_SENORITAS-06.png",
      "Marialab.png",
      "WOIP.png",
      "MTST.png",
      "Digitalabour.png",
      "TorontoUniversity.png",
      "SSHRC.png",
      "Central Salta.jpg",
      "FACTTIC.png",
    ],
  },
};

async function optimizeFile(filename, maxWidth) {
  const inputPath = path.join(PUBLIC_DIR, filename);
  const parsed = path.parse(filename);
  const outputPath = path.join(OUT_DIR, `${parsed.name}.webp`);

  const inputStat = await fs.stat(inputPath);

  // PNGs here are flat-color logos/icons/illustrations: lossy webp puts
  // block artifacts on their hard edges and text. near-lossless keeps them
  // crisp and is usually just as small (or smaller) than quality:80 lossy.
  // JPEGs are actual photos, where lossy compression is the right tradeoff.
  const isFlatGraphic = parsed.ext.toLowerCase() === ".png";

  const webpOptions = isFlatGraphic
    ? { nearLossless: true }
    : { quality: QUALITY };

  await sharp(inputPath)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp(webpOptions)
    .toFile(outputPath);

  const outputStat = await fs.stat(outputPath);

  return {
    file: filename,
    output: path.relative(PUBLIC_DIR, outputPath),
    originalBytes: inputStat.size,
    optimizedBytes: outputStat.size,
  };
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });

  const results = [];

  for (const [groupName, group] of Object.entries(GROUPS)) {
    for (const filename of group.files) {
      try {
        const result = await optimizeFile(filename, group.maxWidth);
        results.push({ group: groupName, ...result });
      } catch (err) {
        console.error(`Failed to process ${filename}:`, err.message);
      }
    }
  }

  results.sort((a, b) => b.originalBytes - a.originalBytes);

  const fmt = (bytes) => (bytes / (1024 * 1024)).toFixed(2) + " MB";

  let totalOriginal = 0;
  let totalOptimized = 0;

  console.log(
    "\n" +
      "Group".padEnd(9) +
      "File".padEnd(30) +
      "Before".padEnd(12) +
      "After".padEnd(12) +
      "Savings"
  );
  console.log("-".repeat(80));

  for (const r of results) {
    totalOriginal += r.originalBytes;
    totalOptimized += r.optimizedBytes;
    const savings =
      (100 * (1 - r.optimizedBytes / r.originalBytes)).toFixed(1) + "%";
    console.log(
      r.group.padEnd(9) +
        r.file.padEnd(30) +
        fmt(r.originalBytes).padEnd(12) +
        fmt(r.optimizedBytes).padEnd(12) +
        savings
    );
  }

  console.log("-".repeat(80));
  console.log(
    `TOTAL: ${fmt(totalOriginal)} -> ${fmt(totalOptimized)} (${(
      100 *
      (1 - totalOptimized / totalOriginal)
    ).toFixed(1)}% reduction)`
  );
}

main();
