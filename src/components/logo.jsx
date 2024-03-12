import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

const Logo = () => {
    return (
      <div className='flex flex-col items-center gap-4 relative w-80'>
        <div className='absolute top-0 z-10 w-28'>
          <StaticImage src="../images/logo.png" alt="logo"/>
        </div>
        <div className='absolute top-11 z-5 w-72'>
          <StaticImage src="../images/intersect.png" alt="intersect"/>
        </div>
      </div>
    )
}

export default Logo;