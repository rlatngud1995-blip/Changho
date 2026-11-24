/* =====================================
   창호의민족 공통 데이터 · SEO (대표 김수형)
   - 모든 페이지가 이 파일 하나를 함께 씁니다.
===================================== */

export const SITE = "https://geujipwindow.com";
export const COMPANY = "창호의민족";
export const CEO = "김수형";
export const PHONE = "010-9413-4686";
export const TEL = "tel:01094134686";
export const MAIN_IMAGE = "/IMG_1944.jpeg";

export const regions = {
  busan: {
    name: "부산",
    fullName: "부산광역시",
    districts: {
      haeundae: "해운대구",
      suyeong: "수영구",
      nam: "남구",
      dongnae: "동래구",
      yeonje: "연제구",
      busanjin: "부산진구",
      dong: "동구",
      seo: "서구",
      jung: "중구",
      yeongdo: "영도구",
      buk: "북구",
      sasang: "사상구",
      saha: "사하구",
      geumjeong: "금정구",
      gangseo: "강서구",
      gijang: "기장군",
    },
  },
  ulsan: {
    name: "울산",
    fullName: "울산광역시",
    districts: {
      nam: "남구",
      jung: "중구",
      dong: "동구",
      buk: "북구",
      ulju: "울주군",
    },
  },
  changwon: {
    name: "창원",
    fullName: "경상남도 창원시",
    districts: {
      uichang: "의창구",
      seongsan: "성산구",
      masanhappo: "마산합포구",
      masanhoewon: "마산회원구",
      jinhae: "진해구",
    },
  },
} as const;

export type CityKey = keyof typeof regions;

/* =====================================
   서비스 (아파트 · 단독주택 · 빌라)
===================================== */

export const services = {
  apartment: {
    name: "아파트 샷시 교체·설치",
    shortName: "아파트 샷시",
    keyword: "아파트 샷시 교체",
    tail: "베란다·거실창 창호 교체",
    description:
      "아파트 베란다, 거실창, 방창, 이중창 등 노후 창호 교체와 설치 안내",
    hero: "/IMG_1939.jpeg",
    gallery: [
      {
        src: "/IMG_1939.jpeg",
        alt: "아파트 베란다 샷시 교체 후 참고 사진",
        caption: "아파트 베란다 창호",
      },
      {
        src: "/IMG_1941.jpeg",
        alt: "아파트 거실 샷시 교체 후 참고 사진",
        caption: "아파트 거실 창호",
      },
    ],
    items: [
      {
        title: "아파트 베란다 샷시 교체",
        text: "확장·비확장 여부와 기존 창틀 상태를 보고 철거 범위와 새 창호 규격을 정합니다.",
      },
      {
        title: "거실창 및 방창 교체",
        text: "큰 거실창은 유리 무게와 개폐 방식, 방창은 단열과 방음을 기준으로 제품을 고릅니다.",
      },
      {
        title: "노후 창호 교체",
        text: "결로·외풍·뻑뻑한 개폐 등 오래된 샷시 증상을 확인하고 전체·부분 교체를 안내합니다.",
      },
      {
        title: "이중창 및 부분 창호 설치",
        text: "필요한 창만 이중창으로 바꾸거나 일부 창만 교체하는 부분 시공도 상담합니다.",
      },
    ],
    faq: [
      {
        q: "아파트 샷시 교체할 때 관리사무소 신고가 필요한가요?",
        a: "대부분의 단지는 공사 신고, 엘리베이터 사용, 작업 시간 제한이 있습니다. 일정 잡기 전에 관리사무소 규정을 확인해 주시면 그에 맞춰 진행합니다.",
      },
      {
        q: "거실창만 따로 교체할 수 있나요?",
        a: "가능합니다. 기존 창틀 상태와 규격을 실측한 뒤 부분 교체가 맞는지, 전체 교체가 나은지 함께 안내해드립니다.",
      },
      {
        q: "고층 아파트도 샷시 교체가 되나요?",
        a: "층수와 창 크기에 따라 자재 운반 방법(엘리베이터·사다리차 등)이 달라집니다. 상담 시 동·호수와 층수를 알려주시면 반영해 견적을 드립니다.",
      },
    ],
  },
  house: {
    name: "단독주택 샷시 교체·설치",
    shortName: "단독주택 샷시",
    keyword: "단독주택 샷시 교체",
    tail: "전원주택 창호·창문 교체",
    description:
      "단독주택과 전원주택의 창호 교체, 창문 설치 및 노후 샷시 개선 안내",
    hero: "/IMG_1944.jpeg",
    gallery: [
      {
        src: "/IMG_1944.jpeg",
        alt: "창호 설치 상태 참고 사진",
        caption: "창호 설치 참고",
      },
      {
        src: "/IMG_1943.jpeg",
        alt: "창문 프레임 및 유리 시공 참고 사진",
        caption: "창문 구조 참고",
      },
    ],
    items: [
      {
        title: "단독주택 전체 창호 교체",
        text: "집 전체 창 개수와 크기를 실측해 한 번에 교체하는 일정과 범위를 정리합니다.",
      },
      {
        title: "전원주택 샷시 설치",
        text: "외부 노출이 큰 전원주택은 단열·방풍 성능과 방충망·잠금장치까지 함께 검토합니다.",
      },
      {
        title: "노후주택 창문 교체",
        text: "오래된 주택은 창틀이 틀어진 경우가 많아 수평·수직과 벽체 상태를 먼저 확인합니다.",
      },
      {
        title: "거실창 및 방창 교체",
        text: "생활 공간별로 필요한 창 크기와 열리는 방식을 맞춰 교체합니다.",
      },
    ],
    faq: [
      {
        q: "단독주택 전체 창호 교체는 며칠 걸리나요?",
        a: "창 개수와 크기, 철거 범위에 따라 달라집니다. 실측 후 자재 제작 기간과 시공 일정을 함께 안내해드립니다.",
      },
      {
        q: "오래된 주택이라 창틀이 틀어졌는데 교체가 되나요?",
        a: "실측할 때 창틀 수평·수직과 벽체 상태를 확인하고, 보강이 필요한 경우 그 범위까지 포함해 안내합니다.",
      },
      {
        q: "창문 한두 개만 교체해도 되나요?",
        a: "가능합니다. 교체할 창의 위치와 크기를 알려주시면 부분 시공으로 견적을 드립니다.",
      },
    ],
  },
  villa: {
    name: "빌라 샷시 교체·설치",
    shortName: "빌라 샷시",
    keyword: "빌라 샷시 교체",
    tail: "다세대주택 베란다 창호 교체",
    description:
      "빌라와 다세대주택의 베란다 샷시, 거실창, 방창 교체 및 설치 안내",
    hero: "/IMG_1943.jpeg",
    gallery: [
      {
        src: "/IMG_1943.jpeg",
        alt: "창호 프레임 설치 참고 사진",
        caption: "창호 프레임 참고",
      },
      {
        src: "/IMG_1944.jpeg",
        alt: "미닫이 창호 설치 참고 사진",
        caption: "미닫이 창호 참고",
      },
    ],
    items: [
      {
        title: "빌라 베란다 샷시 교체",
        text: "베란다 폭과 높이, 기존 창틀 고정 상태를 확인해 철거·설치 방법을 정합니다.",
      },
      {
        title: "다세대주택 창호 교체",
        text: "세대별 교체부터 건물 전체 교체까지, 세대 수와 일정에 맞춰 상담합니다.",
      },
      {
        title: "거실창 및 방창 교체",
        text: "외풍·소음이 심한 창부터 우선 교체하는 방식도 안내합니다.",
      },
      {
        title: "노후 샷시 부분 교체",
        text: "레일·바퀴·잠금장치 문제인지, 창 전체 교체가 필요한지 먼저 확인합니다.",
      },
    ],
    faq: [
      {
        q: "엘리베이터 없는 빌라도 샷시 교체가 되나요?",
        a: "됩니다. 계단 폭과 창 크기에 따라 계단 운반이나 사다리차 이용을 결정하며, 견적에 미리 반영해 안내합니다.",
      },
      {
        q: "빌라 베란다 샷시만 교체할 수 있나요?",
        a: "가능합니다. 베란다 창 크기와 기존 창틀 사진을 보내주시면 부분 교체 견적을 드립니다.",
      },
      {
        q: "세입자인데 샷시 교체 상담을 받아도 되나요?",
        a: "상담은 가능하지만 창호는 건물 소유자 동의가 필요한 공사입니다. 집주인과 범위를 먼저 협의해 주세요.",
      },
    ],
  },
} as const;

export type ServiceKey = keyof typeof services;
export const SERVICE_KEYS = Object.keys(services) as ServiceKey[];

/* =====================================
   지역 이름 (네이버 검색어 기준)
===================================== */

/* 여러 도시에 같은 이름이 있는 구 → 도시명을 붙임 */
const GENERIC = new Set(["중구", "동구", "서구", "남구", "북구", "강서구"]);

export function getDistrictName(city: string, district: string) {
  if (!(city in regions)) return null;
  const list: Record<string, string> = regions[city as CityKey].districts;
  return list[district] ?? null;
}

/** 해운대 · 부산 남구 · 울산 중구 · 창원 성산구 · 진해 */
export function searchName(city: string, districtName: string) {
  const cityName = regions[city as CityKey].name;

  if (city === "changwon") {
    if (districtName === "진해구") return "진해";
    if (districtName.startsWith("마산")) return districtName.replace(/구$/, "");
    return `창원 ${districtName}`;
  }

  if (GENERIC.has(districtName)) return `${cityName} ${districtName}`;

  return districtName.replace(/(구|군)$/, "");
}

/** 부산 해운대구 · 창원 성산구 */
export function fullName(city: string, districtName: string) {
  return `${regions[city as CityKey].name} ${districtName}`;
}

/** 부산광역시 해운대구 · 경상남도 창원시 성산구 */
export function officialName(city: string, districtName: string) {
  return `${regions[city as CityKey].fullName} ${districtName}`;
}

export function areaUrl(city: string, district: string) {
  return `/area/${city}/${district}`;
}

export function serviceUrl(city: string, district: string, service: string) {
  return `/area/${city}/${district}/${service}`;
}

/* =====================================
   지역별 창호 현장 특징 (페이지마다 다른 문단)
===================================== */

const CITY_TEXT: Record<CityKey, string> = {
  busan:
    "부산은 바다와 가까운 지역이 많아 바닷바람과 습기 때문에 결로, 창틀 철물 부식, 강한 바람에 창이 흔들리는 문제가 자주 생깁니다. 산복도로처럼 경사진 동네의 오래된 주택·빌라는 자재 운반 동선도 함께 확인합니다.",
  ulsan:
    "울산은 대단지 아파트와 오래된 주택·빌라가 함께 있고, 해안 쪽은 바닷바람의 영향을 받습니다. 겨울철 외풍과 여름철 결로를 줄이는 단열 창호 교체 상담이 많은 편입니다.",
  changwon:
    "창원은 계획도시로 조성된 대단지 아파트 지역과 마산·진해의 구도심 주택·빌라가 함께 있어, 같은 창원 안에서도 현장 조건이 크게 다릅니다.",
};

const DISTRICT_TEXT: Record<string, string> = {
  "busan-haeundae":
    "해운대는 마린시티·센텀시티 고층 아파트와 1990년대 지어진 좌동·중동 신시가지 아파트가 함께 있어, 고층 풍압에 맞는 창호와 노후 샷시 교체를 모두 상담합니다.",
  "busan-suyeong":
    "수영구는 광안리 해변과 가까운 단지가 많아 바닷바람과 염분에 강한 창호 철물, 결로를 줄이는 유리 사양을 함께 검토합니다.",
  "busan-yeongdo":
    "영도는 섬 지형이라 바람을 많이 받고 경사진 주택가가 많아, 방풍 성능과 자재 운반 방법을 함께 확인합니다.",
  "busan-gijang":
    "기장군은 정관신도시 아파트와 해안가 전원주택이 함께 있어 아파트 베란다 샷시와 단독주택 전체 창호 교체 상담이 모두 있습니다.",
  "busan-gangseo":
    "강서구는 명지국제신도시 신축 아파트와 외곽 주택이 함께 있어, 입주 아파트 창호 추가 시공부터 노후 주택 교체까지 현장에 맞춰 안내합니다.",
  "busan-busanjin":
    "부산진구는 서면 주변 오래된 빌라·주택과 재개발 이후 아파트가 섞여 있어 현장마다 창틀 상태와 교체 방법이 다릅니다.",
  "busan-dong":
    "부산 동구는 산복도로 경사지에 오래된 주택이 많아 계단·골목 운반 동선과 창틀 보강 필요 여부를 먼저 확인합니다.",
  "busan-seo":
    "부산 서구는 경사진 주택가와 해안 쪽 아파트가 함께 있어 운반 동선과 바닷바람에 맞는 창호 사양을 함께 검토합니다.",
  "busan-jung":
    "부산 중구는 오래된 상가주택과 빌라가 많아 창 크기가 제각각인 경우가 많아 꼼꼼한 실측이 중요합니다.",
  "busan-dongnae":
    "동래구는 대단지 아파트와 오래된 단독주택이 함께 있어 아파트 베란다 샷시와 주택 창문 교체 상담이 고르게 있습니다.",
  "ulsan-jung":
    "울산 중구는 우정혁신도시 아파트와 성남동 등 구도심 주택이 함께 있어 신축 단지와 노후 주택에 맞는 시공 방법을 나눠 안내합니다.",
  "ulsan-dong":
    "울산 동구는 바다와 맞닿은 주거지가 많아 바닷바람에 대비한 방풍·방습 창호 상담이 많습니다.",
  "ulsan-ulju":
    "울주군은 언양·범서 아파트와 외곽 전원주택이 함께 있어 단독주택 전체 창호 교체 상담 비중이 높습니다.",
  "changwon-seongsan":
    "성산구는 계획도시로 조성된 1980~90년대 아파트가 많아 노후 샷시 전체 교체와 단열 개선 상담이 많은 지역입니다.",
  "changwon-uichang":
    "의창구는 오래된 아파트 단지와 북면 등 신규 택지 아파트가 함께 있어 노후 교체와 신축 단지 추가 시공을 모두 진행합니다.",
  "changwon-masanhappo":
    "마산합포구는 경사진 구도심 주택·빌라가 많아 운반 동선과 오래된 창틀 상태를 먼저 확인합니다.",
  "changwon-masanhoewon":
    "마산회원구는 재개발 아파트와 오래된 주택가가 함께 있어 현장 유형에 맞춰 교체 범위를 정리합니다.",
  "changwon-jinhae":
    "진해는 바다와 가까운 주거지가 많아 바닷바람·습기에 강한 창호 사양을 함께 검토합니다.",
};

const KIND_TEXT = {
  gu: "구 단위 도심 현장은 아파트 관리 규정, 주차 공간, 엘리베이터 사용 가능 여부를 함께 확인해 일정을 잡습니다.",
  gun: "군 지역은 단독주택·전원주택 비중이 높아 창 개수가 많은 전체 교체 현장이 많고, 이동 거리에 맞춰 일정을 조율합니다.",
};

export function localParagraphs(city: string, district: string, districtName: string) {
  const list = [CITY_TEXT[city as CityKey]];
  const special = DISTRICT_TEXT[`${city}-${district}`];
  if (special) list.push(special);
  list.push(districtName.endsWith("군") ? KIND_TEXT.gun : KIND_TEXT.gu);
  return list;
}

export function nearbyDistricts(city: string, district: string) {
  return Object.entries(regions[city as CityKey].districts as Record<string, string>)
    .filter(([key]) => key !== district)
    .map(([slug, name]) => ({ slug, name }));
}

/* =====================================
   구조화 데이터
===================================== */

export function businessSchema(areaServed: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE}/#business`,
    name: COMPANY,
    alternateName: "CHANGHO MINJOK",
    founder: { "@type": "Person", name: CEO },
    url: SITE,
    telephone: `+82-${PHONE.slice(1)}`,
    image: `${SITE}${MAIN_IMAGE}`,
    logo: `${SITE}/8E8F15BB-A6AB-4A47-AF39-8DE4D6259BBF.png`,
    priceRange: "현장 실측 견적",
    description: "부산·울산·창원 아파트·단독주택·빌라 샷시 교체 및 창호 설치 전문 창호의민족 (대표 김수형)",
    knowsAbout: ["샷시 교체", "창호 교체", "베란다 샷시", "이중창", "단열 창호", "방음 창호"],
    areaServed: areaServed.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
  };
}

export function faqSchema(items: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE}${item.path}`,
    })),
  };
}

export function jsonLd(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
