const siteUrl = "https://example.com";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SITE_URL: siteUrl,
  },
};

export default nextConfig;
