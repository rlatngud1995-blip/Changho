import { SITE, COMPANY, regions, services, SERVICE_KEYS, searchName, fullName, officialName, type CityKey } from "../../lib/geujip";
import { districtCopy, serviceCopy } from "../../lib/copy";

/* 네이버 서치어드바이저 RSS 제출용 (/rss.xml) */
export const dynamic = "force-static";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function GET() {
  const items: { title: string; link: string; desc: string }[] = [];
  for (const key of SERVICE_KEYS) {
    items.push({ title: `${services[key].name} | ${COMPANY}`, link: `${SITE}/services/${key}`, desc: services[key].description });
  }
  for (const city of Object.keys(regions) as CityKey[]) {
    const list = regions[city].districts as Record<string, string>;
    for (const [district, name] of Object.entries(list)) {
      const s = searchName(city, name);
      const f = fullName(city, name);
      const o = officialName(city, name);
      const d = districtCopy(`${city}/${district}`, s, f, o);
      items.push({ title: d.title, link: `${SITE}/area/${city}/${district}`, desc: d.description });
      for (const key of SERVICE_KEYS) {
        const c = serviceCopy(`${city}/${district}/${key}`, s, f, o, services[key]);
        items.push({ title: c.title, link: `${SITE}/area/${city}/${district}/${key}`, desc: c.description });
      }
    }
  }
  const pub = new Date("2026-11-24T21:00:00+09:00").toUTCString();
  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel>` +
    `<title>${COMPANY}</title><link>${SITE}</link><description>부산·울산·창원 샷시 교체·창호 설치 ${COMPANY}</description><language>ko</language>\n` +
    items.map((i) => `<item><title>${esc(i.title)}</title><link>${i.link}</link><guid>${i.link}</guid><description>${esc(i.desc)}</description><pubDate>${pub}</pubDate></item>`).join("\n") +
    `\n</channel></rss>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
