import { JsonLd, SectionHeader, SEO } from "@/components/atoms";
import { allPosts } from "content-collections";
import { GetStaticProps } from "next";
import { parseISO } from "date-fns/parseISO";
import { format } from "date-fns";
import { absoluteUrl, DEFAULT_SEO, SITE_URL, stripHtml, truncate } from "@/lib/seo";

type Props = {
  post: {
    slug: string;
    title: string;
    date: string;
    html: string;
    description: string;
    category: string | null;
  };
};

export default function BlogSlug({ post }: Props) {
  const { slug, title, html, date, category, description } = post;
  const url = absoluteUrl(`/blog/${slug}`);
  const image = absoluteUrl(DEFAULT_SEO.ogImage);

  const blogPostingLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    datePublished: date,
    description,
    image,
    url,
    mainEntityOfPage: url,
    author: { "@type": "Person", name: "Josep Vidal", url: SITE_URL },
    publisher: { "@type": "Person", name: "Josep Vidal", url: SITE_URL },
    ...(category ? { articleSection: category } : {}),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ],
  };

  return (
    <div>
      <SEO
        title={title}
        description={description}
        canonical={`/blog/${slug}`}
        ogType="article"
        article={{
          publishedTime: date,
          section: category ?? undefined,
          author: "Josep Vidal",
        }}
      />
      <JsonLd data={blogPostingLd} />
      <JsonLd data={breadcrumbLd} />
      <SectionHeader>{format(parseISO(date), "LLLL d, yyyy")}</SectionHeader>
      <h1 className="-mt-1.5 w-fit text-5xl font-bold bg-linear-to-r from-primary to-accent text-transparent bg-clip-text mb-8 leading-[1.1]">
        {title}
      </h1>
      <article
        className="prose prose-lg dark:prose-invert [&_img]:rounded-xl"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

export async function getStaticPaths() {
  const paths: string[] = allPosts.map((post) => `/blog/${post._meta.path}`);

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
  const post = allPosts.find((post) => post._meta.path === params?.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: {
        slug: post._meta.path,
        title: post.title,
        date: post.date,
        html: post.html,
        description: post.description ?? truncate(stripHtml(post.html), 160),
        category: post.category ?? null,
      },
    },
  };
};
