import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProjects from './SingleProjects'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../src/framerMotion/variants'

const projects= [
    {
    name:'GEOPRO PROJECT',
    year:'MARCH2020',
    align:'right',
    image:'../../../public/images/website-img-2.webp',
    link:'#'
},
  {
    name:'GEOPRO PROJECT',
    year:'MARCH2020',
    align:'left',
    image:'../../../public/images/website-img-4.jpg',
    link:'#'
},
  {
    name:'GEOPRO PROJECT',
    year:'MARCH2020',
    align:'right',
    image:'../../../public/images/website-img-2.webp',
    link:'#'
},
  {
    name:'GEOPRO PROJECT',
    year:'MARCH2020',
    align:'left',
    image:'../../../public/images/website-img-3.jpg',
    link:'#'
},
]
const ProjectsMain = () => {
  return (
    <div id ='projects' className='max-w-[1200px] mx-auto px-4'>
      <motion.div
       variants={fadeIn('up', 0.2)}
                                  initial='hidden'
                                  whileInView='show'
                                  viewport={{ once: false, amount: 0}}
      
      
      >  <ProjectsText/>
      </motion.div>
      
        <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
            
    {projects.map((item,index)=>{
        return  <SingleProjects key={index} name={item.name} year={item.year} align ={item.align} image={item.image}/>
    })}

        </div>
    </div>
  )
}

export default ProjectsMain