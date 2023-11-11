import Link from "next/link";
import React from "react";
import { useRandomNumber } from "utils";

function Page404() {
  const num = useRandomNumber("404");

  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center flex-col animate-fadeIn">
        <h1 className="text-7xl text-white font-monospace font-bold opacity-100">{`{ error: ${num} }`}</h1>
        <p className="text-secondary text-xl mt-8 flex items-center">
          Sorry, looks like that page is missing!&nbsp;&nbsp;
          <Link href="/">
            <span className="w-full sm:w-auto flex-shrink border border-primary-light text-base px-4 py-1 rounded-xl text-primary-light bg-primary-darkerer hover:bg-primary hover:text-white transition-colors cursor-pointer">
              Return Home
            </span>
          </Link>
        </p>
      </div>
    </>
  );
}

export default Page404;
