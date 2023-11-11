import React from "react";

function Hero() {
  return (
    <>
      <div
        className="relative heroElem w-full py-10 m-auto flex justify-center text-center flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}
      >
        <p className="text-xl mb-5">Hi, I&apos;m Connor!</p>
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
          I create the projects people{" "}
          <span className="heroShiny3 text-primary">love &#9829;</span>{" "}
        </h1>
      </div>
    </>
  );
}

export default Hero;
