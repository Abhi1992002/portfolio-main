"use client";
import { Lines } from "@/components/gemini-effect";
import { Meteors } from "@/components/meteors";
import { Navbar } from "@/components/navbar";
import Particles from "@/components/particles";
import { ProjectContent } from "@/components/project/project-content";
import { useScroll, useTransform } from "framer-motion";
import React, { useEffect, useState } from "react";

type ProjectPageProps = {};

const ProjectPage = ({}: ProjectPageProps) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
  return (
    <div className="relative bg-black">
      <div className="w-full border-b border-white/50 lg:border-none fixed top-0 bg-black z-[102] p-8  backdrop-blur-xl ">
        <Navbar />
      </div>
      <div className="w-full h-[250vh] relative lg:block hidden" ref={ref}>
        <Particles
          className="fixed inset-0 -z-1 animate-fade-in"
          quantity={300}
        />
        <div className="w-screen h-screen absolute top-0 animate-fade-in">
          <Meteors number={25} />
        </div>
        <Lines
          bgColor="#525252"
          linesColor="#ffffff"
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        />
      </div>
      <div className="w-screen pb-20 bg-black border-t relative pt-[20px] xl:pt-0 animate-fade-in">
        <ProjectContent />
      </div>
    </div>
  );
};

export default ProjectPage;
