
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, Phone } from "lucide-react";

const PHONE = "010-8176-3350";

const regions = {
  busan: {
    name: "부산",
    fullName: "부산광역시",
    description:
      "부산 아파트, 단독주택, 빌라 샷시 교체 및 설치 상담. 해운대구부터 기장군까지 지역별 창호 시공 정보를 확인하세요.",
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
      "울산 아파트, 단독주택, 빌라 샷시 교체 및 설치 상담. 남구, 중구, 동구, 북구, 울주군 지역별 창호 시공 정보를 확인하세요.",
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
      "창원 아파트, 단독주택, 빌라 샷시 교체 및 설치 상담. 의창구, 성산구, 마산합포구, 마산회원구, 진해구 지역별 창호 시공 정보를 확인하세요.",
    districts: {
      uichang: "의창구",
      seongsan: "성산구",
      masanhappo: "마산합포구",
      masanhoewon: "마산회원구",
      jinhae: "진해구",
    },
  },
} as const;

type City = keyof typeof regions;

const serviceList = [
  { key: "apartment", name: "아파트 샷시 교체·설치" },
  { key: "house", name: "단독주택 샷시 교체·설치" },
  { key: "villa", name: "빌라 샷시 교체·설치" },
];

function getRegion(city: string) {
  if (!(city in regions)) return null;
  return regions[city as City];
}

export function generateStaticParams() {
  return Object.keys(regions).map((city) => ({ city }));
}

export function generateMetadata({
  params,
}: {
  params: { city: string };
}): Metadata {
  const region = getRegion(params.city);

  if (!region) {
    return { title: "지역을 찾을 수 없습니다" };
  }

  return {
    title: `${region.name} 샷시 교체·설치`,
    description: region.description,
    alternates: {
      canonical: `/area/${params.city}`,
    },
  };
}

export default function CityPage({
  params,
}: {
  params: { city: string };
}) {
  const region = getRegion(params.city);

  if (!region) notFound();

  const districts = Object.entries(region.districts);

  return (
    <>
      <main>
        <section
          style={{
            background: "#111820",
            color: "#fff",
            padding: "155px 0 95px",
          }}
        >
          <div className="container">
            <span className="eyebrow">
              GEUJIP WINDOW / SERVICE AREA
            </span>

            <h1
              style={{
                fontSize: "clamp(36px, 5vw, 62px)",
                lineHeight: 1.25,
                letterSpacing: "-1.5px",
                margin: "25px 0",
              }}
            >
              {region.name}
              <br />
              샷시 교체·설치
            </h1>

            <p
              style={{
                maxWidth: 650,
                lineHeight: 1.9,
                color: "#d0d7dd",
              }}
            >
              {region.description}
            </p>

            <a
              href="tel:01081763350"
              className="btn btn-white"
              style={{ marginTop: 30, gap: 10 }}
            >
              <Phone size={17} />
              견적 상담하기
            </a>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <span className="eyebrow">
              SELECT YOUR DISTRICT
            </span>

            <h2 className="section-title">
              {region.fullName}
              <br />
              지역별 시공 안내
            </h2>

            <p className="section-desc">
              원하는 구·군과 시공 서비스를 선택하면
              해당 지역의 상세 안내 페이지로 이동합니다.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
                gap: 18,
                marginTop: 38,
              }}
            >
              {districts.map(([slug, district]) => (
                <article
                  key={slug}
                  style={{
                    background: "#fff",
                    border: "1px solid #e1e5e9",
                    padding: 25,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 18,
                    }}
                  >
                    <MapPin size={18} color="#738392" />

                    <h3
                      style={{
                        fontSize: 21,
                        margin: 0,
                      }}
                    >
                      {region.name} {district}
                    </h3>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gap: 8,
                    }}
                  >
                    {serviceList.map((service) => (
                      <Link
                        key={service.key}
                        href={`/area/${params.city}/${slug}/${service.key}`}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 10,
                          padding: "12px 0",
                          borderBottom: "1px solid #edf0f2",
                          fontSize: 13,
                          color: "#465562",
                        }}
                      >
                        {service.name}
                        <ArrowRight size={15} />
                      </Link>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="container">
            <span className="eyebrow">
              OTHER SERVICE AREAS
            </span>

            <h2 className="section-title">
              다른 지역 확인하기
            </h2>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                marginTop: 30,
              }}
            >
              {Object.entries(regions)
                .filter(([key]) => key !== params.city)
                .map(([key, value]) => (
                  <Link
                    key={key}
                    href={`/area/${key}`}
                    className="btn btn-dark"
                    style={{ gap: 12 }}
                  >
                    {value.name} 샷시 시공
                    <ArrowRight size={16} />
                  </Link>
                ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div
            className="container"
            style={{ textAlign: "center" }}
          >
            <span className="eyebrow">
              CONTACT & ESTIMATE
            </span>

            <h2 className="section-title">
              {region.name} 샷시 교체
              <br />
              견적 상담
            </h2>

            <p className="section-desc">
              현장 조건과 시공 범위에 따라
              견적과 출장 가능 여부를 안내합니다.
            </p>

            <a
              href="tel:01081763350"
              className="btn btn-dark"
              style={{ marginTop: 25, gap: 10 }}
            >
              <Phone size={17} />
              {PHONE}
            </a>
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
              <p>시공 및 견적 상담</p>
              <a href="tel:01081763350">
                {PHONE}
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            © {new Date().getFullYear()} GEUJIP WINDOW.
          </div>
        </div>
      </footer>

      <div className="mobile-call">
        <a href="tel:01081763350">
          ☎ 전화 상담 · {PHONE}
        </a>
      </div>
    </>
  );
}
