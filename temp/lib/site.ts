const PRODUCTION_SITE_URL = "https://www.numerique360agency.com"

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
  fullName: "N360 Agency | Numérique 360 Agency",
  url: PRODUCTION_SITE_URL,
  domain: "numerique360agency.com",
  email: "contact@numerique360agency.com",
  newsletterDomain: "newsletters.numerique360agency.com",
} as const
