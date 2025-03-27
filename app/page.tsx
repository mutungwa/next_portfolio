"use client";

import Hero from "components/Hero";
import ContactForm from "components/ContactForm";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gradient-radial dark:from-dark-blue dark:to-darker-blue">
      <main className="relative">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <div className="relative z-10 text-center bg-transparent p-8 rounded-lg">
            <Hero />
          </div>
        </section>
        <section className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl text-center mb-12 text-white">
            Contact Me
          </h2>
          <ContactForm />
        </div>
      </section>
      </main>
    </div>
  );
}