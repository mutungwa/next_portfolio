"use client";

import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Clear the form
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white mb-8 text-center">
          Contact Me
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-2xl text-blue-600 dark:text-blue-400" />
              <div>
                <h3 className="text-xl text-gray-900 dark:text-white">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">Nairobi, Kenya</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-2xl text-blue-600 dark:text-blue-400" />
              <div>
                <h3 className="text-xl text-gray-900 dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">kelvin@example.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-2xl text-blue-600 dark:text-blue-400" />
              <div>
                <h3 className="text-xl text-gray-900 dark:text-white">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300">+254 712 345 678</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-gradient-fade rounded-lg p-6 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 block w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md shadow-sm focus:ring-white focus:border-white text-white placeholder-white/50"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1 block w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md shadow-sm focus:ring-white focus:border-white text-white placeholder-white/50"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-1 block w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md shadow-sm focus:ring-white focus:border-white text-white placeholder-white/50"
                placeholder="Your Message"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-fuchsia-500 px-6 py-3 rounded-md text-lg font-semibold hover:bg-white/90 transition duration-300 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && (
              <p className="text-green-500 text-center">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}