import React from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/assets";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="py-20 bg-dark-200 scroll-mt-18"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-center text-white">
          My <span className="text-blue-400">Skills</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-center mb-16">
          I have a strong foundation in frontend development and am proficient
          in a variety of technologies and tools.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-dark-300 rounded-2xl p-6  hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <skill.icon className={`text-4xl mb-4 w-12 h-12 mr-6 text-blue-500 ${skill.color}`} />
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {skill.title}
                </h3>
              </div>
              <p className="text-gray-400 mb-4">{skill.description}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {skill.tags.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-sm bg-green-900 text-white px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
