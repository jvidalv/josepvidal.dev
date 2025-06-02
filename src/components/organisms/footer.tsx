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
  ];

  return (
    <footer className="flex flex-col gap-4 sm:flex-row justify-between mt-12 border-dashed font-mono">
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
  );
};

export default Footer;
