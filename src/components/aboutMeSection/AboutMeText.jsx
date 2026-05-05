import React from 'react'


const AboutMeText = () => {
   const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  }; 
  return (
    <div className=' flex flex-col md:items-start sm:items-center md:text-left'>
        <h2 className='text-6xl text-cyan mb-10' >About Me</h2>
        <p className=' text-white'> My work spans government platforms, fintech, and client-facing products — and I bring the same standard to all of them: clean architecture, performant code, and interfaces that actually make sense to the people using them.

Most frontend developers stop at the browser. I went further I'm KCNA certified in Kubernetes and Cloud Native fundamentals, which means I understand the full journey from writing a component to shipping and running it in production. It's a rare combination, and it makes me a stronger developer and a better collaborator with backend and DevOps teams.

Some of what I've done: led a zero-downtime Angular v8-to-v16 migration on a live government system, built complex multi-stakeholder approval workflows for a national land registry platform, reduced API latency by 35% at a credit bureau, and mentored junior developers while acting as interim team lead.

Right now I'm deepening my full-stack skills with NestJS, adding Docker and CI/CD to my projects, and working toward my CKA certification. I'm actively looking for remote or Nairobi-based roles where I can build great products and keep growing.</p>
        <button    onClick={scrollToProjects}  className=' border border-orange rounded-full py-2 px-4 text-lg -flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'>My Projects</button>
        
        </div>
  )
}

export default AboutMeText