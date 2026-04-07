import React from 'react'
import { motion } from 'framer-motion';
import { internshipData } from '../assets/assets';

const Internship = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="internship"
      className="py-20 bg-dark-200"
    >
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4 text-center text-white">
            Internship
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-center mb-16">
            This is my professional experience as an intern at Sunbeam Infotech pvt ltd, Hinjewadi, Pune.
            </p>
            <div className="bg-dark-300 rounded-2xl p-6 max-w-3xl mx-auto">
                <div className="space-y-12 text-gray-400 mb-6 text-left">
                    {
                        internshipData.map((internship, index) => (
                            <div key={index} className="relative pl-12 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-blue-500 cursor-pointer hover:translate-y-2 transition-all duration-300">
                                {/* time-line */}
                                <div className='absolute left-[-0.6rem] top-0 w-6 h-6 rounded-full bg-blue-400'>
                                </div>

                                {/* Box */}
                                <div className='bg-dark-300 rounded-2xl p-6'>
                                    <div className='flex justify-between items-start mb-2'>
                                        <h3 className='text-xl text-white font-semibold'>{internship.role}</h3>
                                        <span className='px-3 py-1 bg-blue/20 text-blue-500 rounded-full text-xs md:text-sm'>{internship.duration}</span>
                                    </div>
                                    <p className='text-gray-400 mb-2'>{internship.company}</p>
                                    <p className='mt-4 text-gray-300'>{internship.description}</p>

                                </div>
                            </div>
                        ))
                    }

                    
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Internship