import React from "react";

interface ContactCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  link?: string;
}

const ContactCard = ({ icon: Icon, title, description, link }: ContactCardProps) => {
  return (
    <div className="bg-gradient-fade rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-2 border-fuchsia-500">
      <div className="flex items-center justify-center mb-4">
        {Icon && <Icon className="text-3xl text-white dark:text-white" />}
      </div>
      <h3 className="text-xl sm:text-2xl text-center text-white dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-white dark:text-white font-light mb-4 text-center">
        {description}
      </p>
      {link && (
        <a
          href={link}
          className="text-white dark:text-white font-light text-center underline hover:text-fuchsia-300 transition-colors"
        >
          {link}
        </a>
      )}
    </div>
  );
};

export default ContactCard;