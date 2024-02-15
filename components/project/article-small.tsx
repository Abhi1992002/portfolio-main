import React, { useEffect, useState } from "react";
import { ExploreButton } from "./explore-button";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

type ArticleSmallProps = {
  project: {
    slug: string;
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
          <div className="flex mt-4 gap-4">
            <Link href={"/"} className="group/link">
              <FaGithub className="w-6 h-6 group-hover/link:text-white/80" />
            </Link>
            <Link href={"/"}>Demo</Link>
          </div>
        </article>
      </div>
    </>
  );
};
