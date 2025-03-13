import React from 'react';
import SkillsText from './SkillsText';
import AllSkills from './AllSkills';
import AllSkillsSM from './AllSkillsSM';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../src/framerMotion/variants';

const SkillsMain = () => {
  return (
     <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        <motion.div
        


  variants={fadeIn('down', 0.2)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false, amount: 0.7}}        
        
        > 
          <SkillsText />
        </motion.div>
       
        
        {/* Large screens: Show AllSkills */}
        <div className="hidden lg:block absolute bottom-[50px] left-[50%] -translate-x-[50%]">
          <AllSkills />
        </div>

        {/* Small screens: Show AllSkillsSM */}
        <div className="block lg:hidden">
          <AllSkillsSM />
        </div>
      </div>
    </div>
  )
}

export default SkillsMain



