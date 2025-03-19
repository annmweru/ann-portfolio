import React from 'react';

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const FooterMain = () => {
  return (
    <div className="px-4">
      {/* Divider Line */}
      <div className="w-full h-[1px] bg-gray-600 mt-24"></div>

      {/* Desktop Navigation */}
      <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto">
        <p className="text-3xl text-gray-400 font-semibold">Annah Mweru</p>
        
        <ul className="hidden sm:flex gap-6 text-gray-400 text-lg">
          {links.map((item, index) => (
            <li key={index}>
              <a 
                href={`#${item.section}`} 
                className="hover:text-white transition-all duration-300"
              >
                {item.link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden mt-4 text-center">
        <ul className="flex flex-col gap-2 text-gray-400 text-lg">
          {links.map((item, index) => (
            <li key={index}>
              <a 
                href={`#${item.section}`} 
                className="hover:text-white transition-all duration-300"
              >
                {item.link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Copyright Section */}
      <p className="max-w-[1200px] mx-auto text-center mt-4 mb-6 text-sm text-gray-500">
        © 2025 Annah Mweru | All Rights Reserved
      </p>
    </div>
  );
};

export default FooterMain;
