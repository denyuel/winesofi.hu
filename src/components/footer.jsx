import React from 'react';
import LeftNav from './left_nav';
import RightNav from './right_nav';
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <div className='flex gap-8'>
        <div className='flex w-2/12 gap-4'>
            <div className='flex max-w-[4.25rem] max-h-[3.5rem]'>
                <StaticImage src="../images/logo.svg" alt="logo"/>
            </div>
            <div className='flex items-center w-40'>
                <span className='nav-text'>Copyright © 2023</span>
            </div>
            </div>
        <div className='flex w-10/12'>
            <LeftNav />
            <div className="flex items-center w-4 m-2">
                <StaticImage src="../images/ellipse.svg"/>
            </div>
            <RightNav />
        </div>
    </div>
  );
};

export default Footer;