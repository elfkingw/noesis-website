"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { brand, cta, nav } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="nav-inner">
        <Link
          className="brand"
          href="/"
          aria-label={`${brand.full} 首页`}
          onClick={closeMenu}
        >
          <span className="brand-zh">{brand.zh}</span>
          <span className="brand-en">{brand.en}</span>
        </Link>
        <button
          className="nav-toggle"
          type="button"
          aria-label={open ? "关闭菜单" : "打开菜单"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav-links${open ? " is-open" : ""}`}>
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link className="nav-cta" href={cta.href} onClick={closeMenu}>
              {cta.label}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
