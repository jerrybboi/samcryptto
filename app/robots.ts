import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.sammycryptto.fun/sitemap.xml",
    host: "https://www.sammycryptto.fun",
  };
}
