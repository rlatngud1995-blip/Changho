
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ArrowUpRight,
  Phone,
  ChevronDown,
  MapPin,
} from "lucide-react";

const serviceMenus = [
  {
    name: "아파트 샷시 교체·설치",
    href: "/services/apartment",
  },
  {
    name: "단독주택 샷시 교체·설치",
    href: "/services/house",
  },
  {
    name: "빌라 샷시 교체·설치",
    href: "/services/villa",
  },
];

const regionMenus = [
  { name: "부산", href: "/area/busan" },
  { name: "울산", href: "/area/ulsan" },
  { name: "창원", href: "/area/changwon" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [regionOpen, setRegionOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setRegionOpen(false);
  };

  return (
    <>
      <header
        className="header"
        style={{
          position: "relative",
          zIndex: 110,
        }}
      >
        <div className="container header-inner">
          <Link
            href="/"
            className="logo"
            onClick={closeMenu}
          >
            그집창호
            <span>GEUJIP WINDOW</span>
          </Link>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            <a
              href="tel:01081763350"
              className="header-contact"
            >
              <Phone
                size={15}
                style={{ marginRight: 7 }}
              />
              010-8176-3350
            </a>

            <button
              type="button"
              className="mobile-menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={
                menuOpen ? "메뉴 닫기" : "메뉴 열기"
              }
              aria-expanded={menuOpen}
              aria-controls="site-navigation"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {menuOpen ? (
                <X size={27} />
              ) : (
                <Menu size={27} />
              )}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(0,0,0,.45)",
            overflowY: "auto",
          }}
          onClick={closeMenu}
        >
          <nav
            id="site-navigation"
            aria-label="전체 메뉴"
            style={{
              background: "#fff",
              padding: "110px 24px 38px",
              boxShadow:
                "0 15px 35px rgba(0,0,0,.1)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                maxWidth: 1200,
                margin: "0 auto",
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  letterSpacing: 2,
                  color: "#8995a0",
                  fontWeight: 700,
                  marginBottom: 22,
                }}
              >
                GEUJIP WINDOW / MENU
              </p>

              <Link
                href="/"
                onClick={closeMenu}
                style={menuStyle}
              >
                <span>홈</span>
                <ArrowUpRight size={18} />
              </Link>

              {serviceMenus.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  style={menuStyle}
                >
                  <span>{item.name}</span>
                  <ArrowUpRight size={18} />
                </Link>
              ))}

              <Link
                href="/process"
                onClick={closeMenu}
                style={menuStyle}
              >
                <span>시공과정</span>
                <ArrowUpRight size={18} />
              </Link>

              {/* 지역별 페이지 */}
              <button
                type="button"
                onClick={() =>
                  setRegionOpen(!regionOpen)
                }
                aria-expanded={regionOpen}
                style={{
                  ...menuStyle,
                  width: "100%",
                  background: "transparent",
                  borderTop: 0,
                  borderLeft: 0,
                  borderRight: 0,
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <MapPin size={18} />
                  시공지역
                </span>

                <ChevronDown
                  size={19}
                  style={{
                    transform: regionOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "transform .2s",
                  }}
                />
              </button>

              {regionOpen && (
                <div
                  style={{
                    background: "#f4f6f8",
                    padding: "12px 20px",
                  }}
                >
                  <Link
                    href="/area"
                    onClick={closeMenu}
                    style={subMenuStyle}
                  >
                    전체 시공지역
                    <ArrowUpRight size={15} />
                  </Link>

                  {regionMenus.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      style={subMenuStyle}
                    >
                      {item.name} 샷시 교체·설치
                      <ArrowUpRight size={15} />
                    </Link>
                  ))}
                </div>
              )}

              <a
                href="tel:01081763350"
                className="btn btn-dark"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  marginTop: 30,
                  width: "100%",
                }}
              >
                <Phone size={17} />
                전화 견적 상담
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

const menuStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 15,
  padding: "20px 0",
  borderBottom: "1px solid #e3e7eb",
  color: "#202a33",
  fontSize: 16,
  fontWeight: 600,
  textDecoration: "none",
} as const;

const subMenuStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 12,
  padding: "14px 0",
  borderBottom: "1px solid #e1e6ea",
  color: "#455462",
  fontSize: 14,
  textDecoration: "none",
} as const;
