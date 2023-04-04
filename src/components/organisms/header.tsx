import Spotlight from "@/components/organisms/spotlight";
import Head from "next/head";
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <Head>
        <title>Josep Vidal</title>
        <meta
          name="description"
          content="Senior Frontend Engineer focused on UX/UI. Building fluid and fast interfaces."
        />
        <meta
          name="og:description"
          content="Senior Frontend Engineer focused on UX/UI. Building fluid and fast interfaces."
        />
        <meta property="og:image" content="https://jvidal.dev/og.png" />
        <meta name="author" content="@josepvidalvidal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <meta content="summary" name="twitter:card" />
        <meta content="josepvidalvidal" name="twitter:site" />
        <meta content="josepvidalvidal" name="twitter:creator" />
        <meta content="https://josepvidal.dev" property="og:url" />
      </Head>
      <header>
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="block bg-gradient-to-r from-accent to-accent2 w-8 h-8 transition border border-transparent hover:scale-105"
          >
            <span className="sr-only">josepvidal.dev</span>
          </Link>
          <Spotlight />
        </nav>
      </header>
    </>
  );
};

export default Header;
