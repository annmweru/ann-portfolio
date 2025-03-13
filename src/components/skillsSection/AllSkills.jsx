import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import SingleSkill from './SingleSkill';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../src/framerMotion/variants';
  const skills = [
    {
    skill :'HTML',
    icon:FaHtml5
 },
     {
    skill :'Angular',
    icon:FaAngular
 },
     {
    skill :'TailwindCSS',
    icon:RiTailwindCssFill
 },
     {
    skill :'React',
    icon:FaReact
 },
     {
    skill :'TypeScript',
    icon:SiTypescript
 },
     {
    skill :'JavaScript',
    icon:IoLogoJavascript
 }
]
const AllSkills = () => {
  return (
<div>
        <div className=' flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
           {skills.map((item,index) => {              
             return (
               <motion.div
               
                variants={fadeIn('up', `0.${index}`)}
                               initial='hidden'
                               whileInView='show'
                               viewport={{ once: false, amount: 0.7}}    >
                               <SingleSkill  key = {index} text={item.skill} imgSvg={<item.icon/>}/>

               </motion.div>
            );
            })}
       </div> 
   </div>  )
}

export default AllSkills