import React from "react";
import { SkillBox } from "../about/shimmer";
import { FaCss3Alt, FaFigma, FaHtml5, FaReact } from "react-icons/fa";
import { TbBrandNextjs, TbBrandThreejs } from "react-icons/tb";
import {
  SiAxios,
  SiMui,
  SiReacthookform,
  SiReactquery,
  SiRecoil,
  SiRemix,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FiFramer } from "react-icons/fi";

type TechStackProps = {};

export const TechStack = ({}: TechStackProps) => {
  return (
    <div className="flex pt-4 gap-4 flex-wrap justify-center">
      <SkillBox Icon={FaReact} />
      <SkillBox Icon={TbBrandNextjs} />
      <SkillBox Icon={SiRemix} />
      <SkillBox Icon={SiTailwindcss} />
      <SkillBox Icon={FaHtml5} />
      <SkillBox Icon={FaCss3Alt} />
      <SkillBox Icon={SiReacthookform} />
      <SkillBox Icon={SiAxios} />
      <SkillBox Icon={SiReactquery} />
      <SkillBox Icon={"Next-auth"} />
      <SkillBox Icon={"clerk"} />
      <SkillBox Icon={IoLogoJavascript} />
      <SkillBox Icon={SiTypescript} />
      <SkillBox Icon={SiMui} />
      <SkillBox Icon={SiRecoil} />
      <SkillBox Icon={SiVite} />
      <SkillBox Icon={FaFigma} />
      <SkillBox Icon={FiFramer} />
      <SkillBox Icon={"GSAP"} />
      <SkillBox Icon={TbBrandThreejs} />
    </div>
  );
};
