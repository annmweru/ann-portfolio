import React from 'react'
import { LuArrowDownRight } from "react-icons/lu";

function NavbarBtn() {
  return (
    <a href="/resume.pdf" download="Annah_Mweru_Resume.pdf">
      <button className='px-4 py-2 rounded-full text-sm font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:scale-105 transition-all duration-300'>
        My Resume
        <div className='sm:hidden md:block'>
          <LuArrowDownRight />
        </div>
      </button>
    </a>
  )
}

export default NavbarBtn
