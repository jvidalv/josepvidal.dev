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
    <footer className="flex justify-between mt-20 border-t-4 border-dashed pt-6 font-mono">
      <h3>jvidal.dev ✨ {new Date().getFullYear()}</h3>
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
