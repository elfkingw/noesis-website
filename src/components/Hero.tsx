import type { ReactNode } from "react";
import { brand, company } from "@/content/site";
import { Button } from "./Button";

type Cta = { href: string; label: string };

type Props = {
  headline: string;
  lead: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  showMeta?: boolean;
  compact?: boolean;
  simple?: boolean;
  aside?: ReactNode;
};

export function Hero({
  headline,
  lead,
  primaryCta,
  secondaryCta,
  showMeta = false,
  compact = false,
  simple = false,
  aside,
}: Props) {
  return (
    <section
      className={`hero${compact ? " hero-page" : ""}${simple ? " hero-simple" : ""}`}
    >
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-brand reveal">
            <span className="zh">{brand.zh}</span>
            <span className="en">{brand.en}</span>
          </p>
          <h1 className="reveal reveal-delay-1">{headline}</h1>
          <p className="hero-lead reveal reveal-delay-2">{lead}</p>
          {(primaryCta || secondaryCta) && (
            <div className="hero-actions reveal reveal-delay-3">
              {primaryCta && (
                <Button href={primaryCta.href} variant="accent">
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="ghost">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
          {showMeta && (
            <div className="hero-meta reveal reveal-delay-4">
              <span>
                <strong>{company.name}</strong>
              </span>
              <span>{company.tagline}</span>
            </div>
          )}
        </div>
        {aside}
      </div>
    </section>
  );
}
