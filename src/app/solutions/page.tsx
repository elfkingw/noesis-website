import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import { OpsFrame } from "@/components/ProductFrames";
import {
  BentoGrid,
  CtaBand,
  FeatureStack,
  Section,
  SectionHeader,
} from "@/components/Section";
import {
  creditSolution,
  fdeSolution,
  opsSolution,
  solutionsChooser,
  solutionsCta,
  solutionsHero,
  solutionsSeo,
} from "@/content/solutions";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  solutionsSeo.title,
  solutionsSeo.description,
  "/solutions",
);

export default function SolutionsPage() {
  return (
    <main id="main">
      <Hero
        compact
        simple
        headline={solutionsHero.headline}
        lead={solutionsHero.lead}
        primaryCta={solutionsHero.primaryCta}
        secondaryCta={solutionsHero.secondaryCta}
      />

      <Section tone="light" id={creditSolution.id}>
        <SectionHeader
          eyebrow={creditSolution.eyebrow}
          title={creditSolution.title}
          desc={creditSolution.desc}
        />
        <BentoGrid
          items={creditSolution.cards.map((c) => ({
            id: c.icon,
            title: c.title,
            body: c.body,
          }))}
        />
        <p style={{ marginTop: "1.75rem" }}>
          <Button href={creditSolution.cta.href} variant="outline-light">
            {creditSolution.cta.label}
          </Button>
        </p>
      </Section>

      <Section tone="void" id={opsSolution.id}>
        <div className="split-showcase">
          <div>
            <SectionHeader
              eyebrow={opsSolution.eyebrow}
              title={opsSolution.title}
              desc={opsSolution.desc}
            />
            <FeatureStack rows={[...opsSolution.rows]} />
            <p style={{ marginTop: "1.5rem" }}>
              <Button href={opsSolution.cta.href} variant="ghost">
                {opsSolution.cta.label}
              </Button>
            </p>
          </div>
          <OpsFrame
            title={opsSolution.demo.title}
            alert={opsSolution.demo.alert}
            steps={[...opsSolution.demo.steps]}
            flat
          />
        </div>
      </Section>

      <Section tone="light" id={fdeSolution.id}>
        <SectionHeader
          eyebrow={fdeSolution.eyebrow}
          title={fdeSolution.title}
          desc={fdeSolution.desc}
        />
        <BentoGrid
          items={fdeSolution.cards.map((c) => ({
            id: c.icon,
            title: c.title,
            body: c.body,
          }))}
        />
      </Section>

      <Section tone="surface">
        <SectionHeader
          eyebrow={solutionsChooser.eyebrow}
          title={solutionsChooser.title}
        />
        <div style={{ marginTop: "2rem" }}>
          <FeatureStack rows={[...solutionsChooser.rows]} />
        </div>
      </Section>

      <CtaBand {...solutionsCta} />
    </main>
  );
}
