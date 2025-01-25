import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'kr', 'ru'],
    defaultLocale: 'kr',
  },
};

export default nextConfig;
