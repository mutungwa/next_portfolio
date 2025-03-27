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
        {Icon && <Icon className="text-3xl text-cyan-500" />}
      </div>
      <div className="bg-white dark:bg-transparent rounded-lg shadow-md p-6 md:p-8 w-full border-2 border-cyan-500">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center text-white-500 mb-2">
          {title}
        </h3>
        <p className="text-white-500 font-light mb-4">
          {description}
        </p>
        <p className="text-white-500 font-light">
          {year}
        </p>
      </div>
    </div>
  );
};

export default EducationCard;