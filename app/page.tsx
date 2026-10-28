
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const PHONE = "010-8176-3350";
const TEL = "tel:01081763350";

const images = {
  hero: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=85",
  intro: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85",
};

const services = [
  {
    number: "01",
    title: "아파트 샷시 교체·설치",
    desc: "노후 아파트 창호부터 전체 샷시 리모델링까지. 공간에 맞는 창호 사양과 시공 방법을 제안합니다.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
    href: "/services/apartment",
  },
  {
    number: "02",
    title: "단독주택 샷시 교체·설치",
    desc: "주택 구조와 외부 환경을 고려한 창호 시공. 단열과 기밀, 방수 및 마감까지 세심하게 살핍니다.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=85",
    href: "/services/house",
  },
  {
    number: "03",
    title: "빌라 샷시 교체·설치",
    desc: "빌라의 노후 창호 교체부터 부분 시공까지. 현장 조건에 맞는 교체 방법과 견적을 안내합니다.",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=900&q=85",
    href: "/services/villa",
  },
];

export default function Home() {
  return (
    <>
      <main>
        {/* 메인 대형 이미지 */}
        <section id="home" className="hero">
          <div
            className="hero-image"
            style={{
              backgroundImage: `url("${images.hero}")`,
            }}
          />
          <div className="hero-overlay" />

          <div className="container hero-content">
            <div className="hero-kicker">
              GEUJIP WINDOW / PREMIUM WINDOW SOLUTIONS
            </div>

            <h1>
              창호의 기준을
              <br />
              새롭게.
            </h1>

            <p>
              좋은 창은 공간의 가치를 바꿉니다.
              <br />
              정확한 실측부터 창호 선택, 교체 시공과 마감까지.
              <br />
              그집창호가 공간에 맞는 창호 솔루션을 제안합니다.
            </p>

            <div className="hero-actions">
              <a href={TEL} className="btn btn-white">
                견적 상담하기
                <ArrowUpRight
                  size={17}
                  style={{ marginLeft: 12 }}
                />
              </a>

              <a href="#services" className="btn btn-outline">
                시공 서비스 보기
                <ArrowRight
                  size={17}
                  style={{ marginLeft: 12 }}
                />
              </a>
            </div>
          </div>
        </section>

        {/* 브랜드 소개 */}
        <section id="about" className="section">
          <div className="container intro-grid">
            <div>
              <span className="eyebrow">
                ABOUT GEUJIP WINDOW
              </span>

              <h2 className="section-title">
                창을 바꾸는 일,
                <br />
                생활의 편안함을
                <br />
                생각하는 일.
              </h2>

              <p className="section-desc">
                창호는 단순히 외부와 내부를 나누는 구조물이
                아닙니다. 채광과 환기, 단열과 방음,
                그리고 공간의 완성도에 영향을 주는
                중요한 건축 요소입니다.
              </p>

              <p className="section-desc">
                그집창호는 현장 조건과 고객의 요구를
                꼼꼼하게 확인하고, 창호 사양부터
                설치 방법과 마감까지 세심하게 살펴
                적합한 시공 방향을 제안합니다.
              </p>

              <a
                href="#services"
                className="btn btn-dark"
                style={{ marginTop: 24 }}
              >
                시공 서비스 확인
                <ArrowRight
                  size={16}
                  style={{ marginLeft: 12 }}
                />
              </a>
            </div>

            <img
              className="intro-image"
              src={images.intro}
              alt="그집창호 창호 디자인 참고 이미지"
            />
          </div>
        </section>

        {/* 시공 서비스 - 메인 마지막 섹션 */}
        <section
          id="services"
          className="section section-light"
        >
          <div className="container">
            <span className="eyebrow">
              OUR SERVICES
            </span>

            <h2 className="section-title">
              공간에 맞는
              <br />
              전문 창호 시공
            </h2>

            <p className="section-desc">
              아파트부터 단독주택, 빌라까지.
              <br />
              원하는 시공 서비스를 선택해
              자세한 내용을 확인하세요.
            </p>

            <div className="services-grid">
              {services.map((service) => (
                <article
                  className="service-card"
                  key={service.number}
                >
                  <Link href={service.href}>
                    <img
                      className="service-image"
                      src={service.image}
                      alt={`${service.title} 참고 이미지`}
                      loading="lazy"
                    />
                  </Link>

                  <div className="service-body">
                    <span className="service-number">
                      SERVICE {service.number}
                    </span>

                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>

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
      </main>

      {/* 하단 업체 정보 */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="logo">
                그집창호
                <span>GEUJIP WINDOW</span>
              </div>

              <p>
                공간을 이해하는 창호 솔루션.
                <br />
                아파트 · 단독주택 · 빌라
                샷시 교체 및 설치
              </p>
            </div>

            <div>
              <p
                style={{
                  color: "white",
                  fontWeight: 700,
                }}
              >
                CONTACT
              </p>

              <a
                href={TEL}
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                }}
              >
                {PHONE}
              </a>

              <p>견적 및 시공 상담 문의</p>
            </div>
          </div>

          <div className="footer-bottom">
            © {new Date().getFullYear()} GEUJIP WINDOW.
            All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* 모바일 하단 전화 상담 */}
      <div className="mobile-call">
        <a href={TEL}>
          ☎ 전화 상담 · {PHONE}
        </a>
      </div>
    </>
  );
}
