import { MetadataRoute } from "next";
import { siteContent } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mundotelecom.com.br";

  const staticRoutes = [
    "",
    "/sobre-nos",
    "/servicos",
    "/empresas",
    "/governo",
    "/produtos",
    "/blog",
    "/contato",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const blogRoutes = siteContent.blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
