
"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ClipboardCheck,
  DraftingCompass,
  Menu,
  Phone,
  Ruler,
  ShieldCheck,
  X,
} from "lucide-react";

const PHONE = "010-8176-3350";
const TEL = "tel:01081763350";

const images = {
  hero: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=85",
  intro: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85",
  apartment: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
  house: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=85",
  villa: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=900&q=85",
};

const services = [
  {
    number: "01",
    title: "아파트 샷시 교체·설치",
    desc: "노후 아파트 창호부터 전체 샷시 리모델링까지. 주거 환경과 창호 구조를 고려해 적합한 교체 방안을 제안합니다.",
    image: images.apartment,
    id: "apartment",
  },
  {
    number: "02",
    title: "단독주택 샷시 교체·설치",
    desc: "단독주택과 전원주택의 구조 및 외부 환경을 고려한 창호 시공. 단열, 기밀, 방수와 마감 디테일까지 살핍니다.",
    image: images.house,
    id: "house",
  },
  {
    number: "03",
    title: "빌라 샷시 교체·설치",
    desc: "빌라의 노후 창호 교체와 부분 시공. 현장 실측을 바탕으로 창호 사양과 철거·설치 범위를 안내합니다.",
    image: images.villa,
    id: "villa",
  },
];

const features = [
  {
    number: "01 / MEASUREMENT",
    title: "정확한 현장 실측",
    desc: "개구부 크기와 벽체 상태, 기존 창호 구조를 확인해 시공에 필요한 조건을 파악합니다.",
  },
  {
    number: "02 / INSULATION",
    title: "단열과 기밀",
    desc: "창호와 유리 사양, 틈새 처리 등 열손실과 외풍에 영향을 주는 요소를 검토합니다.",
  },
  {
    number: "03 / INSTALLATION",
    title: "꼼꼼한 설치",
    desc: "창틀 수평과 수직, 고정 상태, 충전 및 실링 작업을 확인하며 시공합니다.",
  },
  {
    number: "04 / FINISHING",
    title: "완성도 높은 마감",
    desc: "창문 개폐, 잠금장치, 실리콘 마감 등 사용성과 마감 상태를 점검합니다.",
  },
];

const processes = [
  ["01", "상담 접수", "시공 위치와 창호 교체 요청사항 확인"],
  ["02", "현장 확인", "건물 구조와 기존 창호 상태 확인"],
  ["03", "정밀 실측", "창호 크기와 설치 조건 측정"],
  ["04", "사양 제안", "창호 및 유리 구성 상담"],
  ["05", "견적 안내", "자재와 작업 범위별 비용 안내"],
  ["06", "시공 일정", "일정 및 현장 준비사항 협의"],
  ["07", "창호 시공", "기존 창호 철거 및 새 창호 설치"],
  ["08", "최종 점검", "개폐 상태와 마감 품질 확인"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    region: "",
    building: "아파트",
    service: "전체 샷시 교체",
    quantity: "현장 확인 필요",
    message: "",
    privacy: false,
  });

  const update = (key: keyof typeof form, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.privacy) {
      alert("개인정보 수집 및 이용에 동의해 주세요.");
      return;
    }

    const message = [
      "[그집창호 견적 상담 요청]",
      "",
      `성함: ${form.name}`,
      `연락처: ${form.phone}`,
      `시공 지역: ${form.region}`,
      `건물 유형: ${form.building}`,
      `시공 종류: ${form.service}`,
      `창문 수량: ${form.quantity}`,
      `추가 요청사항: ${form.message || "없음"}`,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      alert(
        "견적 상담 내용이 복사되었습니다.\n문자 앱에 붙여넣어 010-8176-3350으로 보내주세요."
      );
    } catch {
      alert(
        "자동 복사가 지원되지 않습니다. 전화 상담을 이용해 주세요."
      );
    }
  };

  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <a href="#home" className="logo" onClick={closeMenu}>
            그집창호
            <span>GEUJIP WINDOW</span>
          </a>

          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            <a href="#about" onClick={closeMenu}>브랜드 소개</a>
            <a href="#services" onClick={closeMenu}>시공 서비스</a>
            <a href="#quality" onClick={closeMenu}>시공 품질</a>
            <a href="#process" onClick={closeMenu}>시공 과정</a>
            <a href="#quote" onClick={closeMenu}>견적 문의</a>
          </nav>

          <a className="header-contact" href={TEL}>
            상담문의 {PHONE}
          </a>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div
            className="hero-image"
            style={{ backgroundImage: `url("${images.hero}")` }}
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
              <a href="#quote" className="btn btn-white">
                맞춤 견적 상담 <ArrowUpRight size={17} style={{ marginLeft: 12 }} />
              </a>
              <a href="#services" className="btn btn-outline">
                시공 서비스 보기 <ArrowRight size={17} style={{ marginLeft: 12 }} />
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container intro-grid">
            <div>
              <span className="eyebrow">ABOUT GEUJIP WINDOW</span>
              <h2 className="section-title">
                창을 바꾸는 일,
                <br />
                생활의 편안함을
                <br />
                생각하는 일.
              </h2>
              <p className="section-desc">
                창호는 단순히 외부와 내부를 나누는 구조물이 아닙니다.
                채광과 환기, 단열과 방음, 그리고 공간의 완성도에
                영향을 주는 중요한 건축 요소입니다.
              </p>
              <p className="section-desc">
                그집창호는 현장 조건과 고객의 요구를 꼼꼼하게 확인하고,
                창호 사양부터 설치 방법과 마감까지 세심하게 살펴
                적합한 시공 방향을 제안합니다.
              </p>
              <a href="#quote" className="btn btn-dark" style={{ marginTop: 24 }}>
                시공 상담하기 <ArrowUpRight size={16} style={{ marginLeft: 12 }} />
              </a>
            </div>

            <img
              className="intro-image"
              src={images.intro}
              alt="그집창호 창호 시공 디자인 참고 이미지"
            />
          </div>
        </section>

        <section id="services" className="section section-light">
          <div className="container">
            <span className="eyebrow">OUR SERVICES</span>
            <h2 className="section-title">
              공간에 맞는
              <br />
              전문 창호 시공
            </h2>
            <p className="section-desc">
              아파트부터 단독주택, 빌라까지.
              건물의 구조와 생활 환경에 맞춘 창호 교체·설치를 안내합니다.
            </p>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.id}>
                  <img
                    className="service-image"
                    src={service.image}
                    alt={`${service.title} 디자인 참고 이미지`}
                    loading="lazy"
                  />
                  <div className="service-body">
                    <span className="service-number">
                      SERVICE {service.number}
                    </span>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                    <a href="#quote" className="service-link">
                      시공 견적 문의 →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="quality" className="section">
          <div className="container">
            <span className="eyebrow">QUALITY & DETAIL</span>
            <h2 className="section-title">
              작은 차이가 만드는
              <br />
              시공의 완성도
            </h2>
            <p className="section-desc">
              좋은 창호는 제품 선택뿐 아니라
              현장 조건에 맞는 정확한 설치와 마감이 중요합니다.
            </p>

            <div className="features-grid">
              {features.map((feature) => (
                <div className="feature" key={feature.number}>
                  <span className="feature-number">{feature.number}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section section-dark">
          <div className="container">
            <span className="eyebrow">OUR PROCESS</span>
            <h2 className="section-title">
              상담부터 마감까지
              <br />
              체계적인 시공 과정
            </h2>
            <p style={{ color: "#b9c2cb", lineHeight: 1.9 }}>
              현장 상황에 따라 세부 순서는 달라질 수 있습니다.
            </p>

            <div className="process-grid">
              {processes.map(([number, title, desc]) => (
                <div className="process-item" key={number}>
                  <span>STEP {number}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="quote" className="section quote-section">
          <div className="container quote-grid">
            <div>
              <span className="eyebrow">CONTACT & ESTIMATE</span>
              <h2 className="section-title">
                공간에 맞는
                <br />
                샷시 견적을
                <br />
                상담해 보세요.
              </h2>

              <p className="section-desc">
                시공 위치와 건물 유형, 교체 범위를 알려주시면
                상담을 통해 필요한 확인사항을 안내합니다.
              </p>

              <div style={{ marginTop: 35 }}>
                <span className="eyebrow">TELEPHONE</span>
                <a
                  href={TEL}
                  style={{
                    fontSize: "clamp(26px, 4vw, 39px)",
                    fontWeight: 700,
                    letterSpacing: "-1px",
                  }}
                >
                  {PHONE}
                </a>
              </div>

              <p className="section-desc" style={{ fontSize: 13 }}>
                최종 견적은 창호 사양, 실측 결과, 철거 범위,
                설치 환경에 따라 달라질 수 있습니다.
              </p>
            </div>

            <form className="quote-form" onSubmit={handleSubmit}>
              <h3 style={{ fontSize: 24, margin: "0 0 10px" }}>
                맞춤 견적 상담
              </h3>
              <p style={{ color: "#66717c", fontSize: 13, lineHeight: 1.8, marginBottom: 28 }}>
                내용을 작성한 후 문자로 상담 요청을 보내주세요.
              </p>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="customer-name">성함 *</label>
                  <input
                    id="customer-name"
                    required
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="성함 입력"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="customer-phone">연락처 *</label>
                  <input
                    id="customer-phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="010-0000-0000"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="customer-region">시공 지역 *</label>
                <input
                  id="customer-region"
                  required
                  value={form.region}
                  onChange={(e) => update("region", e.target.value)}
                  placeholder="예: 천안시 서북구"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="building">건물 유형</label>
                  <select
                    id="building"
                    value={form.building}
                    onChange={(e) => update("building", e.target.value)}
                  >
                    <option>아파트</option>
                    <option>단독주택</option>
                    <option>빌라</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="service">시공 종류</label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={(e) => update("service", e.target.value)}
                  >
                    <option>전체 샷시 교체</option>
                    <option>부분 샷시 교체</option>
                    <option>베란다 샷시 교체</option>
                    <option>신규 창호 설치</option>
                    <option>기타 상담</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="quantity">예상 창문 수량</label>
                <select
                  id="quantity"
                  value={form.quantity}
                  onChange={(e) => update("quantity", e.target.value)}
                >
                  <option>현장 확인 필요</option>
                  <option>1~2개</option>
                  <option>3~5개</option>
                  <option>6개 이상</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">상세 요청사항</label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="창문 크기, 기존 샷시 상태, 희망 일정 등을 입력해 주세요."
                />
              </div>

              <label
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  fontSize: 12,
                  lineHeight: 1.8,
                  marginBottom: 22,
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  required
                  checked={form.privacy}
                  onChange={(e) => update("privacy", e.target.checked)}
                  style={{ marginTop: 4 }}
                />
                견적 상담을 위한 성함, 연락처, 시공 지역 및
                문의 내용의 수집·이용에 동의합니다.
                상담 목적으로만 사용하며, 문자 발송 전 내용을
                직접 확인할 수 있습니다.
              </label>

              <button type="submit" className="form-submit">
                {copied ? "견적 내용 다시 복사하기" : "견적 상담 내용 복사하기"} →
              </button>

              <a
                href={TEL}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 9,
                  marginTop: 18,
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                <Phone size={15} />
                전화로 바로 상담하기
              </a>
            </form>
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
                공간을 이해하는 창호 솔루션.
                <br />
                아파트 · 단독주택 · 빌라 샷시 교체 및 설치
              </p>
            </div>

            <div>
              <p style={{ color: "white", fontWeight: 700 }}>
                CONTACT
              </p>
              <a href={TEL} style={{ fontSize: 22, fontWeight: 700 }}>
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

      <div className="mobile-call">
        <a href={TEL}>☎ 전화 상담 · {PHONE}</a>
      </div>
    </>
  );
}
