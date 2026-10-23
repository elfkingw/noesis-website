import Link from "next/link";
import { brand, company, nav, cta } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="zh">{brand.zh}</div>
          <div className="en">{brand.en}</div>
        </div>
        <p style={{ margin: 0 }}>
          {company.name} · {company.tagline}
        </p>
        <div className="footer-meta">
          <Link href="/">首页</Link>
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href={cta.href}>{cta.label}</Link>
        </div>
      </div>
    </footer>
  );
}
