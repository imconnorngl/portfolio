import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <>
      <div className="grid grid-cols-10 w-full px-6 mx-auto md:px-12 md:flex-row md:space-x-12">
        <div className="hidden md:block col-span-3">
          <Image
            className="rounded-md object-cover h-full w-auto"
            src="/static/self.png"
            width={0}
            height={0}
            sizes="100vw"
            alt="Image of myself"
          />
        </div>
        <div className="col-span-10 md:col-span-7">
          <h2 className="max-w-sm md:max-w-max mx-auto md:mx-0 text-center md:text-left relative text-3xl font-bold mb-10 pt-4 md:pt-0 md:w-max">
            My developer journey
          </h2>

          <Image
            className="block md:hidden rounded-md mb-5 mx-auto object-cover w-full sm:w-1/2"
            src="/static/self.png"
            width={0}
            height={0}
            sizes="100vw"
            alt="Image of myself"
          />
          <p className="text-l mb-5 text-center md:text-left">
            Starting my programming journey, I worked on many personal projects,
            such as Bedwars Tinder and Statsify. I was able to enhance my skills
            during my time at Gateshead College, where I had the opportunity to
            work with Ryder Architecture improving some of their internal tools.
            During this time, I gained recognition from Moonsworth – the
            creators of Lunar Client – who offered me a position on their
            development team. Now 20, I continue to work with Moonsworth while
            pursuing a Bachelor’s degree in Computer Science with Web
            Development at Northumbria University.
          </p>
          <Image
            src="/static/timeline.png"
            width={0}
            height={0}
            sizes="100vw"
            className="hidden sm:block h-auto mx-auto"
            style={{ width: "1000px" }}
            alt="Timeline of my developer experience"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
