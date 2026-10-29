import type { NextConfig } from "next";

// Set via .env.production (or the CI workflow) to the repo name, e.g. "/EslamAndLolla",
// when deploying to a project page like username.github.io/repo-name.
// Leave empty for a user/org page (username.github.io) or a custom domain.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
