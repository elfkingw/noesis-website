export const brand = {
  zh: "新致新知",
  en: "Noesis AI",
  full: "新致新知 Noesis AI",
} as const;

export const company = {
  name: "上海新致软件股份有限公司",
  tagline: "科技赋能·智慧金融",
} as const;

export const nav = [
  { href: "/platform", label: "产品平台" },
  { href: "/solutions", label: "解决方案" },
  { href: "/cases", label: "客户案例" },
] as const;

export const cta = {
  href: "/contact",
  label: "预约演示",
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://noesis.example.com";

export const defaultSeo = {
  titleTemplate: "%s — 新致新知 Noesis AI",
  defaultTitle: "新致新知 Noesis AI — 企业级智能体平台",
  description:
    "新致新知 Noesis AI：企业级「龙虾」式智能体平台。Skills 驱动智能员工，安全可控，服务银行与大型企业。",
} as const;
