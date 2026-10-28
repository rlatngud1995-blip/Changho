
import type { Metadata, Viewport } from "next";
import SiteHeader from "../components/SiteHeader";
import "./globals.css";

const SITE_URL = "https://geujipwindow.com";

const FAVICON =
  "/8E8F15BB-A6AB-4A47-AF39-8DE4D6259BBF.png";

const SITE_DESCRIPTION =
  "부산·울산·창원 샷시 교체 전문 그집창호. 아파트·단독주택·빌라 창호 설치, 현장 실측 및 견적 상담 안내.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  applicationName: "그집창호",

  title: {
    default: "그집창호 | 부산·울산·창원 샷시 교체",
    template: "%s | 그집창호",
  },

  description: SITE_DESCRIPTION,

  keywords: [
    "그집창호",
    "부산 샷시",
    "울산 샷시",
    "창원 샷시",
    "샷시 교체",
    "창호 교체",
    "아파트 샷시 교체",
    "단독주택 샷시 교체",
    "빌라 샷시 교체",
  ],

  icons: {
    icon: [
      {
        url: FAVICON,
        type: "image/png",
        sizes: "any",
      },
    ],
    shortcut: FAVICON,
    apple: [
      {
        url: FAVICON,
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "그집창호",
    title: "그집창호 | 부산·울산·창원 샷시 교체",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: [
      {
        url: "/IMG_1944.jpeg",
        alt: "그집창호 샷시 및 창호 설치",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "그집창호 | 부산·울산·창원 샷시 교체",
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
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
