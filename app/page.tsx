
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE = "https://geujipwindow.com";
const PHONE = "010-8176-3350";

const DESCRIPTION =
  "부산·울산·창원 샷시 교체 전문 그집창호. 아파트·단독주택·빌라 창호 설치, 현장 실측 및 견적 상담 안내.";

export const metadata: Metadata = {
  title: {
    absolute: "그집창호 | 부산·울산·창원 샷시 교체",
  },
  description: DESCRIPTION,
  alternates: {
    canonical: SITE,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "그집창호",
    title: "그집창호 | 부산·울산·창원 샷시 교체",
    description: DESCRIPTION,
    url: SITE,
    images: [
      {
        url: `${SITE}/IMG_1944.jpeg`,
        width: 1200,
        height: 630,
        alt: "그집창호 샷시 교체 및 창호 설치",
      },
    ],
  },
};

const services = [
  {
    title: "아파트 샷시 교체",
    description:
      "아파트 베란다, 거실창, 방창 등 주거공간에 맞는 샷시 교체 및 설치를 안내합니다.",
    image: "/IMG_1939.jpeg",
    href: "/services/apartment",
  },
  {
    title: "단독주택 샷시 교체",
    description:
      "단독주택의 창호 상태와 설치 환경을 고려하여 교체 상담을 진행합니다.",
    image: "/IMG_1944.jpeg",
    href: "/services/house",
  },
  {
    title: "빌라 샷시 교체",
    description:
      "빌라와 다세대주택의 창문, 베란다 샷시 교체 및 설치를 안내합니다.",
    image: "/IMG_1943.jpeg",
    href: "/services/villa",
  },
];

const regions = [
  {
    name: "부산",
    description: "해운대구·수영구·남구 등 16개 구·군",
    image: "/IMG_1939.jpeg",
    href: "/area/busan",
  },
  {
    name: "울산",
    description: "남구·중구·동구·북구·울주군",
    image: "/IMG_1944.jpeg",
    href: "/area/ulsan",
  },
  {
    name: "창원",
    description: "의창구·성산구·마산합포구·마산회원구·진해구",
    image: "/IMG_1943.jpeg",
    href: "/area/changwon",
  },
];

const beforeAfter = [
  {
    title: "아파트 베란다 샷시",
    before: "/IMG_1938.jpeg",
    after: "/IMG_1939.jpeg",
  },
  {
    title: "아파트 거실 창호",
    before: "/IMG_1942.jpeg",
    after: "/IMG_1941.jpeg",
  },
];

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "그집창호",
    url: SITE,
    telephone: PHONE,
    description: DESCRIPTION,
    areaServed: [
      { "@type": "AdministrativeArea", name: "부산광역시" },
      { "@type": "AdministrativeArea", name: "울산광역시" },
      { "@type": "AdministrativeArea", name: "창원시" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "창호 교체 및 설치 서비스",
      itemListElement: services.map((service) => ({
        "@type": "OfferCatalog",
        name: service.title,
        url: `${SITE}${service.href}`,
      })),
    },
  };

  return (
    <main>
      <section
        style={{
          position: "relative",
          minHeight: "560px",
          display: "flex",
          alignItems: "center",
          background: "#151515",
          color: "#fff",
          overflow: "hidden",
        }}
      >
        <Image
          src="/IMG_1944.jpeg"
          alt="그집창호 창호 시공 참고 이미지"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            opacity: 0.35,
          }}
        />

        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 1,
            paddingTop: "100px",
            paddingBottom: "100px",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              letterSpacing: "0.18em",
              marginBottom: "24px",
              color: "#ddd",
            }}
          >
            GEUJIP WINDOW
          </p>

          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 68px)",
              lineHeight: 1.25,
              letterSpacing: "-0.05em",
              fontWeight: 700,
              marginBottom: "24px",
            }}
          >
            공간을 바꾸는 창,
            <br />
            그집창호
          </h1>

          <p
            style={{
              maxWidth: "600px",
              fontSize: "clamp(15px, 2vw, 19px)",
              lineHeight: 1.9,
              color: "#e5e5e5",
              marginBottom: "36px",
            }}
          >
            부산·울산·창원 샷시 교체 및 창호 설치
            <br />
            아파트 · 단독주택 · 빌라
            <br />
            현장 실측 및 견적 상담
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <a
              href={`tel:${PHONE}`}
              style={{
                display: "inline-block",
                padding: "16px 25px",
                background: "#fff",
                color: "#111",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              전화 상담하기
            </a>

            <Link
              href="/area"
              style={{
                display: "inline-block",
                padding: "15px 25px",
                border: "1px solid #aaa",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              시공지역 확인
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">ABOUT GEUJIP WINDOW</p>

          <h2 className="section-title">
            창호 교체,
            <br />
            공간에 맞게 안내합니다.
          </h2>

          <p
            className="section-desc"
            style={{
              maxWidth: "760px",
              lineHeight: 2,
            }}
          >
            그집창호는 부산·울산·창원 지역의 아파트,
            단독주택, 빌라 샷시 교체 및 설치 상담을
            안내합니다. 창문의 크기와 현장 상태,
            설치 환경을 확인하여 필요한 시공 내용을
            상담합니다.
          </p>
        </div>
      </section>

      <section
        className="section section-light"
        style={{ background: "#f7f7f7" }}
      >
        <div className="container">
          <p className="eyebrow">OUR SERVICES</p>

          <h2 className="section-title">
            창호 교체 서비스
          </h2>

          <p className="section-desc">
            건물 유형에 맞는 샷시 교체 서비스를 확인하세요.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
              marginTop: "40px",
            }}
          >
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                style={{
                  display: "block",
                  background: "#fff",
                  color: "#171717",
                  textDecoration: "none",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "4 / 3",
                  }}
                >
                  <Image
                    src={service.image}
                    alt={`${service.title} 참고 이미지`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div style={{ padding: "25px" }}>
                  <h3
                    style={{
                      fontSize: "22px",
                      marginBottom: "12px",
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.9,
                      color: "#666",
                      marginBottom: "20px",
                    }}
                  >
                    {service.description}
                  </p>

                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                    }}
                  >
                    자세히 보기 →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">BEFORE & AFTER</p>

          <h2 className="section-title">
            샷시 시공 전후 사진
          </h2>

          <p className="section-desc">
            창호 교체 전후의 모습을 사진으로 확인하세요.
          </p>

          <div
            style={{
              display: "grid",
              gap: "44px",
              marginTop: "40px",
            }}
          >
            {beforeAfter.map((item) => (
              <div key={item.title}>
                <h3
                  style={{
                    fontSize: "21px",
                    marginBottom: "20px",
                  }}
                >
                  {item.title}
                </h3>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(2, minmax(0, 1fr))",
                    gap: "12px",
                  }}
                >
                  <div>
                    <div
                      style={{
                        position: "relative",
                        aspectRatio: "4 / 3",
                      }}
                    >
                      <Image
                        src={item.before}
                        alt={`${item.title} 시공 전`}
                        fill
                        sizes="50vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>

                    <p
                      style={{
                        marginTop: "12px",
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "#777",
                      }}
                    >
                      BEFORE · 시공 전
                    </p>
                  </div>

                  <div>
                    <div
                      style={{
                        position: "relative",
                        aspectRatio: "4 / 3",
                      }}
                    >
                      <Image
                        src={item.after}
                        alt={`${item.title} 시공 후`}
                        fill
                        sizes="50vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>

                    <p
                      style={{
                        marginTop: "12px",
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "#171717",
                      }}
                    >
                      AFTER · 시공 후
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "36px" }}>
            <Link className="btn btn-dark" href="/process">
              샷시 시공과정 확인
            </Link>
          </div>
        </div>
      </section>

      <section
        className="section section-light"
        style={{ background: "#f7f7f7" }}
      >
        <div className="container">
          <p className="eyebrow">SERVICE AREA</p>

          <h2 className="section-title">
            부산 · 울산 · 창원
          </h2>

          <p className="section-desc">
            지역을 선택하면 구·군별 샷시 교체 안내를
            확인할 수 있습니다.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
              marginTop: "40px",
            }}
          >
            {regions.map((region) => (
              <Link
                key={region.href}
                href={region.href}
                style={{
                  display: "block",
                  background: "#fff",
                  color: "#171717",
                  textDecoration: "none",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "16 / 10",
                  }}
                >
                  <Image
                    src={region.image}
                    alt={`${region.name} 창호 설치 안내 이미지`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div style={{ padding: "24px" }}>
                  <h3
                    style={{
                      fontSize: "24px",
                      marginBottom: "10px",
                    }}
                  >
                    {region.name}
                  </h3>

                  <p
                    style={{
                      fontSize: "14px",
                      color: "#666",
                      lineHeight: 1.8,
                    }}
                  >
                    {region.description}
                  </p>

                  <p
                    style={{
                      marginTop: "18px",
                      fontSize: "14px",
                      fontWeight: 700,
                    }}
                  >
                    지역별 페이지 보기 →
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: "32px" }}>
            <Link className="btn btn-dark" href="/area">
              전체 시공지역 보기
            </Link>
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{
          background: "#191919",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <div className="container">
          <p
            className="eyebrow"
            style={{ color: "#bbb" }}
          >
            CONTACT US
          </p>

          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 44px)",
              lineHeight: 1.4,
              marginBottom: "20px",
            }}
          >
            샷시 교체 상담이 필요하신가요?
          </h2>

          <p
            style={{
              color: "#ccc",
              lineHeight: 1.9,
              marginBottom: "30px",
            }}
          >
            부산·울산·창원 창호 교체 및 설치 문의
          </p>

          <a
            href={`tel:${PHONE}`}
            style={{
              display: "inline-block",
              padding: "18px 32px",
              background: "#fff",
              color: "#111",
              fontSize: "19px",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            {PHONE}
          </a>
        </div>
      </section>

      <footer
        style={{
          padding: "35px 20px",
          textAlign: "center",
          background: "#111",
          color: "#aaa",
          fontSize: "12px",
          lineHeight: 2,
        }}
      >
        <p>그집창호 · GEUJIP WINDOW</p>
        <p>부산 · 울산 · 창원 샷시 교체 및 창호 설치</p>
        <p>상담전화 {PHONE}</p>
        <p>© {new Date().getFullYear()} GEUJIP WINDOW.</p>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />
    </main>
  );
}
