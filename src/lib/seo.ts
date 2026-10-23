import type { Metadata } from "next";
import { brand, defaultSeo, siteUrl } from "@/content/site";

/** Pass a short page title (e.g. "产品平台"). Home may pass the full default title. */
export function pageMetadata(
  title: string,
  description: string,
  path = "/",
): Metadata {
  const isHome = path === "/";
  const displayTitle = isHome ? defaultSeo.defaultTitle : title;

  return {
    title: isHome ? { absolute: defaultSeo.defaultTitle } : displayTitle,
    description,
    alternates: { canonical: `${siteUrl}${path}` },
    openGraph: {
      title: isHome
        ? defaultSeo.defaultTitle
        : defaultSeo.titleTemplate.replace("%s", title),
      description,
      url: `${siteUrl}${path}`,
      siteName: brand.full,
      locale: "zh_CN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isHome
        ? defaultSeo.defaultTitle
        : defaultSeo.titleTemplate.replace("%s", title),
      description,
    },
  };
}
