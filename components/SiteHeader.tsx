
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";

const menuItems = [
  { name: "홈", href: "/" },
  { name: "아파트 샷시 교체·설치", href: "/services/apartment" },
  { name: "단독주택 샷시 교체·설치", href: "/services/house" },
  { name: "빌라 샷시 교체·설치", href: "/services/villa" },
  { name: "시공과정", href: "/process" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <Link
            href="/"
            className="logo"
            onClick={() => setOpen(false)}
          >
            그집창호
            <span>GEUJIP WINDOW</span>
          </Link>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <a
              href="tel:01081763350"
              className="header-contact"
            >
              <Phone size={15} style={{ marginRight: 7 }} />
              010-8176-3350
            </a>

            <button
              type="button"
              className="mobile-menu-button"
              onClick={() => setOpen(!open)}
              aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
              aria-expanded={open}
              style={{ display: "flex", alignItems: "center" }}
            >
              {open ? <X size={27} /> : <Menu size={27} />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          style={{
            position: "fixed",
            top: 82,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99,
            background: "rgba(0,0,0,.4)",
          }}
          onClick={() => setOpen(false)}
        >
          <nav
            aria-label="전체 메뉴"
            style={{
              background: "#fff",
              padding: "30px 24px 38px",
              maxHeight: "calc(100dvh - 82px)",
              overflowY: "auto",
              boxShadow: "0 15px 35px rgba(0,0,0,.08)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                maxWidth: 1200,
                margin: "0 auto",
              }}
            >
              <p className="eyebrow">GEUJIP WINDOW / MENU</p>

              {menuItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "19px 0",
                    borderBottom: "1px solid #e3e7eb",
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                >
                  <span>
                    <span
                      style={{
                        color: "#8995a0",
                        fontSize: 11,
                        marginRight: 15,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.name}
                  </span>
                  <ArrowUpRight size={18} />
                </Link>
              ))}

              <a
                href="tel:01081763350"
                className="btn btn-dark"
                style={{
                  marginTop: 30,
                  width: "100%",
                  gap: 10,
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
