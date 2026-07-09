const PRODUCTION_SITE_URL = "https://www.n360agency.com"

export function getSiteUrl(): string {
  const fromEnv =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    process.env.SITE_URL?.replace(/\/$/, "")

  if (fromEnv) return fromEnv

  if (process.env.NODE_ENV === "production") {
    return PRODUCTION_SITE_URL
  }

  return "http://localhost:3000"
}

export const siteConfig = {
  name: "N360 Agency",
  url: PRODUCTION_SITE_URL,
  domain: "n360agency.com",
  email: "contact@n360agency.com",
  newsletterDomain: "newsletters.n360agency.com",
} as const
