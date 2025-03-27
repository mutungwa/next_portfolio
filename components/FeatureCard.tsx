import React from "react";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-transparent p-6 rounded-lg shadow-md transition-colors duration-200 border-2 border-cyan-500">
      <Icon size={34} className="text-white dark:text-white" />
      <h3 className="text-xl font-semibold mb-2 text-white dark:text-white">{title}</h3>
      <p className="text-white dark:text-white font-light">{description}</p>
    </div>
  );
};

export default FeatureCard;