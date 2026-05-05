import React from 'react'

const HeroGradient = () => {
  return (
    <div aria-hidden='true'>
      {/* Top right — orange glow */}
      <div
        className='absolute top-[-100px] right-0 -z-10 w-[400px] h-[400px] rounded-full opacity-40 blur-[120px]'
        style={{ background: 'radial-gradient(circle, rgba(132, 80, 42, 0.5) 0%, transparent 70%)' }}
      />

      {/* Top center — cyan glow */}
      <div
        className='absolute top-[-80px] right-[350px] -z-10 w-[350px] h-[350px] rounded-full opacity-30 blur-[100px]'
        style={{ background: 'radial-gradient(circle, rgba(0,200,200,0.5) 0%, transparent 70%)' }}
      />

      {/* Mid left — cyan glow */}
      <div
        className='absolute top-[300px] left-0 -z-10 w-[300px] h-[300px] rounded-full opacity-20 blur-[100px]'
        style={{ background: 'radial-gradient(circle, rgba(0,200,200,0.4) 0%, transparent 70%)' }}
      />

      {/* Lower left — orange glow */}
      <div
        className='absolute top-[550px] left-[100px] -z-10 w-[250px] h-[250px] rounded-full opacity-20 blur-[80px]'
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.4) 0%, transparent 70%)' }}
      />
    </div>
  )
}

export default HeroGradient
