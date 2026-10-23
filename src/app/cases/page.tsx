import Link from "next/link";
import { Hero } from "@/components/Hero";
import { CtaBand, Section, TrustStrip } from "@/components/Section";
import {
  caseStudies,
  casesCta,
  casesHero,
  casesSeo,
  casesTrust,
} from "@/content/cases";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  casesSeo.title,
  casesSeo.description,
  "/cases",
);

export default function CasesPage() {
  return (
    <main id="main">
      <Hero
        compact
        simple
        headline={casesHero.headline}
        lead={casesHero.lead}
        primaryCta={casesHero.primaryCta}
        secondaryCta={casesHero.secondaryCta}
      />

      <Section tone="void">
        <TrustStrip label={casesTrust.label} items={[...casesTrust.items]} />
      </Section>

      <Section tone="light">
        {caseStudies.map((study) => (
          <article key={study.id} className="case-block" id={study.id}>
            <p className="case-label">{study.label}</p>
            <h2>{study.title}</h2>
            <p className="lede">{study.lede}</p>
            <ul className="case-points">
              {study.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
              <li>
                <Link href={study.link.href}>{study.link.label}</Link>
              </li>
            </ul>
          </article>
        ))}
      </Section>

      <CtaBand {...casesCta} />
    </main>
  );
}
