/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enables static export (Next.js 13+)
  trailingSlash: true // Optional but helpful for Netlify + routing
};

module.exports = nextConfig;
