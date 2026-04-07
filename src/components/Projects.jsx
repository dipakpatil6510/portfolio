import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../assets/assets";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="projects"
      className="py-20 bg-dark-200"
    >
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4 text-center text-white">
          My <span className="text-blue-400">Projects</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-center mb-16">
          Here are some of the projects I've worked on. Each project showcases my skills and passion for creating impactful solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto ">
          {/* Project Card 1 */}
          {
            projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
              ))
          }
        </div>
        </div>
    </motion.div>
  );
};

export default Projects;
