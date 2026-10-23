import Link from "next/link";
import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import { AgentConsoleFrame, OpsFrame } from "@/components/ProductFrames";
import {
  BentoGrid,
  CtaBand,
  Section,
  SectionHeader,
  TrustStrip,
} from "@/components/Section";
import {
  consoleDemo,
  homeCapabilities,
  homeCta,
  homeHero,
  homeOpsShowcase,
  homeSeo,
  homeSolutions,
  homeTrust,
  opsDemo,
} from "@/content/home";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(homeSeo.title, homeSeo.description, "/");

export default function HomePage() {
  return (
    <main id="main">
      <Hero
        headline={homeHero.headline}
        lead={homeHero.lead}
        primaryCta={homeHero.primaryCta}
        secondaryCta={homeHero.secondaryCta}
        showMeta
        aside={<AgentConsoleFrame {...consoleDemo} />}
      />

      <Section tone="void">
        <TrustStrip label={homeTrust.label} items={[...homeTrust.items]} />
      </Section>

      <Section tone="surface">
        <SectionHeader
          eyebrow={homeCapabilities.eyebrow}
          title={homeCapabilities.title}
          desc={homeCapabilities.desc}
        />
        <BentoGrid items={homeCapabilities.items} />
        <p style={{ marginTop: "2rem" }}>
          <Button href="/platform" variant="ghost">
            完整平台说明 →
          </Button>
        </p>
      </Section>

      <Section tone="void">
        <SectionHeader
          eyebrow={homeSolutions.eyebrow}
          title={homeSolutions.title}
          desc={homeSolutions.desc}
        />
        <div className="sol-bento">
          {homeSolutions.items.map((item) => (
            <Link key={item.num} className="sol-card" href={item.href}>
              <span className="sol-num">{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <span className="go">查看方案 →</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <div className="split-showcase">
          <div>
            <SectionHeader
              eyebrow={homeOpsShowcase.eyebrow}
              title={homeOpsShowcase.title}
              desc={homeOpsShowcase.desc}
            />
            <p style={{ marginTop: "1.5rem" }}>
              <Button href={homeOpsShowcase.cta.href} variant="ghost">
                {homeOpsShowcase.cta.label}
              </Button>
            </p>
          </div>
          <OpsFrame {...opsDemo} flat />
        </div>
      </Section>

      <CtaBand {...homeCta} />
    </main>
  );
}
