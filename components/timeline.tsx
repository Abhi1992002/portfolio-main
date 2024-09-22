"use client";

import { Button, CustomFlowbiteTheme, Timeline } from "flowbite-react";
import {
  HiArrowNarrowRight,
  HiCalendar,
  HiCheckCircle,
  HiChevronDoubleRight,
} from "react-icons/hi";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { useState } from "react";
import { Checkbox } from "./ui/checkbox";

const customTheme: CustomFlowbiteTheme["timeline"] = {
  root: {
    direction: {
      horizontal: "sm:flex",
      vertical: "relative border-l border-gray-200 dark:border-gray-700",
    },
  },
  item: {
    root: {
      horizontal: "relative mb-6 sm:mb-0",
      vertical: "mb-10 ml-6",
    },
    content: {
      root: {
        base: "",
        horizontal: "mt-3 sm:pr-8",
        vertical: "",
      },
      body: {
        base: "mb-4 text-base font-normal text-gray-500 dark:text-gray-400",
      },
      time: {
        base: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
      },
      title: {
        base: "text-lg font-semibold text-gray-900 dark:text-white",
      },
    },
    point: {
      horizontal: "flex items-center",
      line: "hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex",
      marker: {
        base: {
          horizontal:
            "absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
          vertical:
            "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
        },
        icon: {
          base: "h-6 w-6 text-green-400 dark:text-cyan-300 ",
          wrapper:
            "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-white",
        },
      },
      vertical: "",
    },
  },
};

const timelineData = [
  {
    date: "1st Sept 2024 - (2 Weeks)",
    title: "Rust Language",
    description:
      "Explored Rust Language for building language model applications and LangGraphJS for graph-based language processing. Focused on integrating these tools into existing projects.",
    hasButton: true,
    subtopics: [
      { name: "Rust Language Basics", completed: true },
      { name: "Rust Language Fundamentals", completed: true },
      { name: "Integration Techniques", completed: false },
      { name: "Building Rust Language Applications", completed: false },
      { name: "Memory Management in Rust", completed: true },
      { name: "Ownership and Borrowing", completed: true },
      { name: "Rust Concurrency", completed: false },
      { name: "Error Handling in Rust", completed: true },
      { name: "Rust Modules and Crates", completed: true },
      { name: "Rust Traits and Generics", completed: false },
      { name: "Rust Macros", completed: false },
      { name: "Rust Testing and Documentation", completed: true },
      { name: "Rust Web Development", completed: false },
      { name: "Rust for Systems Programming", completed: false },
      { name: "Rust and WebAssembly", completed: false },
      { name: "Rust Performance Optimization", completed: false },
      { name: "Rust Design Patterns", completed: false },
      { name: "Rust for Embedded Systems", completed: false },
    ],
    going: false,
    completed: true,
    projects: [
      {
        name: "Rust CLI Tool",
        link: "https://github.com/yourusername/rust-cli-tool",
      },
      {
        name: "Rust Web Server",
        link: "https://github.com/yourusername/rust-web-server",
      },
      {
        name: "Rust Game Engine",
        link: "https://github.com/yourusername/rust-game-engine",
      },
    ],
  },
  {
    date: "15th Sept 2024 - (3 Weeks)",
    title: "LangChain.js and LangGraph",
    description:
      "Delved into LangChain.js for building scalable language model applications and explored LangGraph for creating complex language processing workflows.",
    hasButton: true,
    subtopics: [
      { name: "LangChain.js Basics", completed: false },
      { name: "LangGraph Fundamentals", completed: false },
      { name: "Integration with Language Models", completed: false },
      { name: "Building Complex NLP Pipelines", completed: false },
      { name: "Prompt Engineering with LangChain.js", completed: false },
      { name: "Memory and State Management", completed: false },
      { name: "Agents and Tools in LangChain.js", completed: false },
      { name: "Document Loading and Splitting", completed: false },
      { name: "Vector Stores and Embeddings", completed: false },
      { name: "Chains and Sequencing", completed: false },
      { name: "Output Parsing and Formatting", completed: false },
      { name: "LangChain.js for Chatbots", completed: false },
      { name: "LangGraph for Workflow Automation", completed: false },
      { name: "Integrating External APIs", completed: false },
      { name: "Fine-tuning Models with LangChain.js", completed: false },
      { name: "Evaluation and Testing in LangChain.js", completed: false },
      { name: "LangChain.js Security Best Practices", completed: false },
      { name: "Deploying LangChain.js Applications", completed: false },
    ],
    going: true,
    completed: false,
    projects: [
      {
        name: "AI Chatbot with LangChain.js",
        link: "https://github.com/yourusername/langchain-chatbot",
      },
      {
        name: "Document Analysis Pipeline",
        link: "https://github.com/yourusername/langgraph-doc-analysis",
      },
      {
        name: "Language Model Fine-tuning Tool",
        link: "https://github.com/yourusername/langchain-model-tuner",
      },
    ],
  },
  {
    date: "6th Oct 2024 - (4 Weeks)",
    title: "Go Language",
    description:
      "Learned Go programming language for building efficient and scalable backend services. Focused on concurrency patterns and microservices architecture.",
    hasButton: true,
    subtopics: [
      { name: "Go Language Basics", completed: false },
      { name: "Concurrency in Go", completed: false },
      { name: "RESTful API Development", completed: false },
      { name: "Microservices with Go", completed: false },
      { name: "Go Data Structures", completed: false },
      { name: "Error Handling in Go", completed: false },
      { name: "Go Testing and Benchmarking", completed: false },
      { name: "Go Modules and Package Management", completed: false },
      { name: "Go Interfaces and Polymorphism", completed: false },
      { name: "Go Web Frameworks (e.g., Gin, Echo)", completed: false },
      { name: "Database Integration in Go", completed: false },
      { name: "Go for DevOps and CLI Tools", completed: false },
      { name: "Go Performance Optimization", completed: false },
      { name: "Go and gRPC", completed: false },
      { name: "Go for Cloud Native Development", completed: false },
      { name: "Go Security Best Practices", completed: false },
      { name: "Go Design Patterns", completed: false },
      { name: "Deploying Go Applications", completed: false },
    ],
    going: false,
    completed: false,
    projects: [
      {
        name: "Go REST API",
        link: "https://github.com/yourusername/go-rest-api",
      },
      {
        name: "Concurrent Web Scraper",
        link: "https://github.com/yourusername/go-web-scraper",
      },
      {
        name: "Microservices Demo",
        link: "https://github.com/yourusername/go-microservices",
      },
    ],
  },
  {
    date: "3rd Nov 2024 - (3 Weeks)",
    title: "React Three Fiber",
    description:
      "Explored React Three Fiber for creating 3D graphics and animations in React applications. Focused on integrating 3D elements into web interfaces.",
    hasButton: true,
    subtopics: [
      { name: "Three.js Basics", completed: false },
      { name: "React Three Fiber Fundamentals", completed: false },
      { name: "3D Animations and Interactions", completed: false },
      { name: "Performance Optimization", completed: false },
      { name: "Geometry and Meshes", completed: false },
      { name: "Materials and Textures", completed: false },
      { name: "Lighting and Shadows", completed: false },
      { name: "Camera Controls", completed: false },
      { name: "Physics in React Three Fiber", completed: false },
      { name: "Particle Systems", completed: false },
      { name: "Post-processing Effects", completed: false },
      { name: "React Three Fiber Hooks", completed: false },
      { name: "3D Text and Typography", completed: false },
      { name: "Loading 3D Models", completed: false },
      { name: "React Three Fiber and WebXR", completed: false },
      { name: "Shaders in React Three Fiber", completed: false },
      { name: "Responsive 3D Design", completed: false },
      { name: "Testing and Debugging 3D Scenes", completed: false },
    ],
    going: false,
    completed: false,
    projects: [
      {
        name: "3D Portfolio Website",
        link: "https://github.com/yourusername/3d-portfolio",
      },
      {
        name: "Interactive 3D Product Viewer",
        link: "https://github.com/yourusername/3d-product-viewer",
      },
      {
        name: "3D Data Visualization Dashboard",
        link: "https://github.com/yourusername/3d-data-viz",
      },
    ],
  },
  {
    date: "24th Nov 2024 - (4 Weeks)",
    title: "Machine Learning with Python",
    description:
      "Dove deep into machine learning concepts and their implementation using Python. Focused on various algorithms, data preprocessing, and model evaluation techniques.",
    hasButton: true,
    subtopics: [
      { name: "Python for Data Science", completed: false },
      { name: "NumPy and Pandas Fundamentals", completed: false },
      { name: "Data Preprocessing Techniques", completed: false },
      { name: "Supervised Learning Algorithms", completed: false },
      { name: "Unsupervised Learning Algorithms", completed: false },
      { name: "Deep Learning Basics", completed: false },
      { name: "Neural Networks with TensorFlow", completed: false },
      { name: "Natural Language Processing", completed: false },
      { name: "Computer Vision with OpenCV", completed: false },
      { name: "Time Series Analysis", completed: false },
      { name: "Feature Engineering", completed: false },
      { name: "Model Evaluation and Validation", completed: false },
      { name: "Ensemble Methods", completed: false },
      { name: "Reinforcement Learning", completed: false },
      { name: "ML Model Deployment", completed: false },
      { name: "Ethical AI and Bias in ML", completed: false },
      { name: "Big Data Processing with PySpark", completed: false },
      { name: "ML Project Management", completed: false },
    ],
    going: false,
    completed: false,
    projects: [
      {
        name: "Image Classification Model",
        link: "https://github.com/yourusername/image-classifier",
      },
      {
        name: "Sentiment Analysis Tool",
        link: "https://github.com/yourusername/sentiment-analyzer",
      },
      {
        name: "Stock Price Predictor",
        link: "https://github.com/yourusername/stock-predictor",
      },
    ],
  },
  {
    date: "22nd Dec 2024 - (3 Weeks)",
    title: "Blockchain Development",
    description:
      "Explored blockchain technology and smart contract development. Focused on Ethereum and Solidity for creating decentralized applications (DApps).",
    hasButton: true,
    subtopics: [
      { name: "Blockchain Fundamentals", completed: false },
      { name: "Cryptography Basics", completed: false },
      { name: "Ethereum Ecosystem", completed: false },
      { name: "Solidity Programming", completed: false },
      { name: "Smart Contract Development", completed: false },
      { name: "Web3.js and Ethers.js", completed: false },
      { name: "Decentralized Finance (DeFi) Concepts", completed: false },
      { name: "Non-Fungible Tokens (NFTs)", completed: false },
      { name: "Blockchain Security", completed: false },
      { name: "Gas Optimization", completed: false },
      { name: "Truffle and Hardhat Frameworks", completed: false },
      { name: "IPFS for Decentralized Storage", completed: false },
      { name: "Oracles and Chainlink", completed: false },
      { name: "Layer 2 Solutions", completed: false },
      { name: "Cross-chain Interoperability", completed: false },
      { name: "Blockchain Governance", completed: false },
      { name: "Tokenomics", completed: false },
      { name: "Blockchain Testing and Auditing", completed: false },
    ],
    going: false,
    completed: false,
    projects: [
      {
        name: "ERC-20 Token",
        link: "https://github.com/yourusername/erc20-token",
      },
      {
        name: "Decentralized Exchange",
        link: "https://github.com/yourusername/dex-project",
      },
      {
        name: "NFT Marketplace",
        link: "https://github.com/yourusername/nft-marketplace",
      },
    ],
  },
];

const LearningTimeline = () => {
  const [showAll, setShowAll] = useState(false);
  const [expandedItems, setExpandedItems] = useState<{
    [key: number]: boolean;
  }>({
    0: true,
    1: true,
  });

  const displayedData = showAll ? timelineData : timelineData.slice(0, 4);

  const toggleSubtopics = (index: number) => {
    setExpandedItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-6 pt-20 mx-auto w-[90%] space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32 bg-black pb-10"
    >
      <h1 className="text-4xl font-bold text-center mb-6 text-white">
        Learning Timeline
      </h1>
      <p className="text-center text-neutral-400 mb-12">
        From 20th Sept 2024 - Present
      </p>
      <Timeline theme={customTheme}>
        {displayedData.map((item, index) => (
          <Timeline.Item key={index}>
            <Timeline.Point
              icon={item.completed ? HiCheckCircle : undefined}
              className={cn(item.completed ? "text-green-400" : "text-red-400")}
            />
            <Timeline.Content className="ml-8">
              <Timeline.Time className="text-white">{item.date}</Timeline.Time>
              <Timeline.Title
                className={cn(
                  "text-white flex items-center gap-2",
                  item.completed ? " text-neutral-200" : ""
                )}
              >
                {item.title}
                {item.going && (
                  <div className="bg-yellow-300/60 flex items-center gap-1 rounded-full border border-yellow-400 px-2 text-xs font-normal">
                    <span className="bg-yellow-200 rounded-full w-2 h-2"></span>
                    Working on it
                  </div>
                )}
                {item.completed && (
                  <div className="bg-green-300/60 flex items-center gap-1 rounded-full border border-green-400 px-2 text-xs font-normal">
                    <span className="bg-green-200 rounded-full w-2 h-2"></span>
                    Completed
                  </div>
                )}
              </Timeline.Title>
              <Timeline.Body
                className={cn(
                  "text-neutral-400",
                  item.completed ? " text-neutral-400" : ""
                )}
              >
                {item.description}
              </Timeline.Body>
              {item.projects.map((project) =>
                item.completed ? (
                  <Link
                    className={cn(
                      " p-2 rounded-md border pl-4 bg-green-500/50 text-white border-green-500 block mb-2 w-[300px]",
                      item.completed ? " " : ""
                    )}
                    href={project.link}
                    key={project.name}
                  >
                    {project.name}
                  </Link>
                ) : (
                  <div className="bg-neutral-300/40 p-2 rounded-md border pl-4 border-neutral-200/80 block mb-2 w-[300px]">
                    {project.name}
                  </div>
                )
              )}
              {item.hasButton && (
                <button
                  onClick={() => toggleSubtopics(index)}
                  className="flex items-center justify-center mt-4 bg-black text-sm text-white"
                >
                  {expandedItems[index] ? "Hide Subtopics" : "Show Subtopics"}
                  {expandedItems[index] ? (
                    <ChevronUp className="ml-2 h-3 w-3" />
                  ) : (
                    <ChevronDown className="ml-2 h-3 w-3" />
                  )}
                </button>
              )}
              {expandedItems[index] && (
                <ul className="mt-4 space-y-2 grid grid-cols-2 lg:grid-cols-3">
                  {item.subtopics.map((subtopic, subIndex) => (
                    <li key={subIndex} className="flex items-center space-x-2">
                      <Checkbox
                        id={`subtopic-${index}-${subIndex}`}
                        checked={subtopic.completed}
                        className="border-white"
                      />
                      <label
                        htmlFor={`subtopic-${index}-${subIndex}`}
                        className={cn(
                          "text-white text-sm",
                          subtopic.completed && "line-through"
                        )}
                      >
                        {subtopic.name}
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline>
      {!showAll && (
        <div className="flex justify-center mt-8">
          <Button
            onClick={() => setShowAll(true)}
            className="bg-white text-black px-4 py-2 rounded"
          >
            Show Complete Timeline
          </Button>
        </div>
      )}
    </motion.div>
  );
};

export default LearningTimeline;
