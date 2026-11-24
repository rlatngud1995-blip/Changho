import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";

import {
  SITE,
  COMPANY,
  PHONE,
  TEL,
  MAIN_IMAGE,
  regions,
  services,
  SERVICE_KEYS,
  getDistrictName,
  searchName,
  fullName,
  officialName,
  localParagraphs,
  nearbyDistricts,
  areaUrl,
  serviceUrl,
  businessSchema,
  faqSchema,
  breadcrumbSchema,
  jsonLd,
  type CityKey,
} from "../../../../lib/geujip";
import { districtCopy, nearSlice } from "../../../../lib/copy";

/* =====================================
   구·군 대표 페이지
   "해운대 샷시 교체" 같은 지역+샷시 검색어 전용
   /area/busan/haeundae
===================================== */

type PageParams = { city: string; district: string };
type PageProps = { params: Promise<PageParams> };

export function generateStaticParams(): PageParams[] {
  return (Object.keys(regions) as CityKey[]).flatMap((city) =>
    Object.keys(regions[city].districts).map((district) => ({
      city,
      district,
    }))
  );
}

export const dynamicParams = false;

function getData(params: PageParams) {
  const districtName = getDistrictName(params.city, params.district);
  if (!districtName) return null;

  const search = searchName(params.city, districtName);
  const full = fullName(params.city, districtName);
  const official = officialName(params.city, districtName);
  const copy = districtCopy(`${params.city}/${params.district}`, search, full, official);

  return {
    districtName,
    search,
    full,
    official,
    cityData: regions[params.city as CityKey],
    url: `${SITE}${areaUrl(params.city, params.district)}`,
    copy,
    title: copy.title,
    description: copy.description,
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const data = getData(await params);

  if (!data) {
    return { robots: { index: false, follow: false } };
  }

  return {
    title: { absolute: data.title },
    description: data.description,
    alternates: { canonical: data.url },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      siteName: COMPANY,
      title: data.title,
      description: data.description,
      url: data.url,
      images: [
        {
          url: `${SITE}${MAIN_IMAGE}`,
          alt: `${data.full} 샷시 교체 참고 사진`,
        },
      ],
    },
    robots: { index: true, follow: true },
  };
}

export default async function DistrictPage({ params }: PageProps) {
  const resolved = await params;
  const data = getData(resolved);

  if (!data) return notFound();

  const { city, district } = resolved;
  const { districtName, search, full, official, cityData } = data;
  const local = localParagraphs(city, district, districtName);
  const nearby = nearbyDistricts(city, district);

  const faqs = data.copy.faqs;
  const nearList = nearSlice(nearby, Object.keys(cityData.districts).indexOf(district), 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd([
          businessSchema([official]),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: COMPANY, path: "/" },
            { name: "시공지역", path: "/area" },
            { name: `${cityData.name} 샷시`, path: `/area/${city}` },
            { name: `${search} 샷시 교체`, path: areaUrl(city, district) },
          ]),
        ])}
      />

      <main>
        <section
          style={{
            position: "relative",
            minHeight: 460,
            display: "flex",
            alignItems: "center",
            color: "#fff",
            overflow: "hidden",
          }}
        >
          <Image
            src={MAIN_IMAGE}
            alt={`${full} 샷시 교체 참고 이미지`}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(8,16,24,.9), rgba(8,16,24,.3))",
            }}
          />

          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <p className="hero-kicker">CHANGHO MINJOK / {cityData.name}</p>

            <h1
              style={{
                fontSize: "clamp(32px, 6vw, 54px)",
                lineHeight: 1.2,
                margin: "14px 0",
              }}
            >
              {full}
              <br />
              {data.copy.h1b}
            </h1>

            <p style={{ maxWidth: 620, lineHeight: 1.7, opacity: 0.92 }}>
              {data.copy.lead}
            </p>

            <a href={TEL} className="btn btn-white" style={{ marginTop: 28 }}>
              <Phone size={17} />
              {search} 샷시 견적 상담
            </a>
          </div>
        </section>

        {/* 서비스별 페이지 */}
        <section className="section">
          <div className="container">
            <span className="eyebrow">SERVICES</span>

            <h2 className="section-title">
              {search} 샷시 교체
              <br />
              {data.copy.servicesTitle}
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
                gap: 18,
                marginTop: 30,
              }}
            >
              {SERVICE_KEYS.map((key) => (
                <Link
                  key={key}
                  href={serviceUrl(city, district, key)}
                  style={{
                    border: "1px solid #e0e5e9",
                    background: "#fff",
                    color: "#202a33",
                    textDecoration: "none",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ position: "relative", height: 190 }}>
                    <Image
                      src={services[key].hero}
                      alt={`${full} ${services[key].shortName} 참고 사진`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  <div style={{ padding: 22 }}>
                    <h3 style={{ margin: "0 0 8px", fontSize: 19 }}>
                      {search} {services[key].keyword}
                    </h3>
                    <p style={{ margin: 0, color: "#5a6670", lineHeight: 1.6 }}>
                      {services[key].description}
                    </p>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        marginTop: 14,
                        fontWeight: 700,
                      }}
                    >
                      자세히 보기 <ArrowUpRight size={16} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 지역 특징 */}
        <section className="section section-light">
          <div className="container">
            <span className="eyebrow">LOCAL GUIDE</span>

            <h2 className="section-title">
              {full}
              <br />
              {data.copy.localTitle}
            </h2>

            {local.map((text) => (
              <p className="section-desc" key={text}>
                {text}
              </p>
            ))}

            <h3 style={{ marginTop: 34, fontSize: 20 }}>{data.copy.tipsTitle}</h3>
            <ul style={{ marginTop: 14, paddingLeft: 20, lineHeight: 1.9, color: "#3d4954" }}>
              {data.copy.tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container">
            <span className="eyebrow">FAQ</span>

            <h2 className="section-title">
              {search} 샷시 교체
              <br />
              자주 묻는 질문
            </h2>

            <div style={{ display: "grid", gap: 14, marginTop: 30 }}>
              {faqs.map((item) => (
                <details
                  key={item.q}
                  style={{
                    padding: 22,
                    border: "1px solid #dce2e6",
                    background: "#fff",
                  }}
                >
                  <summary style={{ cursor: "pointer", fontWeight: 700 }}>
                    {item.q}
                  </summary>
                  <p style={{ marginTop: 12, color: "#4b5863", lineHeight: 1.7 }}>
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 같은 도시 다른 구·군 */}
        <section className="section section-light">
          <div className="container">
            <span className="eyebrow">NEARBY DISTRICTS</span>

            <h2 className="section-title">
              {cityData.name} 다른 지역
              <br />
              샷시 교체 안내
            </h2>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 25 }}>
              {nearList.map((item) => (
                <Link
                  key={item.slug}
                  href={areaUrl(city, item.slug)}
                  style={{
                    padding: "12px 17px",
                    border: "1px solid #dce2e6",
                    background: "#fff",
                    fontSize: 14,
                    color: "#344450",
                    textDecoration: "none",
                  }}
                >
                  {searchName(city, item.name)} 샷시 교체
                </Link>
              ))}
            </div>

            <div style={{ marginTop: 30 }}>
              <Link href={`/area/${city}`} className="btn btn-dark">
                <MapPin size={17} />
                {cityData.name} 전체 지역 보기
              </Link>
            </div>
          </div>
        </section>

        {/* 상담 */}
        <section className="section">
          <div className="container" style={{ textAlign: "center" }}>
            <span className="eyebrow">CONTACT & ESTIMATE</span>

            <h2 className="section-title">
              {search} 샷시 교체
              <br />
              {data.copy.contactTitle}
            </h2>

            <p className="section-desc">{data.copy.contactText}</p>

            <a href={TEL} className="btn btn-dark" style={{ marginTop: 25 }}>
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
                창호의민족
                <span>CHANGHO MINJOK</span>
              </div>
              <p>
                {official}
                <br />
                샷시 교체 및 창호 설치
              </p>
            </div>
            <div>
              <p>대표 김수형 · 견적 및 시공 상담</p>
              <a href={TEL}>{PHONE}</a>
            </div>
          </div>
          <div className="footer-bottom">
            © {new Date().getFullYear()} CHANGHO MINJOK. All Rights Reserved.
          </div>
        </div>
      </footer>

      <div className="mobile-call">
        <a href={TEL}>☎ 전화 상담 · {PHONE}</a>
      </div>
    </>
  );
}
