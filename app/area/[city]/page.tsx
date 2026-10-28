
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Phone,
} from "lucide-react";

const SITE = "https://geujipwindow.com";
const PHONE = "010-8176-3350";
const TEL = "tel:01081763350";

const cities = {
  busan: {
    name: "부산",
    fullName: "부산광역시",
    description:
      "부산 아파트·단독주택·빌라 샷시 교체 및 창호 설치 안내",
    image: "/IMG_1939.jpeg",
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
    description:
      "울산 아파트·단독주택·빌라 샷시 교체 및 창호 설치 안내",
    image: "/IMG_1944.jpeg",
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
    description:
      "창원 아파트·단독주택·빌라 샷시 교체 및 창호 설치 안내",
    image: "/IMG_1943.jpeg",
    districts: {
      uichang: "의창구",
      seongsan: "성산구",
      masanhappo: "마산합포구",
      masanhoewon: "마산회원구",
      jinhae: "진해구",
    },
  },
} as const;

const services = [
  {
    key: "apartment",
    title: "아파트 샷시 교체·설치",
    description:
      "베란다, 거실창, 방창 등 아파트 노후 창호 교체 안내",
    image: "/IMG_1939.jpeg",
  },
  {
    key: "house",
    title: "단독주택 샷시 교체·설치",
    description:
      "단독주택과 전원주택의 창호 교체 및 설치 안내",
    image: "/IMG_1944.jpeg",
  },
  {
    key: "villa",
    title: "빌라 샷시 교체·설치",
    description:
      "빌라와 다세대주택의 노후 창호 교체 안내",
    image: "/IMG_1943.jpeg",
  },
] as const;

type CityKey = keyof typeof cities;

type PageProps = {
  params: {
    city: string;
  };
};

function getCity(city: string) {
  if (!(city in cities)) return null;
  return cities[city as CityKey];
}

export function generateStaticParams() {
  return Object.keys(cities).map((city) => ({
    city,
  }));
}

export function generateMetadata({
  params,
}: PageProps): Metadata {
  const city = getCity(params.city);

  if (!city) {
    return {
      title: "지역을 찾을 수 없습니다",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const url = `${SITE}/area/${params.city}`;

  const description =
    `${city.name} 샷시 교체·설치 안내. ` +
    `아파트 베란다 샷시, 단독주택 창호, ` +
    `빌라 창문 교체 정보를 확인하세요. ` +
    `그집창호 상담 ${PHONE}.`;

  return {
    title: `${city.name} 샷시 교체·설치 | 지역별 창호 안내`,
    description,
    keywords: [
      `${city.name} 샷시`,
      `${city.name} 샷시교체`,
      `${city.name} 창호교체`,
      `${city.name} 아파트 샷시`,
      `${city.name} 단독주택 샷시`,
      `${city.name} 빌라 샷시`,
      "그집창호",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      siteName: "그집창호",
      title: `${city.name} 샷시 교체·설치 | 그집창호`,
      description,
      url,
      images: [
        {
          url: city.image,
          alt: `${city.name} 샷시 교체 참고 사진`,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function CityPage({
  params,
}: PageProps) {
  const city = getCity(params.city);

  if (!city) notFound();

  const districts = Object.entries(city.districts);

  return (
    <main>
      {/* 지역 대표 이미지 */}
      <section
        style={{
          position: "relative",
          minHeight: 520,
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          color: "#fff",
        }}
      >
        <Image
          src={city.image}
          alt={`${city.name} 샷시 교체 및 창호 설치 참고 사진`}
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
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
            GEUJIP WINDOW / SERVICE AREA
          </p>

          <h1
            style={{
              fontSize: "clamp(34px, 6vw, 64px)",
              lineHeight: 1.25,
              fontWeight: 800,
              margin: "24px 0",
            }}
          >
            {city.name} 샷시 교체
            <br />
            창호 설치 안내
          </h1>

          <p
            style={{
              color: "#e4e9ed",
              fontSize: 17,
              lineHeight: 1.9,
              maxWidth: 650,
            }}
          >
            아파트 · 단독주택 · 빌라
            <br />
            창호 교체 및 설치 상담
          </p>

          <a
            href={TEL}
            className="btn btn-white"
            style={{ marginTop: 28 }}
          >
            <Phone size={17} />
            전화 상담 문의
          </a>
        </div>
      </section>

      {/* 지역 소개 */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">
            ABOUT SERVICE AREA
          </span>

          <h2 className="section-title">
            {city.name} 창호 교체
            <br />
            그집창호에서 상담하세요.
          </h2>

          <p className="section-desc">
            {city.fullName} 지역의 아파트,
            단독주택, 빌라 샷시 교체 및
            창호 설치 관련 정보를 안내합니다.
          </p>

          <p className="section-desc">
            창호 교체는 건물 구조, 창틀 상태,
            설치 위치와 자재 사양에 따라
            시공 방법과 견적이 달라질 수 있습니다.
            실제 출장 가능 여부와 일정은
            상담 시 확인해 주세요.
          </p>
        </div>
      </section>

      {/* 서비스별 이미지 카드 */}
      <section className="section section-light">
        <div className="container">
          <span className="eyebrow">
            WINDOW SERVICES
          </span>

          <h2 className="section-title">
            {city.name} 샷시 교체
            <br />
            서비스 종류
          </h2>

          <p className="section-desc">
            건물 유형에 맞는 창호 교체 및
            설치 서비스를 확인하세요.
          </p>

          <div className="services-grid">
            {services.map((service) => (
              <article
                key={service.key}
                className="service-card"
              >
                <div
                  style={{
                    position: "relative",
                    height: 260,
                    overflow: "hidden",
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

                <div className="service-body">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <Link
                    href={`/services/${service.key}`}
                    className="service-link"
                  >
                    서비스 자세히 보기 →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 구·군별 사진 카드 */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">
            DISTRICT SERVICES
          </span>

          <h2 className="section-title">
            {city.name}
            <br />
            구·군별 샷시 교체 안내
          </h2>

          <p className="section-desc">
            해당 지역을 선택하면
            아파트·단독주택·빌라 샷시 교체
            상세 페이지로 이동할 수 있습니다.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
              gap: 18,
              marginTop: 35,
            }}
          >
            {districts.map(([slug, name], index) => {
              const image =
                services[index % services.length].image;

              return (
                <article
                  key={slug}
                  style={{
                    border: "1px solid #e0e5e9",
                    background: "#fff",
                    overflow: "hidden",
                  }}
                >
                  <Link
                    href={`/area/${params.city}/${slug}/apartment`}
                    aria-label={`${city.name} ${name} 아파트 샷시 교체 안내`}
                  >
                    <div
                      style={{
                        position: "relative",
                        height: 190,
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={image}
                        alt={`${city.name} ${name} 창호 참고 이미지`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </Link>

                  <div style={{ padding: 22 }}>
                    <p
                      style={{
                        fontSize: 12,
                        letterSpacing: 1.5,
                        color: "#6b7c89",
                        fontWeight: 700,
                      }}
                    >
                      {city.name.toUpperCase()} AREA
                    </p>

                    <h3
                      style={{
                        fontSize: 22,
                        margin: "10px 0 16px",
                      }}
                    >
                      {name} 샷시 교체
                    </h3>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 11,
                      }}
                    >
                      {services.map((service) => (
                        <Link
                          key={service.key}
                          href={`/area/${params.city}/${slug}/${service.key}`}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: 10,
                            color: "#344450",
                            fontSize: 14,
                            textDecoration: "none",
                          }}
                        >
                          {service.title}
                          <ArrowUpRight size={16} />
                        </Link>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 다른 도시 */}
      <section className="section section-light">
        <div className="container">
          <span className="eyebrow">
            OTHER SERVICE AREAS
          </span>

          <h2 className="section-title">
            다른 지역 안내
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginTop: 25,
            }}
          >
            {Object.entries(cities)
              .filter(([key]) => key !== params.city)
              .map(([key, item]) => (
                <Link
                  key={key}
                  href={`/area/${key}`}
                  className="btn btn-dark"
                >
                  {item.name} 샷시 교체
                  <ArrowRight size={16} />
                </Link>
              ))}
          </div>

          <div style={{ marginTop: 25 }}>
            <Link href="/area">
              <MapPin
                size={16}
                style={{ display: "inline-block" }}
              />{" "}
              전체 지역 보기
            </Link>
          </div>
        </div>
      </section>

      {/* 전화 상담 */}
      <section className="section">
        <div
          className="container"
          style={{ textAlign: "center" }}
        >
          <span className="eyebrow">
            CONTACT US
          </span>

          <h2 className="section-title">
            {city.name} 샷시 교체
            <br />
            견적 상담 문의
          </h2>

          <p className="section-desc">
            건물 유형, 창호 크기와 교체 범위를
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
        </div>
      </section>
    </main>
  );
}
