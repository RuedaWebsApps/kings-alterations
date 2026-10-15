import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SRC = "C:/Users/ivang/Downloads/kings-web/editadas";
const OUT = "C:/Users/ivang/Desktop/rudawebs/kings-alterations/scripts/_sheets";
fs.mkdirSync(OUT, { recursive: true });

const files = fs.readdirSync(SRC).filter((f) => /\.(jpe?g|png|webp)$/i.test(f)).sort();
const PER = 20, COLS = 5, W = 240, H = 300;

for (let s = 0; s * PER < files.length; s++) {
  const chunk = files.slice(s * PER, s * PER + PER);
  const comps = [];
  for (let i = 0; i < chunk.length; i++) {
    const idx = s * PER + i;
    const buf = await sharp(path.join(SRC, chunk[i]))
      .resize(W, H, { fit: "contain", background: "#ffffff" })
      .toBuffer();
    const label = Buffer.from(
      `<svg width="60" height="28"><rect width="60" height="28" fill="black"/><text x="6" y="20" font-size="18" fill="white" font-family="Arial">${idx}</text></svg>`
    );
    const tile = await sharp(buf).composite([{ input: label, top: 0, left: 0 }]).toBuffer();
    comps.push({ input: tile, left: (i % COLS) * W, top: Math.floor(i / COLS) * H });
  }
  const rows = Math.ceil(chunk.length / COLS);
  await sharp({ create: { width: COLS * W, height: rows * H, channels: 3, background: "#ddd" } })
    .composite(comps)
    .jpeg({ quality: 80 })
    .toFile(path.join(OUT, `sheet-${String(s).padStart(2, "0")}.jpg`));
}
fs.writeFileSync(path.join(OUT, "index.json"), JSON.stringify(files, null, 1));
console.log("files:", files.length, "sheets:", Math.ceil(files.length / PER));
