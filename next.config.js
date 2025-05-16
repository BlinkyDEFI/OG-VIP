/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // Use 'standalone' instead of 'export'
  trailingSlash: true, // Optional, keep if needed for routing
};

module.exports = nextConfig;
