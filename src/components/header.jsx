import React from 'react';
import LeftNav from './left_nav';
import RightNav from './right_nav';
import Logo from './logo';
import { useState } from 'react';
import { StaticImage } from "gatsby-plugin-image";
import fb from "../images/facebook.svg";
import insta from "../images/instagram.svg";

const Header = () => {

  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <div className='flex justify-between'>
      <div className="menu-icon flex justify-start items-center md:hidden w-3/12 h-8 cursor-pointer" onClick={handleShowNavbar}>
        <StaticImage src="../images/hamburger 1.png" alt="hamburger ikon"/>
      </div>
      <div className={`nav-elements w-full  ${showNavbar && 'active'}`}>
        <ul className='w-full flex gap-4 lg:gap-12'>
          <li className='w-5/12'><LeftNav /></li>
          <li className='w-2/12 flex justify-center logo'><Logo /></li>
          <li className='w-5/12'><RightNav /></li>
        </ul>
      </div>
      <div className='flex justify-center w-6/12 md:hidden'>
        <Logo />
      </div>
      <div className="flex items-center justify-end md:hidden w-3/12">
          <a href="https://www.facebook.com/" className="hover:text-gray-300">
            <img src={fb} alt="facebook" className="w-6 h-6 mx-2" />
          </a>
          <a href="https://www.instagram.com/" className="hover:text-gray-300">
            <img src={insta} alt="instagram" className="w-7 h-7 mx-2" />
          </a>
      </div>
    </div>
  );
};

export default Header;