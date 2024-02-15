import { AboutContent } from "@/components/about/about-content";

import { Skills } from "@/components/about/skills";
import { Meteors } from "@/components/meteors";
import { Navbar } from "@/components/navbar";
import Particles from "@/components/particles";

import { Title } from "@/components/title";
import Image from "next/image";
import React from "react";

type AboutPageProps = {};

const AboutPage = ({}: AboutPageProps) => {
  return (
    <div>
      <div className="w-screen overflow-x-hidden relative ">
        <div className="w-full fixed top-0 bg-black/50 z-[102] p-8  backdrop-blur-xl ">
          <Navbar />
        </div>
        <div className="w-screen h-screen absolute top-[-50px] left-24 animate-fade-in">
          <Meteors number={25} />
        </div>
        <Particles
          className="fixed inset-0 -z-10 animate-fade-in"
          quantity={300}
        />
        {/* main page */}
        <div className="w-full mt-24  sm:px-10 flex items-center flex-col relative pb-20">
          <div className="flex">
            <Title title="About" />
          </div>

          <div className=" sm:w-[90%] w-[95%] animate-fade-in mt-[55px]">
            <AboutContent />
            <h1 className="text-7xl font-bold text-white text-center mt-8 filter grayscale">
              ✌🏻
            </h1>
          </div>
        </div>

        {/* skills */}
        <div className=" bg-black border-t w-full animate-fade-in text-center py-8 pt-24 relative ">
          <h1 className="z-10 text-5xl text-white cursor-default ">
            My Skills
          </h1>
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
