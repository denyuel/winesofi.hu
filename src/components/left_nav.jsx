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
    <nav className="container ml-6 sm:mx-auto flex justify-between items-center px-4 gap-6 h-full uppercase">
      <div className="flex flex-col sm:flex-row sm:flex-1 justify-end items-end sm:items-center sm:space-x-4 gap-4 nav-text">
        <Link to="/" className="hover:text-gray-300">Wine&Sofi</Link>
        {pages.nodes.map((page) => (
          <Link to={`/${page.slug.current}`} key={page.id} className="hover:text-gray-300">
            <div className="flex items-center gap-7">
              <StaticImage className="hidden md:block" src="../images/ellipse.svg" />
              {page.title}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default LeftNav;