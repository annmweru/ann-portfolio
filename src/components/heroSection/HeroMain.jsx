import React from 'react'
import HeroPic from './HeroPic'
import HeroText from './HeroText'

const HeroMain = () => {
  return (
    <div className="pt-40 pb-16">
      <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto items-center justify-between items_center relative px-4">  
        {/* Left - Text */}
        <HeroText />

        {/* Right - Image */}
        <HeroPic />
      </div>
    </div>
  )
}

export default HeroMain