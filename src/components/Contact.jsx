import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-center text-white">
          Get In <span className="text-blue-400">Touch</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-center mb-16">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. Feel free to reach out to me
          through any of the platforms below!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-dark-300 rounded-2xl p-6">
            <form action="#" className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full h-14 bg-dark-400 text-gray-300 placeholder:text-gray-500 border border-gray-500 focus:ring-blue-500 focus:border-blue-500 rounded-md"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full h-14 bg-dark-400 text-gray-300 placeholder:text-gray-500 border border-gray-500 focus:ring-blue-500 focus:border-blue-500 rounded-md"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full h-40 bg-dark-400 text-gray-300 placeholder:text-gray-500 border border-gray-500 focus:ring-blue-500 focus:border-blue-500 rounded-md"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-3 ease-in-out"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="text-blue-400 text-2xl mr-4">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Location
                </h3>
                <p className="text-gray-400">
                  Choundeshwari Galli, Soundalga, India
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-blue-400 text-2xl mr-4">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-400">dipakpatil9043@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-blue-400 text-2xl mr-4">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-400">+91 6360144281</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Follow me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/dipakpatil6510"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition duration-300"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/dipak-patil-231819285/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition duration-300"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
