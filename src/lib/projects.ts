type Project = {
  name: string;
  href: string;
  description?: string;
};

type ProjectCategory = {
  category: string;
  emoji: string;
  projects: Project[];
};

export type LiveProject = Project & {
  description: string;
  /** A single image, or one per theme when the logo doesn't work on both backgrounds. */
  icon: string | { light: string; dark: string };
};

export const liveProjects: LiveProject[] = [
  {
    name: "Berrus",
    href: "https://berrus.app",
    description: "An online RPG where death is just the beginning.",
    icon: "/images/berrus/icon.png",
  },
  {
    name: "Serebomber",
    href: "https://serebomber.app",
    description: "Exam prep for Catalonia's firefighter entrance exam.",
    icon: "/images/serebomber/icon.png",
  },
  {
    name: "CIMS",
    href: "https://cims-sempre-amunt.app",
    description: "Track and climb the peaks of Catalonia.",
    icon: { light: "/images/cims/logo-black.png", dark: "/images/cims/logo-white.png" },
  },
  {
    name: "tarraco.ai",
    href: "https://tarraco.ai",
    description: "Claude Code onboarding and AI pilots for teams and SMBs.",
    icon: "/tarraco.png",
  },
  {
    name: "platan.ai",
    href: "https://platan.ai",
    description: "Local-first, agent-driven pixel art generation.",
    icon: "/platan.png",
  },
];

const projectCategories: ProjectCategory[] = [
  {
    category: "Games",
    emoji: "🎮",
    projects: [
      {
        name: "Berrus",
        href: "https://berrus.app",
      },
    ],
  },
  {
    category: "Desktop Apps",
    emoji: "🖥️",
    projects: [
      {
        name: "platan.ai",
        href: "https://platan.ai",
      },
    ],
  },
  {
    category: "Templates",
    emoji: "📐",
    projects: [
      {
        name: "Vital",
        href: "https://github.com/jvidalv/vital",
      },
      {
        name: "Nextal",
        href: "https://github.com/jvidalv/nextal",
      },
    ],
  },
  {
    category: "Browser Extensions",
    emoji: "🧩",
    projects: [
      {
        name: "mv-ignited",
        href: "https://github.com/jvidalv/mv-ignited",
      },
    ],
  },
  {
    category: "Mobile Apps",
    emoji: "📱",
    projects: [
      {
        name: "Serebomber",
        href: "https://serebomber.app",
      },
      {
        name: "Cims",
        href: "https://github.com/expofast/100cims",
      },
      {
        name: "Astrale",
        href: "https://github.com/jvidalv/astrale",
      },
    ],
  },
  {
    category: "Tools",
    emoji: "🛠️",
    projects: [
      {
        name: "Sitemap generator",
        href: "https://github.com/jvidalv/super-simple-sitemap-generator",
      },
      {
        name: "Parcel File Copier",
        href: "https://github.com/jvidalv/parcel-reporter-multiple-static-file-copier",
      },
    ],
  },
];

export default projectCategories;
