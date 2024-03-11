import React from 'react';
import LeftNav from './left_nav';
import { StaticImage } from "gatsby-plugin-image";
import RightNav from './right_nav';

const Header = () => {
  return (
    <div className='flex gap-12'>
      <LeftNav />
      <StaticImage src="../images/logo.png" alt="logo"/>
      <RightNav />
    </div>
  );
};

export default Header;