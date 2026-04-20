import { JsonLd, SectionHeader, SEO, WithArrow } from "@/components/atoms";
import { SITE_URL } from "@/lib/seo";

const offerings = [
  {
    emoji: "🧑‍💻",
    name: "Claude Code Onboarding",
    description:
      "Hands-on workshop with your team. We build your actual workflows together: slash commands, skills, hooks, subagents, MCP servers. You leave with working artifacts, not slides.",
    format: "Half-day · Full-day + pilot · 4-week engagement",
    bestFor: "Software teams with a clear stack and someone to champion the rollout.",
  },
  {
    emoji: "🛠",
    name: "Engineering Enablement",
    description:
      "I stay on after the workshop. Pair-coding, PR reviews, CI agents, metrics tracked per engineer per week. Until the habit sticks and your team is self-sufficient.",
    format: "Ongoing, weekly cadence",
    bestFor: "Teams that want lasting change, not a one-off.",
  },
  {
    emoji: "🧭",
    name: "AI Pilots for SMBs",
    description:
      "For non-tech companies: pick one process where AI pays off, run one real pilot, measure honestly. No hype, no PowerPoint. If the numbers aren't there, I'll tell you.",
    format: "Discovery (1 wk) → Pilot (3–6 wks) → Scale or kill",
    bestFor: "SMBs curious about AI, allergic to buzzwords.",
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
        <p className="text-neutral-600 dark:text-neutral-400 text-xl leading-7 mb-4">
          I use Claude Code in production every day. In a few days, so will your team.
        </p>
        <WithArrow className="text-neutral-500 dark:text-neutral-400">
          <span className="text-black dark:text-white">From a user, not a trainer.</span>{" "}
          Measurable, not magical.
        </WithArrow>
      </section>

      <section>
        <SectionHeader>/offerings</SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {offerings.map(({ emoji, name, description, format, bestFor }) => (
            <div key={name} className="border-2 border-dashed border-border/80 p-4">
              <h3 className="text-base mb-3 text-foreground flex items-center justify-between">
                <span>{name}</span>
                <span aria-hidden>{emoji}</span>
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">{description}</p>
              <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-2">
                {format}
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                <span className="font-semibold">Best for:</span> {bestFor}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader>/how</SectionHeader>
        <div className="space-y-4">
          <WithArrow>
            <span className="font-semibold">Intro call (30 min)</span> — stack, team, goals. If
            I&apos;m not the right fit, I&apos;ll say so.
          </WithArrow>
          <WithArrow>
            <span className="font-semibold">Pilot workshop</span> — half or full day. You leave with
            working workflows and a plan for the rest.
          </WithArrow>
          <WithArrow>
            <span className="font-semibold">Follow-through (4 weeks)</span> — pair-coding, PR
            reviews, metrics. I stick around until it sticks.
          </WithArrow>
        </div>
      </section>

      <section>
        <SectionHeader>/why-me</SectionHeader>
        <div className="space-y-4">
          <WithArrow>
            Shipping with Claude Code daily — teaching what works in prod, not theory.
          </WithArrow>
          <WithArrow>
            Measurable: time saved per PR, per week, per engineer. If the numbers aren&apos;t there,
            you&apos;ll hear it from me first.
          </WithArrow>
          <WithArrow>Català, Castellano, English — in person or remote.</WithArrow>
        </div>
      </section>

      <section>
        <SectionHeader>/contact</SectionHeader>
        <WithArrow>
          <a href={CONTACT_HREF} className="underline-offset-4 hover:underline">
            Thirty minutes, no commitment.
          </a>{" "}
          I&apos;ll tell you if it&apos;s worth doing.
        </WithArrow>
      </section>
    </>
  );
}
