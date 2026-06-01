/** @type {import('next').NextConfig} */
const isGHPages = process.env.GITHUB_PAGES === "1";

const nextConfig = {
  output: "export",
  ...(isGHPages && {
    basePath: "/specsai-frontend",
    assetPrefix: "/specsai-frontend/",
  }),
};

export default nextConfig;
