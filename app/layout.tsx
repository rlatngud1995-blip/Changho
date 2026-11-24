
import type { Metadata, Viewport } from "next";
import SiteHeader from "../components/SiteHeader";
import "./globals.css";
import { businessSchema, jsonLd } from "../lib/geujip";

const SITE_URL = "https://geujipwindow.com";


const SITE_DESCRIPTION =
  "부산·울산·창원 샷시 교체 전문 창호의민족. 아파트·단독주택·빌라 창호 설치, 현장 실측 및 견적 상담 안내.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  applicationName: "창호의민족",

  title: {
    default: "샷시 교체 창호의민족 | 부산·울산·창원 아파트·빌라·주택 창호 교체",
    template: "%s | 창호의민족",
  },

  description: SITE_DESCRIPTION,

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },

  alternates: {
    types: { "application/rss+xml": `${SITE_URL}/rss.xml` },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },

  authors: [{ name: "창호의민족 (대표 김수형)" }],
  formatDetection: { telephone: true },

  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "창호의민족",
    title: "창호의민족 | 부산·울산·창원 샷시 교체",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: [
      {
        url: "/IMG_1944.jpeg",
        alt: "창호의민족 샷시 및 창호 설치",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "창호의민족 | 부산·울산·창원 샷시 교체",
    description: SITE_DESCRIPTION,
    images: ["/IMG_1944.jpeg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="naver-site-verification"
          content="8654af37eb2e0695402a7c2ad07d8700f0bb742e"
        />
      </head>

      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(
            businessSchema(["부산광역시", "울산광역시", "경상남도 창원시"])
          )}
        />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
