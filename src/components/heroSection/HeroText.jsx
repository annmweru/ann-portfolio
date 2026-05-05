import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../src/framerMotion/variants'
import { Link } from 'react-scroll'

const HeroText = () => {
  return (
    <div className='flex flex-col gap-4 h-full justify-center md:text-left sm:text-center'>

      {/* Eyebrow */}
      <motion.h2
        variants={fadeIn('down', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }}
        className='lg:text-xl sm:text-lg uppercase text-cyan font-medium tracking-widest'
      >
        Angular Developer · KCNA Certified
      </motion.h2>

      {/* Name */}
      <motion.h1
        variants={fadeIn('right', 0.4)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }}
        className='md:text-[3rem] lg:text-7xl sm:text-5xl font-bold font-special text-white leading-tight'
      >
        Annah Mweru
      </motion.h1>

      {/* Bio */}
      <motion.p
        variants={fadeIn('up', 0.6)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }}
        className='text-base mt-2 text-lightGrey max-w-lg leading-relaxed'
      >
        I build production-ready Angular applications — from government-scale platforms
        to client-facing SPAs. I understand how apps run in production, not just how
        they look in the browser.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        variants={fadeIn('up', 0.8)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }}
        className='flex gap-4 mt-4 sm:justify-center md:justify-start flex-wrap'
      >
        {/* View Projects — scrolls to projects section */}
        <Link
          to='projects'
          smooth={true}
          duration={500}
          offset={-80}
          className='cursor-pointer px-6 py-3 rounded-full text-sm font-bold text-black bg-gradient-to-r from-cyan to-orange hover:scale-105 transition-all duration-300'
        >
          View Projects
        </Link>

        {/* Download CV */}
        <a
          href='/resume.pdf'
          download='Annah_Mweru_Resume.pdf'
          className='px-6 py-3 rounded-full text-sm font-bold text-white border border-orange hover:border-cyan hover:text-cyan transition-all duration-300'
        >
          Download CV
        </a>
      </motion.div>
    </div>
  )
}

export default HeroText
