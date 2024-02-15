import React, { useEffect, useState } from "react";
import { ExploreButton } from "./explore-button";

type ProjectHeroProps = {};
import { IoIosArrowDropdown } from "react-icons/io";
export const ProjectHero = ({}: ProjectHeroProps) => {
  return (
    <div className="flex flex-col w-screen h-screen items-center relative">
      <div className="absolute top-16">
        <div className="hidden w-full h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        <div className="text-center ">
          <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl xl:text-9xl whitespace-nowrap bg-clip-text ">
            Projects
          </h1>
        </div>

        <div className="hidden w-full h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      </div>

      <div className="absolute top-[25rem] 2xl:top-[40rem] xl:top-[28rem] flex  flex-col items-center gap-8 animate-fade-in">
        <ExploreButton title="Scroll To Explore" />
        <IoIosArrowDropdown className="w-8 h-8 animate-bounce" />
      </div>
    </div>
  );
};
