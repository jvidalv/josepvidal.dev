import { SectionHeader, SoundRow } from "@/components/atoms";
import { soundPacks } from "@/lib/sounds-data";
import { cn } from "@/lib/utils";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Sounds() {
  return (
    <>
      <Head>
        <title>Sound Packs — lo-claude</title>
        <meta
          name="description"
          content="Curated game sound packs for Claude Code hooks. Preview sounds and copy hook configs."
        />
      </Head>

      <section>
        <SectionHeader>/lo-claude/sounds</SectionHeader>
        <h1 className="-mt-1.5 w-fit text-5xl font-bold bg-linear-to-r from-primary to-accent text-transparent bg-clip-text mb-2.5">
          Sound Packs
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-xl leading-7">
          Curated game sound packs for{" "}
          <a
            href="https://github.com/jvidalv/lo-claude"
            target="_blank"
            rel="noreferrer"
          >
            Claude Code
          </a>{" "}
          hooks. Preview each sound and map them to hook events for audio
          feedback while you code.
        </p>
      </section>

      <section>
        <SectionHeader>/packs</SectionHeader>
        <div className="space-y-4">
          {soundPacks.map((pack) => (
            <div
              key={pack.id}
              className="border-2 border-dashed border-border/80"
            >
              <div className="flex items-center gap-3 px-4 py-4 border-b border-dashed border-border/80">
                <Image
                  src={pack.logo}
                  alt={pack.game}
                  width={40}
                  height={40}
                  className="rounded"
                />
                <h3 className="text-base font-semibold text-neutral-600 dark:text-neutral-400">
                  {pack.game}
                </h3>
                <span className="ml-auto text-xs text-neutral-400 dark:text-neutral-500 font-mono">
                  {pack.sounds.length} hooks
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {pack.sounds.map((sound, i) => (
                  <div
                    key={sound.hook}
                    className={cn(
                      "border-b border-dashed border-border/80 md:last:border-b-0 md:[&:nth-last-child(2):nth-child(odd)]:border-b-0",
                      i % 2 === 0 && "md:border-r",
                    )}
                  >
                    <SoundRow {...sound} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader>/navigate</SectionHeader>
        <Link
          href="/lo-claude"
          className="text-xl text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
        >
          &larr; Back to lo-claude
        </Link>
      </section>
    </>
  );
}
