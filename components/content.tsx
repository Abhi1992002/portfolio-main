import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

type ContentProps = {};

export const Content = ({}: ContentProps) => {
  return (
    <>
      <div className="w-full text-center">
        <div className="hidden w-full h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl  xl:text-9xl whitespace-nowrap bg-clip-text ">
          Abhimanyu
        </h1>

        <div className="hidden w-full h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="my-6 xl:my-10 text-center animate-fade-in">
          <h1 className="text-base md:text-lg font-semibold">
            Full-Stack Developer. Computer Science Student. Always Evolving.
          </h1>
          <h2 className="text-sm md:text-base text-zinc-400 mt-4">
            Let's explore what we can build together.
          </h2>
          <div className="w-full flex justify-center gap-8 mt-4 xl:mt-8">
            <Link href={"/"}>
              <FaGithub className="w-8 h-8 text-zinc-400 hover:text-white" />
            </Link>
            <Link href={"/"}>
              <RiTwitterXLine className="w-8 h-8 text-zinc-400  hover:text-white" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
