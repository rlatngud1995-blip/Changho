
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "샷시 시공과정",
  description:
    "그집창호의 샷시 교체 및 설치 과정. 상담부터 현장 확인, 정밀 실측, 견적, 시공, 최종 점검까지 8단계를 안내합니다.",
  alternates: {
    canonical: "/process",
  },
};

const steps = [
  {
    number: "01",
    title: "상담 접수",
    english: "CONSULTATION",
    desc: "고객님의 시공 지역, 건물 유형, 창호 교체 범위와 요청사항을 확인합니다.",
    checks: ["건물 유형 확인", "교체 범위 상담", "현장 방문 일정 협의"],
  },
  {
    number: "02",
    title: "현장 상태 확인",
    english: "SITE INSPECTION",
    desc: "기존 창호의 상태와 벽체, 설치 환경을 살펴 시공 조건을 확인합니다.",
    checks: ["기존 창호 점검", "벽체 및 개구부 확인", "철거 조건 검토"],
  },
  {
    number: "03",
    title: "정밀 실측",
    english: "MEASUREMENT",
    desc: "창호 제작과 설치에 필요한 크기, 수평 및 수직 상태를 측정합니다.",
    checks: ["창호 치수 측정", "수평·수직 확인", "설치 여유 공간 검토"],
  },
  {
    number: "04",
    title: "창호 사양 상담",
    english: "SPECIFICATION",
    desc: "건물의 구조와 고객의 요구에 맞춰 창틀, 유리 및 개폐 방식을 검토합니다.",
    checks: ["창틀 사양 상담", "유리 구성 검토", "단열·기밀 조건 확인"],
  },
  {
    number: "05",
    title: "견적 안내 및 계약",
    english: "ESTIMATE",
    desc: "실측 결과와 선택한 자재, 철거 및 설치 범위를 반영해 견적을 안내합니다.",
    checks: ["자재 사양 확인", "시공 범위 안내", "비용 및 일정 협의"],
  },
  {
    number: "06",
    title: "시공 준비",
    english: "PREPARATION",
    desc: "시공 일정과 자재 준비 상태를 확인하고 현장 보호 및 작업 동선을 검토합니다.",
    checks: ["시공 일정 확인", "자재 준비", "작업 공간 보호"],
  },
  {
    number: "07",
    title: "샷시 철거 및 설치",
    english: "INSTALLATION",
    desc: "기존 창호를 철거하고 새 창호를 설치하며 고정, 충전 및 실링 작업을 진행합니다.",
    checks: ["기존 창호 철거", "새 창호 설치", "틈새 충전 및 실링"],
  },
  {
    number: "08",
    title: "마감 및 최종 점검",
    english: "FINAL INSPECTION",
    desc: "창문 개폐와 잠금 상태, 창틀 고정 및 마감 상태를 확인합니다.",
    checks: ["개폐 및 잠금 확인", "실리콘 마감 점검", "현장 정리"],
  },
];

export default function ProcessPage() {
  return (
    <main style={{ background: "#fff" }}>
      <section
        style={{
          background: "#111418",
          color: "#fff",
          padding: "145px 0 85px",
        }}
      >
        <div className="container">
          <Link
            href="/"
            style={{ color: "#b9c2cb", fontSize: 13 }}
          >
            ← 홈으로
          </Link>

          <span
            className="eyebrow"
            style={{ marginTop: 35 }}
          >
            GEUJIP WINDOW / INSTALLATION PROCESS
          </span>

          <h1 className="section-title">
            시공의 시작부터
            <br />
            마지막 마감까지.
          </h1>

          <p
            style={{
              maxWidth: 650,
              color: "#c6ced5",
              lineHeight: 1.9,
            }}
          >
            정확한 실측과 현장 조건에 맞는 시공은
            좋은 창호의 기본입니다.
            그집창호의 8단계 시공과정을 확인해 보세요.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">STEP BY STEP</span>

          <h2 className="section-title">
            체계적인 8단계
            <br />
            창호 시공 프로세스
          </h2>

          <div
            style={{
              display: "grid",
              gap: 20,
              marginTop: 45,
            }}
          >
            {steps.map((step) => (
              <article
                key={step.number}
                style={{
                  border: "1px solid #e3e7eb",
                  padding: "clamp(24px, 4vw, 40px)",
                  background: "#fff",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 20,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      fontSize: 36,
                      fontWeight: 700,
                      color: "#9caab5",
                      minWidth: 65,
                    }}
                  >
                    {step.number}
                  </div>

                  <div style={{ flex: "1 1 260px" }}>
                    <span className="eyebrow">
                      {step.english}
                    </span>

                    <h3
                      style={{
                        fontSize: 24,
                        margin: "0 0 15px",
                      }}
                    >
                      {step.title}
                    </h3>

                    <p
                      className="section-desc"
                      style={{ marginBottom: 22 }}
                    >
                      {step.desc}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 12,
                      }}
                    >
                      {step.checks.map((check) => (
                        <span
                          key={check}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 7,
                            padding: "9px 12px",
                            background: "#f3f5f7",
                            fontSize: 12,
                            color: "#344655",
                          }}
                        >
                          <CheckCircle2 size={14} />
                          {check}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p
            className="section-desc"
            style={{ fontSize: 13, marginTop: 25 }}
          >
            ※ 실제 작업 순서와 세부 공정은 현장 조건 및
            창호 사양에 따라 달라질 수 있습니다.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div
          className="container"
          style={{ textAlign: "center" }}
        >
          <span className="eyebrow">CONTACT US</span>

          <h2 className="section-title">
            샷시 교체,
            <br />
            견적부터 상담하세요.
          </h2>

          <p className="section-desc">
            아파트 · 단독주택 · 빌라
            <br />
            창호 교체 및 설치 상담
          </p>

          <a
            href="tel:01081763350"
            className="btn btn-dark"
            style={{ marginTop: 25, gap: 10 }}
          >
            <Phone size={17} />
            010-8176-3350
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="logo">
            그집창호
            <span>GEUJIP WINDOW</span>
          </div>
          <p>아파트 · 단독주택 · 빌라 샷시 교체·설치</p>
          <div className="footer-bottom">
            © {new Date().getFullYear()} GEUJIP WINDOW.
            All Rights Reserved.
          </div>
        </div>
      </footer>

      <div className="mobile-call">
        <a href="tel:01081763350">
          ☎ 전화 상담 · 010-8176-3350
        </a>
      </div>
    </main>
  );
}
