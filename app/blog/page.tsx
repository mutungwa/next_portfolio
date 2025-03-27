export default function BlogPage() {
    return (
      <div className="flex flex-col min-h-screen bg-white dark:bg-gradient-radial dark:from-dark-blue dark:to-darker-blue">
        <main className="container mx-auto px-4 py-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-8 text-center">
            Blog
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-300 text-center">
              My blog is coming soon! Check back later for articles about web development, AI, and technology.
            </p>
          </div>
        </main>
      </div>
    );
  }