import React from "react";
import {
  PanInfo,
  motion,
  useAnimation,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

const projects = [
  {
    name: "AI-Powered Task Manager",
    link: "/projects/task-manager",
    github: "https://github.com/yourusername/ai-task-manager",
  },
  {
    name: "Blockchain Voting System",
    link: "/projects/blockchain-voting",
    github: "https://github.com/yourusername/blockchain-voting",
  },
  {
    name: "Augmented Reality Navigation",
    link: "/projects/ar-navigation",
    github: "https://github.com/yourusername/ar-navigation",
  },
  {
    name: "Quantum Computing Simulator",
    link: "/projects/quantum-simulator",
    github: "https://github.com/yourusername/quantum-simulator",
  },
  {
    name: "Neural Network Visualizer",
    link: "/projects/nn-visualizer",
    github: "https://github.com/yourusername/nn-visualizer",
  },
  {
    name: "Decentralized File Storage",
    link: "/projects/decentralized-storage",
    github: "https://github.com/yourusername/decentralized-storage",
  },
  {
    name: "IoT Home Automation",
    link: "/projects/iot-home",
    github: "https://github.com/yourusername/iot-home-automation",
  },
  {
    name: "Gesture-Controlled Drone",
    link: "/projects/gesture-drone",
    github: "https://github.com/yourusername/gesture-drone",
  },
  {
    name: "Predictive Maintenance AI",
    link: "/projects/predictive-maintenance",
    github: "https://github.com/yourusername/predictive-maintenance-ai",
  },
  {
    name: "Virtual Reality Therapy",
    link: "/projects/vr-therapy",
    github: "https://github.com/yourusername/vr-therapy",
  },
];

const angleIncrement = 360 / projects.length;
const dragFactor = 0.01;

export default function ProjectScroller() {
  const controls = useAnimation();
  const rotation = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [middleProject, setMiddleProject] = useState(projects[0]);

  useMotionValueEvent(rotation, "change", (value) => {
    const adjustedRotation = ((value % 360) + 360) % 360;
    const middleIndex =
      Math.round(adjustedRotation / angleIncrement) % projects.length;
    const actualMiddleProject =
      projects[(projects.length - middleIndex) % projects.length];
    setMiddleProject(actualMiddleProject);
  });

  const onDrag = (_: any, info: PanInfo) => {
    const currentRotation = rotation.get() + info.offset.y * dragFactor;
    rotation.set(currentRotation);
  };

  const onDragEnd = (_: any, info: PanInfo) => {
    const endRotation = rotation.get() + info.velocity.y * dragFactor;
    controls.start({
      rotate: endRotation,
      transition: { type: "spring", mass: 0.1 },
    });
  };

  const transform = useTransform(rotation, (value) => {
    return `rotate(${value}deg)`;
  });

  return (
    <div
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
      ref={containerRef}
    >
      <div className="pointer-events-none absolute left-0 top-0 z-50 h-4 w-full bg-black text-white backdrop-blur-xl "></div>
      <motion.div
        className="relative -ml-[100vw] z-10 flex h-screen w-screen cursor-grab items-center justify-center active:cursor-grabbing"
        animate={controls}
        style={{
          transformOrigin: "center center",
          transform,
          rotate: rotation,
        }}
        drag="y"
        onDrag={onDrag}
        onDragEnd={onDragEnd}
      >
        {projects.map((project, index) => {
          const rotate = angleIncrement * index;

          return (
            <motion.div
              key={`${project.name}-${index}`}
              className={`absolute ${
                project === middleProject ? "text-white" : "text-white/30"
              } transition-colors duration-150`}
              style={{
                left: "50%",
                transform: `rotate(${rotate}deg) translateX(300px)`,
                transformOrigin: "left center",
              }}
            >
              <Link href={project.link} className="text-4xl">
                {project.name}
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
      <div className="pointer-events-none absolute bottom-0 left-0 z-50 h-4 w-full bg-black text-white backdrop-blur-xl "></div>

      {/* Display middle project details */}
      <div className="absolute bottom-[50%] right-0 text-center">
        <h2 className="text-2xl font-bold mb-2">{middleProject.name}</h2>
        <div className="space-x-4">
          <Link
            href={middleProject.link}
            className="text-blue-500 hover:underline"
          >
            {middleProject.name}
          </Link>
          <Link
            href={middleProject.github}
            className="text-green-500 hover:underline"
          >
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
