import Head from "next/head";
import { absoluteUrl, DEFAULT_SEO } from "@/lib/seo";

type OgImage = {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
};

type ArticleMeta = {
  publishedTime: string;
  modifiedTime?: string;
  section?: string;
  author?: string;
};

type SEOProps = {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: OgImage;
  ogType?: "website" | "article";
  article?: ArticleMeta;
  noindex?: boolean;
  titleTemplate?: "default" | "exact";
};

export const SEO = ({
  title,
  description = DEFAULT_SEO.description,
  canonical,
  ogImage,
  ogType = "website",
  article,
  noindex = false,
  titleTemplate = "default",
}: SEOProps) => {
  const fullTitle =
    !title || titleTemplate === "exact"
      ? (title ?? DEFAULT_SEO.title)
      : `${title} — ${DEFAULT_SEO.siteName}`;

  const image: OgImage = ogImage ?? {
    url: DEFAULT_SEO.ogImage,
    width: DEFAULT_SEO.ogImageWidth,
    height: DEFAULT_SEO.ogImageHeight,
    alt: DEFAULT_SEO.ogImageAlt,
  };
  const imageAbsolute = absoluteUrl(image.url);
  const canonicalAbsolute = canonical ? absoluteUrl(canonical) : undefined;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content={DEFAULT_SEO.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.png" />
      {canonicalAbsolute && <link rel="canonical" href={canonicalAbsolute} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={DEFAULT_SEO.siteName} />
      {canonicalAbsolute && <meta property="og:url" content={canonicalAbsolute} />}
      <meta property="og:image" content={imageAbsolute} />
      {image.width && <meta property="og:image:width" content={String(image.width)} />}
      {image.height && <meta property="og:image:height" content={String(image.height)} />}
      {image.alt && <meta property="og:image:alt" content={image.alt} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={DEFAULT_SEO.twitterHandle} />
      <meta name="twitter:creator" content={DEFAULT_SEO.twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageAbsolute} />
      {image.alt && <meta name="twitter:image:alt" content={image.alt} />}

      {ogType === "article" && article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.section && <meta property="article:section" content={article.section} />}
          {article.author && <meta property="article:author" content={article.author} />}
        </>
      )}
    </Head>
  );
};

export default SEO;
