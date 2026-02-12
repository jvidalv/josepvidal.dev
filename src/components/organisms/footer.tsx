import Image from "next/image";
import Link from "next/link";

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
    <div className="mt-12 pb-12 flex flex-col gap-10">
      <section className="berrus-banner flex flex-col items-center justify-center gap-4 px-6 py-6 font-mono text-center">
        <div className="flex items-center gap-3">
          <Image
            src="/images/berrus/dragon-skull.png"
            alt=""
            width={40}
            height={40}
          />
          <span className="text-base text-gray-600 dark:text-gray-400">
            An online RPG where death is just the beginning.
          </span>
          <Image
            src="/images/berrus/dragon-skull.png"
            alt=""
            width={40}
            height={40}
            className="-scale-x-100"
          />
        </div>
        <a href="https://berrus.app" target="_blank" rel="noopener noreferrer">
          Play Berrus
        </a>
      </section>
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
