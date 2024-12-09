import { SectionHeader, WithArrow } from "@/components/atoms";
import Link from "next/link";

export default function Error404page() {
  return (
    <section>
      <SectionHeader>/oops</SectionHeader>
      <h1 className="-mt-1.5 w-fit text-5xl font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text mb-2.5">
        404 error
      </h1>
      <p className="text-neutral-600 dark:text-neutral-400 text-xl leading-7">
        Oops, looks like we&apos;re lost in cyberspace!
      </p>
      <br />
      <WithArrow>
        <Link href="/">Home</Link>
      </WithArrow>
    </section>
  );
}
