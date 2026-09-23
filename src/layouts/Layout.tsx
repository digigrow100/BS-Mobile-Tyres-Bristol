import Head from "next/head";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import FloatingActionButtons from "@/components/FloatingActionButtons";

interface LayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function Layout({ title, description, children }: LayoutProps) {
  const siteUrl = process.env.SITE_URL;
  const ogImageUrl = `${siteUrl}/bs-mobile-tyres-open-graph.webp`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <link rel="icon" href="/bs-mobile-tyres-site-icon.webp" type="image/webp" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/bs-mobile-tyres-site-icon.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content="BS Mobile Tyres Bristol" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="BS Mobile Tyres Bristol" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <Header />
      <main className="w-full pt-20 pb-20 md:pb-0 bg-surface flex-1">{children}</main>
      <Footer />
      <MobileActionBar />
      <FloatingActionButtons />
    </>
  );
}
