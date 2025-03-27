"use client";

import { useState } from "react";

export default function ContactForm() {
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
        setFormData({ name: "", email: "", message: "" });
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
    <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-cyan-100">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 block w-full px-4 py-3 bg-cyan-900/20 border border-cyan-500/30 rounded-lg shadow-sm focus:ring-cyan-500 focus:border-cyan-500 text-cyan-100 placeholder-cyan-400/50"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-cyan-100">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="mt-1 block w-full px-4 py-3 bg-cyan-900/20 border border-cyan-500/30 rounded-lg shadow-sm focus:ring-cyan-500 focus:border-cyan-500 text-cyan-100 placeholder-cyan-400/50"
            placeholder="Your Email"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-cyan-100">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="mt-1 block w-full px-4 py-3 bg-cyan-900/20 border border-cyan-500/30 rounded-lg shadow-sm focus:ring-cyan-500 focus:border-cyan-500 text-cyan-100 placeholder-cyan-400/50"
            placeholder="Your Message"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-6 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        {status === "success" && (
          <p className="text-green-400 text-center">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
        )}
      </form>
    </div>
  );
}