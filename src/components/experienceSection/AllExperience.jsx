
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
            'Led a zero-downtime Angular v8-to-v16 migration on a live government production platform',
            'Built complex multi-stakeholder approval workflows for national land lease applications, managing reactive state across Angular components using RxJS and NgRx',
            'Integrated Angular UI with REST, JSON, and SOAP/XML backend services for land registry workflows including ownership verification and historical record retrieval.',
            'Implemented bulk printing for lease certificates using Node.js, significantly cutting manual processing time for government staff.',
            'Introduced Husky pre-commit hooks to enforce code quality standards team-wide, reducing broken builds by 30% and improving overall codebase maintainability.',
            'Mentored junior developers and acted as interim Team Lead, coordinating sprint delivery and unblocking team members' 
        ]
    },
    {
        job: 'Frontend Developer',
        company: 'Metropol Corporation',
        date: 'Sep 2021 - Dec 2021',
        responsibilities: [
            'Reduced frontend API latency by 35% through payload optimisation, directly improving dashboard responsiveness for end users across 50+ financial institutions.',
            'Contributed Angular and AngularJS modules to a credit reporting SPA consuming REST, JSON, and XML microservices, implementing authentication state management and robust error handling.',
            'Built a reusable Angular component library that improved UI consistency and eliminated code duplication across the platform'
            
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
