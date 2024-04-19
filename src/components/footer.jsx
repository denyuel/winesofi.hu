import React from 'react';
import LeftNav from './left_nav';
import RightNav from './right_nav';
import { StaticImage } from "gatsby-plugin-image";
import logoSvg from '../images/logo.svg';
import fb from "../images/facebook.svg";
import insta from "../images/instagram.svg";

const Footer = () => {
  return (
    <div className='flex gap-8'>
        <div className='flex w-2/3 md:w-1/6 justify-start gap-3 xl:gap-4'>
            <div className='flex max-w-17 max-h-14'>
                <img src={logoSvg} alt="logo"/>
            </div>
            <div className='flex items-center w-40'>
                <span className='nav-text'>Copyright © 2023</span>
            </div>
            </div>
        <div className='hidden md:flex w-10/12'>
            <div className="w-7/12">
                <LeftNav />
            </div>
            <div className="flex items-center justify-center w-4 m-2 xl:m-4">
                <StaticImage src="../images/ellipse.svg" role="presentation" alt="" />
            </div>
            <div className="w-5/12">
                <RightNav />
            </div>
        </div>
        <div className="flex items-center justify-end gap-2 md:hidden w-1/3">
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
