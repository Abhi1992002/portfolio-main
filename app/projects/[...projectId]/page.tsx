import { Navbar } from "@/components/navbar";
import Particles from "@/components/particles";
import { CaseStudy } from "@/components/project/case-study";
import { ExploreButton } from "@/components/project/explore-button";
import { ContainerScroll } from "@/components/project/video";
import { Title } from "@/components/title";
import { sorted, top1, top2, top3 } from "@/data/projects";

import React, { useEffect } from "react";

type ProjectProps = {
  params: {
    projectId: string;
  };
};

const Project = ({ params }: ProjectProps) => {
  const projects = [...sorted, top1, top2, top3];
  // const value = projects.filter(
  //   (project) => project.slug === params.projectId[0]
  // );
  // const title = value[0].title;

  return (
    <></>
    // <div className="flex w-full flex-col items-center pt-24 relative">
    //   <div className="w-full fixed top-0 bg-black/50 z-[102] p-8  backdrop-blur-xl ">
    //     <Navbar />
    //   </div>
    //   <Particles
    //     className="fixed inset-0 -z-10 animate-fade-in"
    //     quantity={300}
    //   />

    //   <div className="w-full">
    //     {/* hero section */}
    //     <div className="flex flex-col overflow-hidden ">
    //       <ContainerScroll
    //         titleComponent={
    //           <>
    //             <Title title={title} className="md:text-6xl" />
    //             <p className="text-xl pt-10 animate-fade-in">
    //               {value[0].description}
    //             </p>
    //             <div className="flex justify-center items-center mt-8 gap-8 animate-fade-in">
    //               <Link href={"/"} className="group/link">
    //                 <FaGithub className="w-14 h-14 group-hover/link:text-white/80" />
    //               </Link>
    //               <Link href={"/"}>
    //                 <ExploreButton title="Demo" />
    //               </Link>
    //             </div>
    //           </>
    //         }
    //       />
    //     </div>

    //     {/* Case Study  */}
    //     <div className="w-full bg-black border-t border-white/90 pt-20">
    //       <CaseStudy />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Project;
