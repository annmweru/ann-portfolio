import React from 'react'


const AboutMeText = () => {
   const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  }; 
  return (
    <div className=' flex flex-col md:items-start sm:items-center md:text-left'>
        <h2 className='text-6xl text-cyan mb-10' >About Me</h2>
        <p className=' text-white'> 
I'm a software developer with over five years of experience building Angular applications across government, fintech, and client-facing products. I focus on creating scalable, maintainable, and high-performance software that delivers great user experiences.

As a KCNA-certified professional, I understand cloud-native principles and how applications move from development to production, enabling me to collaborate effectively with backend and DevOps teams.

Highlights of my experience include leading a zero-downtime migration from Angular 8-18, building complex approval workflows for a national land registry platform, and mentoring junior developers while serving as an interim team lead.

I'm currently expanding into backend development with Java and Spring Boot while strengthening my skills in Docker, CI/CD, and Kubernetes. I'm seeking remote or Nairobi-based opportunities to build scalable, production-ready applications and continue growing as a full-stack developer.

</p>
        <button    onClick={scrollToProjects}  className=' border border-orange rounded-full py-2 px-4 text-lg -flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'>My Projects</button>
        
        </div>
  )
}

export default AboutMeText