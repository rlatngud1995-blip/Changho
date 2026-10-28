
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  CheckCircle2,
  MapPin,
} from "lucide-react";

const SITE = "https://geujipwindow.com";
const PHONE = "010-8176-3350";
const TEL = "tel:01081763350";

const regions = {
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

const services = {
  apartment: {
    name: "아파트 샷시 교체·설치",
    shortName: "아파트 샷시",
    image: "/IMG_1939.jpeg",
    description:
      "아파트 베란다 샷시, 거실창, 방창 및 이중창 교체 상담",
    items: [
      "아파트 베란다 샷시 교체",
      "거실창 및 방창 교체",
      "노후 창호 교체",
      "이중창 및 부분 창호 설치",
    ],
  },
  house: {
    name: "단독주택 샷시 교체·설치",
    shortName: "단독주택 샷시",
    image: "/IMG_1944.jpeg",
    description:
      "단독주택과 전원주택의 창호 교체 및 설치 상담",
    items: [
      "단독주택 창호 교체",
      "전원주택 샷시 설치",
      "노후주택 창문 교체",
      "거실창 및 방창 교체",
    ],
  },
  villa: {
    name: "빌라 샷시 교체·설치",
    shortName: "빌라 샷시",
    image: "/IMG_1943.jpeg",
    description:
      "빌라와 다세대주택의 노후 창호 및 베란다 샷시 교체 상담",
    items: [
      "빌라 베란다 샷시 교체",
      "다세대주택 창호 교체",
      "거실창 및 방창 교체",
      "노후 샷시 부분 교체",
    ],
  },
} as const;

type CityKey = keyof typeof regions;
type ServiceKey = keyof typeof services;

type PageParams = {
  city: string;
  district: string;
  service: string;
};

function getPageData(params: PageParams) {
  const { city, district, service } = params;

  if (!(city in regions)) return null;
  if (!(service in services)) return null;

  const cityKey = city as CityKey;
  const cityData = regions[cityKey];

  const districts: Record<string, string> =
    cityData.districts;

  const districtName = districts[district];

  if (!districtName) return null;

  return {
    cityKey,
    cityData,
    districtName,
    serviceKey: service as ServiceKey,
    serviceData: services[service as ServiceKey],
  };
}

export function generateStaticParams() {
  const params: PageParams[] = [];

  for (const city of Object.keys(regions) as CityKey[]) {
    const cityData = regions[city];

    for (const district of Object.keys(
      cityData.districts
    )) {
      for (const service of Object.keys(
        services
      )) {
        params.push({
          city,
          district,
          service,
        });
      }
    }
  }

  return params;
}

export function generateMetadata({
  params,
}: {
  params: PageParams;
}): Metadata {
  const data = getPageData(params);

  if (!data) {
    return {
      title: "페이지를 찾을 수 없습니다",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const { cityData, districtName, serviceData } = data;

  const location = `${cityData.name} ${districtName}`;

  const title = `${location} ${serviceData.name}`;

  const description =
    `${location} ${serviceData.name} 안내. ` +
    `${serviceData.description}. ` +
    `창호 규격, 현장 실측, 교체 범위 및 견적 상담은 ` +
    `그집창호 010-8176-3350으로 문의하세요.`;

  const url =
    `${SITE}/area/${params.city}/` +
    `${params.district}/${params.service}`;

  return {
    title,
    description,
    keywords: [
      `${location} 샷시`,
      `${location} 샷시교체`,
      `${location} 창호교체`,
      `${location} ${serviceData.shortName}`,
      serviceData.name,
      "그집창호",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      siteName: "그집창호",
      title: `${title} | 그집창호`,
      description,
      url,
      images: [
        {
          url: serviceData.image,
          alt: `${serviceData.name} 참고 사진`,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function RegionServicePage({
  params,
}: {
  params: PageParams;
}) {
  const data = getPageData(params);

  if (!data) notFound();

  const {
    cityData,
    districtName,
    serviceData,
  } = data;

  const location = `${cityData.name} ${districtName}`;

  const pageTitle =
    `${location} ${serviceData.name}`;

  const currentUrl =
    `${SITE}/area/${params.city}/` +
    `${params.district}/${params.service}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: pageTitle,
    serviceType: serviceData.name,
    description: serviceData.description,
    provider: {
      "@type": "Organization",
      name: "그집창호",
      url: SITE,
      telephone: PHONE,
    },
    areaServed: {
      "@type": "Place",
      name: `${cityData.fullName} ${districtName}`,
    },
    url: currentUrl,
    image: `${SITE}${serviceData.image}`,
  };

  const otherServices = Object.entries(services).filter(
    ([key]) => key !== params.service
  );

  const districtLinks = Object.entries(
    cityData.districts
  ).filter(([key]) => key !== params.district);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <main>
        {/* 지역별 대표 사진 */}
        <section
          style={{
            position: "relative",
            minHeight: 490,
            display: "flex",
            alignItems: "center",
            color: "#fff",
            overflow: "hidden",
          }}
        >
          <Image
            src={serviceData.image}
            alt={`${pageTitle} 창호 참고 이미지`}
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(8,16,24,.9), rgba(8,16,24,.3))",
            }}
          />

          <div
            className="container"
            style={{
              position: "relative",
              zIndex: 1,
              paddingTop: 145,
              paddingBottom: 85,
            }}
          >
            <p className="hero-kicker">
              GEUJIP WINDOW / LOCAL SERVICE
            </p>

            <h1
              style={{
                fontSize: "clamp(32px, 5vw, 58px)",
                lineHeight: 1.3,
                margin: "24px 0",
                fontWeight: 800,
              }}
            >
              {location}
              <br />
              {serviceData.name}
            </h1>

            <p
              style={{
                maxWidth: 620,
                lineHeight: 1.9,
                color: "#e4e9ed",
              }}
            >
              {location} 지역의
              <br />
              {serviceData.description}
            </p>

            <a
              href={TEL}
              className="btn btn-white"
              style={{ marginTop: 28 }}
            >
              <Phone size={17} />
              견적 상담 문의
            </a>
          </div>
        </section>

        {/* 지역 및 서비스 소개 */}
        <section className="section">
          <div className="container">
            <span className="eyebrow">
              WINDOW REPLACEMENT
            </span>

            <h2 className="section-title">
              {location}
              <br />
              {serviceData.shortName} 안내
            </h2>

            <p className="section-desc">
              {location}에서 {serviceData.name}을
              계획하고 계신가요?
              창호 교체는 건물 구조, 창문 크기,
              기존 창틀 상태와 설치 환경에 따라
              필요한 시공 방법이 달라집니다.
            </p>

            <p className="section-desc">
              그집창호는 상담을 통해
              기존 창호 상태와 교체 범위를 확인하고
              현장 조건에 맞는 설치 방법과
              견적을 안내합니다.
              실제 방문 가능 일정과 지역은
              상담 시 확인해 주세요.
            </p>

            <div className="features-grid">
              {serviceData.items.map((item, index) => (
                <article
                  className="feature"
                  key={item}
                >
                  <span className="feature-number">
                    0{index + 1}
                  </span>

                  <h3>{item}</h3>

                  <p>
                    창호 규격과 현장 상태를 확인해
                    교체 및 설치 범위를 안내합니다.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 카테고리별 사진 */}
        <section className="section section-light">
          <div className="container">
            <span className="eyebrow">
              WINDOW GALLERY
            </span>

            <h2 className="section-title">
              {serviceData.shortName}
              <br />
              창호 사진
            </h2>

            <p className="section-desc">
              창호 교체와 설치 형태를
              참고할 수 있는 사진입니다.
              해당 지역에서 촬영한 시공 사례를
              의미하지는 않습니다.
            </p>

            {params.service === "apartment" ? (
              <div
                style={{
                  display: "grid",
                  gap: 40,
                  marginTop: 35,
                }}
              >
                {[
                  {
                    title: "아파트 베란다 창호 교체",
                    before: "/IMG_1938.jpeg",
                    after: "/IMG_1939.jpeg",
                  },
                  {
                    title: "아파트 거실 창호 교체",
                    before: "/IMG_1942.jpeg",
                    after: "/IMG_1941.jpeg",
                  },
                ].map((project) => (
                  <article key={project.title}>
                    <h3
                      style={{
                        fontSize: 22,
                        marginBottom: 20,
                      }}
                    >
                      {project.title}
                    </h3>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fit, minmax(min(100%, 290px), 1fr))",
                        gap: 15,
                      }}
                    >
                      {[
                        {
                          src: project.before,
                          label: "BEFORE",
                          korean: "시공 전",
                        },
                        {
                          src: project.after,
                          label: "AFTER",
                          korean: "시공 후",
                        },
                      ].map((photo) => (
                        <div key={photo.label}>
                          <div
                            style={{
                              position: "relative",
                              aspectRatio: "4 / 3",
                              overflow: "hidden",
                            }}
                          >
                            <Image
                              src={photo.src}
                              alt={`${project.title} ${photo.korean} 참고 사진`}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              style={{
                                objectFit: "cover",
                              }}
                            />

                            <span
                              style={{
                                position: "absolute",
                                top: 15,
                                left: 15,
                                background:
                                  photo.label === "AFTER"
                                    ? "#fff"
                                    : "#17222b",
                                color:
                                  photo.label === "AFTER"
                                    ? "#17222b"
                                    : "#fff",
                                padding: "9px 14px",
                                fontSize: 12,
                                fontWeight: 800,
                              }}
                            >
                              {photo.label}
                            </span>
                          </div>

                          <p
                            style={{
                              fontWeight: 600,
                              marginTop: 12,
                            }}
                          >
                            {photo.korean}
                          </p>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div
                style={{
                  position: "relative",
                  maxWidth: 850,
                  aspectRatio: "4 / 3",
                  marginTop: 30,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={serviceData.image}
                  alt={`${serviceData.name} 창호 참고 사진`}
                  fill
                  sizes="(max-width: 900px) 100vw, 850px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            )}
          </div>
        </section>

        {/* 시공 절차 */}
        <section className="section">
          <div className="container">
            <span className="eyebrow">
              INSTALLATION PROCESS
            </span>

            <h2 className="section-title">
              {serviceData.shortName}
              <br />
              시공 진행 절차
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
                gap: 16,
                marginTop: 30,
              }}
            >
              {[
                "상담 및 문의",
                "현장 상태 확인",
                "창호 실측",
                "시공 범위 검토",
                "견적 안내",
                "시공 일정 협의",
                "창호 교체 및 설치",
                "마감 및 최종 점검",
              ].map((step, index) => (
                <div
                  key={step}
                  style={{
                    padding: 24,
                    border: "1px solid #e0e5e9",
                  }}
                >
                  <span className="eyebrow">
                    STEP {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3
                    style={{
                      fontSize: 17,
                      marginTop: 13,
                    }}
                  >
                    {step}
                  </h3>
                </div>
              ))}
            </div>

            <Link
              href="/process"
              className="btn btn-dark"
              style={{ marginTop: 30 }}
            >
              전체 시공과정 보기
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        {/* 동일 지역 다른 카테고리 */}
        <section className="section section-light">
          <div className="container">
            <span className="eyebrow">
              RELATED SERVICES
            </span>

            <h2 className="section-title">
              {location}
              <br />
              다른 창호 서비스
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
                gap: 15,
                marginTop: 30,
              }}
            >
              {otherServices.map(([key, item]) => (
                <Link
                  key={key}
                  href={`/area/${params.city}/${params.district}/${key}`}
                  style={{
                    padding: 24,
                    background: "#fff",
                    border: "1px solid #e0e5e9",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 12,
                    color: "#202a33",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  <span>{item.name}</span>
                  <ArrowUpRight size={18} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 동일 도시 다른 지역구 */}
        <section className="section">
          <div className="container">
            <span className="eyebrow">
              NEARBY DISTRICTS
            </span>

            <h2 className="section-title">
              {cityData.name}
              <br />
              다른 지역구 안내
            </h2>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                marginTop: 25,
              }}
            >
              {districtLinks.map(([key, name]) => (
                <Link
                  key={key}
                  href={`/area/${params.city}/${key}/${params.service}`}
                  style={{
                    padding: "12px 17px",
                    border: "1px solid #dce2e6",
                    fontSize: 14,
                    color: "#344450",
                    textDecoration: "none",
                  }}
                >
                  {name} {serviceData.shortName}
                </Link>
              ))}
            </div>

            <div style={{ marginTop: 30 }}>
              <Link
                href={`/area/${params.city}`}
                className="btn btn-dark"
              >
                <MapPin size={17} />
                {cityData.name} 전체 지역 보기
              </Link>
            </div>
          </div>
        </section>

        {/* 상담 */}
        <section className="section section-light">
          <div
            className="container"
            style={{ textAlign: "center" }}
          >
            <span className="eyebrow">
              CONTACT & ESTIMATE
            </span>

            <h2 className="section-title">
              {location}
              <br />
              샷시 교체 견적 상담
            </h2>

            <p className="section-desc">
              창호 규격과 자재 사양,
              철거 범위, 현장 조건에 따라
              견적이 달라질 수 있습니다.
            </p>

            <a
              href={TEL}
              className="btn btn-dark"
              style={{ marginTop: 25 }}
            >
              <Phone size={17} />
              {PHONE}
            </a>

            <div style={{ marginTop: 25 }}>
              <Link href="/area">
                전체 시공지역 보기 →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="logo">
                그집창호
                <span>GEUJIP WINDOW</span>
              </div>

              <p>
                아파트 · 단독주택 · 빌라
                <br />
                샷시 교체 및 설치
              </p>
            </div>

            <div>
              <p>견적 및 시공 상담</p>
              <a href={TEL}>{PHONE}</a>
            </div>
          </div>

          <div className="footer-bottom">
            © {new Date().getFullYear()} GEUJIP WINDOW.
            All Rights Reserved.
          </div>
        </div>
      </footer>

      <div className="mobile-call">
        <a href={TEL}>
          ☎ 전화 상담 · {PHONE}
        </a>
      </div>
    </>
  );
}
