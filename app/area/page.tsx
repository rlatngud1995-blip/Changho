
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "부산·울산·창원 샷시 시공 지역 안내",
  description:
    "그집창호 부산, 울산, 창원 아파트·단독주택·빌라 샷시 교체 및 설치 지역별 안내. 구·군별 시공 정보를 확인하고 견적을 상담하세요.",
  alternates: {
    canonical: "/area",
  },
};

const regions = [
  {
    slug: "busan",
    name: "부산",
    english: "BUSAN",
    fullName: "부산광역시",
    count: 16,
    districts:
      "해운대구 · 수영구 · 남구 · 동래구 · 연제구 · 부산진구 · 동구 · 서구 · 중구 · 영도구 · 북구 · 사상구 · 사하구 · 금정구 · 강서구 · 기장군",
  },
  {
    slug: "ulsan",
    name: "울산",
    english: "ULSAN",
    fullName: "울산광역시",
    count: 5,
    districts: "남구 · 중구 · 동구 · 북구 · 울주군",
  },
  {
    slug: "changwon",
    name: "창원",
    english: "CHANGWON",
    fullName: "경상남도 창원시",
    count: 5,
    districts: "의창구 · 성산구 · 마산합포구 · 마산회원구 · 진해구",
  },
];

export default function AreaPage() {
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
              부산·울산·창원
              <br />
              창호 시공 지역 안내
            </h1>

            <p
              style={{
                maxWidth: 670,
                lineHeight: 1.9,
                color: "#d0d7dd",
              }}
            >
              아파트부터 단독주택과 빌라까지.
              지역별 샷시 교체 및 설치 정보를
              확인하고 시공 범위와 견적을 상담하세요.
            </p>

            <a
              href="tel:01081763350"
              className="btn btn-white"
              style={{ marginTop: 30, gap: 10 }}
            >
              <Phone size={17} />
              전화 견적 상담
            </a>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <span className="eyebrow">
              SELECT YOUR AREA
            </span>

            <h2 className="section-title">
              시공 지역을
              <br />
              선택해 주세요.
            </h2>

            <p className="section-desc">
              지역을 선택하면 구·군별 아파트,
              단독주택, 빌라 샷시 교체·설치
              상세 페이지로 이동할 수 있습니다.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(min(100%, 290px), 1fr))",
                gap: 20,
                marginTop: 40,
              }}
            >
              {regions.map((region, index) => (
                <article
                  key={region.slug}
                  style={{
                    border: "1px solid #e0e5e9",
                    background: "#fff",
                    padding: "clamp(24px, 4vw, 36px)",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 330,
                  }}
                >
                  <span
                    style={{
                      color: "#8a99a6",
                      fontSize: 12,
                      letterSpacing: 2,
                      fontWeight: 700,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                    {" / "}
                    {region.english}
                  </span>

                  <h3
                    style={{
                      fontSize: 34,
                      margin: "24px 0 5px",
                      letterSpacing: "-1px",
                    }}
                  >
                    {region.name}
                  </h3>

                  <p
                    style={{
                      color: "#687784",
                      fontSize: 13,
                      margin: 0,
                    }}
                  >
                    {region.fullName} · {region.count}개 구·군
                  </p>

                  <p
                    style={{
                      fontSize: 13,
                      lineHeight: 1.9,
                      color: "#5b6873",
                      marginTop: 20,
                      flexGrow: 1,
                    }}
                  >
                    {region.districts}
                  </p>

                  <Link
                    href={`/area/${region.slug}`}
                    className="btn btn-dark"
                    style={{
                      justifyContent: "space-between",
                      gap: 14,
                      marginTop: 22,
                    }}
                  >
                    {region.name} 지역 확인
                    <ArrowRight size={17} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div
            className="container"
            style={{ textAlign: "center" }}
          >
            <MapPin
              size={27}
              style={{ margin: "0 auto 20px" }}
            />

            <h2 className="section-title">
              창호 교체 및 설치
              <br />
              상담 안내
            </h2>

            <p className="section-desc">
              실제 출장 가능 여부와 시공 일정은
              현장 위치 및 작업 조건에 따라
              상담 후 안내합니다.
            </p>

            <a
              href="tel:01081763350"
              className="btn btn-dark"
              style={{ marginTop: 25, gap: 10 }}
            >
              <Phone size={17} />
              010-8176-3350
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
              <p>견적 및 시공 상담</p>
              <a href="tel:01081763350">
                010-8176-3350
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
          ☎ 전화 상담 · 010-8176-3350
        </a>
      </div>
    </>
  );
}
