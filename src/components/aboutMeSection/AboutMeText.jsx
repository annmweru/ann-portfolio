import React from 'react'


const AboutMeText = () => {
   const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  }; 
  return (
    <div className=' flex flex-col md:items-start sm:items-center md:text-left'>
        <h2 className='text-6xl text-cyan mb-10' >About Me</h2>
        <p className=' text-white'> I’m a Front-End Developer with 3 years of experience building scalable and engaging web applications. My expertise lies in Angular, JavaScript, and Tailwind CSS, and I’m currently expanding my skills in React to stay ahead in modern front-end development.
I specialize in creating clean, responsive, and user-friendly interfaces that enhance user experience. My strength is in problem-solving, optimizing performance, and writing maintainable code that scales.
I’m actively looking for opportunities where I can contribute my skills, collaborate with cross-functional teams, and grow as a developer.</p>
        <button    onClick={scrollToProjects}  className=' border border-orange rounded-full py-2 px-4 text-lg -flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'>My Projects</button>
        
        </div>
  )
}

export default AboutMeText