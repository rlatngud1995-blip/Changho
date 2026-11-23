import type { MetadataRoute } from "next";
import { SITE, regions, SERVICE_KEYS, type CityKey } from "../lib/geujip";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const urls: MetadataRoute.Sitemap = [];

  const add = (
    path: string,
    priority: number,
    frequency: "weekly" | "monthly"
  ) => {
    urls.push({
      url: `${SITE}${path}`,
      lastModified,
      changeFrequency: frequency,
      priority,
    });
  };

  // 메인 홈페이지
  add("/", 1, "weekly");

  // 시공 서비스 페이지
  for (const service of SERVICE_KEYS) {
    add(`/services/${service}`, 0.9, "monthly");
  }

  // 시공과정
  add("/process", 0.7, "monthly");

  // 지역 선택 메인
  add("/area", 0.9, "monthly");

  for (const city of Object.keys(regions) as CityKey[]) {
    // 부산·울산·창원 대표 페이지
    add(`/area/${city}`, 0.85, "monthly");

    for (const district of Object.keys(regions[city].districts)) {
      // 구·군 대표 페이지 (해운대 샷시 교체 등)
      add(`/area/${city}/${district}`, 0.8, "monthly");

      // 구·군별 건물 유형 페이지
      for (const service of SERVICE_KEYS) {
        add(`/area/${city}/${district}/${service}`, 0.7, "monthly");
      }
    }
  }

  return urls;
}
