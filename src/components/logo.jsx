import React from "react";
import { Link } from 'gatsby';
import logoSvg from "../images/logo.svg";
import intersect from "../images/intersect.png";

const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-4 relative w-32 lg:w-80 z-10">
      <div className="absolute top-0 z-10 w-20 lg:w-28">
        <Link to="/">
          <img src={logoSvg} alt="logo" className="w-full h-auto" />
        </Link>
      </div>
      <div className="absolute top-[2.9rem] md:top-[2.7rem] z-5 w-48 lg:w-72">
        <img src={intersect} alt="" aria-hidden="true" role="presentation" alt="" />
      </div>
    </div>
  );
};

export default Logo;
