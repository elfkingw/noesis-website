/**
 * GitHub Pages static export.
 * Temporarily moves `src/app/api` aside because `output: "export"` cannot include Route Handlers.
 */
import { existsSync, mkdirSync, renameSync, rmSync, writeFileSync } from "fs";
import { join } from "path";
import { spawnSync } from "child_process";

const root = process.cwd();
const apiDir = join(root, "src/app/api");
const stashDir = join(root, ".pages-api-stash");
const stashApi = join(stashDir, "api");

function restore() {
  if (existsSync(stashApi) && !existsSync(apiDir)) {
    renameSync(stashApi, apiDir);
  }
  if (existsSync(stashDir)) {
    try {
      rmSync(stashDir, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
  }
}

process.on("exit", restore);
process.on("SIGINT", () => {
  restore();
  process.exit(1);
});
process.on("SIGTERM", () => {
  restore();
  process.exit(1);
});

try {
  if (existsSync(apiDir)) {
    mkdirSync(stashDir, { recursive: true });
    if (existsSync(stashApi)) {
      throw new Error(
        `Stash already exists at ${stashApi}; clean up and retry`,
      );
    }
    renameSync(apiDir, stashApi);
  }

  const env = {
    ...process.env,
    GITHUB_PAGES: "true",
    NEXT_PUBLIC_STATIC_EXPORT: "true",
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://elfkingw.github.io/noesis-website",
  };

  const result = spawnSync("npx", ["next", "build"], {
    cwd: root,
    env,
    stdio: "inherit",
    shell: process.platform === "win32",
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }

  const outDir = join(root, "out");
  if (existsSync(outDir)) {
    writeFileSync(join(outDir, ".nojekyll"), "");
  }
} finally {
  restore();
}
