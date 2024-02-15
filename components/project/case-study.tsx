import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScreenShots } from "./screenshots";
import { TechStack } from "./tech-stack";
import { Challanges } from "./challanges";

type CaseStudyProps = {};

export const CaseStudy = ({}: CaseStudyProps) => {
  return (
    <div className="w-screen mb-20">
      {/* Architecture */}
      <div className="flex items-center w-full flex-col">
        <h1 className="text-5xl text-white text-center">Architecture</h1>
        <div className="w-[80%]  mt-[100px]">
          <Carousel>
            <CarouselContent>
              <CarouselItem className="basis-2/3 aspect-video p-4">
                <div className="border border-white rounded-xl max-w-5xl h-full"></div>
              </CarouselItem>
              <CarouselItem className="basis-2/3 aspect-video p-4">
                <div className="border border-white rounded-xl max-w-5xl h-full"></div>
              </CarouselItem>
              <CarouselItem className="basis-2/3 aspect-video p-4">
                <div className="border border-white rounded-xl max-w-5xl h-full"></div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="bg-black text-white" />
            <CarouselNext className="bg-black text-white" />
          </Carousel>
        </div>
      </div>

      {/* Tech stack */}
      <div className="w-full flex flex-col items-center mt-20 gap-12">
        <h1 className="text-5xl text-white text-center">TechStack used</h1>
        <div className="w-[80%]">
          <TechStack />
        </div>
      </div>

      {/* Challange and solution */}
      <div className="w-full flex flex-col items-center mt-20 gap-12">
        <h1 className="text-5xl text-white text-center">
          Challanges and Solution
        </h1>
        <div className="w-[80%]">
          <Challanges />
        </div>
      </div>

      {/* Screenshorts */}
      <div className="w-full h-screen flex flex-col items-center mt-20 gap-12">
        <h1 className="text-5xl text-white text-center">Some ScreenShots</h1>
        <div className="w-[80%] h-[80%]">
          <ScreenShots />
        </div>
      </div>
    </div>
  );
};
