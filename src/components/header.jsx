import React, { useState } from 'react';
import { StaticImage } from "gatsby-plugin-image";
import LeftNav from './left_nav';
import RightNav from './right_nav';
import Logo from './logo';
import fb from "../images/facebook.svg";
import insta from "../images/instagram.svg";

const Header = () => {

  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <div className='flex justify-between'>
      <button className="flex justify-start items-center md:hidden w-3/12 h-8 cursor-pointer" onClick={handleShowNavbar}>
        <StaticImage src="../images/hamburger 1.png" alt="hamburger ikon"/>
      </button>
      <div className={`nav-elements z-20 md:z-0 absolute md:static left-0 top-16 md:top-0 pt-8 md:pt-0 bg-opacity-85 shadow-lg md:shadow-none md:bg-opacity-100 bg-gray_light md:bg-white w-0 md:w-full h-fit md:h-auto overflow-hidden md:overflow-visible transition-all ease-in-out duration-300 md:transition-none ${showNavbar && 'w-full'}`}>
        <ul className='w-full flex flex-col md:flex-row gap-0 md:gap-8 pt-4 md:pt-0 pb-4 md:pb-0'>
          <li className='md:w-5/12 mr-0 mt-3 md:mt-0'><LeftNav /></li>
          <li className='md:w-2/12 justify-center hidden md:flex'><Logo /></li>
          <li className='md:w-5/12 mr-0 mt-2 md:mt-0'><RightNav /></li>
        </ul>
      </div>
      <div className='flex justify-center w-6/12 md:hidden relative z-20'>
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
