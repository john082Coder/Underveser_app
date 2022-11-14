/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify:"disabled",
  images: {
    domains: ["m.media-amazon.com", "imdb-api.com"],
  },
};

module.exports = nextConfig;
