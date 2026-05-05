import React from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarLinks from './NavbarLinks'
import NavbarBtn from './NavbarBtn'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-3 mt-2'>
      <div className='flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center px-6 py-3 rounded-full border-[0.5px] border-orange'>
        <NavbarLogo />

        <div className={`${menuOpen ? 'sm:block' : 'sm:hidden'} lg:block`}>
          <NavbarLinks />
        </div>

        <NavbarBtn />
      </div>

      <div className='flex lg:hidden sm:block p-3 bg-black items-center justify-center rounded-full border-[0.5px] border-orange'>
        <button
          className='text-xl p-2 border border-orange rounded-full text-white'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  )
}

export default NavbarMain


