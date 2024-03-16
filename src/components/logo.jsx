import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import logoSvg from '../images/logo.svg';

const Logo = () => {
    return (
      <div className='flex flex-col items-center gap-4 relative w-80'>
        <div className='absolute top-0 z-10 w-28'>
          <img src={logoSvg} alt="logo" className='w-full h-auto' />
        </div>
        <div className='absolute top-11 z-5 w-72'>
          <StaticImage src="../images/intersect.png" alt="intersect"/>
        </div>
      </div>
    )
}

export default Logo;
