import type { NextConfig } from "next";

/** Set `GITHUB_PAGES=true` only for the GitHub Pages static export build. */
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repoBase = "/noesis-website";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export" as const,
        basePath: repoBase,
        assetPrefix: repoBase,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
