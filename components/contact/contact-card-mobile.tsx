import React, { useEffect, useState } from "react";
import { IconType } from "react-icons/lib";
import { Card } from "../card";
import Link from "next/link";

type ContactCardMobileProps = {
  s: {
    href: string;
    icon: IconType;
    handle: string;
    label: string;
  };
};

export const ContactCardMobile = ({ s }: ContactCardMobileProps) => {
  return (
    <>
      <Card>
        <Link
          href={s.href}
          target="_blank"
          className="p-4 w-[350px] relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16 hover:cursor-pointer hover:bg-zinc-900"
        >
          <span
            className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent group-hover:opacity-0 group-hover/pin:opacity-0"
            aria-hidden="true"
          />
          <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange group-hover:opacity-0 group-hover/pin:opacity-0">
            <s.icon />
          </span>{" "}
          <div className="z-10 flex flex-col items-center">
            <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
              {s.handle}
            </span>
            <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
              {s.label}
            </span>
          </div>
        </Link>
      </Card>
    </>
  );
};
