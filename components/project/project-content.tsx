import React, { useEffect, useState } from "react";
import { Card } from "../card";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { Article } from "./article";
import { sorted, top1, top2, top3 } from "@/data/projects";

type ProjectContentProps = {};

export const ProjectContent = ({}: ProjectContentProps) => {
  return (
    <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32 bg-black">
      {/* top section */}
      <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2  bg-black">
        <Card>
          <Link href={`/projects`}>
            <article className="relative w-full h-full p-4 md:p-8">
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs text-zinc-100">
                  <span>SOON</span>
                </div>
                <span className="flex items-center gap-1 text-xs text-zinc-500">
                  <FaEye className="w-4 h-4" />{" "}
                </span>
              </div>

              <h2
                id="featured-post"
                className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
              >
                {top1.title}
              </h2>
              <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                {top1.description}
              </p>
              <div className="absolute bottom-4 md:bottom-8">
                <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                  Read more <span aria-hidden="true">&rarr;</span>
                </p>
              </div>
            </article>
          </Link>
        </Card>
        <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
          {[top2, top3].map((project) => (
            <Card key={project.slug}>
              <Link href={`/projects/${project.slug}`}>
                <article className="p-4 md:p-8">
                  <div className="flex justify-between gap-2 items-center">
                    <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                      <span>SOON</span>
                    </span>
                    <span className="text-zinc-500 text-xs  flex items-center gap-1">
                      <FaEye className="w-4 h-4" />{" "}
                    </span>
                  </div>
                  <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                    {project.title}
                  </h2>
                  <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {project.description}
                  </p>
                </article>
              </Link>
            </Card>
          ))}
        </div>
      </div>

      {/* line */}
      <div className="w-full h-px bg-zinc-800" />

      {/* bottom section */}
      <div>
        <h1 className="mb-20 text-4xl font-bold">Some Small Projects</h1>
        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={13} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={2} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={10} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
