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
      <div className="sm:hidden block cursor-pointer h-8 w-8" onClick={handleShowNavbar}>
        <StaticImage src="../images/hamburger 1.png" alt="hamburger ikon"/>
      </div>
      <div className={`nav-elements z-30 sm:z-0 absolute sm:static -left-6 sm:left-0 top-16 sm:top-0 bg-gray_light sm:bg-white w-0 sm:w-full h-fit sm:h-auto  overflow-hidden sm:overflow-visible transition-all ease-in-out duration-300 sm:transition-none ${showNavbar && 'w-48 z-30 rounded-md'}`}>
        <ul className='w-full flex flex-col sm:flex-row gap-0 sm:gap-6 pt-4 sm:pt-0 pb-4 sm:pb-0'>
          <li className='w-5/12 mr-0 mt-3 sm:mt-0'><LeftNav /></li>
          <li className='w-2/12 justify-center hidden sm:flex '><Logo /></li>
          <li className='w-5/12 mr-0 mt-[0.9rem] ms:mt-0'><RightNav /></li>
        </ul>
      </div>
      <div className="flex items-center gap-2 md:hidden">
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