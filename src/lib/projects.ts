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
