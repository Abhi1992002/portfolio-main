import Link from "next/link";
import React from "react";
import { FaEye } from "react-icons/fa";
import { Button } from "../ui/button";
import { SkillBox } from "../about/shimmer";

type ArticleProps = {
  project: {
    demo?: string;
    github: string;
    title: string;
    description: string;
  };
  top1?: boolean;
};

export const Article = ({ project, top1 }: ArticleProps) => {
  return (
    <>
      <div className=" h-full">
        <article className="p-4 md:p-8 h-full flex flex-col">
          <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
            {project.title}
          </h2>
          <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
            {project.description}
          </p>
          {top1 ? (
            <div className="mt-4 flex justify-between absolute bottom-8 w-[90%] ">
              <Button variant={"secondary"} asChild>
                <Link target="_blank" href={project.github}>
                  Github
                </Link>
              </Button>
              {project.demo && (
                <Button variant={"link"} asChild>
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="text-white"
                  >
                    Demo
                  </Link>
                </Button>
              )}
            </div>
          ) : (
            <div className="mt-4 flex justify-between ">
              <Button variant={"secondary"} asChild>
                <Link target="_blank" href={project.github}>
                  Github
                </Link>
              </Button>
              {project.demo && (
                <Button variant={"link"} asChild>
                  <Link
                    target="_blank"
                    href={project.demo}
                    className="text-white"
                  >
                    Demo
                  </Link>
                </Button>
              )}
            </div>
          )}
        </article>
      </div>
    </>
  );
};
