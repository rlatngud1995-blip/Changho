
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone, MapPin, CheckCircle2 } from "lucide-react";

const SITE = "https://geujipwindow.com";
const PHONE = "010-8176-3350";

const regions = {
  busan: {
    name: "부산",
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
    detail: "아파트 거실창, 베란다창, 방창 및 노후 창호 교체",
  },
  house: {
    name: "단독주택 샷시 교체·설치",
    detail: "단독주택 및 전원주택 창호 교체와 설치",
  },
  villa: {
    name: "빌라 샷시 교체·설치",
    detail: "빌라 및 다세대주택 노후 샷시 교체",
  },
} as const;

type City = keyof typeof regions;
type Service = keyof typeof services;

function getInfo(city: string, district: string, service: string) {
  if (!(city in regions) || !(service in services)) return null;

  const region = regions[city as City];
  const districts = region.districts as Record<string, string>;
  const districtName = districts[district];

  if (!districtName) return null;

  return {
    cityName: region.name,
    districtName,
    location: `${region.name} ${districtName}`,
    service: services[service as Service],
  };
}

export function generateStaticParams() {
  const result: {
    city: string;
    district: string;
    service: string;
  }[] = [];

  for (const [city, region] of Object.entries(regions)) {
    for (const district of Object.keys(region.districts)) {
      for (const service of Object.keys(services)) {
        result.push({ city, district, service });
      }
    }
  }

  return result;
}

export function generateMetadata({
  params,
}: {
  params: { city: string; district: string; service: string };
}): Metadata {
  const info = getInfo(
    params.city,
    params.district,
    params.service
  );

  if (!info) return { title: "페이지를 찾을 수 없습니다" };

  const title = `${info.location} ${info.service.name}`;
  const description =
    `${info.location} ${info.service.name} 상담. ` +
    `${info.service.detail}. ` +
    `그집창호에서 현장 조건에 맞는 시공과 견적을 안내합니다. ` +
    `문의 ${PHONE}`;

  const path =
    `/area/${params.city}/${params.district}/${params.service}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | 그집창호`,
      description,
      url: `${SITE}${path}`,
    },
  };
}

export default function AreaServicePage({
  params,
}: {
  params: { city: string; district: string; service: string };
}) {
  const info = getInfo(
    params.city,
    params.district,
    params.service
  );

  if (!info) notFound();

  const otherServices = Object.entries(services).filter(
    ([key]) => key !== params.service
  );

  return (
    <>
      <main>
        <section
          style={{
            background: "#111820",
            color: "#fff",
            padding: "155px 0 90px",
          }}
        >
          <div className="container">
            <p className="eyebrow">
              GEUJIP WINDOW / LOCAL SERVICE
            </p>

            <h1
              style={{
                fontSize: "clamp(34px, 5vw, 60px)",
                lineHeight: 1.3,
                margin: "25px 0",
                letterSpacing: "-1.5px",
              }}
            >
              {info.location}
              <br />
              {info.service.name}
            </h1>

            <p
              style={{
                maxWidth: 650,
                lineHeight: 1.9,
                color: "#d0d7dd",
              }}
            >
              {info.location} 지역의 창호 교체를
              계획하고 계신가요?
              건물 구조와 기존 창호 상태, 설치 환경을
              확인하고 적합한 샷시 교체 방법을 안내합니다.
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
              WINDOW INSTALLATION
            </span>

            <h2 className="section-title">
              {info.location}
              <br />
              맞춤 창호 시공
            </h2>

            <p className="section-desc">
              {info.service.detail}에 대해
              상담할 수 있습니다.
              정확한 견적은 현장 실측과 자재 사양,
              시공 범위 확인 후 안내합니다.
            </p>

            <div className="features-grid">
              {[
                ["현장 상담", "건물 유형과 교체 범위를 확인합니다."],
                ["정밀 실측", "창호 크기와 설치 조건을 측정합니다."],
                ["창호 사양 검토", "단열·기밀 및 사용 편의성을 고려합니다."],
                ["시공 및 마감", "창호 설치와 실링 및 개폐 상태를 점검합니다."],
              ].map(([title, desc], index) => (
                <article className="feature" key={title}>
                  <span className="feature-number">
                    0{index + 1}
                  </span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="container">
            <span className="eyebrow">
              OTHER SERVICES
            </span>

            <h2 className="section-title">
              {info.location}
              <br />
              다른 시공 서비스
            </h2>

            <div
              style={{
                display: "grid",
                gap: 14,
                marginTop: 30,
              }}
            >
              {otherServices.map(([key, value]) => (
                <Link
                  key={key}
                  href={`/area/${params.city}/${params.district}/${key}`}
                  style={{
                    padding: 22,
                    border: "1px solid #dce2e7",
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 15,
                    fontWeight: 600,
                  }}
                >
                  {info.location} {value.name}
                  <ArrowRight size={18} />
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
            <MapPin size={26} style={{ margin: "0 auto 20px" }} />

            <h2 className="section-title">
              {info.location}
              <br />
              샷시 교체 견적 문의
            </h2>

            <p className="section-desc">
              시공 가능 일정과 출장 가능 여부는
              상담 시 확인해 주세요.
            </p>

            <a
              href="tel:01081763350"
              className="btn btn-dark"
              style={{ marginTop: 25, gap: 10 }}
            >
              <Phone size={17} />
              {PHONE}
            </a>

            <div style={{ marginTop: 30 }}>
              <Link href="/process">
                시공과정 자세히 보기 →
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
              <p>아파트 · 단독주택 · 빌라 샷시 교체 및 설치</p>
            </div>
            <div>
              <p>시공 및 견적 상담</p>
              <a href="tel:01081763350">{PHONE}</a>
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
