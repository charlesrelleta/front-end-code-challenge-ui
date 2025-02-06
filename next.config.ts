import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { domains: ["picsum.photos"] },
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  env: {
    NEXT_PUBLIC_BASE_PATH: "http://localhost:4001",
  },
};

export default nextConfig;
