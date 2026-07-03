import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    googleVerificationCode: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION_CODE,
  },
};

export default nextConfig;
