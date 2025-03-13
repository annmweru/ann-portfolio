import React from 'react'

const SingleInfo = ({text, Image}) => {
  return (
    <div className='flex gap-4 items-center justify-start'>
      {Image && <Image className="text-3xl" />} {/* Use Image as a component */}
        <p>{text}</p>
    </div>
  )
}

export default SingleInfo