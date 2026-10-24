import type { Metadata, Viewport } from "next";
import {
  Instrument_Serif,
  Noto_Sans_SC,
  Noto_Serif_SC,
  Sora,
} from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { brand, defaultSeo, siteUrl } from "@/content/site";
import "./globals.css";

const notoSerif = Noto_Serif_SC({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
});

const instrument = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const sora = Sora({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const notoSans = Noto_Sans_SC({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#030306",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultSeo.defaultTitle,
    template: defaultSeo.titleTemplate,
  },
  description: defaultSeo.description,
  applicationName: brand.full,
  authors: [{ name: "上海新致软件股份有限公司" }],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: brand.full,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${notoSerif.variable} ${instrument.variable} ${sora.variable} ${notoSans.variable}`}
    >
      <body>
        <a className="skip" href="#main">
          跳到主要内容
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
