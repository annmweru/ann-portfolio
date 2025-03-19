import React from 'react'

const SkillsText = () => {
  return (
    <div className='flex flex-col items-center mt-[100px]' >
      <h2 className='text-6xl font-bold bg-gradient-to-r from-cyan to-orange-500 bg-clip-text text-transparent mb-6 hover:underline'>
             My Skills
        </h2>
        {/* <p className='text-lg text-center text-white'> I specialize in crafting high-performance, 
          visually stunning web applications using modern front-end technologies. My expertise spans across 
          frameworks and libraries, enabling me to build scalable, user-friendly, 
          and accessible web experiences. </p> */}


  <p className='text-lg text-center text-gray-300 max-w-2xl leading-relaxed'>
        I specialize in crafting high-performance, visually stunning web applications with modern front-end technologies. 
        With expertise in <span className='text-cyan font-semibold'>Angular, React, and TypeScript</span>, I build scalable, user-friendly, and accessible web experiences.  
        I thrive in **fast-paced environments**, adapting quickly to new frameworks and solving complex UI/UX challenges with **creative problem-solving and attention to detail**. 
        My passion lies in optimizing performance, improving accessibility, and delivering seamless user experiences.
      </p>

           {/* <p className='text-lg text-center text-gray-300 max-w-2xl leading-relaxed'>
        I specialize in crafting high-performance, visually stunning web applications with modern front-end technologies. 
        With expertise in <span className='text-cyan font-semibold'>Angular, React, and TypeScript</span>, I build scalable, user-friendly, and accessible web experiences. 
        I thrive in fast-paced environments, quickly adapting to new frameworks while optimizing performance and user engagement.
      </p> */}

        </div>
  )
}

export default SkillsText