
import type { MetadataRoute } from "next";

const SITE = "https://geujipwindow.com";

const regions: Record<string, string[]> = {
  busan: [
    "haeundae",
    "suyeong",
    "nam",
    "dongnae",
    "yeonje",
    "busanjin",
    "dong",
    "seo",
    "jung",
    "yeongdo",
    "buk",
    "sasang",
    "saha",
    "geumjeong",
    "gangseo",
    "gijang",
  ],
  ulsan: [
    "nam",
    "jung",
    "dong",
    "buk",
    "ulju",
  ],
  changwon: [
    "uichang",
    "seongsan",
    "masanhappo",
    "masanhoewon",
    "jinhae",
  ],
};

const services = ["apartment", "house", "villa"];

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  const add = (
    path: string,
    priority: number,
    frequency: "weekly" | "monthly"
  ) => {
    urls.push({
      url: `${SITE}${path}`,
      changeFrequency: frequency,
      priority,
    });
  };

  // 메인 홈페이지
  add("/", 1, "weekly");

  // 시공 서비스 페이지
  for (const service of services) {
    add(`/services/${service}`, 0.9, "monthly");
  }

  // 시공과정
  add("/process", 0.7, "monthly");

  // 지역 선택 메인
  add("/area", 0.9, "monthly");

  // 부산·울산·창원 대표 페이지
  for (const city of Object.keys(regions)) {
    add(`/area/${city}`, 0.8, "monthly");
  }

  // 구·군별 서비스 상세 페이지
  for (const [city, districts] of Object.entries(regions)) {
    for (const district of districts) {
      for (const service of services) {
        add(
          `/area/${city}/${district}/${service}`,
          0.7,
          "monthly"
        );
      }
    }
  }

  return urls;
}
