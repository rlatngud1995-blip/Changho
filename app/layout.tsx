
import type { Metadata, Viewport } from "next";
import SiteHeader from "../components/SiteHeader";
import "./globals.css";

const SITE_URL = "https://geujipwindow.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "그집창호 | 프리미엄 샷시 교체·설치 전문",
    template: "%s | 그집창호",
  },

  description:
    "그집창호는 아파트, 단독주택, 빌라 샷시 교체 및 설치 전문업체입니다. 정확한 현장 실측부터 맞춤 견적, 창호 교체, 꼼꼼한 마감까지 상담하세요. 010-8176-3350",

  keywords: [
    "그집창호",
    "샷시교체",
    "샷시설치",
    "창호교체",
    "창호설치",
    "아파트 샷시교체",
    "단독주택 샷시교체",
    "빌라 샷시교체",
    "베란다 샷시",
    "샷시 견적",
    "창호 전문업체",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: "그집창호",
    title: "그집창호 | 프리미엄 창호 전문기업",
    description:
      "좋은 창은 공간의 가치를 바꿉니다. 아파트·단독주택·빌라 샷시 교체 및 설치 전문.",
    images: [
      {
        url: "/IMG_1944.jpeg",
        alt: "그집창호 샷시 교체 및 창호 설치",
      },
    ],
  },

  verification: {
    other: {
      "naver-site-verification":
        "8654af37eb2e0695402a7c2ad07d870f0bb742e",
    },
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
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
