import React from "react";
import { SkillBox } from "./shimmer";
import {
  FaAws,
  FaCss3Alt,
  FaDigitalOcean,
  FaDocker,
  FaFigma,
  FaGit,
  FaHtml5,
  FaNodeJs,
  FaNpm,
  FaPython,
  FaReact,
  FaStripe,
} from "react-icons/fa";
import { TbBrandNextjs, TbBrandThreejs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { FiFramer } from "react-icons/fi";
import {
  SiApollographql,
  SiAxios,
  SiGithubactions,
  SiJest,
  SiJsonwebtokens,
  SiMongodb,
  SiMui,
  SiNginx,
  SiPnpm,
  SiPostgresql,
  SiPrisma,
  SiReacthookform,
  SiReactquery,
  SiRecoil,
  SiRemix,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
  SiVercel,
  SiVite,
  SiWebrtc,
  SiZod,
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { DiMysql } from "react-icons/di";
import { RiOpenaiFill } from "react-icons/ri";
type SkillsProps = {};

export const Skills = ({}: SkillsProps) => {
  return (
    <div className="w-full flex justify-center  pb-20 relative">
      <div className="w-[80%] my-24">
        <div className="p-2 flex flex-col justify-start items-center">
          <h1 className=" text-xl">Frontend</h1>
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
        </div>
        <div className="p-2 flex flex-col justify-start items-center mt-14">
          <h1 className=" text-xl">Backend</h1>
          <div className="flex pt-4 gap-4 flex-wrap justify-center">
            <SkillBox Icon={FaNodeJs} />
            <SkillBox Icon={GrGraphQl} />
            <SkillBox Icon={"Convex"} />
            <SkillBox Icon={SiTrpc} />
            <SkillBox Icon={SiPostgresql} />
            <SkillBox Icon={SiMongodb} />
            <SkillBox Icon={"Web Sockets"} />
            <SkillBox Icon={DiMysql} />
            <SkillBox Icon={SiPrisma} />
            <SkillBox Icon={"Drizzle"} />
            <SkillBox Icon={SiWebrtc} />
            <SkillBox Icon={SiApollographql} />
            <SkillBox Icon={"server actions"} />
            <SkillBox Icon={FaAws} />
            <SkillBox Icon={RiOpenaiFill} />
            <SkillBox Icon={FaDigitalOcean} />
            <SkillBox Icon={SiVercel} />
            <SkillBox Icon={SiNginx} />
          </div>
        </div>

        <div className="p-2 flex flex-col justify-start items-center mt-14">
          <h1 className=" text-xl">Common</h1>
          <div className="flex pt-4 gap-4 flex-wrap justify-center">
            <SkillBox Icon={"C language"} />
            <SkillBox Icon={FaPython} />
            <SkillBox Icon={SiJsonwebtokens} />
            <SkillBox Icon={FaDocker} />
            <SkillBox Icon={SiZod} />
            <SkillBox Icon={SiGithubactions} />
            <SkillBox Icon={"ngork"} />
            <SkillBox Icon={FaStripe} />
            <SkillBox Icon={FaGit} />
            <SkillBox Icon={SiJest} />
            <SkillBox Icon={FaNpm} />
            <SkillBox Icon={SiPnpm} />
          </div>
        </div>
      </div>
    </div>
  );
};
