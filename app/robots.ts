import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "Yeti", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    sitemap: "https://geujipwindow.com/sitemap.xml",
    host: "https://geujipwindow.com",
  };
}
