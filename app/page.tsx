"use client";

import Header from "components/Header";
import Hero from "components/Hero";
import Features from "components/Features";
import Footer from "components/Footer";
import EducationRoadmap from "components/EducationRoadmap";
import ExperienceCard from "components/ExperienceCard";
import { FaBriefcase } from "react-icons/fa";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gradient-radial dark:from-dark-blue dark:to-darker-blue">
      <Header />
      <main className="relative">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <div className="relative z-10 text-center bg-transparent p-8 rounded-lg">
            <Hero />
          </div>
        </section>

        {/* Rest of the content */}
        <Features />
        <div className="my-16"></div>

        {/* Experience Section - Grid Layout */}
        <div className="text-center mt-20 mb-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-12">
            Experience
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ExperienceCard
              icon={FaBriefcase}
              title="Junior Software Developer"
              description="Worked as a junior software developer at ABC Company, developing web applications using React and Node.js"
              year="2022-2023"
            />
            <ExperienceCard
              icon={FaBriefcase}
              title="Internship"
              description="Completed an internship at DEF Company, working on a project to develop a mobile application using React Native"
              year="2021"
            />
            {/* Add more ExperienceCard components as needed */}
          </div>
        </div>

        {/* Education Section */}
        <div className="text-center mt-20 mb-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 dark:text-white">
            Education
          </h3>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:w-0.5 before:bg-gray-300 dark:before:bg-gray-600">
            <EducationRoadmap />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}