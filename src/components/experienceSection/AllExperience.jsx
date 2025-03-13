import React from 'react'
import SingleExperience from './SingleExperience'
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion'
import { fadeIn } from '../../../src/framerMotion/variants'

const experiences = [
    {
job:'frontend-end Developer',
company:'Annah mweru',
date:'2022- Present',
responsibilities:[
    'person (perhaps by pointing to them in a photograph, ',
    'person (perhaps by pointing to them in a photograph, ',
    'person (perhaps by pointing to them in a photograph,',
    'person (perhaps by pointing to them in a photograph,',
]
},
    {
job:'frontend-end Developer',
company:'Annah mweru',
date:'2022- Present',
responsibilities:[
    'person (perhaps by pointing to them in a photograph, ',
    'person (perhaps by pointing to them in a photograph, ',
    'person (perhaps by pointing to them in a photograph,',
    'person (perhaps by pointing to them in a photograph,',
]
},
    {
job:'frontend-end Developer',
company:'Annah mweru',
date:'2022- Present',
responsibilities:[
    'person (perhaps by pointing to them in a photograph, ',
    'person (perhaps by pointing to them in a photograph, ',
    'person (perhaps by pointing to them in a photograph,',
    'person (perhaps by pointing to them in a photograph,',
]
},
    {
job:'frontend-end Developer',
company:'Annah mweru',
date:'2022- Present',
responsibilities:[
    'person (perhaps by pointing to them in a photograph, ',
    'person (perhaps by pointing to them in a photograph, ',
    'person (perhaps by pointing to them in a photograph,',
    'person (perhaps by pointing to them in a photograph,',
]
},

]
const AllExperience = () => {
  return (
    <div className='flex md:flex-row sm:flex-col items-center justify-between' >
       {experiences.map((experience,index)=>{
        return( <>
        <SingleExperience key={index} experience={experience}/>
        {index < 2? (

            <motion.div
             variants={fadeIn('right', 0.2)}
                            initial='hidden'
                            whileInView='show'
                            viewport={{ once: false, amount: 0}}
            >           
                 <FaArrowRight className='text-6xl text-orange lg:block sm:hidden '/>
</motion.div>
            ): ('')}


</>)
       })} 
    </div>
  )
}

export default AllExperience              

// {index < 2 (<FaArrowRight/>)}
// className='flex md:flex-row sm:flex-col items-center justify-between'