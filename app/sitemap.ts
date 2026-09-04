import type { MetadataRoute } from "next";

const routes = [
  "",
  "/create",
  "/work",
  "/services",
  "/about",
  "/contact",
  "/terms",
  "/privacy",
  "/disclaimer",
  "/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://samcryptto.vercel.app";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/terms") || route.startsWith("/privacy") || route.startsWith("/disclaimer") || route.startsWith("/cookies") ? 0.3 : 0.8,
  }));
}
