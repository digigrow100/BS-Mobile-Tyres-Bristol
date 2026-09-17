import type { AppProps } from "next/app";
import { inter, plusJakartaSans } from "@/styles/fonts";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${plusJakartaSans.variable} flex min-h-screen flex-col`}>
      <Component {...pageProps} />
    </div>
  );
}
