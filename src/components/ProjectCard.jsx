import React, { useState } from 'react';

const ProjectCard = ({ title, description, image, tech }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // limit characters (adjust based on UI)
  const MAX_LENGTH = 120;

  const isLongText = description.length > MAX_LENGTH;
  const displayedText = isExpanded
    ? description
    : description.substring(0, MAX_LENGTH) + (isLongText ? "..." : "");

  return (
    <div className='bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer'>
      
      <img src={image} alt={title} className='w-full h-60 object-cover' />

      <div className='p-6'>
        <h3 className='text-xl font-semibold mb-2 text-white'>{title}</h3>

        <p className='text-gray-400 mb-2'>
          {displayedText}
        </p>

        {/* Read More / Less */}
        {isLongText && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className='text-blue-400 text-sm hover:underline mb-4'
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}

        <div className='flex flex-wrap gap-2'>
          {tech.map((techItem, index) => (
            <span
              key={index}
              className='bg-green-900 text-white px-3 py-1 rounded-full text-sm'
            >
              {techItem}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;