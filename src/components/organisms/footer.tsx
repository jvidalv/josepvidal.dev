import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const LiveProject = ({
  href,
  title,
  description,
  icon,
}: {
  href: string;
  title: string;
  description: string;
  icon: ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-between gap-6 px-4 py-4 border border-dashed hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
  >
    <div className="flex flex-col">
      <span>{title}</span>
      <span className="text-sm text-gray-600 dark:text-gray-400">{description}</span>
    </div>
    <div className="relative w-10 h-10 shrink-0">{icon}</div>
  </a>
);

export const Footer = () => {
  const links = [
    {
      href: "/blog",
      name: "Blog",
    },
    {
      href: "/memento-mori",
      name: "Memento mori",
    },
    {
      href: "/lo-claude",
      name: "lo-claude",
    },
  ];

  return (
    <div className="mt-12 pb-12 flex flex-col gap-12">
      <div className="flex flex-col font-mono">
        <h2 className="mb-4 font-mono text-neutral-500 dark:text-neutral-300 text-2xl opacity-75">
          /live
        </h2>
        <div className="flex flex-col gap-2">
          <LiveProject
            href="https://berrus.app"
            title="Berrus"
            description="An online RPG where death is just the beginning."
            icon={
              <Image
                src="/images/berrus/dragon-skull.png"
                alt="Berrus"
                fill
                sizes="40px"
                className="object-contain"
              />
            }
          />
          <LiveProject
            href="https://cims-sempre-amunt.app"
            title="CIMS"
            description="Track and climb the peaks of Catalonia."
            icon={
              <>
                <Image
                  src="/images/cims/logo-black.png"
                  alt="CIMS"
                  fill
                  sizes="40px"
                  className="object-contain block dark:hidden"
                />
                <Image
                  src="/images/cims/logo-white.png"
                  alt="CIMS"
                  fill
                  sizes="40px"
                  className="object-contain hidden dark:block"
                />
              </>
            }
          />
        </div>
      </div>
      <footer className="flex flex-col gap-4 sm:flex-row justify-between border-dashed font-mono">
        <Link href="/">jvidal.dev ✨ {new Date().getFullYear()}</Link>
        <div className="flex gap-6">
          {links.map(({ href, name }) => (
            <Link
              key={href}
              href={href}
              className="relative hover:underline after:content-['/'] after:absolute after:text-gray-500 after:right-[-16px] after:top-0 last:after:content-none"
            >
              {name}
            </Link>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
