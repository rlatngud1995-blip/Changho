
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Phone,
} from "lucide-react";

const PHONE = "010-8176-3350";
const TEL = "tel:01081763350";

const services = {
  apartment: {
    title: "아파트 샷시 교체·설치",
    shortTitle: "아파트 샷시",
    description:
      "노후 아파트 샷시부터 전체 창호 리모델링까지. 정확한 실측과 현장 조건을 바탕으로 적합한 창호 교체 및 설치 방법을 안내합니다.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
    items: [
      ["전체 샷시 교체", "아파트 전체 창호를 교체하는 리모델링 시공"],
      ["베란다 샷시", "베란다 외창과 내부 창호 교체"],
      ["거실창 교체", "거실의 채광과 단열을 고려한 창호 교체"],
      ["방창 및 이중창", "침실과 방의 노후 창호 교체 및 설치"],
    ],
  },

  house: {
    title: "단독주택 샷시 교체·설치",
    shortTitle: "단독주택 샷시",
    description:
      "단독주택과 전원주택의 구조, 외부 환경 및 단열 조건을 고려하여 창호 교체와 신규 설치 방향을 제안합니다.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=85",
    items: [
      ["주택 전체 창호", "단독주택 전체 샷시 교체 및 설치"],
      ["전원주택 창호", "외부 환경과 건물 구조를 고려한 창호"],
      ["노후주택 샷시", "오래된 창호의 교체 및 설치"],
      ["거실창 및 방창", "주택의 거실과 침실 창호 교체"],
    ],
  },

  villa: {
    title: "빌라 샷시 교체·설치",
    shortTitle: "빌라 샷시",
    description:
      "빌라와 다세대주택의 노후 창호를 현장 상태에 맞춰 교체하고, 단열과 기밀 및 마감 품질을 고려한 시공을 안내합니다.",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1800&q=85",
    items: [
      ["빌라 전체 샷시", "빌라 내부 및 외부 창호 전체 교체"],
      ["베란다 창호", "베란다 노후 샷시 교체 및 설치"],
      ["거실창 교체", "거실의 창호 교체와 마감 작업"],
      ["부분 샷시 교체", "필요한 창호만 선택하여 교체"],
    ],
  },
} as const;

type ServiceType = keyof typeof services;

function getService(type: string) {
  if (!(type in services)) return null;
  return services[type as ServiceType];
}

export function generateStaticParams() {
  return Object.keys(services).map((type) => ({ type }));
}

export function generateMetadata({
  params,
}: {
  params: { type: string };
}): Metadata {
  const service = getService(params.type);

  if (!service) {
    return { title: "페이지를 찾을 수 없습니다" };
  }

  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `/services/${params.type}`,
    },
    openGraph: {
      title: `${service.title} | 그집창호`,
      description: service.description,
      url: `https://geujipwindow.com/services/${params.type}`,
    },
  };
}

const quality = [
  {
    number: "01",
    title: "정확한 현장 실측",
    description:
      "창호 크기와 개구부 상태, 수평과 수직 및 설치 조건을 확인합니다.",
  },
  {
    number: "02",
    title: "단열과 기밀",
    description:
      "창틀과 유리 사양, 틈새 처리 등 단열과 기밀에 영향을 주는 요소를 검토합니다.",
  },
  {
    number: "03",
    title: "설치 및 고정",
    description:
      "창틀의 고정 상태와 설치 위치, 시공 조건을 확인합니다.",
  },
  {
    number: "04",
    title: "꼼꼼한 마감",
    description:
      "실리콘 마감과 창문 개폐, 잠금장치 등 사용 상태를 점검합니다.",
  },
];

export default function ServicePage({
  params,
}: {
  params: { type: string };
}) {
  const service = getService(params.type);

  if (!service) notFound();

  return (
    <>
      <main>
        {/* 카테고리 메인 이미지 */}
        <section
          style={{
            minHeight: 520,
            padding: "175px 0 110px",
            backgroundImage: `linear-gradient(
              90deg,
              rgba(10,16,22,.88),
              rgba(10,16,22,.35)
            ),url("${service.image}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#fff",
          }}
        >
          <div className="container">
            <span className="hero-kicker">
              GEUJIP WINDOW / PROFESSIONAL SERVICE
            </span>

            <h1
              className="section-title"
              style={{
                fontSize: "clamp(36px, 5vw, 60px)",
                marginTop: 24,
              }}
            >
              {service.title}
            </h1>

            <p
              style={{
                maxWidth: 640,
                lineHeight: 1.9,
                color: "#e2e7eb",
              }}
            >
              {service.description}
            </p>

            <a
              href={TEL}
              className="btn btn-white"
              style={{ marginTop: 28, gap: 10 }}
            >
              맞춤 견적 상담
              <ArrowUpRight size={17} />
            </a>
          </div>
        </section>

        {/* 시공 항목 */}
        <section className="section">
          <div className="container">
            <span className="eyebrow">
              SERVICE OVERVIEW
            </span>

            <h2 className="section-title">
              공간에 맞는
              <br />
              전문 창호 시공
            </h2>

            <p className="section-desc">
              현장 조건과 고객님의 요구를 확인하고
              적합한 창호 교체 및 설치 방법을 안내합니다.
            </p>

            <div className="features-grid">
              {service.items.map(([title, description], index) => (
                <article className="feature" key={title}>
                  <span className="feature-number">
                    0{index + 1}
                  </span>

                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 품질 기준 */}
        <section className="section section-light">
          <div className="container">
            <span className="eyebrow">
              QUALITY & DETAIL
            </span>

            <h2 className="section-title">
              시공의 완성도를 위한
              <br />
              네 가지 품질 기준
            </h2>

            <div className="features-grid">
              {quality.map((item) => (
                <article className="feature" key={item.number}>
                  <span className="feature-number">
                    {item.number}
                  </span>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 시공과정 별도 페이지 연결 */}
        <section className="section section-dark">
          <div
            className="container"
            style={{ textAlign: "center" }}
          >
            <span className="eyebrow">
              INSTALLATION PROCESS
            </span>

            <h2 className="section-title">
              상담부터 최종 점검까지
            </h2>

            <p
              style={{
                color: "#c6ced5",
                lineHeight: 1.9,
              }}
            >
              그집창호의 8단계 창호 시공과정을
              별도 페이지에서 확인할 수 있습니다.
            </p>

            <Link
              href="/process"
              className="btn btn-white"
              style={{ marginTop: 25, gap: 10 }}
            >
              시공과정 자세히 보기
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        {/* 견적 상담 */}
        <section className="section quote-section">
          <div
            className="container"
            style={{ textAlign: "center" }}
          >
            <span className="eyebrow">
              CONTACT & ESTIMATE
            </span>

            <h2 className="section-title">
              {service.shortTitle}
              <br />
              맞춤 견적 상담
            </h2>

            <p className="section-desc">
              창호 크기와 교체 범위, 현장 조건에 따라
              시공 비용은 달라질 수 있습니다.
              <br />
              정확한 견적은 상담과 실측 후 안내합니다.
            </p>

            <a
              href={TEL}
              className="btn btn-dark"
              style={{ marginTop: 28, gap: 10 }}
            >
              <Phone size={17} />
              {PHONE}
              <ArrowRight size={17} />
            </a>
          </div>
        </section>
      </main>

      {/* 하단 정보 */}
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
              <a
                href={TEL}
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                }}
              >
                {PHONE}
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            © {new Date().getFullYear()} GEUJIP WINDOW.
            All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* 모바일 하단 전화 */}
      <div className="mobile-call">
        <a href={TEL}>
          ☎ 전화 상담 · {PHONE}
        </a>
      </div>
    </>
  );
}
