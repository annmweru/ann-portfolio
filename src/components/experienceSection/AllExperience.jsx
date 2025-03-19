// import React from 'react'
// import SingleExperience from './SingleExperience'
// import { FaArrowRight } from "react-icons/fa";
// import { motion } from 'framer-motion'
// import { fadeIn } from '../../../src/framerMotion/variants'

// const experiences = [
//     {
// job:'frontend-end Developer',
// company:'Annah mweru',
// date:'2022- Present',
// responsibilities:[
//     'person (perhaps by pointing to them in a photograph, ',
//     'person (perhaps by pointing to them in a photograph, ',
//     'person (perhaps by pointing to them in a photograph,',
//     'person (perhaps by pointing to them in a photograph,',
// ]
// },
//     {
// job:'frontend-end Developer',
// company:'Annah mweru',
// date:'2022- Present',
// responsibilities:[
//     'person (perhaps by pointing to them in a photograph, ',
//     'person (perhaps by pointing to them in a photograph, ',
//     'person (perhaps by pointing to them in a photograph,',
//     'person (perhaps by pointing to them in a photograph,',
// ]
// },
//     {
// job:'frontend-end Developer',
// company:'Annah mweru',
// date:'2022- Present',
// responsibilities:[
//     'person (perhaps by pointing to them in a photograph, ',
//     'person (perhaps by pointing to them in a photograph, ',
//     'person (perhaps by pointing to them in a photograph,',
//     'person (perhaps by pointing to them in a photograph,',
// ]
// },
//     {
// job:'frontend-end Developer',
// company:'Annah mweru',
// date:'2022- Present',
// responsibilities:[
//     'person (perhaps by pointing to them in a photograph, ',
//     'person (perhaps by pointing to them in a photograph, ',
//     'person (perhaps by pointing to them in a photograph,',
//     'person (perhaps by pointing to them in a photograph,',
// ]
// },

// ]
// const AllExperience = () => {
//   return (
//     <div className='flex md:flex-row sm:flex-col items-center justify-between' >
//        {experiences.map((experience,index)=>{
//         return( <>
//         <SingleExperience key={index} experience={experience}/>
//         {index < 2? (

//             <motion.div
//              variants={fadeIn('right', 0.2)}
//                             initial='hidden'
//                             whileInView='show'
//                             viewport={{ once: false, amount: 0}}
//             >           
//                  <FaArrowRight className='text-6xl text-orange lg:block sm:hidden '/>
// </motion.div>
//             ): ('')}


// </>)
//        })} 
//     </div>
//   )
// }

// export default AllExperience              

// // {index < 2 (<FaArrowRight/>)}
// // className='flex md:flex-row sm:flex-col items-center justify-between'




import React from 'react'
import SingleExperience from './SingleExperience'
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion'
import { fadeIn } from '../../../src/framerMotion/variants'

const experiences = [
    {
        job: 'Frontend Developer',
        company: 'Konza Silicon',
        date: 'Jan 2022 - Present',
        responsibilities: [
            'Developed and maintained user-facing websites using Angular and JavaScript.',
            'Integrated API calls with backend teams for dynamic data rendering.',
            'Created reusable UI components for enhanced user experience.',
            'Optimized front-end performance to improve load speeds by 30%.'
        ]
    },
    {
        job: 'Frontend Developer',
        company: 'Metropol Corporation',
        date: 'Sep 2021 - Dec 2021',
        responsibilities: [
            'Collaborated with a team to design and develop software solutions.',
            'Coded new features and optimized existing web applications.',
            'Performed debugging tasks to identify and fix errors.',
            'Ensured scalable, secure, and maintainable software architecture.'
        ]
    }
];

const AllExperience = () => {
  return (
    <div className='flex md:flex-row sm:flex-col items-center justify-between gap-6' >
       {experiences.map((experience, index) => (
        <React.Fragment key={index}>
            <SingleExperience experience={experience} />
            {index < experiences.length - 1 && (  // Fix: Show arrow between all items
                <motion.div
                    variants={fadeIn('right', 0.2)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: false, amount: 0 }}
                >
                    <FaArrowRight className='text-6xl text-orange lg:block sm:hidden' />
                </motion.div>
            )}
        </React.Fragment>
       ))} 
    </div>
  )
}

export default AllExperience
