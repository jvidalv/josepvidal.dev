import { SectionHeader, SEO, WithArrow } from "@/components/atoms";
import { GetStaticProps } from "next";
import { allPosts } from "content-collections";
import { compareDesc } from "date-fns/compareDesc";
import Link from "next/link";
import { format } from "date-fns";
import { parseISO } from "date-fns/parseISO";

type Props = {
  posts: {
    title: string;
    date: string;
    url: string;
  }[];
};

export default function Blog({ posts }: Props) {
  return (
    <div>
      <SEO
        title="Blog"
        description="Writing on product engineering, Claude Code, and building things."
        canonical="/blog"
        ogType="website"
      />
      <SectionHeader>/blog</SectionHeader>
      <h1 className="-mt-1.5 w-fit text-5xl font-bold bg-linear-to-r from-primary to-accent text-transparent bg-clip-text mb-2.5">
        Posts
      </h1>
      <div className="mt-6 space-y-2">
        {posts.map(({ title, date, url }) => (
          <WithArrow as="div" key={url}>
            <span className="opacity-50 font-medium">{format(parseISO(date), "yyyy-MM-dd")}</span>
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
  const posts = [...allPosts].sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return {
    props: {
      posts: posts.map(({ title, date, _meta: { path } }) => ({
        title,
        date,
        url: `/blog/${path}`,
      })),
    },
  };
};
