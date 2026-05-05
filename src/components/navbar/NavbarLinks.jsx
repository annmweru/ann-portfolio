import React from 'react'
import { Link } from 'react-scroll';

const links = [
  { link: "About Me",   section: "about" },
  { link: "Skills",     section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects",   section: "projects" },
  { link: "Contact",    section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className='flex gap-6 text-white font-semibold text-center lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-sm sm:text-lg sm:bg-cyan/30 backdrop-blur-lg lg:bg-transparent sm:w-full py-2 transition-all duration-300'>
      {links.map((link, index) => (
        <li key={index} className='group'>
          <Link
            to={link.section}
            smooth={true}
            spy={true}
            duration={500}
            offset={-80}
            className='cursor-pointer text-white hover:text-cyan transition-all duration-300'
          >
            {link.link}
          </Link>
          <div className='mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500' />
        </li>
      ))}
    </ul>
  )
}

export default NavbarLinks




