import type { ReactNode } from "react";
import { Button } from "./Button";

type Tone = "void" | "surface" | "light";

const toneClass: Record<Tone, string> = {
  void: "section section-void",
  surface: "section section-surface",
  light: "section section-light",
};

export function Section({
  tone = "void",
  id,
  children,
  className = "",
}: {
  tone?: Tone;
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`${toneClass[tone]} ${className}`.trim()}>
      <div className="wrap">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  desc,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  center?: boolean;
}) {
  return (
    <>
      {eyebrow && (
        <p
          className="eyebrow"
          style={center ? { justifyContent: "center" } : undefined}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="section-title">{title}</h2>
      {desc && <p className="section-desc">{desc}</p>}
    </>
  );
}

export function TrustStrip({
  label,
  items,
}: {
  label: string;
  items: { name: string; note?: string }[];
}) {
  return (
    <div className="trust-strip">
      <div className="label">{label}</div>
      <div className="trust-logos">
        {items.map((item) => (
          <span key={item.name}>
            {item.name}
            {item.note ? <em>{item.note}</em> : null}
          </span>
        ))}
      </div>
    </div>
  );
}

export function BentoGrid({
  items,
}: {
  items: {
    id: string;
    title: string;
    body: string;
    featured?: boolean;
    wide?: boolean;
    tall?: boolean;
  }[];
}) {
  return (
    <div className="bento">
      {items.map((item) => {
        const cls = [
          "bento-card",
          item.featured ? "featured" : "",
          item.wide ? "wide" : "",
          item.tall ? "tall" : "",
        ]
          .filter(Boolean)
          .join(" ");
        return (
          <article key={item.id} className={cls}>
            <div className="bento-icon">{item.id}</div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        );
      })}
    </div>
  );
}

export function FeatureStack({
  rows,
}: {
  rows: { title: string; body: string }[];
}) {
  return (
    <div className="feature-stack">
      {rows.map((row) => (
        <div key={row.title} className="feature-row">
          <h3>{row.title}</h3>
          <p>{row.body}</p>
        </div>
      ))}
    </div>
  );
}

export function CtaBand({
  eyebrow,
  title,
  desc,
  primary,
  secondary,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="section-void cta-band">
      <div className="wrap">
        {eyebrow && (
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            {eyebrow}
          </p>
        )}
        <h2 className="section-title">{title}</h2>
        {desc && <p className="section-desc">{desc}</p>}
        <div className="cta-actions">
          <Button href={primary.href} variant="accent">
            {primary.label}
          </Button>
          {secondary && (
            <Button href={secondary.href} variant="ghost">
              {secondary.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
