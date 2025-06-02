import { SectionHeader } from "@/components/atoms";
import { allPosts } from "content-collections";
import { GetStaticProps } from "next";
import { parseISO } from "date-fns/parseISO";
import { format } from "date-fns";
import Head from "next/head";

type Props = {
  post: {
    title: string;
    date: string;
    html: string;
  };
};

export default function BlogSlug({ post }: Props) {
  const { title, html, date } = post;
  const description = `${html.slice(0, 200).replace(/<\/?[^>]+(>|$)/g, "")}...`;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta
          property="og:image"
          content={`https://jvidal.dev/api/og?title=${title}`}
        />
        <meta
          property="og:image"
          content={`https://jvidal.dev/api/og?title=${title}`}
        />
      </Head>
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

  const { title, date, html } = post;

  return {
    props: {
      post: {
        title,
        date,
        html,
      },
    },
  };
};
