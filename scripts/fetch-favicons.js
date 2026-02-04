import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";
import { repoUrl } from "../src/data/projects.js";
import projects from "../src/data/projects.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUT_DIR = path.resolve(__dirname, "../src/assets/icons");

function getImageUrl(ghRepo, projectUrl) {
  let imageUrl = "";
  if (projectUrl.startsWith(repoUrl)) {
    imageUrl = `https://raw.githubusercontent.com/rsb-23/${ghRepo}/main/favicon.png`;
  } else {
    imageUrl = `${projectUrl}/favicon.png`;
  }
  return imageUrl;
}

for (const { image, url, ghRepo } of projects) {
  if (image || !ghRepo) continue
  const outFile = path.join(OUT_DIR, `${ghRepo}.png`);

  const imageUrl = getImageUrl(ghRepo, url)

  if (!imageUrl) continue

  const res = await fetch(imageUrl);
  if (!res.ok) continue;

  const buffer = Buffer.from(await res.arrayBuffer());

  await sharp(buffer)
    .resize(90, 90)
    .png()
    .toFile(outFile);

  console.log(`Saved ${ghRepo}.png`);
}
