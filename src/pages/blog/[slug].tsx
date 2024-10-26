import { SectionHeader } from "@/components/atoms";
import { allPosts } from "contentlayer/generated";
import { GetStaticProps } from "next";
import { parseISO } from "date-fns/parseISO";
import { format } from "date-fns";
import Head from "next/head";

type Props = {
  post: {
    title: string;
    date: string;
    url: string;
    category?: "dev" | "life" | "general" | "notes";
    html: string;
  };
};

export default function BlogSlug({ post }: Props) {
  const { title, html, date } = post;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          property="og:image"
          content={`https://jvidal.dev/api/og?title=${title}`}
        />
      </Head>
      <SectionHeader>
        {format(parseISO(date), "LLLL d, yyyy")}
        {/*<span className="text-base ml-4">*/}
        {/*  under <span className="text-neutral-500">{category}</span>*/}
        {/*</span>*/}
      </SectionHeader>
      <h1 className="-mt-1.5 w-fit text-5xl font-bold bg-gradient-to-r from-accent to-accent2 text-transparent bg-clip-text mb-4 leading-[1.1]">
        {title}
      </h1>
      <article
        className="prose prose-lg dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

export async function getStaticPaths() {
  const paths: string[] = allPosts.map((post) => post.url);

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
  const post = allPosts.find((post) => post.url === `/blog/${params?.slug}`);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const {
    title,
    date,
    category,
    url,
    body: { html },
  } = post;

  return {
    props: {
      post: {
        title,
        date,
        url,
        category,
        html,
      },
    },
  };
};
