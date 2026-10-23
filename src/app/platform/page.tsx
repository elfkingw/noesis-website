import { Hero } from "@/components/Hero";
import { SkillMarketFrame } from "@/components/ProductFrames";
import {
  CtaBand,
  FeatureStack,
  Section,
  SectionHeader,
} from "@/components/Section";
import {
  platformConsole,
  platformCta,
  platformFeatures,
  platformHero,
  platformSeo,
} from "@/content/platform";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  platformSeo.title,
  platformSeo.description,
  "/platform",
);

export default function PlatformPage() {
  return (
    <main id="main">
      <Hero
        compact
        simple
        headline={platformHero.headline}
        lead={platformHero.lead}
        primaryCta={platformHero.primaryCta}
        secondaryCta={platformHero.secondaryCta}
      />

      <Section tone="surface">
        <div className="split-showcase">
          <div>
            <SectionHeader
              eyebrow={platformConsole.eyebrow}
              title={platformConsole.title}
              desc={platformConsole.desc}
            />
          </div>
          <SkillMarketFrame
            title={platformConsole.marketplaceTitle}
            skills={[...platformConsole.skills]}
          />
        </div>
      </Section>

      <Section tone="light">
        <SectionHeader
          eyebrow={platformFeatures.eyebrow}
          title={platformFeatures.title}
          desc={platformFeatures.desc}
        />
        <FeatureStack rows={[...platformFeatures.rows]} />
      </Section>

      <CtaBand {...platformCta} />
    </main>
  );
}
