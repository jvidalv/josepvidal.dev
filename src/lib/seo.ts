export const SITE_URL = "https://josepvidal.dev";

export const DEFAULT_SEO = {
  siteName: "Josep Vidal",
  title: "Josep Vidal — Product Engineer",
  description: "Product engineer, making apps that feel natural to use.",
  author: "Josep Vidal",
  twitterHandle: "@josepvidalvidal",
  ogImage: "/og.png",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: "Josep Vidal",
} as const;

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  const suffix = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${suffix}`;
}

export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

export function truncate(text: string, maxLen = 160): string {
  if (text.length <= maxLen) return text;
  const slice = text.slice(0, maxLen);
  const lastSpace = slice.lastIndexOf(" ");
  const cut = lastSpace > maxLen * 0.6 ? slice.slice(0, lastSpace) : slice;
  return `${cut.trimEnd()}…`;
}
