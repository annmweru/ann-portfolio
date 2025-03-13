import React from 'react'

const HeroGradient = () => {
  return (
    <div>
 <div
        className="absolute top-0 right-[400px] -z-10 animate-pulse " 
        style={{ boxShadow: "var(--shadow-cyan-medium)" }}
      >
      </div>
       <div
        className="absolute top-0 right-0 -z-10 animate-pulse " 
        style={{ boxShadow: "var(--shadow-orange-medium)" }}
      >
      </div>
         <div
        className="absolute top-[300px] left-0 -z-10 opacity-50 " 
        style={{ boxShadow: "var(--shadow-cyan-medium)" }}
      >
      </div>
        <div
        className="absolute top-[500px] left-0 -z-10 opacity-50 " 
        style={{ boxShadow: "var(--shadow-orange-medium)" }}
      >
      </div>
      

    </div>
  )
}

export default HeroGradient



