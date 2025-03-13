import React from 'react'

const SingleContactSocial = ({Icon,link}) => {
      const SocialIcon = Icon; // Assign it to a local variable

  return (
    <div className=' text-2xl h-12 w-12 border border-orange text-orange  rounded-full p-3 flex items-center justify-center'>

        <a href={link} className='cursor-pointer'>
                    <SocialIcon /> {/* Now React explicitly sees it being used */}

        </a>
    </div>
  )
}

export default SingleContactSocial