/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["connpass.com", "aruminium.github.io", "user-images.githubusercontent.com"]
  }
};

module.exports = nextConfig;
