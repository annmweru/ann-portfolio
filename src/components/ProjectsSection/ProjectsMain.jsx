import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProjects from './SingleProjects'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../src/framerMotion/variants'

const projects= [
   {
        name:'Ardhisasa Land Portal',
        year:'MARCH 2022',
        description:'A digital land management system for seamless property registration and transfer.',
        techStack: 'Angular, TypeScript, TailwindCSS,',
        align:'right',
        image:'../../../public/images/ardhisasa.png',
        link:'https://ardhisasa.lands.go.ke/home'
    },
    {
        name:'Metropol Credit Reporting System',
        year:'MARCH 2021',
        description:'A credit reporting platform providing financial risk assessments and scoring.',
        techStack: 'Angular, TypeScript, BootStrap',
        align:'left',
        image:'../../../public/images/metropol.png',
        link:'https://metropol.co.ke/'
    },
    {
        name:'Heroku Hosting Website',
        year:'MARCH 2020',
        description:'A portfolio showcasing deployment on Heroku and Netlify.',
        techStack: 'HTML, CSS, JavaScript,Firebase',
        align:'right',
        image:'../../../public/images/netlify.png',
        link:'https://annmweru-heroku.netlify.app/'
    }
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
        return  <SingleProjects key={index}
         name={item.name}
          year={item.year}
          align ={item.align} 
          image={item.image}
          link={item.link}
          description={item.description} 
          techStack={item.techStack} 

      />
    })}

        </div>
    </div>
  )
}

export default ProjectsMain