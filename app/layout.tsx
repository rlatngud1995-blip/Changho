
import type { Metadata, Viewport } from "next";
import SiteHeader from "../components/SiteHeader";
import "./globals.css";

const SITE = "https://geujipwindow.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),

  applicationName: "그집창호",

  title: {
    default: "그집창호 | 부산·울산·창원 샷시 교체·설치",
    template: "%s | 그집창호",
  },

  description:
    "그집창호는 부산·울산·창원 아파트, 단독주택, 빌라 샷시 교체 및 창호 설치 상담을 안내합니다. 베란다 샷시와 거실창 교체, 현장 실측 및 견적 문의.",

  keywords: [
    "그집창호",
    "부산 샷시",
    "울산 샷시",
    "창원 샷시",
    "샷시 교체",
    "창호 교체",
    "아파트 샷시",
    "단독주택 샷시",
    "빌라 샷시",
  ],

  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "그집창호",
    title: "그집창호 | 부산·울산·창원 샷시 교체",
    description:
      "부산·울산·창원 아파트, 단독주택, 빌라 샷시 교체 및 창호 설치 상담.",
    url: SITE,
    images: [
      {
        url: "/IMG_1944.jpeg",
        alt: "그집창호 창호 설치",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
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
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
