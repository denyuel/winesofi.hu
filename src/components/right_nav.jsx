import React from "react";
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";

const RightNav = () => {

    return (
        <nav className="container mx-auto flex justify-between items-center px-4 gap-6 uppercase">
            <div className="flex flex-1 justify-between items-center space-x-4 gap-4">
                <div className="flex flex-1 justify-start space-x-4 gap-4 nav-text">
                    <Link to="/esemenyek" className="hover:text-gray-300">Események</Link>
                    <div className="flex items-center justify-center">
                        <StaticImage src="../images/ellipse.svg"/>
                    </div>                    
                    <Link to="/blog" className="hover:text-gray-300">Blog</Link>
                    <div className="flex items-center justify-center">
                        <StaticImage src="../images/ellipse.svg"/>
                    </div>
                    <Link to="/kapcsolat" className="hover:text-gray-300">Kapcsolat</Link>
                    <div className="flex items-center justify-center">
                        <StaticImage src="../images/ellipse.svg"/>
                    </div>
                </div>
                <div className="flex justify-between items-center px-4 gap-2">
                    <a href="https://www.facebook.com/" className="hover:text-gray-300">
                        <StaticImage src="../images/facebook.svg" alt="facebook" className="w-6 h-6 mx-2" />
                    </a>
                    <a href="https://www.instagram.com/" className="hover:text-gray-300">
                        <StaticImage src="../images/instagram.svg" alt="instagram" className="w-7 h-7 mx-2" />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default RightNav;