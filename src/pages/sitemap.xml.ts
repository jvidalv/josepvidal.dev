import { GetServerSideProps } from "next";
import { allPosts } from "content-collections";
import { SITE_URL } from "@/lib/seo";

type Changefreq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

type UrlEntry = {
  loc: string;
  lastmod?: string;
  changefreq?: Changefreq;
  priority?: number;
};

const STATIC_URLS: UrlEntry[] = [
  { loc: "/", priority: 1.0, changefreq: "monthly" },
  { loc: "/services", priority: 0.9, changefreq: "monthly" },
  { loc: "/blog", priority: 0.8, changefreq: "weekly" },
  { loc: "/lo-claude", priority: 0.5, changefreq: "monthly" },
  { loc: "/lo-claude/sounds", priority: 0.5, changefreq: "monthly" },
  { loc: "/memento-mori", priority: 0.5, changefreq: "yearly" },
];

function xmlEscape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function renderUrl({ loc, lastmod, changefreq, priority }: UrlEntry): string {
  const parts = [`<loc>${xmlEscape(`${SITE_URL}${loc}`)}</loc>`];
  if (lastmod) parts.push(`<lastmod>${xmlEscape(lastmod)}</lastmod>`);
  if (changefreq) parts.push(`<changefreq>${changefreq}</changefreq>`);
  if (priority !== undefined) parts.push(`<priority>${priority.toFixed(1)}</priority>`);
  return `<url>${parts.join("")}</url>`;
}

function buildSitemap(urls: UrlEntry[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls
    .map(renderUrl)
    .join("")}</urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const postUrls: UrlEntry[] = allPosts.map((post) => ({
    loc: `/blog/${post._meta.path}`,
    lastmod: post.date,
    changefreq: "monthly",
    priority: 0.6,
  }));

  const xml = buildSitemap([...STATIC_URLS, ...postUrls]);

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400");
  res.write(xml);
  res.end();

  return { props: {} };
};

export default function Sitemap() {
  return null;
}
