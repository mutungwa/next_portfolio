import React from "react";

interface EducationCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  year: string;
}

const EducationCard = ({ icon: Icon, title, description, year }: EducationCardProps) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-center md:items-center relative z-10">
      <div className="md:ml-10 md:mr-10">
        {Icon && <Icon className="text-3xl text-gray-900 dark:text-white" />}
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 w-full">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center text-blue-600 dark:text-blue-400 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 font-light mb-4">
          {description}
        </p>
        <p className="text-gray-600 dark:text-gray-300 font-light">
          {year}
        </p>
      </div>
    </div>
  );
};

export default EducationCard;