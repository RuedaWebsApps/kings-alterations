// Builds web derivatives (WebP) and the typed catalog from the original photos.
// Originals are never modified. Run: node scripts/build-catalog.mjs
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import sharp from "sharp";

const SRC = process.env.KA_SRC ?? "C:/Users/ivang/Downloads/kings-web/editadas";
const ROOT = path.resolve(import.meta.dirname, "..");
const OUT_IMG = path.join(ROOT, "public/images/catalog");
const SIZES = [640, 1280];

// Visual classification (reviewed from contact sheets). Index = alphabetical position in SRC.
// cats: B bridal, F formal, S suits, E everyday, O outerwear & leather, U uniforms & workwear, C custom & specialty
const MAP = `
0|U|Martial arts uniform with embroidered patch
1|F|Cream floral-appliqué midi dress
2|B|White mini dress with sheer tulle overskirt|F
3|F|Sage green draped gown with slit
4|B|Tulle ball gown with open back
5|U|Striped work apron
6|B|Satin wedding gown with chapel train
7|U|Khaki button-up work shirt
8|F|Girls' rainbow tulle party dress
9|E|Sleeveless patterned top
10|F|Lime strapless gown with cascading ruffle
11|B|Strapless brocade ball gown
12|F|Teal draped gown with cap sleeves
13|B|Off-shoulder white column gown
14|O|Olive faux-fur jacket
15|F|Copper twisted halter gown
16|B|Lace-back wedding gown with scalloped train
17|E|Distressed blue jeans
18|E|Navy embroidered midi dress
19|F|Embellished tulle gown with strappy back
20|C|Dirndl-style dress with lace-up bodice
21|E|Black lace corset top
22|S|Navy two-button blazer
23|E|Paisley print shift dress
24|F|Pink mini dress with rosette details
25|S|Gray two-piece suit
26|F|Yellow floral tiered maxi dress
27|U|Graduation gown with red trim
28|S|White dress shirt with striped tie
29|F|Red satin halter gown
30|F|Dusty blue square-neck gown
31|B|Wedding gown with lace-trimmed train, back view
32|F|Beaded blush column gown
33|F|Burgundy halter gown
34|F|Striped halter maxi dress with tassel belt
35|F|Mauve satin and tulle gown
36|F|Black one-shoulder ruffle gown
37|F|Floral jacquard slip dress
38|B|Lace-bodice tulle wedding gown
39|U|Military dress uniform jacket
40|U|Plaid school jumper uniform
41|F|Navy one-shoulder chiffon gown
42|S|White oxford shirt with striped tie
43|F|Black tulle gown with floral embroidery
44|E|Embroidered tunic with trousers
45|F|Sage green draped gown, alternate style
46|U|Striped work apron with color-block sleeves
47|S|Burgundy double-breasted blazer
48|B|Wedding gown with floral appliqué open back
49|F|Black tweed mini dress with feather cuffs
50|B|Tiered ivory chiffon gown
51|F|Teal pleated gown with cutouts
52|C|Color-block bikini
53|F|Dusty blue tiered gown with tie straps
54|E|Rust patterned button-up blouse
55|U|Martial arts uniform, full length
56|F|Burgundy satin draped gown
57|F|Floral chiffon cross-neck gown
58|B|Tulle wedding gown with lace bodice
59|F|Floral satin midi slip dress
60|F|Yellow ruffled halter gown
61|F|Pink halter column gown
62|F|Beaded champagne gown
63|F|Printed halter maxi dress
64|F|Forest green floral halter gown
65|B|Bridal veil with lace-edged train
66|B|White 3D-floral mini dress|F
67|C|Monogrammed terry robe
68|S|Gray two-piece suit, slim cut
69|O|Black long double-breasted coat
70|F|Olive cross-neck gown
71|E|Ruffle off-shoulder blouse with denim skirt
72|F|Copper satin halter gown
73|B|Sweetheart floral-lace wedding gown
74|U|White martial arts uniform with belt
75|F|Dusty blue velvet cowl gown
76|E|Floral smocked midi dress
77|O|Patchwork-print long coat
78|E|Green striped tiered sundress
79|U|Camouflage shirt with patches
80|F|Rose high-low ruffle gown
81|E|Collage-print shirt dress
82|F|Cobalt one-shoulder peplum dress
83|F|Pink floral ruffle gown with slit
84|F|Floral gown with sheer cape sleeves
85|E|Blue floral puff-sleeve mini dress
86|F|Yellow floral-appliqué halter gown
87|F|Olive satin cowl-neck gown
88|C|Black nylon tote bag
89|F|Girls' rainbow tulle gown
90|C|Canvas messenger bag with patch
91|S|Black western-style suit with studs
92|F|Floral chiffon halter gown
93|F|Girls' white party dress with bow
95|F|Sage satin halter gown
96|S|Black jacquard blazer with contrast lapel
97|E|Suede fringe vest with jeans
98|E|Collage-print shirt dress, alternate view
99|F|Slate-blue floral off-shoulder gown
100|E|Gingham zip-neck mini dress
101|F|Navy strapless gown with slit
102|E|Striped knit maxi dress
103|O|Charcoal wool coat
104|E|White button-front mini dress
105|C|Canvas tote with name and patches
106|F|Red lace-back tiered cocktail dress
107|E|Striped flannel shirt, men's
108|F|Lime strapless gown, alternate view
109|F|Sequin two-piece set
110|E|Sequin graphic tee dress
111|O|Floral wrap coat
112|E|Striped flannel shirt, women's
113|O|Hooded puffer jacket
114|F|Red corset-back tiered mini dress
115|F|Floral chiffon wrap gown
116|F|Embellished tulle gown, alternate view
117|O|Black faux-fur jacket
118|S|Houndstooth sport coat
119|S|Navy unstructured blazer
120|B|A-line tulle wedding gown
121|F|Navy beaded mermaid gown
122|F|Yellow floral-embroidered gown
123|E|White midi shirt dress
124|F|Butterfly-appliqué mini dress
125|E|Black top with beaded neckline
126|F|Navy off-shoulder ruffle gown
127|F|Black top with green ombré ball skirt
128|U|Scout shirt with merit badge sash
129|C|Pastel two-piece swimwear
130|F|Green floral halter gown
131|O|Zebra-print long coat
132|O|Brown leather jacket
133|F|Light blue ruffle gown
134|F|Floral tiered gown
135|F|Pink halter gown with pockets
136|B|Lace-bodice wedding gown with tulle skirt
138|E|Turquoise long-sleeve midi dress
139|B|Long-sleeve floral lace wedding gown
140|U|Graduation gown with red trim, alternate view
141|B|Long-sleeve lace wedding gown
142|C|Camouflage boonie hat with patch
`.trim().split("\n");

const EXCLUDED = {
  94: "Near-duplicate of #93 (same white bow dress, same pose).",
  137: "Garbled lettering on the jersey (illegible text artifact); not suitable for publication.",
};
const FEATURED = new Set([6, 139, 11, 64, 57, 62, 22, 96, 132, 88, 17, 40]);
const CAT = { B: "bridal", F: "formal", S: "suits", E: "everyday", O: "outerwear", U: "uniforms", C: "specialty" };
const ORDER = ["bridal", "formal", "suits", "everyday", "outerwear", "uniforms", "specialty"];

const files = fs.readdirSync(SRC).filter((f) => /\.(jpe?g|png|webp)$/i.test(f)).sort();
fs.mkdirSync(OUT_IMG, { recursive: true });

// inventory + exact duplicates
const inv = [];
const seen = new Map();
for (const [i, f] of files.entries()) {
  const p = path.join(SRC, f);
  const buf = fs.readFileSync(p);
  const hash = crypto.createHash("md5").update(buf).digest("hex");
  const m = await sharp(buf).metadata();
  const dupOf = seen.get(hash);
  if (!dupOf) seen.set(hash, i);
  inv.push({ i, file: f, w: m.width, h: m.height, bytes: buf.length, hash, dupOf: dupOf ?? null });
}

const items = [];
for (const line of MAP) {
  const [idxS, c, title, sec] = line.split("|");
  const i = Number(idxS);
  const rec = inv[i];
  const id = `ka-${String(i).padStart(3, "0")}`;
  const ratio = rec.h / rec.w;
  const variants = {};
  for (const w of SIZES) {
    const out = path.join(OUT_IMG, `${id}-${w}.webp`);
    await sharp(path.join(SRC, rec.file)).resize({ width: w, withoutEnlargement: true }).webp({ quality: 76 }).toFile(out);
    variants[w] = fs.statSync(out).size;
  }
  items.push({
    id, i, file: rec.file, title, category: CAT[c], secondary: sec ? [CAT[sec]] : undefined,
    width: 640, height: Math.round(640 * ratio), featured: FEATURED.has(i), bytes: variants,
  });
}
items.sort((a, b) => ORDER.indexOf(a.category) - ORDER.indexOf(b.category) || a.i - b.i);
items.forEach((it, n) => (it.order = n + 1));

const lit = items.map((it) => {
  const alt = `${it.title} — sample garment photo`;
  return `  { id: "${it.id}", title: ${JSON.stringify(it.title)}, category: "${it.category}",${it.secondary ? ` secondary: ${JSON.stringify(it.secondary)},` : ""} width: ${it.width}, height: ${it.height}, alt: ${JSON.stringify(alt)}, order: ${it.order}${it.featured ? ", featured: true" : ""} },`;
}).join("\n");

const ts = `// GENERATED by scripts/build-catalog.mjs — edit the MAP there, then re-run.
export type CategoryId = "bridal" | "formal" | "suits" | "everyday" | "outerwear" | "uniforms" | "specialty";

export interface CatalogItem {
  id: string;
  title: string;
  category: CategoryId;
  secondary?: CategoryId[];
  /** Pixel size of the 640w derivative (aspect ratio is preserved). */
  width: number;
  height: number;
  alt: string;
  order: number;
  featured?: boolean;
}

export interface CategoryInfo {
  id: CategoryId;
  en: string;
  es: string;
}

export const CATEGORIES: CategoryInfo[] = [
  { id: "bridal", en: "Bridal & Wedding", es: "Novias y Bodas" },
  { id: "formal", en: "Formal & Special Occasions", es: "Vestidos de Gala y Ocasiones" },
  { id: "suits", en: "Suits & Tailoring", es: "Trajes y Sastrería" },
  { id: "everyday", en: "Everyday Alterations", es: "Arreglos Cotidianos" },
  { id: "outerwear", en: "Outerwear & Leather", es: "Abrigos y Cuero" },
  { id: "uniforms", en: "Uniforms & Workwear", es: "Uniformes y Ropa de Trabajo" },
  { id: "specialty", en: "Bags, Swimwear & Custom", es: "Bolsos, Trajes de Baño y Proyectos" },
];

export const imageSrc = (id: string, w: 640 | 1280) => \`/images/catalog/\${id}-\${w}.webp\`;

export const CATALOG_ITEMS: CatalogItem[] = [
${lit}
];
`;
fs.writeFileSync(path.join(ROOT, "src/data/catalog.ts"), ts);

// machine-readable data for the inventory report
fs.writeFileSync(path.join(ROOT, "scripts/_inventory.json"), JSON.stringify({ inv, items, EXCLUDED }, null, 1));
const tot = items.reduce((a, it) => a + it.bytes[640] + it.bytes[1280], 0);
console.log("source", files.length, "published", items.length, "excluded", Object.keys(EXCLUDED).length, "exact dups", inv.filter((r) => r.dupOf !== null).length, "derivative MB", (tot / 1e6).toFixed(1));
