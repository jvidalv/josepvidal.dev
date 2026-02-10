import { SectionHeader, WithArrow } from "@/components/atoms";
import Head from "next/head";

const modules = [
  {
    name: "Gmail",
    description: "Read and search your inbox",
    tools: ["gmail_list", "gmail_read", "gmail_search"],
  },
  {
    name: "Google Drive",
    description: "Manage files, organize receipts",
    tools: ["drive_list", "drive_download", "drive_rename", "drive_move"],
  },
  {
    name: "AWS S3",
    description: "Manage S3 objects and uploads",
    tools: ["s3_list", "s3_download", "s3_upload", "s3_rename"],
  },
  {
    name: "Mediavida",
    description: "Read and summarize forum threads",
    tools: ["mediavida_thread", "mediavida_page"],
  },
];

const soundEvents = [
  { event: "Task complete", sounds: "Level up, coins, unique drop, mining" },
  { event: "Error", sounds: "Wrong, spell failure, locked" },
  { event: "Notification", sounds: "Protect melee, piety, smite" },
  { event: "Subagent done", sounds: "Teleport, fairy rings, ice barrage" },
  { event: "Session start", sounds: "Level up, teleport, iron door" },
  { event: "Session end", sounds: "Ghost death, vengeance, dragonfire" },
];

const verbs = [
  "Harvesting Garnatxa grapes",
  "Clearing rats from the sewers",
  "Counting pesetas",
  "Dodging a Jabalí Rabioso",
  "Chasing a Goblin Pringao",
  "Taking a siesta",
  "Haggling at the Konomat",
  "Descending into Cueva de Mocos",
];

export default function LoClaude() {
  return (
    <>
      <Head>
        <title>Lo-Claude — Claude Code Extension Platform</title>
        <meta
          name="description"
          content="Give Claude superpowers through pluggable modules. OSRS sounds, custom spinners, and more."
        />
      </Head>

      <section>
        <SectionHeader>/lo-claude</SectionHeader>
        <h1 className="-mt-1.5 w-fit text-5xl font-bold bg-linear-to-r from-primary to-accent text-transparent bg-clip-text mb-2.5">
          Give Claude superpowers
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-xl leading-7">
          A modular{" "}
          <a
            href="https://github.com/jvidalv/lo-claude"
            target="_blank"
            rel="noreferrer"
          >
            Claude Code
          </a>{" "}
          extension platform. Plug in modules for Gmail, Drive, S3, and more.
          Personalize your experience with OSRS sounds, custom spinner verbs,
          and permission presets.
        </p>
      </section>

      <section>
        <SectionHeader>/quick-start</SectionHeader>
        <div className="space-y-1">
          <WithArrow>
            <code className="text-base font-mono bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded">
              git clone https://github.com/jvidalv/lo-claude.git
            </code>
          </WithArrow>
          <WithArrow>
            <code className="text-base font-mono bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded">
              npm install
            </code>
          </WithArrow>
          <WithArrow>
            <code className="text-base font-mono bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded">
              npm run setup
            </code>
          </WithArrow>
        </div>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-4">
          The setup wizard configures spinner verbs, sound effects, and
          permission defaults interactively.
        </p>
      </section>

      <section>
        <SectionHeader>/modules</SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {modules.map(({ name, description, tools }) => (
            <div
              key={name}
              className="border-2 border-dashed border-border/80 p-4"
            >
              <h3 className="text-base font-semibold mb-2 text-neutral-600 dark:text-neutral-400">
                {name}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">
                {description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 px-2 py-0.5 rounded"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader>/sounds</SectionHeader>
        <p className="text-neutral-600 dark:text-neutral-400 text-xl leading-7 mb-6">
          41 Old School RuneScape sound effects mapped to Claude Code events.
          Every task completion, error, and notification gets its own audio
          feedback.
        </p>
        <div className="border-2 border-dashed border-border/80">
          {soundEvents.map(({ event, sounds }, i) => (
            <div
              key={event}
              className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-4 py-3 ${i !== soundEvents.length - 1 ? "border-b border-dashed border-border/80" : ""}`}
            >
              <span className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 sm:w-36 shrink-0">
                {event}
              </span>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                {sounds}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader>/spinner-verbs</SectionHeader>
        <p className="text-neutral-600 dark:text-neutral-400 text-xl leading-7 mb-6">
          Custom loading messages while Claude thinks. Choose from the bundled
          Catalan/fantasy RPG pack, developer humor, or write your own.
        </p>
        <div className="flex flex-wrap gap-2">
          {verbs.map((verb) => (
            <span
              key={verb}
              className="text-sm font-mono border-2 border-dashed border-border/80 px-3 py-1.5 text-neutral-600 dark:text-neutral-400"
            >
              {verb}...
            </span>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader>/source</SectionHeader>
        <WithArrow>
          <a
            href="https://github.com/jvidalv/lo-claude"
            target="_blank"
            rel="noreferrer"
          >
            github.com/jvidalv/lo-claude
          </a>
          <span className="text-neutral-500 dark:text-neutral-400 ml-2">
            · MIT
          </span>
        </WithArrow>
      </section>
    </>
  );
}
