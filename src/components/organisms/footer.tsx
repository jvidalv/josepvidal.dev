import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex justify-between mt-16 bg-gray-400/10 dark:bg-black/10 rounded-xl p-4 backdrop-blur-lg font-mono">
      <h3 className="text-neutral-400 dark:text-neutral-500">
        ✨ jvidal.dev © {new Date().getFullYear()}
      </h3>
      <div className="text-neutral-600 dark:text-neutral-300">
        <Link href="/blog" className="hover:underline">
          Blog
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
