import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../src/framerMotion/variants'

const SingleExperience = ({ experience, index }) => {
  return (
    <motion.div
      variants={fadeIn('right', 0.15 * index)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.2 }}
      className='relative pb-12 last:pb-0'
    >
      {/* Dot marker */}
      <span className='absolute -left-10 sm:-left-12 top-1 w-4 h-4 rounded-full bg-cyan border-4 border-black' />

      <p className='font-bold text-cyan text-lg'>{experience.job}</p>
      <p className='text-orange'>{experience.company}</p>
      <p className='text-lightGrey text-sm mb-3'>{experience.date}</p>

      <ul className='space-y-2'>
        {experience.responsibilities.map((resp, i) => (
          <li key={i} className='flex gap-3 text-sm leading-relaxed text-white'>
            <span className='w-1.5 h-1.5 rounded-full bg-orange shrink-0 mt-1.5' />
            <span>{resp}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default SingleExperience