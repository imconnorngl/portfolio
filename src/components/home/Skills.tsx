import React from "react";
import { skills } from "data/content/home";

function Skills() {
  return (
    <div className="flex flex-col md:flex-row justify-between relative">
      <div className="flex items-center w-full text-center md:text-left font-bold md:max-w-lg mb-10 md:mr-10 md:mb-0 md:w-max mr-0">
        <h2 className="text-3xl">
          I&apos;ve got the experience.
          <br />
          Here&apos;s my skills.
        </h2>
      </div>
      <div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
        {skills.map((item, index) => {
          return (
            <div
              title={item.title}
              key={index}
              className="w-10 mx-auto flex items-center flex-col justify-center"
            >
              <img
                src={`/static/icons/services/${item.icon}.svg`}
                alt={item.title}
              />
              <p className="text-xs text-secondary font-bold mt-3 opacity-80">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
