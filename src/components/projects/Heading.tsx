import React from "react";
import Image from "next/image";

interface HeadingProps {
  tag?: string;
}

function Heading({ tag }: HeadingProps) {
  return (
    <div className="py-12 sm:py-20 w-full text-center relative">
      <h1 className="text-4xl sm:text-6xl inline-block w-auto mx-auto mb-8 relative">
        Projects
        <Image
          className="sqD w-10 -top-8 -right-8 absolute"
          src="/static/icons/code.svg"
          height={0}
          width={0}
          alt=""
        />
      </h1>
      <p className="text-secondary text-xl sm:text-2xl max-w-3xl m-auto">
        I&apos;ve built and worked on loads of full stack projects. Here are
        some of my best ones.
      </p>
    </div>
  );
}

export default Heading;
