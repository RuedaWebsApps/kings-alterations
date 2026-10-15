// Derives web-ready brand assets from the ORIGINAL logo/icon (originals stay untouched in Downloads).
// Run: node scripts/build-brand.mjs
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const DL = process.env.KA_DL ?? "C:/Users/ivang/Downloads";
const ROOT = path.resolve(import.meta.dirname, "..");
const pub = (f) => path.join(ROOT, "public", f);
const app = (f) => path.join(ROOT, "src/app", f);

// Logo: the 1000x670 source has wide transparent padding that makes it render tiny in a header.
// Trim transparent borders only (no redraw, no resize distortion) and keep a small safe margin.
const logo = await sharp(path.join(DL, "logo-king-alterations.png")).trim({ threshold: 5 }).toBuffer({ resolveWithObject: true });
const margin = 8;
await sharp(logo.data)
  .extend({ top: margin, bottom: margin, left: margin, right: margin, background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ compressionLevel: 9 })
  .toFile(pub("logo-king-alterations-web.png"));
const lm = await sharp(pub("logo-king-alterations-web.png")).metadata();
console.log("logo web", lm.width, lm.height, fs.statSync(pub("logo-king-alterations-web.png")).size);

// Icon: source is 413x476 (not square). Fit it on a square canvas without stretching.
const iconSrc = path.join(DL, "icono-kings-alterations.png");
const square = async (size, bg, pad) => {
  const inner = Math.round(size * (1 - pad * 2));
  const fg = await sharp(iconSrc).resize({ width: inner, height: inner, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
  return sharp({ create: { width: size, height: size, channels: 4, background: bg } }).composite([{ input: fg, gravity: "center" }]).png({ compressionLevel: 9 });
};
const clear = { r: 0, g: 0, b: 0, alpha: 0 };
await (await square(512, clear, 0.04)).toFile(app("icon.png"));
await (await square(180, { r: 252, g: 250, b: 246, alpha: 1 }, 0.1)).toFile(app("apple-icon.png"));
const p32 = await (await square(32, clear, 0.02)).toBuffer();
const p48 = await (await square(48, clear, 0.02)).toBuffer();
// PNG-in-ICO container
const imgs = [[32, p32], [48, p48]];
const head = Buffer.alloc(6); head.writeUInt16LE(1, 2); head.writeUInt16LE(imgs.length, 4);
let off = 6 + 16 * imgs.length;
const dir = imgs.map(([s, b]) => { const e = Buffer.alloc(16); e[0] = s; e[1] = s; e.writeUInt16LE(1, 4); e.writeUInt16LE(32, 6); e.writeUInt32LE(b.length, 8); e.writeUInt32LE(off, 12); off += b.length; return e; });
fs.writeFileSync(app("favicon.ico"), Buffer.concat([head, ...dir, ...imgs.map(([, b]) => b)]));
console.log("icons ok");

// Social share image (1200x630): the trimmed logo centered on the ivory brand background.
const ogLogo = await sharp(pub("logo-king-alterations-web.png")).resize({ width: 880 }).toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 3, background: "#fcfaf6" } })
  .composite([{ input: ogLogo, gravity: "center" }])
  .jpeg({ quality: 88 })
  .toFile(pub("og-image.jpg"));
console.log("og image ok");
