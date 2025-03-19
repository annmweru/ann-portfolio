// import React from 'react'
// import ExperienceInfo from './ExperienceInfo'

// const ExperienceTopLeft = () => {
//   return (
//     <div className='flex flex-col gap-6 w-[300px]'>
//         <p className='text-white font-bold uppercase text-3xl font-spacial text-center'>Since 2022</p>
//         <div className='flex justify-center gap-4'>
//             <ExperienceInfo  number = '3' text = 'Years'/>
//             <p className='font-bold text-6xl text-lightBrown text-orange'>-</p>
//          <ExperienceInfo  number = 'Building Scalable Web Apps' text = 'Websites'/>
//         </div>
//      <p className='text-center text-white'>
//             Contributing to the <span className='font-bold text-lightBrown'>digital transformation</span>  
//             of Kenya’s land management system. Developing  
//             <span className='font-bold text-lightBrown'> scalable, accessible, and secure</span> web applications  
//             that streamline <span className='font-bold text-lightBrown'>land registration and transactions</span>.
//         </p>
//          <ExperienceInfo number='1M+' text='Users Impacted' />

//     </div>
//   )
// }

// export default ExperienceTopLeft



import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
        <p className='text-white font-bold uppercase text-3xl font-spacial text-center'>Since 2022</p>
        <div className='flex justify-center gap-4'>
            <ExperienceInfo number='3' text='Years' />
            <p className='font-bold text-6xl text-lightBrown text-orange'>-</p>
        </div>
        <p className='text-center text-white font-bold text-xl text-blue-400'>
            Building Scalable Web Apps
        </p>
        <p className='text-center text-white'>
            Contributing to the <span className='font-bold text-lightBrown'>digital transformation</span>  
            of Kenya’s land management system by developing  
            <span className='font-bold text-lightBrown'> scalable, secure, and user-friendly</span> web applications  
            that enhance <span className='font-bold text-lightBrown'>land registration and transactions</span>.
        </p>
        <ExperienceInfo number='1M+' text='Users Impacted' />
    </div>
  )
}

export default ExperienceTopLeft
