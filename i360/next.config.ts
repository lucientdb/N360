import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "n360agency.com" }],
        destination: "https://www.n360agency.com/:path*",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
