import React from "react";
import { Link } from "gatsby";
import fb from "../images/facebook.svg";
import insta from "../images/instagram.svg";
import { useLanguage } from "../context/LanguageContext";

const RightNav = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className="container md:mx-auto flex justify-between items-center h-full uppercase">
      <div className="flex flex-col md:flex-row flex-1 justify-between items-center">
        <div className="flex flex-col md:flex-row flex-1 items-center justify-start xl:space-x-4 gap-3 xl:gap-4 nav-text">
          {language === 'hu' ? (<Link to="/borok" className="hover:text-gray-300">
            Borbutik
          </Link>) : (<Link to="/en/wines" className="hover:text-gray-300">
            Wine Boutique
          </Link>)}
          <span className="hidden md:flex items-center text-lg leading-none text-slate-200">
            &bull;
          </span>
          <Link to={language === 'en' ? '/en/blog' : '/blog'} className="hover:text-gray-300">
            Blog
          </Link>
          <span className="hidden md:flex items-center text-lg leading-none text-slate-200">
            &bull;
          </span>
          {language === 'hu' ? (<Link to="/kapcsolat" className="hover:text-gray-300">
            Kapcsolat
          </Link>) : (<Link to="/en/contact" className="hover:text-gray-300">
            Contact
          </Link>)}
        </div>{" "}
        {/* Button to toggle language */}
        <button
          onClick={toggleLanguage}
          className="mx-4 px-3 py-1 border border-gray-300 rounded hover:bg-gray-300 hover:text-black"
        >
          {language === "hu" ? "EN" : "HU"} {/* Toggle button label */}
        </button>
      </div>
      <div className="hidden md:flex justify-between items-center gap-2">
        <a
          href="https://www.facebook.com/people/WineSofi/100063848108657/"
          className="hover:text-gray-300"
        >
          <img src={fb} alt="facebook" className="w-6 h-6 lg:mx-2" />
        </a>
        <a
          href="https://www.instagram.com/winesofi/"
          className="hover:text-gray-300"
        >
          <img src={insta} alt="instagram" className="w-7 h-7 lg:mx-2" />
        </a>
      </div>
    </nav>
  );
};

export default RightNav;
