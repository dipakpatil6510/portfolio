import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { useEffect, useState } from "react";

const Hero = () => {
  const roles = ["Java Developer", "React Developer", "Full Stack Developer"];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < roles[index].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + roles[index][charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setText("");
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % roles.length);
      }, 1500);
    }
  }, [charIndex, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] text-white"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-blue-400">Dipak Patil</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6">
            {/* Full Stack Developer */}
            {text} <span className="typewriter"/> {" "}
            <span className="border-r-2 border-blue-400 ml-1 animate-pulse"></span>
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            A passionate Frontend Developer crafting beautiful and functional
            web experiences.
          </p>
          <div className="flex space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-400 rounded-lg font-medium hover:bg-green-700 transition duration-300"
            >
              View Works
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-blue-500 rounded-lg font-medium hover:bg-indigo-700 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 animate-pulse opacity-70"></div>
            <motion.img
              src={assets.profile}
              alt="Profile"
              className="relative w-full h-full object-cover rounded-full border-4 border-gray-800"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
