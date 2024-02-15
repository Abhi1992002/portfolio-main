import React from "react";

type ExploreButtonProps = {
  title: string;
};

export const ExploreButton = ({ title }: ExploreButtonProps) => {
  return (
    <>
      <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/90 to-white/0  opacity-0 transition-opacity duration-500 group-hover:opacity-100 "></span>
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
          <span className="py-3 text-lg px-4">{title}</span>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-white/0 via-white/90 to-white/0 transition-opacity duration-500 group-hover:opacity-0"></span>
      </button>
    </>
  );
};
