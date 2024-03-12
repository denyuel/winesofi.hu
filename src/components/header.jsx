import React from 'react';
import LeftNav from './left_nav';
import RightNav from './right_nav';
import Logo from './logo';

const Header = () => {
  return (
    <div className='flex gap-12'>
      <LeftNav />
      <Logo />
      <RightNav />
    </div>
  );
};

export default Header;