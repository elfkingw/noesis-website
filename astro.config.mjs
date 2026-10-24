import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://noesis.example.com",
  output: "static",
  i18n: {
    defaultLocale: "zh",
    locales: ["zh", "en", "en-US"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap()],
});
