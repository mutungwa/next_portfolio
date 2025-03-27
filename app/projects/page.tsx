export default function ProjectsPage() {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Feel free to explore!
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    );
  }