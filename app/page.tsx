import Particles from "../components/particles";
import { Content } from "@/components/content";
import { Navbar } from "@/components/navbar";
import { ThreeD } from "@/components/3d";
import Image from "next/image";
import { Meteors } from "@/components/meteors";

export default function Home() {
  return (
    <div className="flex flex-col justify-center w-screen h-screen overflow-hidden relative">
      {/* particles */}
      <div className="w-full absolute top-8 z-[100]">
        <Navbar />
      </div>

      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={300}
      />

      {/* content */}
      <div className="flex h-full relative xl:items-center gap-8 xl:pl-12 ">
        <div className="w-full flex-1 mt-[50%] sm:mt-[10%] xl:mt-0">
          <Content />
        </div>
        <div className="w-screen h-[100%]  flex-1 animate-fade-in hidden xl:block">
          <ThreeD />
        </div>
      </div>

      {/* kid image */}
      <div className="absolute bottom-0  left-[50%] -translate-x-[55%] 2xl:w-[450px] 2xl:h-[450px] xl:w-[350px] xl:h-[350px] w-[250px] h-[250px] animate-fade-in">
        <Meteors number={10} />
        <Image
          src={"/kid.png"}
          alt="kid image"
          fill
          className=" hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </div>
    </div>
  );
}
