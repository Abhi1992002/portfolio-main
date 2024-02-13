import Particles from "../components/particles";
import { Content } from "@/components/content";
import { Navbar } from "@/components/navbar";
import { ThreeD } from "@/components/3d";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col  justify-center w-screen h-screen overflow-hidden relative">
      {/* particles */}
      <div className="w-full absolute top-8">
        <Navbar />
      </div>

      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={300}
      />

      {/* content */}
      <div className="flex h-full items-center gap-8 pl-12">
        <div className="w-full flex-1">
          <Content />
        </div>
        <div className="w-[full] h-[100%]  flex-1 animate-fade-in">
          <ThreeD />
        </div>
      </div>

      {/* kid image */}
      <Image
        src={"/kid.png"}
        alt="kid image"
        width={450}
        height={450}
        className=" absolute bottom-0 left-[50%] -translate-x-[50%] animate-fade-in hover:scale-105 transition-all duration-300 ease-in-out"
      />
    </div>
  );
}
