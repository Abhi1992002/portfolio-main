import React, { useEffect, useState } from "react";
import { IconType } from "react-icons/lib";

type SkillBoxProps = {
  Icon: IconType | string;
};

export const SkillBox = ({ Icon }: SkillBoxProps) => {
  return (
    <>
      <div className="inline-flex bg-black h-12 items-center justify-center rounded-md border border-neutral-800  px-6 font-medium text-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-neutral-50 z-[100]">
        {typeof Icon === "string" ? (
          <p className=" text-neutral-200">{Icon}</p>
        ) : (
          <Icon className="w-6 h-6 text-neutral-200" />
        )}
      </div>
    </>
  );
};
