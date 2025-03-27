import React from "react";
import ExperienceCard from "./ExperienceCard";
import { FaBriefcase } from "react-icons/fa";

const experienceTimeline = [
  {
    icon: FaBriefcase,
    title: "Junior Software Developer",
    description: "Worked as a junior software developer at ABC Company, developing web applications using React and Node.js",
    year: "2022-2023"
  },
  {
    icon: FaBriefcase,
    title: "Internship",
    description: "Completed an internship at DEF Company, working on a project to develop a mobile application using React Native",
    year: "2021"
  }
];

const ExperienceRoadmap = () => {
  return (
    <div className="text-center mt-20 mb-8">
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 dark:text-white">
        Experience
      </h3>
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:w-0.5 before:bg-gray-300 dark:before:bg-gray-600">
        {experienceTimeline.map((item, index) => (
          <ExperienceCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceRoadmap;