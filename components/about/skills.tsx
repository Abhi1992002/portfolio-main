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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Ripple from "../magicui/ripple";

type SkillsProps = {};

const skillsData = {
  frontend: [
    { Icon: FaReact, name: "React" },
    { Icon: TbBrandNextjs, name: "Next.js" },
    { Icon: SiRemix, name: "Remix" },
    { Icon: SiTailwindcss, name: "Tailwind CSS" },
    { Icon: FaHtml5, name: "HTML5" },
    { Icon: FaCss3Alt, name: "CSS3" },
    { Icon: SiReacthookform, name: "React Hook Form" },
    { Icon: SiAxios, name: "Axios" },
    { Icon: SiReactquery, name: "React Query" },
    { Icon: "Next-auth", name: "NextAuth.js" },
    { Icon: "clerk", name: "Clerk" },
    { Icon: IoLogoJavascript, name: "JavaScript" },
    { Icon: SiTypescript, name: "TypeScript" },
    { Icon: SiMui, name: "Material-UI" },
    { Icon: SiRecoil, name: "Recoil" },
    { Icon: SiVite, name: "Vite" },
    { Icon: FaFigma, name: "Figma" },
    { Icon: FiFramer, name: "Framer Motion" },
    { Icon: "GSAP", name: "GSAP" },
    { Icon: TbBrandThreejs, name: "Three.js" },
  ],
  backend: [
    { Icon: FaNodeJs, name: "Node.js" },
    { Icon: GrGraphQl, name: "GraphQL" },
    { Icon: "Convex", name: "Convex" },
    { Icon: SiTrpc, name: "tRPC" },
    { Icon: SiPostgresql, name: "PostgreSQL" },
    { Icon: SiMongodb, name: "MongoDB" },
    { Icon: "Web Sockets", name: "Web Sockets" },
    { Icon: DiMysql, name: "MySQL" },
    { Icon: SiPrisma, name: "Prisma" },
    { Icon: "Drizzle", name: "Drizzle" },
    { Icon: SiWebrtc, name: "WebRTC" },
    { Icon: SiApollographql, name: "Apollo GraphQL" },
    { Icon: "server actions", name: "Server Actions" },
    { Icon: FaAws, name: "AWS" },
    { Icon: RiOpenaiFill, name: "OpenAI" },
    { Icon: FaDigitalOcean, name: "DigitalOcean" },
    { Icon: SiVercel, name: "Vercel" },
    { Icon: SiNginx, name: "Nginx" },
  ],
  common: [
    { Icon: "C language", name: "C" },
    { Icon: FaPython, name: "Python" },
    { Icon: SiJsonwebtokens, name: "JSON Web Tokens" },
    { Icon: FaDocker, name: "Docker" },
    { Icon: SiZod, name: "Zod" },
    { Icon: SiGithubactions, name: "GitHub Actions" },
    { Icon: "ngork", name: "ngrok" },
    { Icon: FaStripe, name: "Stripe" },
    { Icon: FaGit, name: "Git" },
    { Icon: SiJest, name: "Jest" },
    { Icon: FaNpm, name: "npm" },
    { Icon: SiPnpm, name: "pnpm" },
  ],
};

export const Skills = ({}: SkillsProps) => {
  return (
    <div className="w-full flex justify-center  pb-20  relative">
      <div className="w-[95%] sm:w-[80%] my-12">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div
            key={category}
            className="p-2 flex flex-col justify-start items-center mt-14"
          >
            <h1 className="text-xl text-white capitalize">{category}</h1>

            <div className="flex pt-4 gap-2 sm:gap-4 flex-wrap justify-center">
              {skills.map((skill, index) => (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger>
                      <SkillBox Icon={skill.Icon} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
