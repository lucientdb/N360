import type { MetadataRoute } from "next"
import { poles } from "@/lib/poles"
import { getSiteUrl } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl()
  const lastModified = new Date()

  const staticPages = [
    "",
    "/a-propos",
    "/contact",
    "/devis",
    "/poles",
    "/cgu",
    "/confidentialite",
    "/mentions-legales",
  ]

  return [
    ...staticPages.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...poles.map((pole) => ({
      url: `${siteUrl}/poles/${pole.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]
}
