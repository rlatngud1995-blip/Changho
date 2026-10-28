
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
} from "lucide-react";

const SITE = "https://geujipwindow.com";
const PHONE = "010-8176-3350";
const TEL = "tel:01081763350";

const services = {
  apartment: {
    title: "아파트 샷시 교체·설치",
    keyword: "아파트 샷시 교체",
    description:
      "아파트 베란다 샷시, 거실창, 방창, 이중창 교체 및 설치 상담. 실제 창호 교체 전후 사진과 시공과정을 확인하세요.",
    image: "/IMG_1939.jpeg",
    images: [
      {
        before: "/IMG_1938.jpeg",
        after: "/IMG_1939.jpeg",
        title: "아파트 베란다 샷시 교체",
      },
      {
        before: "/IMG_1942.jpeg",
        after: "/IMG_1941.jpeg",
        title: "아파트 거실 창호 교체",
      },
    ],
    items: [
      "아파트 전체 샷시 교체",
      "베란다 샷시 교체",
      "거실창 교체",
      "방창 및 이중창 교체",
    ],
  },

  house: {
    title: "단독주택 샷시 교체·설치",
    keyword: "단독주택 샷시 교체",
    description:
      "단독주택 및 전원주택 샷시 교체와 창호 설치 상담. 주택 구조, 단열, 기밀 및 외부 환경을 고려한 창호 시공 안내.",
    image: "/IMG_1944.jpeg",
    images: [],
    items: [
      "단독주택 전체 창호 교체",
      "전원주택 샷시 설치",
      "노후주택 창호 교체",
      "거실창 및 방창 교체",
    ],
  },

  villa: {
    title: "빌라 샷시 교체·설치",
    keyword: "빌라 샷시 교체",
    description:
      "빌라 및 다세대주택 샷시 교체·설치 상담. 노후 창호, 베란다 샷시, 거실창 및 부분 창호 교체 안내.",
    image: "/IMG_1943.jpeg",
    images: [],
    items: [
      "빌라 전체 샷시 교체",
      "다세대주택 창호 교체",
      "베란다 창호 교체",
      "노후 샷시 부분 교체",
    ],
  },
} as const;

type ServiceKey = keyof typeof services;

function getService(type: string) {
  if (!(type in services)) return null;
  return services[type as ServiceKey];
}

export function generateStaticParams() {
  return Object.keys(services).map((type) => ({
    type,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { type: string };
}): Metadata {
  const service = getService(params.type);

  if (!service) {
    return {
      title: "페이지를 찾을 수 없습니다",
      robots: { index: false },
    };
  }

  const url = `${SITE}/services/${params.type}`;

  return {
    title: service.title,
    description: service.description,
    keywords: [
      service.keyword,
      service.title,
      "샷시 설치",
      "창호 교체",
      "그집창호",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      title: `${service.title} | 그집창호`,
      description: service.description,
      url,
      images: [
        {
          url: service.image,
          alt: service.title,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const steps = [
  "시공 상담",
  "현장 상태 확인",
  "정밀 실측",
  "창호 사양 검토",
  "견적 안내",
  "시공 준비",
  "철거 및 설치",
  "최종 점검",
];

export default function ServicePage({
  params,
}: {
  params: { type: string };
}) {
  const service = getService(params.type);

  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    serviceType: service.title,
    provider: {
      "@type": "Organization",
      name: "그집창호",
      url: SITE,
      telephone: PHONE,
    },
    url: `${SITE}/services/${params.type}`,
    image: `${SITE}${service.image}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <main>
        <section
          style={{
            position: "relative",
            minHeight: 520,
            display: "flex",
            alignItems: "center",
            color: "#fff",
            overflow: "hidden",
          }}
        >
          <Image
            src={service.image}
            alt={`${service.title} 안내 사진`}
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
                "linear-gradient(90deg, rgba(9,16,24,.88), rgba(9,16,24,.3))",
            }}
          />

          <div
            className="container"
            style={{
              position: "relative",
              zIndex: 1,
              paddingTop: 155,
              paddingBottom: 95,
            }}
          >
            <span className="hero-kicker">
              GEUJIP WINDOW / SERVICE
            </span>

            <h1
              style={{
                fontSize: "clamp(36px, 5vw, 60px)",
                lineHeight: 1.25,
                margin: "25px 0",
              }}
            >
              {service.title}
            </h1>

            <p
              style={{
                maxWidth: 650,
                lineHeight: 1.9,
                color: "#e2e7eb",
              }}
            >
              {service.description}
            </p>

            <a
              href={TEL}
              className="btn btn-white"
              style={{ marginTop: 25 }}
            >
              견적 상담하기
              <ArrowRight size={17} />
            </a>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <span className="eyebrow">
              SERVICE OVERVIEW
            </span>

            <h2 className="section-title">
              {service.title}
              <br />
              시공 안내
            </h2>

            <p className="section-desc">
              기존 창호 상태와 건물 구조를 확인한 후
              시공 범위와 적합한 창호 사양을 안내합니다.
            </p>

            <div className="features-grid">
              {service.items.map((item, index) => (
                <article
                  className="feature"
                  key={item}
                >
                  <span className="feature-number">
                    0{index + 1}
                  </span>

                  <h3>{item}</h3>

                  <p>
                    현장 조건과 창호 규격을 확인해
                    교체 및 설치 방법을 상담합니다.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {params.type === "apartment" ? (
          <section className="section section-light">
            <div className="container">
              <span className="eyebrow">
                BEFORE & AFTER
              </span>

              <h2 className="section-title">
                아파트 샷시
                <br />
                시공 전후 사진
              </h2>

              <p className="section-desc">
                기존 창호와 교체 후 창호를
                비교해 보세요.
              </p>

              <div
                style={{
                  display: "grid",
                  gap: 45,
                  marginTop: 35,
                }}
              >
                {service.images.map((project) => (
                  <article key={project.title}>
                    <h3
                      style={{
                        fontSize: 23,
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
            </div>
          </section>
        ) : (
          <section className="section section-light">
            <div className="container">
              <span className="eyebrow">
                WINDOW DETAIL
              </span>

              <h2 className="section-title">
                창호 시공 참고 이미지
              </h2>

              <p className="section-desc">
                창호 설치 모습의 참고 사진입니다.
                실제 시공 형태는 건물 구조와
                현장 조건에 따라 달라집니다.
              </p>

              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 850,
                  aspectRatio: "4 / 3",
                  marginTop: 30,
                }}
              >
                <Image
                  src={service.image}
                  alt={`${service.title} 창호 참고 이미지`}
                  fill
                  sizes="(max-width: 900px) 100vw, 850px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </section>
        )}

        <section className="section">
          <div className="container">
            <span className="eyebrow">
              INSTALLATION PROCESS
            </span>

            <h2 className="section-title">
              체계적인 창호 시공과정
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(min(100%, 210px), 1fr))",
                gap: 15,
                marginTop: 35,
              }}
            >
              {steps.map((step, index) => (
                <div
                  key={step}
                  style={{
                    padding: 23,
                    border: "1px solid #e0e5e9",
                  }}
                >
                  <span
                    style={{
                      color: "#7d8e9b",
                      fontSize: 13,
                      fontWeight: 700,
                    }}
                  >
                    STEP {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3
                    style={{
                      marginTop: 13,
                      fontSize: 17,
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
              시공과정 자세히 보기
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        <section className="section section-light">
          <div
            className="container"
            style={{ textAlign: "center" }}
          >
            <span className="eyebrow">
              CONTACT & ESTIMATE
            </span>

            <h2 className="section-title">
              {service.title}
              <br />
              견적 상담
            </h2>

            <p className="section-desc">
              정확한 시공 비용은
              창호 규격, 자재 사양,
              현장 조건 확인 후 안내합니다.
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
                부산·울산·창원 지역별 안내 →
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
