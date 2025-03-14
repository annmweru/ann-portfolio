import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
        <p className='text-white font-bold uppercase text-3xl font-spacial text-center'>Since 2022</p>
        <div className='flex justify-center gap-4'>
            <ExperienceInfo  number = '3' text = 'Years'/>
            <p className='font-bold text-6xl text-lightBrown text-orange'>-</p>
         <ExperienceInfo  number = '33' text = 'Websites'/>
        </div>
    <p className=' text-center text-white'>hsdaefehdwioqwhdehwquhruheuhrfewhufhue
        hfuehufhuhrefhhhfdhfhhfuhfhgvhf
        hgvufhhruhfuhrufhruhfguhr</p>
         <ExperienceInfo number = '$100k' text = 'Max Budget' />

    </div>
  )
}

export default ExperienceTopLeft