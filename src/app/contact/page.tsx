import { ContactForm } from "@/components/ContactForm";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { contactAside, contactHero, contactSeo } from "@/content/contact";
import { brand, company } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  contactSeo.title,
  contactSeo.description,
  "/contact",
);

export default function ContactPage() {
  return (
    <main id="main">
      <Hero
        compact
        simple
        headline={contactHero.headline}
        lead={contactHero.lead}
      />

      <Section tone="light">
        <div className="contact-grid">
          <ContactForm />
          <aside>
            <div className="aside-glass">
              <h3>{contactAside.benefitsTitle}</h3>
              <ul>
                {contactAside.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            <div className="aside-glass">
              <h3>{contactAside.producerTitle}</h3>
              <p>
                <strong style={{ color: "var(--light-ink)" }}>
                  {company.name}
                </strong>
                <br />
                {company.tagline}
              </p>
              <p style={{ marginBottom: 0 }}>产品品牌：{brand.full}</p>
            </div>
          </aside>
        </div>
      </Section>
    </main>
  );
}
