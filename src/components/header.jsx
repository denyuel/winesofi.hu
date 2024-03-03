import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const Logo = () => {
  return <h1 className="text-2xl font-bold">Wine&Sofi</h1>;
};

const Header = () => {
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
    <header className="py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <nav className="flex flex-1 justify-center space-x-4 gap-4 uppercase">
          <Link to="/" className="hover:text-gray-300">Wine&Sofi</Link>
          {pages.nodes.map((page) => (
            <Link to={`/${page.slug.current}`} key={page.id} className="hover:text-gray-300">{page.title}</Link>
          ))}
        </nav>
        <div>
          <Link to="/"><Logo /></Link>
        </div>
        <nav className="flex flex-1 justify-center space-x-4 gap-4 uppercase">
          <Link to="/blog" className="hover:text-gray-300">Blog</Link>
          <Link to="/kapcsolat" className="hover:text-gray-300">Kapcsolat</Link>
          <div className="flex justify-between items-center px-4 gap-4 ml-8">
            <a href="#" className="hover:text-gray-300">
              {/* svg facebook icon */}
              fb
            </a>
            <a href="#" className="hover:text-gray-300">
              {/* svg instagram icon */}
              i
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
