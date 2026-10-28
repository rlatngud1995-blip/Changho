
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  CheckCircle2,
} from "lucide-react";

const SITE = "https://geujipwindow.com";
const PHONE = "010-8176-3350";
const TEL = "tel:01081763350";

export const metadata: Metadata = {
  title: "부산·울산·창원 샷시 교체·설치 전문",
  description:
    "부산·울산·창원 샷시 교체 및 설치 상담 그집창호. 아파트 베란다 샷시, 거실창, 단독주택 창호, 빌라 샷시 교체 안내. 아파트 창호 시공 전후 사진과 시공과정을 확인하세요. 상담 010-8176-3350",
  keywords: [
    "그집창호",
    "부산 샷시",
    "울산 샷시",
    "창원 샷시",
    "부산 샷시교체",
    "울산 샷시교체",
    "창원 샷시교체",
    "아파트 샷시교체",
    "단독주택 샷시교체",
    "빌라 샷시교체",
    "베란다 샷시",
    "창호 교체",
    "창호 설치",
  ],
  alternates: {
    canonical: SITE,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "그집창호",
    title: "그집창호 | 부산·울산·창원 샷시 교체·설치",
    description:
      "아파트·단독주택·빌라 샷시 교체 및 설치 안내. 시공 전후 사진과 지역별 창호 교체 정보를 확인하세요.",
    url: SITE,
    images: [
      {
        url: "/IMG_1944.jpeg",
        width: 1200,
        height: 630,
        alt: "그집창호 창호 설치 사진",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const services = [
  {
    number: "01",
    title: "아파트 샷시 교체·설치",
    description:
      "아파트 베란다, 거실창, 방창 등 노후 창호의 교체와 설치를 안내합니다.",
    image: "/IMG_1939.jpeg",
    href: "/services/apartment",
  },
  {
    number: "02",
    title: "단독주택 샷시 교체·설치",
    description:
      "주택 구조와 외부 환경, 단열 조건을 고려한 창호 시공을 안내합니다.",
    image: "/IMG_1944.jpeg",
    href: "/services/house",
  },
  {
    number: "03",
    title: "빌라 샷시 교체·설치",
    description:
      "빌라와 다세대주택의 노후 창호 교체 및 부분 시공을 안내합니다.",
    image: "/IMG_1943.jpeg",
    href: "/services/villa",
  },
];

const projects = [
  {
    title: "아파트 베란다 샷시 교체",
    description:
      "기존 창호와 새 창호 설치 후 모습을 비교한 사진입니다.",
    before: "/IMG_1938.jpeg",
    after: "/IMG_1939.jpeg",
  },
  {
    title: "아파트 거실 창호 교체",
    description:
      "노후 창호와 교체 후 창호의 차이를 확인할 수 있습니다.",
    before: "/IMG_1942.jpeg",
    after: "/IMG_1941.jpeg",
  },
];

const regions = [
  { name: "부산 샷시 교체", href: "/area/busan" },
  { name: "울산 샷시 교체", href: "/area/ulsan" },
  { name: "창원 샷시 교체", href: "/area/changwon" },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "그집창호",
  url: SITE,
  telephone: PHONE,
  description:
    "아파트·단독주택·빌라 샷시 교체 및 창호 설치 상담",
  areaServed: [
    { "@type": "Place", name: "부산광역시" },
    { "@type": "Place", name: "울산광역시" },
    { "@type": "Place", name: "경상남도 창원시" },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <main>
        {/* 메인 대표 이미지 */}
        <section
          style={{
            position: "relative",
            minHeight: "min(760px, 85svh)",
            display: "flex",
            alignItems: "center",
            color: "#fff",
            overflow: "hidden",
          }}
        >
          <Image
            src="/IMG_1944.jpeg"
            alt="그집창호 샷시 교체 및 창호 설치 참고 사진"
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
                "linear-gradient(90deg, rgba(8,16,24,.85), rgba(8,16,24,.25))",
            }}
          />

          <div
            className="container"
            style={{
              position: "relative",
              zIndex: 1,
              paddingTop: 120,
              paddingBottom: 90,
            }}
          >
            <p className="hero-kicker">
              GEUJIP WINDOW / WINDOW SOLUTIONS
            </p>

            <h1
              style={{
                fontSize: "clamp(40px, 7vw, 76px)",
                letterSpacing: "-2px",
                lineHeight: 1.22,
                margin: "25px 0",
                fontWeight: 800,
              }}
            >
              좋은 창이
              <br />
              좋은 공간을 만듭니다.
            </h1>

            <p
              style={{
                maxWidth: 620,
                color: "#e4e9ed",
                fontSize: "clamp(15px, 2vw, 18px)",
                lineHeight: 1.9,
              }}
            >
              부산 · 울산 · 창원 창호 시공 안내
              <br />
              아파트 · 단독주택 · 빌라 샷시 교체
              <br />
              창호 설치부터 마감까지 상담하세요.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                marginTop: 32,
              }}
            >
              <a href={TEL} className="btn btn-white">
                전화 상담 문의
                <ArrowUpRight size={17} />
              </a>

              <a
                href="#before-after"
                className="btn btn-outline"
              >
                시공 전후 보기
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* 업체 소개 */}
        <section className="section">
          <div
            className="container"
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
              gap: 45,
              alignItems: "center",
            }}
          >
            <div>
              <span className="eyebrow">
                ABOUT GEUJIP WINDOW
              </span>

              <h2 className="section-title">
                창호를 바꾸고
                <br />
                공간의 가치를 높이다.
              </h2>

              <p className="section-desc">
                창호는 채광과 환기뿐 아니라
                단열, 기밀, 방음과도 밀접한
                관계가 있습니다.
              </p>

              <p className="section-desc">
                그집창호는 기존 창호 상태와
                건물 구조를 확인하고
                현장에 적합한 교체 및 설치
                방법을 안내합니다.
              </p>

              <div style={{ marginTop: 25 }}>
                {[
                  "현장 조건에 맞춘 창호 상담",
                  "실측 및 시공 범위 확인",
                  "설치 후 개폐와 마감 점검",
                ].map((item) => (
                  <p
                    key={item}
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "center",
                      marginBottom: 13,
                      fontSize: 14,
                    }}
                  >
                    <CheckCircle2
                      size={17}
                      color="#6b7c89"
                    />
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div
              style={{
                position: "relative",
                height: 430,
                overflow: "hidden",
              }}
            >
              <Image
                src="/IMG_1943.jpeg"
                alt="샷시 교체 및 창호 설치 참고 이미지"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </section>

        {/* 서비스 카테고리 */}
        <section
          id="services"
          className="section section-light"
        >
          <div className="container">
            <span className="eyebrow">
              OUR SERVICES
            </span>

            <h2 className="section-title">
              전문 창호 시공 서비스
            </h2>

            <p className="section-desc">
              아파트, 단독주택, 빌라 등
              건물 유형에 맞는 샷시 교체 및
              설치 서비스를 확인하세요.
            </p>

            <div className="services-grid">
              {services.map((service) => (
                <article
                  className="service-card"
                  key={service.href}
                >
                  <Link
                    href={service.href}
                    aria-label={`${service.title} 자세히 보기`}
                  >
                    <div
                      style={{
                        position: "relative",
                        height: 270,
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={service.image}
                        alt={`${service.title} 창호 참고 사진`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Link>

                  <div className="service-body">
                    <span className="service-number">
                      SERVICE {service.number}
                    </span>

                    <h3>{service.title}</h3>
                    <p>{service.description}</p>

                    <Link
                      href={service.href}
                      className="service-link"
                    >
                      자세히 보기 →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 시공 전후 사진 */}
        <section
          id="before-after"
          className="section"
        >
          <div className="container">
            <span className="eyebrow">
              BEFORE & AFTER
            </span>

            <h2 className="section-title">
              사진으로 보는
              <br />
              샷시 교체 전후
            </h2>

            <p className="section-desc">
              아파트 베란다와 거실 창호의
              교체 전후 모습을 확인하세요.
            </p>

            <div
              style={{
                display: "grid",
                gap: 42,
                marginTop: 40,
              }}
            >
              {projects.map((project, index) => (
                <article key={project.title}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      gap: 15,
                      flexWrap: "wrap",
                      marginBottom: 20,
                    }}
                  >
                    <div>
                      <span className="eyebrow">
                        PROJECT 0{index + 1}
                      </span>

                      <h3
                        style={{
                          fontSize: 23,
                          margin: "8px 0",
                        }}
                      >
                        {project.title}
                      </h3>

                      <p className="section-desc">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(min(100%, 290px), 1fr))",
                      gap: 14,
                    }}
                  >
                    {[
                      {
                        label: "BEFORE",
                        korean: "시공 전",
                        src: project.before,
                      },
                      {
                        label: "AFTER",
                        korean: "시공 후",
                        src: project.after,
                      },
                    ].map((photo) => (
                      <div key={photo.label}>
                        <div
                          style={{
                            position: "relative",
                            aspectRatio: "4 / 3",
                            overflow: "hidden",
                            background: "#e9edf0",
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
                              top: 16,
                              left: 16,
                              padding: "9px 14px",
                              background:
                                photo.label === "AFTER"
                                  ? "#fff"
                                  : "#17222b",
                              color:
                                photo.label === "AFTER"
                                  ? "#17222b"
                                  : "#fff",
                              fontSize: 12,
                              fontWeight: 800,
                              letterSpacing: 1,
                            }}
                          >
                            {photo.label}
                          </span>
                        </div>

                        <p
                          style={{
                            marginTop: 12,
                            fontSize: 14,
                            fontWeight: 600,
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

            <div
              style={{
                textAlign: "center",
                marginTop: 35,
              }}
            >
              <Link
                href="/services/apartment"
                className="btn btn-dark"
              >
                아파트 샷시 자세히 보기
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* 지역별 내부 링크 */}
        <section className="section section-light">
          <div className="container">
            <span className="eyebrow">
              SERVICE AREAS
            </span>

            <h2 className="section-title">
              부산·울산·창원
              <br />
              지역별 샷시 안내
            </h2>

            <p className="section-desc">
              지역별 아파트·단독주택·빌라
              샷시 교체 및 설치 정보를
              확인할 수 있습니다.
              실제 출장 가능 여부는 상담 시 확인해 주세요.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
                gap: 15,
                marginTop: 30,
              }}
            >
              {regions.map((region) => (
                <Link
                  key={region.href}
                  href={region.href}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "25px 22px",
                    background: "#fff",
                    border: "1px solid #e0e5e9",
                    fontWeight: 700,
                    color: "#202a33",
                    textDecoration: "none",
                  }}
                >
                  {region.name}
                  <ArrowUpRight size={19} />
                </Link>
              ))}
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
              CONTACT US
            </span>

            <h2 className="section-title">
              샷시 교체를 계획하고 계신가요?
            </h2>

            <p className="section-desc">
              건물 유형과 창호 교체 범위를
              알려주시면 상담을 도와드립니다.
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
                전체 시공지역 안내 →
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
