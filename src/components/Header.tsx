"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { brand, cta, nav } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const menuId = useId();
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const keyboardOpen = useRef(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const sync = () => {
      document.documentElement.style.setProperty(
        "--header-h",
        `${el.offsetHeight}px`,
      );
    };
    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 861px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;

    const root = document.documentElement;
    root.classList.add("nav-open");
    const navEl = navRef.current;
    const toggle = toggleRef.current;

    const items = () =>
      Array.from(navEl?.querySelectorAll<HTMLElement>("a[href]") ?? []);

    const frame = window.requestAnimationFrame(() => {
      if (keyboardOpen.current) items()[0]?.focus();
    });

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle?.focus();
        return;
      }
      if (event.key !== "Tab") return;
      const links = items();
      if (links.length === 0) return;
      const first = links[0];
      const last = links[links.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && (active === first || active === toggle)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKey);
      root.classList.remove("nav-open");
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      ref={headerRef}
      className={`site-header${scrolled ? " is-scrolled" : ""}${open ? " is-menu-open" : ""}`}
    >
      {open
        ? createPortal(
            <button
              type="button"
              className="nav-backdrop"
              aria-label="关闭菜单"
              tabIndex={-1}
              onClick={closeMenu}
            />,
            document.body,
          )
        : null}
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
          ref={toggleRef}
          className="nav-toggle"
          type="button"
          aria-label={open ? "关闭菜单" : "打开菜单"}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={(event) => {
            setOpen((value) => {
              const next = !value;
              keyboardOpen.current = next && event.detail === 0;
              return next;
            });
          }}
        >
          <span className="nav-toggle-bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
        <nav
          ref={navRef}
          id={menuId}
          className={`site-nav${open ? " is-open" : ""}`}
          aria-label="主导航"
        >
          <ul className="nav-links">
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
        </nav>
      </div>
    </header>
  );
}
