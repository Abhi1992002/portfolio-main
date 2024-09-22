"use client";
import Image from "next/image";
import { Content } from "@/components/content";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import LearningTimeline from "@/components/timeline";
import { Skills } from "@/components/about/skills";
import Ripple from "@/components/magicui/ripple";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExploreButton } from "@/components/project/explore-button";

const Hero = () => {
  return (
    <div className="flex min-h-[80vh] flex-col justify-center items-center w-screen h-fit pt-72 overflow-hidden relative">
      <div className="w-full absolute top-8 z-[100]">
        <Navbar />
      </div>

      <Ripple className="top-0" />
      <div className="flex flex-col items-center justify-center h-full w-full">
        <Content />
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="px-6 py-20 mx-auto max-w-7xl lg:px-8 flex items-center justify-center flex-col bg-black">
      <ExploreButton title="About Me" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4 items-center">
        <div className="relative w-[90%] md:w-[60%] mx-auto h-[400px] mt-16 overflow-hidden rounded-2xl">
          <Image
            src="/personal.jpeg"
            alt="Abhimanyu"
            layout="fill"
            objectFit="cover"
            className="rounded-lg grayscale scale-[1.3]"
          />
        </div>
        <div className="text-neutral-400 space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>My name is Abhimanyu, and I live in India.</li>
            <li>
              Currently pursuing a Bachelor's in Computer Science from BITS
              Pilani.
            </li>
            <li>I have 2 years of experience in web development.</li>
            <li>Proficient in Data Structures and Algorithms (DSA).</li>
            <li>Skilled in creating robust systems.</li>
            <li>I'm enthusiastic about potential collaborations.</li>
          </ul>
          <p className="mt-4">
            I invite you to explore my projects and skills below. I would love
            the opportunity to work with you!
          </p>
        </div>
      </div>
    </div>
  );
};
const projects = [
  {
    id: 1,
    name: "AI Task Manager",
    description: "Intelligent task organization",
    githubLink: "https://github.com/yourusername/ai-task-manager",
    demoLink: "https://ai-task-manager-demo.com",
    tags: ["react", "nextjs", "typescript", "ai"],
    size: "large",
  },
  {
    id: 2,
    name: "Blockchain Voting",
    description: "Secure digital voting system",
    githubLink: "https://github.com/yourusername/blockchain-voting",
    demoLink: "https://blockchain-voting-demo.com",
    tags: ["react", "solidity", "ethereum"],
    size: "small",
  },
  {
    id: 3,
    name: "AR Navigation",
    description: "Augmented reality for navigation",
    githubLink: "https://github.com/yourusername/ar-navigation",
    demoLink: "https://ar-navigation-demo.com",
    tags: ["react-native", "arkit", "arcore"],
    size: "small",
  },
  {
    id: 4,
    name: "Quantum Simulator",
    description: "Quantum computing simulation",
    githubLink: "https://github.com/yourusername/quantum-simulator",
    demoLink: "https://quantum-simulator-demo.com",
    tags: ["python", "qiskit", "jupyter"],
    size: "medium",
  },
  {
    id: 5,
    name: "Neural Network Visualizer",
    description: "Visual NN representation",
    githubLink: "https://github.com/yourusername/nn-visualizer",
    demoLink: "https://nn-visualizer-demo.com",
    tags: ["react", "d3", "tensorflow.js"],
    size: "small",
  },
  {
    id: 6,
    name: "Decentralized File Storage",
    description: "Secure, distributed file storage system",
    githubLink: "https://github.com/yourusername/decentralized-storage",
    demoLink: "https://decentralized-storage-demo.com",
    tags: ["react", "ipfs", "ethereum"],
    size: "medium",
  },
  {
    id: 7,
    name: "IoT Home Automation",
    description: "Smart home control system",
    githubLink: "https://github.com/yourusername/iot-home-automation",
    demoLink: "https://iot-home-automation-demo.com",
    tags: ["react", "nodejs", "mqtt", "raspberry-pi"],
    size: "large",
  },
  {
    id: 8,
    name: "Gesture-Controlled Drone",
    description: "Drone control using hand gestures",
    githubLink: "https://github.com/yourusername/gesture-drone",
    demoLink: "https://gesture-drone-demo.com",
    tags: ["python", "opencv", "machine-learning"],
    size: "medium",
  },
  {
    id: 9,
    name: "Predictive Maintenance AI",
    description: "AI-powered equipment maintenance prediction",
    githubLink: "https://github.com/yourusername/predictive-maintenance-ai",
    demoLink: "https://predictive-maintenance-ai-demo.com",
    tags: ["python", "tensorflow", "scikit-learn"],
    size: "large",
  },
  {
    id: 10,
    name: "Virtual Reality Therapy",
    description: "VR-based mental health treatment",
    githubLink: "https://github.com/yourusername/vr-therapy",
    demoLink: "https://vr-therapy-demo.com",
    tags: ["unity", "c#", "oculus"],
    size: "large",
  },
  {
    id: 9,
    name: "Predictive Maintenance AI",
    description: "AI-powered equipment maintenance prediction",
    githubLink: "https://github.com/yourusername/predictive-maintenance-ai",
    demoLink: "https://predictive-maintenance-ai-demo.com",
    tags: ["python", "tensorflow", "scikit-learn"],
    size: "large",
  },
  {
    id: 10,
    name: "Virtual Reality Therapy",
    description: "VR-based mental health treatment",
    githubLink: "https://github.com/yourusername/vr-therapy",
    demoLink: "https://vr-therapy-demo.com",
    tags: ["unity", "c#", "oculus"],
    size: "large",
  },
];

const BentoGrid = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );

  const filteredProjects =
    selectedTags.length > 0
      ? projects.filter((project) =>
          selectedTags.some((tag) => project.tags.includes(tag))
        )
      : projects;

  const displayedProjects = showAllProjects
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8" id="projects">
      <h1 className="text-3xl font-bold mb-8 text-center text-white">
        Projects
      </h1>

      <div className="mb-6 flex flex-wrap gap-2 justify-center">
        {allTags.map((tag) => (
          <Button
            key={tag}
            onClick={() => toggleTag(tag)}
            variant={selectedTags.includes(tag) ? "outline" : "default"}
            className="text-sm"
          >
            {tag}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedProjects.map((project) => (
          <motion.div
            key={project.id}
            className={`group relative overflow-hidden border hover:cursor-pointer border-neutral-700 rounded-lg shadow-lg transition-transform duration-100 ease-linear hover:scale-105 ${
              project.size === "large"
                ? "md:col-span-2 md:row-span-2"
                : project.size === "medium"
                ? "md:col-span-2"
                : ""
            }`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1 }}
          >
            <div
              className={`w-full bg-neutral-900 ${
                project.size === "large" ? "h-[400px]" : "h-[200px]"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black flex flex-col justify-end p-4 text-white">
              <h2 className="text-xl font-semibold mb-1">{project.name}</h2>
              <p className="text-sm text-neutral-400 mb-2">
                {project.description}
              </p>
              <div className="flex space-x-4 mb-2">
                <Link
                  href={project.githubLink}
                  className="text-blue-400 hover:text-blue-300 flex items-center"
                >
                  <Github className="w-4 h-4 mr-1" />
                  GitHub
                </Link>
                <Link
                  href={project.demoLink}
                  className="text-green-400 hover:text-green-300 flex items-center"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Demo
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-neutral-800 rounded-full px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ArrowUpRight className="absolute top-4 right-4 w-6 h-6" />
            </div>
          </motion.div>
        ))}
      </div>
      {!showAllProjects && filteredProjects.length > 6 && (
        <div className="mt-8 flex justify-center">
          <Button onClick={() => setShowAllProjects(true)}>
            See All Projects
          </Button>
        </div>
      )}
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col w-screen min-h-screen overflow-x-hidden bg-black">
      <Hero />
      <About />
      <div className="py-20">
        <BentoGrid />
      </div>
      <div
        className=" w-full overflow-x-hidden relative text-center py-8 pt-24 bg-black"
        id="skills"
      >
        <h1 className="z-10 text-5xl text-white cursor-default">My Skills</h1>
        <Ripple />
        <Skills />
      </div>
      <LearningTimeline />
    </div>
  );
}
