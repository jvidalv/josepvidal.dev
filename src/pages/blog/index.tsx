import { SectionHeader, WithArrow } from "@/components/atoms";
import { GetStaticProps } from "next";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns/compareDesc";
import Link from "next/link";
import { format } from "date-fns";
import { parseISO } from "date-fns/parseISO";
import Head from "next/head";

type Props = {
  posts: {
    title: string;
    date: string;
    url: string;
    category?: "dev" | "life" | "general" | "notes";
  }[];
};

export default function Blog({ posts }: Props) {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta
          property="og:image"
          content="https://jvidal.dev/api/og?title=Blog"
        />
      </Head>
      <SectionHeader>/blog</SectionHeader>
      <h1 className="-mt-1.5 w-fit text-5xl font-bold bg-gradient-to-r from-accent to-accent2 text-transparent bg-clip-text mb-2.5">
        Posts
      </h1>
      <div className="mt-6 space-y-2">
        {posts.map(({ title, date, url }) => (
          <WithArrow as="div" key={url}>
            <span className="opacity-50 font-medium">
              {format(parseISO(date), "yyyy-MM-dd")}
            </span>
            <Link className="ml-2 font-medium hover:underline" href={url}>
              {title}
            </Link>
          </WithArrow>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = () => {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return {
    props: {
      posts: posts.map(({ title, date, category, url }) => ({
        title,
        date,
        url,
        category,
      })),
    },
  };
};
