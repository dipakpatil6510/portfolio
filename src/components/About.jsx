import React from "react";
import { motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-0 px-6">
        <h2 className="text-3xl font-bold mb-4 text-center text-white">
          About <span className="text-blue-400">Me</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-center mb-16">
          I am a passionate frontend developer with experience in creating
          modern web applications. I enjoy solving complex problems and turning
          ideas into reality.
        </p>

        {/* Image + MyJourney */}
        <div className="flex flex-col md:flex-row items-start gap-12">
          {}
          {/* Image */}
          <div className="w-full md:w-[80%] rounded-2xl overflow-hidden">
            <motion.img
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.2 }}
              src={assets.about}
              alt="Profile"
              className="w-full h-full object-cover rounded-2xl border-4 border-gray-800"
            />
          </div>

          {/*Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-6 text-white">
                  My Journey
                </h3>
                {/* <p className="text-gray-400 mb-6">
                  I have been passionate about web development for several
                  years. I love creating beautiful and functional websites that
                  provide an excellent user experience.
                </p>
                <p className="text-gray-400 mb-12">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  aliquam ab quas error voluptas atque mollitia, tempora
                  asperiores quo vel earum hic repellat laudantium, dolorem
                  possimus rem maiores blanditiis facere!
                </p> */}
                <p className="text-gray-400 mb-6">
                  My journey in software development began during my
                  engineering, where I discovered my interest in building
                  applications and solving real-world problems. I gradually
                  developed a strong foundation in programming and data structures.
                </p>

                <p className="text-gray-400 mb-12">
                  During my PGDAC, I enhanced my skills in modern technologies
                  like Spring Boot, ReactJS, and MySQL, and gained hands-on
                  experience in developing scalable applications. This journey
                  helped me grow from a learner to a developer who focuses on
                  writing clean, efficient code and continuously improving
                  through practical experience.
                </p>
                {/*cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {aboutInfo.map((data, index) => (
                    <div
                      key={index}
                      className="bg-dark-300 p-6 rounded-2xl transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                    >
                      <div className={`text-3xl mb-4 ${data.color}`}>
                        <data.icon />
                      </div>
                      <h4 className="text-xl font-semibold mb-2 text-white">
                        {data.title}
                      </h4>
                      <p className="text-gray-400">{data.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
