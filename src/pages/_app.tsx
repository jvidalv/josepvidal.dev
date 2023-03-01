import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";

const basier = localFont({
  src: [
    {
      path: "../../fonts/basiercircle-regular.otf",
      weight: "400",
      style: "normal",
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
      <div className={basier.className}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
