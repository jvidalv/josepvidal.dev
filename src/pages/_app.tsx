import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import clsx from "clsx";
import { Header, Footer } from "@/components/organisms";

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
    <ThemeProvider attribute="class">
      <main className="p-8 sm:p-12 md:p-16">
        <div className={clsx(basier.className, "mx-auto md:max-w-[37.5rem]")}>
          <Header />
          <div className="min-h-screen">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </main>
    </ThemeProvider>
  );
}
