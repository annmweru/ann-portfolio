import React from 'react'
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import { motion } from 'framer-motion'
import { fadeIn } from '../../../src/framerMotion/variants'
const SingleProjects = ({ name, year, description, techStack, features, align, image, link, github }) => {
  return (
    <motion.div 
      variants={fadeIn('up', 0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0 }}
      className={`flex flex-col md:flex-row items-center gap-8 ${align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
       <div className='w-full md:w-1/2 max-w-[480px] rounded-xl overflow-hidden border border-white/20 bg-black/20'>
  <img src={image} alt={name} className='w-full h-auto object-contain' />
</div>
      <div className='w-full md:w-3/5 text-left'> 
        {/* Project Title */}
        <h2 className='md:text-3xl sm:text-2xl text-orange'>{name}</h2>
        <h3 className='text-lg font-thin text-white mt-1'>{year}</h3>
                {/* Tech Stack */}
 <p className='text-sm text-gray-300 mt-3'>
          <span className='text-cyan'>{techStack}</span>
        </p>

        {/* Project Description */}
        <p className='text-gray-400 mt-3 leading-relaxed'>{description}</p>



          {features && features.length > 0 && (
          <ul className='grid grid-cols-2 gap-x-4 gap-y-1 mt-3'>
            {features.map((feature, i) => (
              <li key={i} className='text-sm text-gray-300 flex items-center gap-2'>
                <span className='text-cyan'>✓</span> {feature}
              </li>
            ))}
          </ul>
        )}
        <div className='flex items-center gap-6 mt-4'>

        {/* View Project Link */}
        
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
            className='text-base flex gap-2 items-center text-cyan hover:text-orange transition-all duration-300'
        >
            Live demo <FaExternalLinkAlt size={14} />
        </a>
        {github && (
            <a
              href={github}
              target='_blank'
              rel='noopener noreferrer'
              className='text-base flex gap-2 items-center text-gray-300 hover:text-orange transition-all duration-300'
            >
              GitHub <FaGithub size={16} />
            </a>
          )}
   

      {/* Project Image */}
      {/* <div className='max-h-[220px] max-w-[400px] rounded-xl overflow-hidden relative border border-white'> */}
        {/* <div className='w-full h-full bg-cyan opacity-50 absolute top-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden'></div> */}
        {/* <img src={image} alt={name} className='w-full h-full'/> */}
</div>
</div>
    </motion.div>
  );
};


export default SingleProjects