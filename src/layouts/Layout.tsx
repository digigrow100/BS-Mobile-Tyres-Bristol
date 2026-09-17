import Head from "next/head";
import type { ReactNode } from "react";

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
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      {children}
    </>
  );
}
