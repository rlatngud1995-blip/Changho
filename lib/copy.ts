/* =====================================
   창호의민족 · 지역 페이지 문장 풀
   - 구·군 페이지와 구·군×건물 유형 페이지가 서로 비슷해지지 않도록
     페이지 주소를 씨앗(seed)으로 제목·설명·문단·FAQ·체크리스트 조합을 고릅니다.
   - 같은 주소는 항상 같은 결과가 나옵니다 (빌드할 때마다 바뀌지 않음).
===================================== */

import { COMPANY, PHONE } from "./geujip";

function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function rng(seed: string) {
  let x = hash(seed) || 7;
  return () => {
    x ^= x << 13;
    x >>>= 0;
    x ^= x >> 17;
    x ^= x << 5;
    x >>>= 0;
    return x / 4294967296;
  };
}

export function pick<T>(seed: string, arr: readonly T[]): T {
  return arr[hash(seed) % arr.length];
}

export function shuffle<T>(seed: string, arr: readonly T[]): T[] {
  const r = rng(seed);
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type QA = { q: string; a: string };

/* ---------- 구·군 대표 페이지 ---------- */

const D_TITLE: ((s: string, f: string) => string)[] = [
  (s: string, f: string) => `${s} 샷시 교체 | ${f} 아파트·빌라·주택 창호 - ${COMPANY}`,
  (s: string, f: string) => `${s} 창호 교체·샷시 설치 전문 | ${COMPANY}`,
  (s: string, f: string) => `${f} 샷시 교체, 실측부터 시공까지 | ${COMPANY}`,
  (s: string, f: string) => `${s} 베란다 샷시·거실창 교체 상담 - ${COMPANY}`,
  (s: string, f: string) => `${s} 샷시 견적·창호 교체 안내 | ${COMPANY}`,
  (s: string, f: string) => `${COMPANY} ${s} — 노후 샷시·이중창 교체`,
];
const D_DESC: ((s: string, o: string) => string)[] = [
  (s: string, o: string) => `${o} 샷시 교체·창호 설치 ${COMPANY}. 아파트 베란다·거실창, 빌라 베란다, 단독주택 전체 창호까지 현장 실측 후 견적을 안내합니다. ☎ ${PHONE}`,
  (s: string, o: string) => `${s} 샷시 교체는 ${COMPANY}. 결로·외풍·뻑뻑한 창을 실측해 맞는 창호와 유리 사양으로 교체합니다. 상담 ${PHONE}`,
  (s: string, o: string) => `${s}에서 오래된 샷시 교체를 고민한다면 창 사진과 주소를 보내 주세요. ${COMPANY}이 철거 범위와 일정을 먼저 정리해 드립니다.`,
  (s: string, o: string) => `${o} 아파트·빌라·주택 창호 교체 출장 실측. 거실창, 방창, 이중창 부분 교체도 상담합니다. ${COMPANY} ☎ ${PHONE}`,
  (s: string, o: string) => `${s} 창호 교체 전문 ${COMPANY}. 단열·방음·방풍을 기준으로 제품을 고르고, 교체 후 개폐와 마감까지 확인합니다.`,
];
const D_H1B = ["샷시 교체 · 창호 설치", "창호 교체, 실측부터", "베란다·거실창 샷시 교체", "노후 샷시 교체 전문", "아파트·빌라·주택 창호"];
const D_LEAD: ((o: string) => string)[] = [
  (o: string) => `${o} 아파트 베란다·거실창, 빌라 베란다 샷시, 단독주택 전체 창호 교체를 현장 실측 후 안내합니다.`,
  (o: string) => `${o} 현장을 직접 재고, 창 크기와 기존 창틀 상태에 맞는 창호와 철거 범위를 정리해 드립니다.`,
  (o: string) => `결로, 외풍, 소음이 신경 쓰인다면 ${o} 창호 상태부터 확인해 보세요. 필요한 창만 바꾸는 부분 교체도 상담합니다.`,
  (o: string) => `${o}에서 샷시 교체를 준비 중이라면 창 사진과 주소만 보내 주세요. 실측 일정과 예상 범위를 먼저 안내합니다.`,
];
const D_SVC_T = ["건물 유형별 안내", "우리 집은 어떤 유형일까요", "아파트·빌라·주택별 교체 방법", "건물마다 다른 샷시 교체"];
const D_LOCAL_T = ["창호 현장 특징", "현장에서 먼저 보는 것", "지역 현장 메모", "시공 전 확인 사항"];
const D_TIPS_T = ["상담 전에 준비하면 좋은 것", "견적이 빨라지는 체크리스트", "실측 전에 확인해 주세요", "교체 전 체크포인트"];
const D_CONTACT_T = ["견적 상담", "실측 예약", "창호 교체 문의", "무료 상담 안내"];
const D_CONTACT = [
  "교체할 창 사진과 주소를 보내주시면 실측 일정과 예상 견적을 안내해드립니다.",
  "창 크기와 개수, 층수를 알려주시면 실측 전에 대략적인 범위를 먼저 말씀드립니다.",
  "전화나 문자로 편하게 문의하세요. 현장을 본 뒤 항목별로 나눠 견적을 드립니다.",
];

const TIPS = [
  "교체할 창 전체가 보이는 사진과 창틀 모서리 사진을 함께 보내 주세요.",
  "아파트는 관리사무소 공사 신고와 엘리베이터 사용 규정을 미리 확인해 주세요.",
  "동·호수와 층수를 알려주시면 자재 운반 방법을 견적에 반영합니다.",
  "거실창·베란다창·방창 중 어떤 창을 바꿀지 정해 두면 상담이 빠릅니다.",
  "결로나 외풍이 심한 창이 어디인지 알려주시면 우선순위를 함께 정합니다.",
  "세입자라면 교체 범위를 집주인과 먼저 협의해 주세요.",
  "희망 시공 시기와 가능한 요일을 알려주시면 자재 제작 일정에 맞춰 잡습니다.",
  "방충망, 잠금장치처럼 함께 바꾸고 싶은 부속이 있으면 미리 말씀해 주세요.",
];

const D_FAQ: ((s: string, o: string) => QA)[] = [
  (s: string, o: string): QA => ({ q: `${s} 샷시 교체 실측 출장이 가능한가요?`, a: `네, ${o} 현장 실측 상담이 가능합니다. 주소와 교체할 창 사진을 보내주시면 방문 일정을 안내해드립니다.` }),
  (s: string): QA => ({ q: `${s} 샷시 교체 견적은 어떻게 정해지나요?`, a: "창 개수와 크기, 창호 제품·유리 사양, 기존 샷시 철거 범위, 층수와 자재 운반 방법에 따라 달라집니다. 실측 후 항목별로 안내해드립니다." }),
  (): QA => ({ q: "샷시 교체하면 결로와 외풍이 줄어드나요?", a: "단열 성능이 좋은 창호와 유리로 바꾸면 외풍과 결로를 줄이는 데 도움이 됩니다. 다만 환기 습관과 벽체 상태에 따라 차이가 있어, 현장을 보고 함께 안내해드립니다." }),
  (): QA => ({ q: "창문 한두 개만 교체해도 되나요?", a: "가능합니다. 교체할 창의 위치와 크기를 알려주시면 부분 시공으로 견적을 드립니다." }),
  (): QA => ({ q: "교체 공사는 며칠 걸리나요?", a: "창 개수와 철거 범위에 따라 다릅니다. 실측 후 자재 제작 기간과 시공 일정을 함께 안내해드립니다." }),
  (): QA => ({ q: "기존 샷시 철거와 정리도 해 주나요?", a: "교체 공사에는 기존 샷시 철거가 포함됩니다. 철거 범위와 마감 방법은 실측 때 함께 확인합니다." }),
  (s: string): QA => ({ q: `${s} 고층 아파트도 교체할 수 있나요?`, a: "층수와 창 크기에 따라 엘리베이터 운반이나 사다리차 이용을 결정하고, 견적에 미리 반영해 안내합니다." }),
  (): QA => ({ q: "상담 전에 무엇을 준비하면 좋나요?", a: "교체할 창 사진, 대략적인 크기, 주소와 층수를 알려주시면 상담이 빨라집니다." }),
];

export function districtCopy(seed: string, search: string, full: string, official: string) {
  const faqs = [D_FAQ[0](search, official)].concat(
    shuffle(seed + "f", D_FAQ.slice(1)).slice(0, 3 + (hash(seed + "n") % 2)).map((f) => f(search, official))
  );
  return {
    title: pick(seed + "t", D_TITLE)(search, full),
    description: pick(seed + "d", D_DESC)(search, official),
    h1b: pick(seed + "h", D_H1B),
    lead: pick(seed + "l", D_LEAD)(official),
    servicesTitle: pick(seed + "st", D_SVC_T),
    localTitle: pick(seed + "lt", D_LOCAL_T),
    tipsTitle: pick(seed + "tt", D_TIPS_T),
    tips: shuffle(seed + "tp", TIPS).slice(0, 4),
    contactTitle: pick(seed + "ct", D_CONTACT_T),
    contactText: pick(seed + "cx", D_CONTACT),
    faqs,
  };
}

/* ---------- 구·군 × 건물 유형 페이지 ---------- */

const S_TITLE: ((s: string, k: string, f: string, tail: string) => string)[] = [
  (s: string, k: string, f: string, tail: string) => `${s} ${k} | ${f} ${tail} - ${COMPANY}`,
  (s: string, k: string) => `${s} ${k} 전문 시공 | ${COMPANY}`,
  (s: string, k: string, f: string) => `${f} ${k}, 실측 후 맞춤 교체 | ${COMPANY}`,
  (s: string, k: string) => `${s} ${k} 견적·일정 상담 - ${COMPANY}`,
  (s: string, k: string, f: string, tail: string) => `${COMPANY} ${s} ${k} · ${tail}`,
];
const S_DESC: ((o: string, n: string, i: string) => string)[] = [
  (o: string, n: string, i: string) => `${o} ${n} ${COMPANY}. ${i}까지 현장 실측 후 견적을 안내합니다. ☎ ${PHONE}`,
  (o: string, n: string, i: string) => `${o}에서 ${n}을 준비한다면 ${COMPANY}. 기존 창틀 상태를 보고 ${i} 등 필요한 범위만 정리해 드립니다.`,
  (o: string, n: string, i: string) => `${n} 상담 — ${o}. ${i}를 단열·방음 기준으로 비교해 고르고, 교체 후 개폐와 마감을 확인합니다. ${PHONE}`,
  (o: string, n: string, i: string) => `${o} ${n}, 사진 한 장으로 상담 시작. ${i}까지 맞춤 시공하는 ${COMPANY}입니다.`,
];
const S_INTRO_T = ["샷시교체·설치 안내", "이렇게 교체합니다", "시공 범위", "맞춤 교체 안내"];
const S_INTRO: ((loc: string, n: string) => string)[] = [
  (loc: string, n: string) => `${loc}에서 ${n}을 계획하고 계신가요? 창호 교체는 건물 구조, 창문 크기, 기존 창틀 상태와 설치 환경에 따라 시공 방법이 달라집니다.`,
  (loc: string, n: string) => `같은 ${n}이라도 ${loc} 현장마다 창 크기와 철거 범위가 다릅니다. 실측으로 정확한 규격을 잡는 것이 첫 단계입니다.`,
  (loc: string, n: string) => `${loc} ${n}은 단열·방음·방풍 중 무엇을 우선할지 정하면 제품 선택이 쉬워집니다. 상담 때 생활 불편을 먼저 들려주세요.`,
  (loc: string, n: string) => `오래된 샷시는 레일·바퀴만 고치면 되는 경우도 있습니다. ${loc} 현장에서 부분 수리와 전체 교체 중 맞는 방법을 함께 판단합니다.`,
];
const S_INTRO2 = [
  `${COMPANY}은 상담을 통해 기존 창호 상태와 교체 범위를 확인하고 현장 조건에 맞는 설치 방법과 견적을 안내합니다.`,
  `${COMPANY}은 실측 후 창별로 나눈 견적을 드려, 어디에 비용이 드는지 한눈에 볼 수 있습니다.`,
  `${COMPANY}은 교체 후 개폐 상태, 잠금장치, 실리콘 마감까지 함께 확인하고 마무리합니다.`,
];
const S_GALLERY_T = ["창호 사진 갤러리", "참고 사진", "시공 형태 참고", "창호 사진 보기"];
const S_PROCESS_T = ["시공 진행 절차", "교체 순서", "상담부터 마감까지", "진행 단계"];
const S_RELATED_T = ["다른 창호 서비스", "건물 유형 바꿔 보기", "함께 많이 찾는 시공"];
const S_EXTRA_FAQ: ((s: string) => QA)[] = [
  (s: string): QA => ({ q: `${s} 출장 실측이 가능한가요?`, a: "네, 주소와 교체할 창 사진을 보내주시면 실측 일정을 안내해드립니다." }),
  (): QA => ({ q: "견적은 무엇에 따라 달라지나요?", a: "창 개수와 크기, 창호·유리 사양, 철거 범위, 층수와 운반 방법에 따라 달라집니다." }),
  (): QA => ({ q: "교체 후 문제가 생기면요?", a: "개폐나 잠금 등 불편한 점이 있으면 연락 주세요. 시공 내용을 확인해 조치해 드립니다." }),
  (): QA => ({ q: "부분 교체도 되나요?", a: "필요한 창만 골라 교체하는 부분 시공도 상담합니다." }),
];

export function serviceCopy(
  seed: string,
  search: string,
  full: string,
  official: string,
  svc: { name: string; keyword: string; tail: string; items: readonly { title: string }[]; faq: readonly QA[] }
) {
  const items = shuffle(seed + "i", svc.items.map((x) => x.title)).slice(0, 3).join(", ");
  const faqs = shuffle<QA>(seed + "sf", svc.faq).slice(0, 2 + (hash(seed + "k") % 2)).concat(
    shuffle(seed + "ef", S_EXTRA_FAQ).slice(0, 2).map((f) => f(search))
  );
  return {
    title: pick(seed + "t", S_TITLE)(search, svc.keyword, full, svc.tail),
    description: pick(seed + "d", S_DESC)(official, svc.name, items),
    introTitle: pick(seed + "it", S_INTRO_T),
    intro: [pick(seed + "i1", S_INTRO)(full, svc.name), pick(seed + "i2", S_INTRO2)],
    galleryTitle: pick(seed + "gt", S_GALLERY_T),
    processTitle: pick(seed + "pt", S_PROCESS_T),
    relatedTitle: pick(seed + "rt", S_RELATED_T),
    tipsTitle: pick(seed + "tt", D_TIPS_T),
    tips: shuffle(seed + "tp", TIPS).slice(0, 3),
    contactTitle: pick(seed + "ct", D_CONTACT_T),
    contactText: pick(seed + "cx", D_CONTACT),
    faqs,
  };
}

/** 가까운 구·군만 (목록 순서 기준 앞뒤) — 모든 페이지에 같은 링크 목록이 반복되지 않게 */
export function nearSlice<T>(list: T[], index: number, n = 6): T[] {
  const start = Math.max(0, Math.min(index - Math.floor(n / 2), list.length - n));
  return list.slice(start, start + n);
}
