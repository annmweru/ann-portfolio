import React from 'react'
import { PiHexagonThin } from "react-icons/pi";
import { motion } from 'framer-motion'
import { fadeIn } from '../../../src/framerMotion/variants'

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn('left', 0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0 }}
      className='h-full flex items-center justify-center relative'
    >
      {/* Outer glow ring */}
      <div className='absolute w-[380px] h-[380px] rounded-full border border-cyan/20 animate-pulse' />
      <div className='absolute w-[340px] h-[340px] rounded-full border border-cyan/30' />

      {/* Image with cyan glow */}
      <div
        className='relative z-10 rounded-full overflow-hidden w-[300px] h-[300px] border-2 border-cyan/50'
        style={{ boxShadow: '0 0 40px rgba(0, 200, 200, 0.25)' }}
      >
        <img
          src='/images/annah.png'
          alt='Annah Mweru'
          className='w-full h-full object-cover'
        />
      </div>

      {/* Spinning hexagon behind */}
      <div className='absolute -z-10 flex justify-center items-center'>
        <PiHexagonThin className='h-[500px] w-auto text-cyan blur-sm opacity-40 animate-[spin_20s_linear_infinite]' />
      </div>
    </motion.div>
  )
}

export default HeroPic


  