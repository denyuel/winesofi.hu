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
    <nav className="container md:mx-auto flex justify-between items-center h-full uppercase">
      <div className="flex flex-col md:flex-row flex-1 md:justify-end items-center xl:space-x-4 gap-3 xl:gap-4 nav-text">
        <Link to="/" className="hover:text-gray-300">Wine&Sofi</Link>
        {pages.nodes.map((page) => (
          <Link to={`/${page.slug.current}`} key={page.id} className="hover:text-gray-300">
            <div className="flex items-center justify-center gap-3 xl:gap-7">
              <StaticImage className="hidden md:block" src="../images/ellipse.svg" role="presentation" alt="" />
              {page.title}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default LeftNav;
