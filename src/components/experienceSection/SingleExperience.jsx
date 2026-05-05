import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../src/framerMotion/variants'

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn('right', 0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0 }}
      className='md:w-[45%] sm:w-full h-auto border-2 border-orange border-dashed mt-12 p-6'
    >
      <p className='font-bold text-cyan'>{experience.job}</p>
      <p className='text-orange'>{experience.company}</p>
      <p className='text-lightGrey'>{experience.date}</p>
      <ul className='list-disc mt-4 pl-4 text-white space-y-2'>
        {experience.responsibilities.map((resp, index) => (
          <li key={index} className='text-sm leading-relaxed'>{resp}</li>
        ))}
      </ul>
    </motion.div>
  )
}

export default SingleExperience
