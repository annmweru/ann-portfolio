import React from 'react'

const SingleSkill = ({imgSvg , text}) => {
  return (
      <div className='hover:-translate-y-10 transition-all duration-500 relative'>
      <div className='flex flex-col items-center gap-2 relative'>
        <div className='bg-white text-cyan h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-orange'> 
          {imgSvg}
        </div>
        <p className='text-white font-body'>{text}</p>
      </div>
      {/* Adjusting bar positioning */}
      <div className='w-[100px] h-[200px] bg-orange absolute top-[50px] z-[-10]'></div>
    </div>
  )
}

export default SingleSkill