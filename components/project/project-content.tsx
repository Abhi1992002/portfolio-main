import React, { useEffect, useState } from "react";
import { Card } from "../card";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { Article } from "./article";
import { sorted, top1, top2, top3 } from "@/data/projects";
import { ArticleSmall } from "./article-small";

type ProjectContentProps = {};

export const ProjectContent = ({}: ProjectContentProps) => {
  return (
    <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32 bg-black">
      {/* top section */}
      <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2  bg-black">
        <Card>
          <div className="xl:block hidden">
            <Article project={top1} top1={true} />
          </div>
          <div className="xl:hidden block">
            <ArticleSmall project={top1} />
          </div>
        </Card>
        <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
          {[top2, top3].map((project) => (
            <Card key={project.github}>
              <div className="xl:block hidden relative">
                <Article project={project} />
              </div>
              <div className="xl:hidden block relative">
                <ArticleSmall project={project} />
              </div>
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
                <Card key={project.github}>
                  <div className="xl:block hidden relative">
                    <Article project={project} />
                  </div>
                  <div className="xl:hidden block relative">
                    <ArticleSmall project={project} />
                  </div>
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.github}>
                  <div className="xl:block hidden relative">
                    <Article project={project} />
                  </div>
                  <div className="xl:hidden block relative">
                    <ArticleSmall project={project} />
                  </div>
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.github}>
                  <div className="xl:block hidden relative">
                    <Article project={project} />
                  </div>
                  <div className="xl:hidden block relative">
                    <ArticleSmall project={project} />
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
