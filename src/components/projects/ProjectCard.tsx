import React from "react";
import Image from "next/image";

import { Project } from "types";

interface Props {
  project: Project;
}

function ProjectCard({ project }: Props) {
  return (
    <div
      className="max-w-sm mx-auto flex flex-col projects-center md:projects-start md:justify-center"
      key={project.id}
    >
      <a
        href={project.link || project.github}
        target="_blank"
        className={
          "w-full relative rounded-xl border-secondary border p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-primary will-change-projectCard"
        }
      >
        <img
          className="w-full rounded-md"
          src={project.img}
          alt={`${project.title}'s Showcase Image`}
        />
      </a>
      <div className="w-full mt-5">
        <div className="flex projects-center justify-between">
          <a href={project.link || project.github} target="_blank">
            <h3 className="text-lg font-bold">{project.title}</h3>
          </a>
          <div className="flex justify-center space-x-2">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center"
              >
                <Image
                  src="/static/icons/external-link.svg"
                  width={16}
                  height={16}
                  alt="Link Icon"
                />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center"
              >
                <Image
                  src="/static/icons/github.svg"
                  width={16}
                  height={16}
                  alt="Github's Icon"
                />
              </a>
            )}
          </div>
        </div>
        <p className="text-secondary text-left text-sm">{project.desc}</p>
        <ul className="flex flex-wrap items-center mt-2 -ml-2 list-none">
          {project.tags.map((tag, index) => {
            return (
              <li key={tag}>
                <div className="m-1 rounded-lg text-sm bg-primary-dark py-1 px-2">
                  {tag}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
