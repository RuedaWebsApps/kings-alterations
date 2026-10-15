/** Single source of truth for verified business data. Do not add unverified facts here. */
export const SITE = {
  name: "King's Alterations",
  formerName: "Pink Alterations LLC",
  phoneDisplay: "(512) 679-9240",
  phoneTel: "+15126799240",
  /** wa.me format: country code + number, digits only */
  whatsappNumber: "15126799240",
  street: "7500 State Hwy 71 Suite 100",
  city: "Austin",
  region: "TX",
  postalCode: "78735",
  country: "US",
  area: "Oak Hill / Southwest Austin",
  /** Production domain is not confirmed yet. Set NEXT_PUBLIC_SITE_URL in Vercel; falls back to Vercel's production domain. */
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined),
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "17:00" },
    { days: ["Saturday"], opens: "09:00", closes: "15:00" },
  ],
} as const;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${SITE.name} ${SITE.street} ${SITE.city} ${SITE.region} ${SITE.postalCode}`,
)}`;

export const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  `${SITE.street} ${SITE.city} ${SITE.region} ${SITE.postalCode}`,
)}&z=15&output=embed`;

export const waLink = (message: string) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const smsLink = (message: string) =>
  `sms:${SITE.phoneTel}?&body=${encodeURIComponent(message)}`;

export const telLink = `tel:${SITE.phoneTel}`;
