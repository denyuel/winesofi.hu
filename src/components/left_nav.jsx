import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { useLanguage } from "../context/LanguageContext";

const LeftNav = () => {
  const { language } = useLanguage();
  const { pages } = useStaticQuery(graphql`
    query {
      pages: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/src/content/pages/" }
          frontmatter: { include_in_navigation: { eq: true } }
        }
      ) {
        nodes {
          id
          frontmatter {
            title
            slug
            language
          }
        }
      }
    }
  `);

  return (
    <nav className="container md:mx-auto flex justify-between items-center h-full uppercase">
      <div className="flex flex-col md:flex-row flex-1 md:justify-end items-center xl:space-x-4 gap-3 xl:gap-4 nav-text">
        {language === "hu" ? (
          <Link to="/" className="hover:text-gray-300">
            Wine&Sofi
          </Link>
        ) : (
          <Link to="/en" className="hover:text-gray-300">
            Wine&Sofi
          </Link>
        )}
        {pages.nodes
          .filter((page) => page.frontmatter.language === language)
          .map((page) => (
            <Link
              to={page.frontmatter.slug}
              key={page.id}
              className="hover:text-gray-300"
            >
              <div className="flex items-center justify-center gap-3 xl:gap-7">
                <span className="hidden md:flex items-center text-lg leading-none text-slate-200">
                  &bull;
                </span>
                {page.frontmatter.title}
              </div>
            </Link>
          ))}
      </div>
    </nav>
  );
};

export default LeftNav;
