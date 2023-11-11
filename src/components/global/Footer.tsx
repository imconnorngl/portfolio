import Link from "next/link";
import React from "react";
import { footerCols } from "data/global";
import Image from "next/image";

function Footer() {
  return (
    <footer className="flex flex-col w-screen px-5 py-10 border-t border-primary-darker z-5 bg-bg">
      <div className="w-full max-w-4xl m-auto grid grid-cols-2 justify-between items-start">
        {footerCols.map((item, index) => {
          return (
            <div
              key={index}
              className="text-left mb-5 sm:mb-0 flex flex-col items-center"
            >
              <h4 className="uppercase text-secondary text-sm font-bold">
                {item.title}
              </h4>
              <div>
                {item.links.map((item, index) => {
                  return (
                    <div key={index} className="my-4">
                      {item.leavesWebsite ? (
                        <a
                          href={item.link}
                          target="_blank"
                          className="items-center flex"
                        >
                          {item.icon && (
                            <span className="pr-2 -mb-1">
                              <Image
                                src={item.icon}
                                width={20}
                                height={20}
                                alt={`${item.name}'s Icon`}
                              />
                            </span>
                          )}
                          {item.name}
                        </a>
                      ) : (
                        <Link href={item.link}>{item.name}</Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-secondary border-t border-primary-dark">
        <div className="flex flex-col items-center justify-center">
          <div className="inline-flex items-center uppercase text-xs font-bold tracking-widest">
            Made with{" "}
            <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  width="26"
                  title="React"
                  alt="React's Icon"
                />
                <span className="sr-only">React</span>
              </span>
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                  width="40"
                  className="invert"
                  title="NextJS"
                  alt="NextJS's Icon"
                />
                <span className="sr-only">NextJS</span>
              </span>
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  width="26"
                  title="TailwindCSS"
                  alt="TailwindCSS's Icon"
                />
                <span className="sr-only">TailwindCSS</span>
              </span>
            </div>
          </div>
          <div className="mt-2 text-xs ">
            Made by{" "}
            <a
              href="mailto:connorkieranlewis@gmail.com"
              className="text-secondary-light font-medium"
            >
              Connor Lewis
            </a>
            . Design by{" "}
            <a
              href="mailto:contact@braydentw.io"
              className="text-secondary-light font-medium"
            >
              Brayden Wright
            </a>
            . All rights reserved.
          </div>
        </div>
      </div>
      <div className="mt-8 text-center sm:text-right sm:-mt-12">
        <a
          className="w-auto inline-flex items-center sm:w-auto font-bold flex-shrink text-xs border border-primary px-4 py-2 rounded-xl text-primary cursor-pointer opacity-50"
          href="https://github.com/imconnorngl/portfolio"
          target="_blank"
          rel="nooreferrer"
        >
          <Image
            src="/static/icons/github.svg"
            width={16}
            height={16}
            alt="Github's Icon"
          />
          <span className="ml-2">View Source Code </span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
