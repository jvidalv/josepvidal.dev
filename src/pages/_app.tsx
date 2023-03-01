import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

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
  variable: "--basier-font",
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={basier.className}>
      <Component {...pageProps} />
    </div>
  );
}
