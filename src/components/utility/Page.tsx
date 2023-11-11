import Footer from "../global/Footer";
import Head from "next/head";
import MobileNavbar from "../global/MobileNavbar";
import Navbar from "../global/Navbar";
import React from "react";

function Page({ currentPage, meta: { title, desc }, children }: PageProps) {
  return (
    <div
      className="w-full m-auto flex flex-col items-center justify-center min-h-screen opening-box-animate-paddin text-white overflow-hidden md:overflow-visible"
      style={{ maxWidth: "1200px" }}
    >
      <Head>
        <title>Connor Lewis</title>

        <meta name="title" content={title} />
        <meta name="description" content={desc} />
        <link rel="icon" href="/static/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://connorkieranlewis.co.uk/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta
          property="og:image"
          content="https://connorkieranlewis.co.uk/static/og.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://connorkieranlewis.co.uk/"
        />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={desc} />
        <meta
          property="twitter:image"
          content="https://connorkieranlewis.co.uk/static/og.png"
        ></meta>
      </Head>

      <main className="p-5 w-full flex-1 text-center">
        <div className="hidden sm:block z-100">
          <Navbar currentPage={currentPage} />
        </div>
        <div className="-m-5 block sm:hidden z-100">
          <MobileNavbar />
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Page;

interface PageProps {
  currentPage: string;
  meta: {
    title?: string;
    desc: string;
  };
  children?: JSX.Element | JSX.Element[];
}
