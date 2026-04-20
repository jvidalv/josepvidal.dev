import { JsonLd, SectionHeader, SEO, WithArrow } from "@/components/atoms";
import { SITE_URL } from "@/lib/seo";

const offerings = [
  {
    emoji: "🧑‍💻",
    name: "Claude Code Onboarding",
    description: "Hands-on workshop. We build your team's real workflows together.",
  },
  {
    emoji: "🛠",
    name: "Engineering Enablement",
    description: "Pair-coding, PR reviews, metrics. Until the habit sticks.",
  },
  {
    emoji: "🧭",
    name: "AI Pilots for SMBs",
    description: "One process, one pilot, measured honestly. No hype.",
  },
];

const CONTACT_HREF = "mailto:josepvidalvidal+services@gmail.com?subject=Services%20enquiry";

const servicesLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Josep Vidal — Services",
  url: `${SITE_URL}/services`,
  provider: { "@type": "Person", name: "Josep Vidal", url: SITE_URL },
  areaServed: "Worldwide",
  availableLanguage: ["Catalan", "Spanish", "English"],
  makesOffer: offerings.map(({ name, description }) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name,
      description,
      provider: { "@type": "Person", name: "Josep Vidal", url: SITE_URL },
    },
  })),
};

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Claude Code onboarding, engineering enablement, and AI pilots — from a product engineer who ships with it every day."
        canonical="/services"
        ogType="website"
      />
      <JsonLd data={servicesLd} />

      <section>
        <SectionHeader>/services</SectionHeader>
        <h1 className="-mt-1.5 w-fit text-5xl font-bold bg-linear-to-r from-primary to-accent text-transparent bg-clip-text mb-4 leading-[1.1]">
          Ship AI-native, measurably.
        </h1>
        <WithArrow className="text-neutral-500 dark:text-neutral-400">
          From a user, not a trainer. Measurable, not magical.
        </WithArrow>
      </section>

      <section>
        <SectionHeader>/offerings</SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {offerings.map(({ emoji, name, description }) => (
            <div key={name} className="border-2 border-dashed border-border/80 p-4">
              <h3 className="text-base mb-2 text-foreground flex items-center justify-between">
                <span>{name}</span>
                <span aria-hidden>{emoji}</span>
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader>/contact</SectionHeader>
        <WithArrow>
          <a href={CONTACT_HREF} className="underline-offset-4 hover:underline">
            Thirty minutes, no commitment.
          </a>
        </WithArrow>
      </section>
    </>
  );
}
