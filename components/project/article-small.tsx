import React, { useEffect, useState } from "react";
import { ExploreButton } from "./explore-button";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Button } from "../ui/button";

type ArticleSmallProps = {
  project: {
    demo?: string;
    github: string;
    title: string;
    description: string;
  };
};

export const ArticleSmall = ({ project }: ArticleSmallProps) => {
  return (
    <>
      <div>
        <article className="p-4 md:p-8">
          <div className="flex justify-between gap-2 items-center"></div>
          <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
            {project.title}
          </h2>
          <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
            {project.description}
          </p>
          <div className="mt-4 flex justify-between ">
            <Button variant={"secondary"} asChild>
              <Link href={project.github} target="_blank">
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
        </article>
      </div>
    </>
  );
};
