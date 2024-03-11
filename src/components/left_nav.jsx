import React from "react";
import { Link, useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";

const LeftNav = () => {
    const { pages } = useStaticQuery(graphql`
    query {
      pages: allSanityPage {
        nodes {
          id
          slug {
            current
          }
          title
        }
      }
    }
  `);

    return (
        <nav className="container mx-auto flex justify-between items-center px-4 gap-6 uppercase">
            <div className="flex flex-1 justify-end space-x-4 gap-4 nav-text">
                <Link to="/" className="hover:text-gray-300">Wine&Sofi</Link>
                <div className="flex items-center">
                  <StaticImage src="../images/ellipse.svg"/>
                </div>
                {pages.nodes.map((page) => (
                    <Link to={`/${page.slug.current}`} key={page.id} className="hover:text-gray-300">{page.title}</Link>
                ))}        
            </div>
        </nav>
    );
};

export default LeftNav;