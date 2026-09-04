import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://samcryptto.vercel.app/sitemap.xml",
    host: "https://samcryptto.vercel.app",
  };
}
