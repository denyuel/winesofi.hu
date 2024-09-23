import React from 'react';
import LeftNav from './left_nav';
import RightNav from './right_nav.jsx';
import logoSvg from '../../images/logo.svg';
import fb from "../../images/facebook.svg";
import insta from "../../images/instagram.svg";

const Footer = () => {
  return (
    <div className='flex gap-3 md:gap-6 items-center justify-between'>
      <div className='flex gap-3 md:gap-6 items-center'>
        <img src={logoSvg} alt="logo" />
        <span className='nav-text'>Copyright © 2024</span>
      </div>
      <div className='hidden md:flex flex-1 items-center gap-6'>
        <LeftNav />
        <span className="text-lg leading-none text-slate-200">&bull;</span>
        <RightNav />
      </div>
      <div className="flex items-center justify-end gap-2 md:hidden">
        <a href="https://www.facebook.com/people/WineSofi/100063848108657/" className="hover:text-gray-300">
          <img src={fb} alt="facebook" className="w-6 h-6 mx-2" />
        </a>
        <a href="https://www.instagram.com/winesofi/" className="hover:text-gray-300">
          <img src={insta} alt="instagram" className="w-7 h-7 mx-2" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
