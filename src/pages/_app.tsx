import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { ThemeProvider, useTheme } from "next-themes";
import clsx from "clsx";
import { Header, Footer } from "@/components/organisms";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";

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

function ThemedToaster() {
  const { resolvedTheme } = useTheme();
  return (
    <Toaster richColors theme={resolvedTheme === "dark" ? "dark" : "light"} />
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <main className="p-6 sm:p-12 md:p-16">
        <div className={clsx(basier.className, "mx-auto md:max-w-150")}>
          <Header />
          <div className="min-h-screen">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </main>
      <ThemedToaster />
      <Analytics />
    </ThemeProvider>
  );
}
