import React from 'react'
import { motion } from 'framer-motion'

const stats = [
  { number: '5+',   label: 'Years',       sub: 'Experience' },
  { number: 'KCNA', label: 'Certified',   sub: 'Kubernetes & Cloud Native' },
  { number: '35%',  label: 'API Latency', sub: 'Reduced at Metropol' },
  { number: '1M+',  label: 'Users',       sub: 'Impacted' },
]

const SubHeroSection = () => {
  return (
    <div className="w-full bg-brown py-6 px-4">
      <div className="max-w-[1200px] mx-auto border-[0.5px] border-lightGrey/30 rounded-xl grid grid-cols-2 md:grid-cols-4 overflow-hidden">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`flex flex-col items-center justify-center py-8 px-4 text-center
              ${index !== stats.length - 1 ? 'border-r-[0.5px] border-lightGrey/30' : ''}
            `}
          >
            <p className='text-4xl md:text-5xl font-bold text-cyan leading-none'>
              {stat.number}
            </p>
            <p className='text-white font-semibold text-sm md:text-base mt-2 uppercase tracking-widest'>
              {stat.label}
            </p>
            <p className='text-lightGrey text-xs md:text-sm mt-1'>
              {stat.sub}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default SubHeroSection


