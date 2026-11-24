
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  MapPin,
} from "lucide-react";

import {
  SITE,
  COMPANY,
  PHONE,
  TEL,
  regions,
  services,
  SERVICE_KEYS,
  getDistrictName,
  searchName,
  fullName,
  officialName,
  localParagraphs,
  areaUrl,
  serviceUrl,
  businessSchema,
  faqSchema,
  breadcrumbSchema,
  jsonLd,
  type CityKey,
  type ServiceKey,
} from "../../../../../lib/geujip";
import { serviceCopy, nearSlice } from "../../../../../lib/copy";

type PageParams = {
  city: string;
  district: string;
  service: string;
};

type PageProps = {
  params: Promise<PageParams>;
};

function getPageData(params: PageParams) {
  if (!(params.service in services)) return null;

  const districtName = getDistrictName(params.city, params.district);
  if (!districtName) return null;

  const cityData = regions[params.city as CityKey];
  const serviceData = services[params.service as ServiceKey];
  const search = searchName(params.city, districtName);
  const official = officialName(params.city, districtName);
  const full = fullName(params.city, districtName);
  const copy = serviceCopy(`${params.city}/${params.district}/${params.service}`, search, full, official, serviceData);

  return {
    copy,
    cityData,
    districtName,
    serviceData,
    search,
    official,
    full,
    title: copy.title,
    description: copy.description,
  };
}

export function generateStaticParams(): PageParams[] {
  const result: PageParams[] = [];

  for (const city of Object.keys(regions) as CityKey[]) {
    for (const district of Object.keys(regions[city].districts)) {
      for (const service of SERVICE_KEYS) {
        result.push({ city, district, service });
      }
    }
  }

  return result;
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const data = getPageData(resolvedParams);

  if (!data) {
    return {
      title: "페이지를 찾을 수 없습니다",
      robots: { index: false, follow: false },
    };
  }

  const { title, description, full, serviceData } = data;

  const url = `${SITE}${serviceUrl(
    resolvedParams.city,
    resolvedParams.district,
    resolvedParams.service
  )}`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      siteName: COMPANY,
      title,
      description,
      url,
      images: [
        {
          url: `${SITE}${serviceData.hero}`,
          alt: `${full} ${serviceData.shortName} 참고 이미지`,
        },
      ],
    },
    robots: { index: true, follow: true },
  };
}

const beforeAfter = [
  {
    title: "아파트 베란다 샷시 교체",
    before: "/IMG_1938.jpeg",
    after: "/IMG_1939.jpeg",
  },
  {
    title: "아파트 거실 창호 교체",
    before: "/IMG_1942.jpeg",
    after: "/IMG_1941.jpeg",
  },
];

const processSteps = [
  "시공 상담",
  "현장 상태 확인",
  "창호 실측",
  "자재 및 시공 범위 검토",
  "견적 안내",
  "시공 일정 협의",
  "창호 교체 및 설치",
  "마감 및 최종 점검",
];

export default async function RegionServicePage({
  params,
}: PageProps) {
  const resolvedParams = await params;
  const data = getPageData(resolvedParams);

  if (!data) return notFound();

  const { cityData, districtName, serviceData, official, title: seoTitle } = data;

  const location = data.full;
  const searchLocation = data.search;
  const local = localParagraphs(resolvedParams.city, resolvedParams.district, districtName);

  const faqs = data.copy.faqs;

  const currentUrl =
    `${SITE}/area/${resolvedParams.city}/` +
    `${resolvedParams.district}/${resolvedParams.service}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: seoTitle,
    serviceType: serviceData.name,
    description:
      `${searchLocation} 샷시교체·설치. ` +
      serviceData.description,
    provider: { "@id": `${SITE}/#business` },
    areaServed: {
      "@type": "AdministrativeArea",
      name: official,
    },
    url: currentUrl,
    image: `${SITE}${serviceData.hero}`,
  };

  const otherServices = Object.entries(services).filter(
    ([key]) => key !== resolvedParams.service
  );

  const districtLinks = nearSlice(
    Object.entries(cityData.districts).filter(([key]) => key !== resolvedParams.district),
    Object.keys(cityData.districts).indexOf(resolvedParams.district),
    6
  );

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd([
          businessSchema([official]),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: COMPANY, path: "/" },
            { name: "시공지역", path: "/area" },
            { name: `${cityData.name} 샷시`, path: `/area/${resolvedParams.city}` },
            {
              name: `${searchLocation} 샷시 교체`,
              path: areaUrl(resolvedParams.city, resolvedParams.district),
            },
            {
              name: `${searchLocation} ${serviceData.keyword}`,
              path: serviceUrl(
                resolvedParams.city,
                resolvedParams.district,
                resolvedParams.service
              ),
            },
          ]),
        ])}
      />

      <main>
        {/* 상단 대표 사진 */}
        <section
          style={{
            position: "relative",
            minHeight: 500,
            display: "flex",
            alignItems: "center",
            color: "#fff",
            overflow: "hidden",
          }}
        >
          <Image
            src={serviceData.hero}
            alt={`${searchLocation} 샷시교체·설치 참고 이미지`}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
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
              CHANGHO MINJOK / LOCAL SERVICE
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
              {official}
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

        {/* 지역별 서비스 소개 */}
        <section className="section">
          <div className="container">
            <span className="eyebrow">
              WINDOW REPLACEMENT
            </span>

            <h2 className="section-title">
              {searchLocation} {serviceData.shortName}
              <br />
              {data.copy.introTitle}
            </h2>

            {data.copy.intro.map((text) => (
              <p className="section-desc" key={text}>
                {text}
              </p>
            ))}

            <div className="features-grid">
              {serviceData.items.map((item, index) => (
                <article className="feature" key={item.title}>
                  <span className="feature-number">
                    0{index + 1}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 카테고리별 사진 갤러리 */}
        <section className="section section-light">
          <div className="container">
            <span className="eyebrow">
              WINDOW GALLERY
            </span>

            <h2 className="section-title">
              {serviceData.shortName}
              <br />
              {data.copy.galleryTitle}
            </h2>

            <p className="section-desc">
              창호 교체 및 설치 형태를
              확인할 수 있는 참고 사진입니다.
              해당 지역에서 촬영한 시공 사례를
              의미하지는 않습니다.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(min(100%, 290px), 1fr))",
                gap: 18,
                marginTop: 35,
              }}
            >
              {serviceData.gallery.map((photo) => (
                <figure
                  key={photo.src}
                  style={{ margin: 0 }}
                >
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "4 / 3",
                      overflow: "hidden",
                      background: "#e8edf0",
                    }}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  <figcaption
                    style={{
                      marginTop: 12,
                      fontSize: 14,
                      fontWeight: 600,
                    }}
                  >
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* 아파트 시공 전후 비교 */}
        {resolvedParams.service === "apartment" && (
          <section className="section">
            <div className="container">
              <span className="eyebrow">
                BEFORE & AFTER
              </span>

              <h2 className="section-title">
                아파트 샷시
                <br />
                시공 전후 비교
              </h2>

              <p className="section-desc">
                창호 교체 전후 모습을
                사진으로 비교해 보세요.
                해당 지역의 시공 실적을
                의미하지는 않습니다.
              </p>

              <div
                style={{
                  display: "grid",
                  gap: 42,
                  marginTop: 35,
                }}
              >
                {beforeAfter.map((project) => (
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
                        <figure
                          key={photo.label}
                          style={{ margin: 0 }}
                        >
                          <div
                            style={{
                              position: "relative",
                              aspectRatio: "4 / 3",
                              overflow: "hidden",
                            }}
                          >
                            <Image
                              src={photo.src}
                              alt={`${project.title} ${photo.korean}`}
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

                          <figcaption
                            style={{
                              marginTop: 12,
                              fontWeight: 600,
                            }}
                          >
                            {photo.korean}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 시공 절차 */}
        <section className="section section-light">
          <div className="container">
            <span className="eyebrow">
              INSTALLATION PROCESS
            </span>

            <h2 className="section-title">
              {serviceData.shortName}
              <br />
              {data.copy.processTitle}
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
              {processSteps.map((step, index) => (
                <div
                  key={step}
                  style={{
                    padding: 24,
                    background: "#fff",
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

        {/* 지역 현장 특징 (구·군마다 다른 문단) */}
        <section className="section">
          <div className="container">
            <span className="eyebrow">LOCAL GUIDE</span>

            <h2 className="section-title">
              {location}
              <br />
              창호 현장 특징
            </h2>

            {local.map((text) => (
              <p className="section-desc" key={text}>
                {text}
              </p>
            ))}

            <h3 style={{ marginTop: 34, fontSize: 20 }}>{data.copy.tipsTitle}</h3>
            <ul style={{ marginTop: 14, paddingLeft: 20, lineHeight: 1.9, color: "#3d4954" }}>
              {data.copy.tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 자주 묻는 질문 (서비스마다 다름) */}
        <section className="section section-light">
          <div className="container">
            <span className="eyebrow">FAQ</span>

            <h2 className="section-title">
              {searchLocation} {serviceData.keyword}
              <br />
              자주 묻는 질문
            </h2>

            <div style={{ display: "grid", gap: 14, marginTop: 30 }}>
              {faqs.map((item) => (
                <details
                  key={item.q}
                  style={{
                    padding: 22,
                    border: "1px solid #dce2e6",
                    background: "#fff",
                  }}
                >
                  <summary style={{ cursor: "pointer", fontWeight: 700 }}>
                    {item.q}
                  </summary>
                  <p style={{ marginTop: 12, color: "#4b5863", lineHeight: 1.7 }}>
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 동일 지역 다른 서비스 */}
        <section className="section">
          <div className="container">
            <span className="eyebrow">
              RELATED SERVICES
            </span>

            <h2 className="section-title">
              {location}
              <br />
              {data.copy.relatedTitle}
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
                  href={`/area/${resolvedParams.city}/${resolvedParams.district}/${key}`}
                  style={{
                    padding: 24,
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
                  <span>
                    {searchLocation} {item.keyword}
                  </span>
                  <ArrowUpRight size={18} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 동일 도시 다른 지역구 */}
        <section className="section section-light">
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
                  href={`/area/${resolvedParams.city}/${key}/${resolvedParams.service}`}
                  style={{
                    padding: "12px 17px",
                    border: "1px solid #dce2e6",
                    background: "#fff",
                    fontSize: 14,
                    color: "#344450",
                    textDecoration: "none",
                  }}
                >
                  {searchName(resolvedParams.city, name)} {serviceData.keyword}
                </Link>
              ))}
            </div>

            <div style={{ marginTop: 30, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link
                href={areaUrl(resolvedParams.city, resolvedParams.district)}
                className="btn btn-dark"
              >
                <MapPin size={17} />
                {searchLocation} 샷시 교체 전체 안내
              </Link>
              <Link
                href={`/area/${resolvedParams.city}`}
                className="btn btn-dark"
              >
                <MapPin size={17} />
                {cityData.name} 전체 지역 보기
              </Link>
            </div>
          </div>
        </section>

        {/* 상담 */}
        <section className="section">
          <div
            className="container"
            style={{ textAlign: "center" }}
          >
            <span className="eyebrow">
              CONTACT & ESTIMATE
            </span>

            <h2 className="section-title">
              {searchLocation} {serviceData.shortName}
              <br />
              {data.copy.contactTitle}
            </h2>

            <p className="section-desc">{data.copy.contactText}</p>

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
                창호의민족
                <span>CHANGHO MINJOK</span>
              </div>

              <p>
                아파트 · 단독주택 · 빌라
                <br />
                샷시 교체 및 설치
              </p>
            </div>

            <div>
              <p>대표 김수형 · 견적 및 시공 상담</p>
              <a href={TEL}>{PHONE}</a>
            </div>
          </div>

          <div className="footer-bottom">
            © {new Date().getFullYear()} CHANGHO MINJOK.
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
