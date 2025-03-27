import React from "react";
import FeatureCard from "./FeatureCard";
import { FaReact, FaDatabase, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiPostgresql, SiReact, SiTensorflow, SiPandas, SiWireshark } from "react-icons/si";

const Features = () => {
  const features = [
    {
      icon: SiNextdotjs,
      title: "Next.js",
      description: "Proficient in building scalable, server-rendered applications with Next.js.",
    },
    {
      icon: FaReact,
      title: "React",
      description: "Experienced in building dynamic, component-based UIs with React.",
    },
    {
      icon: SiReact,
      title: "React Native",
      description: "Skilled in developing cross-platform mobile applications with React Native.",
    },
    {
      icon: SiMongodb,
      title: "MongoDB",
      description: "Proficient in designing and managing NoSQL databases with MongoDB.",
    },
    {
      icon: SiPostgresql,
      title: "PostgreSQL",
      description: "Experienced in working with relational databases using PostgreSQL.",
    },
    {
      icon: SiTensorflow,
      title: "TensorFlow",
      description: "Skilled in building and deploying machine learning models with TensorFlow.",
    },
    {
      icon: SiPandas,
      title: "Pandas",
      description: "Proficient in data manipulation and analysis using Pandas.",
    },
    {
      icon: FaDocker,
      title: "Docker",
      description: "Experienced in containerizing applications and managing deployments with Docker.",
    },
    {
      icon: SiWireshark,
      title: "Wireshark",
      description: "Proficient in network protocol analysis and troubleshooting with Wireshark.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
            Technology Stack
          </h2>
          <p className="mt-8 text-xl text-gray-600 dark:text-gray-300 font-light">
            Here are some of the technologies and tools I work with to build robust and scalable solutions.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;