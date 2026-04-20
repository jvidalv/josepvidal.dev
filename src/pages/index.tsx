import { JsonLd, SectionHeader, SEO, WithArrow } from "@/components/atoms";
import Link from "next/link";
import { socials } from "@/lib/socials";
import projectCategories from "@/lib/projects";
import { DEFAULT_SEO, SITE_URL } from "@/lib/seo";

const sameAs = socials.map(({ href }) => href).filter((href) => !href.startsWith("mailto:"));

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Josep Vidal",
  url: SITE_URL,
  jobTitle: "Product Engineer",
  description: DEFAULT_SEO.description,
  image: `${SITE_URL}${DEFAULT_SEO.ogImage}`,
  sameAs,
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: DEFAULT_SEO.siteName,
  url: SITE_URL,
  description: DEFAULT_SEO.description,
  inLanguage: "en",
};

export default function Home() {
  return (
    <>
      <SEO
        titleTemplate="exact"
        description={DEFAULT_SEO.description}
        canonical="/"
        ogType="website"
      />
      <JsonLd data={personLd} />
      <JsonLd data={websiteLd} />
      <section>
        <SectionHeader>/me</SectionHeader>
        <h1 className="text-3xl font-semibold text-accent">Josep Vidal</h1>
        <WithArrow className="text-gray-500 dark:text-gray-400 mb-4">
          <span className="text-black dark:text-white">Product Engineer</span>, making apps that
          feel natural to use.
        </WithArrow>
        <ul className="flex flex-wrap gap-2 text-black dark:text-white">
          {socials.map(({ name, href, Icon }) => (
            <li key={href} title={name}>
              <a
                className="border-2 border-border/80 border-dashed border-b-0 rounded rounded-b-none p-2"
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
              >
                <Icon className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <SectionHeader>/always</SectionHeader>
        <div className="space-y-4">
          <WithArrow>Building cool stuff 🚀</WithArrow>
        </div>
      </section>
      <section>
        <SectionHeader>/services</SectionHeader>
        <WithArrow>
          <Link href="/services" className="underline-offset-4 hover:underline">
            Available
          </Link>{" "}
          for Claude Code workshops & AI pilots.
        </WithArrow>
      </section>
      <section>
        <SectionHeader>/highlights</SectionHeader>
        <div className="space-y-4">
          <WithArrow>
            Multiplying user acquisition numbers
            <a href="https://www.qonto.com/" target="_blank" rel="noreferrer">
              on a top european fintech 💰
            </a>
            .
          </WithArrow>
          <WithArrow>
            Founder engineer on a{" "}
            <a href="https://www.grafbase.com/" target="_blank" rel="noreferrer">
              GraphQL startup ☄️
            </a>
            .
          </WithArrow>
          <WithArrow>
            Leading the frontend team on a brand new electronic signature app ✳️.
          </WithArrow>
          <WithArrow>
            Automating processes as a full-stack dev on an{" "}
            <a href="https://factorenergia.com" target="_blank" rel="noreferrer">
              energy company ⚡️
            </a>
            .
          </WithArrow>
          <WithArrow>
            Built a{" "}
            <a
              href="https://apps.apple.com/es/app/anawin360-trazabilidad-y-finca/id1471403248"
              target="_blank"
              rel="noreferrer"
            >
              cool react-native app 📱
            </a>{" "}
            with offline capabilities.
          </WithArrow>
        </div>
      </section>
      <section>
        <SectionHeader>/projects</SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectCategories.map(({ category, emoji, projects }) => (
            <div key={category} className="border-2 border-dashed border-border/80 p-4">
              <h3 className="text-base mb-3 text-foreground flex items-center justify-between">
                <span>{category}</span>
                <span>{emoji}</span>
              </h3>
              <ul className="space-y-2">
                {projects.map(({ name, href, description }) => (
                  <li key={name}>
                    <a href={href} target="_blank" rel="noreferrer" className="text-base">
                      {name}
                    </a>
                    {description && (
                      <span className="text-sm text-neutral-500 dark:text-neutral-400 ml-2">
                        · {description}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
