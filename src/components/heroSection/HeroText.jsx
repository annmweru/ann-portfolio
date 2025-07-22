import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../src/framerMotion/variants'

const HeroText = () => {
  return (
    <div className='flex flex-col gap-4 h-full justify-center md:text-left sm:text-center'>
      <motion.h2
        variants={fadeIn('down', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }} 
        className='lg:text-3xl sm:text-2xl uppercase text-lightCyan font-medium tracking-wide'
      >
        Front End Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn('right', 0.4)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }}
        className='md:text-[3rem] lg:text-7xl sm:text-5xl font-bold font-special text-white'
      >
       Annah Mweru
      </motion.h1>
      <motion.p 
        variants={fadeIn('up', 0.6)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }}
        className='text-lg mt-4 text-lightGrey max-w-2xl leading-relaxed'
      >
        I create high-performance, interactive, and visually stunning web applications.
      </motion.p>
    </div>
  )
}

export default HeroText

