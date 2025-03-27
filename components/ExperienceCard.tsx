import React from "react";

interface ExperienceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  year: string;
}

const ExperienceCard = ({ icon: Icon, title, description, year }: ExperienceCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-center mb-4">
        {Icon && <Icon className="text-3xl text-blue-600 dark:text-blue-400" />}
      </div>
      <h3 className="text-xl sm:text-2xl text-center text-blue-600 dark:text-blue-400 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 font-light mb-4 text-center">
        {description}
      </p>
      <p className="text-gray-600 dark:text-gray-300 font-light text-center">
        {year}
      </p>
    </div>
  );
};

export default ExperienceCard;