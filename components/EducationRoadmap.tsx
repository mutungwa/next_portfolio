import React from "react";
import EducationCard from "./EducationCard";
import { FaGraduationCap, FaBook, FaLaptopCode } from "react-icons/fa";

const EducationRoadmap = () => {
  const educationRoadmap = [
    {
      icon: FaLaptopCode,
      title: "Bachelor's in Computer Science",
      description: "Currently pursuing B.Sc. in Computer Science from Zetech University",
      year: "2024-Present"
    },
    {
      icon: FaBook,
      title: "Diploma in Computer Science",
      description: "Completed Diploma in Computer Science from Zetech University",
      year: "2021-2023"
    },
    {
      icon: FaGraduationCap,
      title: "KCSE Certification",
      description: "Graduated from Mukaa School with KCSE certification",
      year: "2017-2021"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
            My Education Roadmap
          </h2>
          <p className="mt-8 text-xl text-gray-600 dark:text-gray-300 font-light">
            A timeline of my academic journey and achievements
          </p>
        </div>
        <div className="mt-10">
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:w-0.5 before:bg-gray-300 dark:before:bg-gray-600">
            {educationRoadmap.map((item, index) => (
              <EducationCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationRoadmap;