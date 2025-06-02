import { SectionHeader, WithArrow } from "@/components/atoms";
import Link from "next/link";

export default function Error500page() {
  return (
    <section>
      <SectionHeader>/oops</SectionHeader>
      <h1 className="-mt-1.5 w-fit text-5xl font-bold bg-linear-to-r from-primary to-accent text-transparent bg-clip-text mb-2.5">
        500 error
      </h1>
      <p className="text-neutral-600 dark:text-neutral-400 text-xl leading-7">
        Oops! We tripped over a cable. Our tech team is untangling the mess.
      </p>
      <br />
      <WithArrow>
        <Link href="/">Home</Link>
      </WithArrow>
    </section>
  );
}
