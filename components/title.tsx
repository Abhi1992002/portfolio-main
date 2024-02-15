import { cn } from "@/lib/cn";
import React, { useEffect, useState } from "react";

type TitleProps = {
  title: string;
  className?: string;
};

export const Title = ({ title, className }: TitleProps) => {
  return (
    <>
      <div>
        <div className="hidden w-full h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        <div className="text-center ">
          <h1
            className={cn(
              "z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text",
              className
            )}
          >
            {title}
          </h1>
        </div>

        <div className="hidden w-full h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      </div>
    </>
  );
};
