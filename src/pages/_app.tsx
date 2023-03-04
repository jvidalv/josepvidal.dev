import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import clsx from "clsx";

const basier = localFont({
  src: [
    {
      path: "../../fonts/basiercircle-regular.otf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../../fonts/basiercircle-bold.otf",
      weight: "700",
      style: "bold",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
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
        <meta name="author" content="@josepvidalvidal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <meta content="summary" name="twitter:card" />
        <meta content="josepvidalvidal" name="twitter:site" />
        <meta content="josepvidalvidal" name="twitter:creator" />
        <meta content="https://josepvidal.dev" property="og:url" />
      </Head>
      <ThemeProvider attribute="class">
        <main className="p-8 sm:p-12 md:p-16">
          <div className={clsx(basier.className, "md:max-w-[37.5rem]")}>
            <Component {...pageProps} />
          </div>
        </main>
      </ThemeProvider>
    </>
  );
}
