/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Prevent build from failing due to ESLint errors
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Prevent build from failing due to TypeScript errors
  typescript: {
    ignoreBuildErrors: true,
  },

  // Optional: allow optimized images from anywhere
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;