import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "AI Chatbot",
    description: "A conversational AI chatbot built with React and TensorFlow.",
    image: "/images/ai-chatbot.jpg",
    github: "https://github.com/example/ai-chatbot",
    live: "https://example.com/ai-chatbot",
  },
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js and Node.js.",
    image: "/images/ecommerce.jpg",
    github: "https://github.com/example/ecommerce",
    live: "https://example.com/ecommerce",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with Next.js and Tailwind CSS.",
    image: "/images/portfolio.jpg",
    github: "https://github.com/example/portfolio",
    live: "https://example.com",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white mb-12 text-center">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}