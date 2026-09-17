import Head from "next/head";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";

interface LayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function Layout({ title, description, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <main className="w-full pt-20 pb-20 md:pb-0 bg-surface flex-1">{children}</main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
