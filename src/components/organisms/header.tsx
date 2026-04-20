import Spotlight from "@/components/organisms/spotlight";
import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between">
        <Link
          href="/"
          className="block bg-linear-to-r from-primary to-accent w-8 h-8 transition-all will-change-auto border border-transparent hover:w-16"
        >
          <span className="sr-only">josepvidal.dev</span>
        </Link>
        <Spotlight />
      </nav>
    </header>
  );
};

export default Header;
