'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="text-center relative min-h-screen flex items-center justify-center">
      {/* Hero content container */}
      <div className="relative z-10">
        {/* Typewriter Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-sans text-3xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            <TypeAnimation
              sequence={[
                "Hi, I'm Kelvin",
                1000,
                "Hi, I'm a Full-Stack Developer",
                1000,
                "Hi, I'm an AI Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl text-gray-300 mb-12 font-light max-w-2xl mx-auto">
            Crafting intelligent web solutions and AI-powered applications that solve real-world problems. 
            Specializing in building scalable systems, machine learning models, and seamless user experiences.
          </p>
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center space-x-6 mb-8"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
            alt="React" 
            className="w-10 h-10 hover:scale-110 transition-transform" 
          />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" 
            alt="Node.js" 
            className="w-10 h-10 hover:scale-110 transition-transform" 
          />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" 
            alt="Python" 
            className="w-10 h-10 hover:scale-110 transition-transform" 
          />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" 
            alt="TensorFlow" 
            className="w-10 h-10 hover:scale-110 transition-transform" 
          />
        </motion.div>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center space-x-6"
        >
          <Link
            href="/projects"
            className="bg-white text-black px-5 py-2 rounded-md text-base font-semibold hover:bg-gray-200 transition duration-300 hover:scale-105"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="bg-white text-black px-5 py-2 rounded-md text-base font-semibold hover:bg-gray-200 transition duration-300 hover:scale-105"
          >
            Let's Collaborate
          </Link>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center space-x-6 mt-8"
        >
          <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
            <FaGithub className="w-8 h-8" />
          </a>
          <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
            <FaTwitter className="w-8 h-8" />
          </a>
          <a href="mailto:you@example.com" className="text-gray-400 hover:text-white transition-colors">
            <FaEnvelope className="w-8 h-8" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}