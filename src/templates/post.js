import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import { Seo } from '../components/seo';
import { useLanguage } from '../context/LanguageContext';

export default function BlogPost({ data }) {
  const { language } = useLanguage();
  const post = data.markdownRemark;

  return (
    <Layout>
      <div className="bg-narrow-hero w-full min-h-28 bg-cover"></div>
      <div className="bg-bio bg-contain bg-right-bottom bg-no-repeat">
        <div className="bg-white bg-opacity-80">
          <div className="container mx-auto md:px-4">
            <nav className="py-6 text-sm">
              <ul>
                <li className="inline-block pr-2">
                  <Link to={language === 'hu' ? '/' : '/en'} className="text-orange hover:underline">
                    {language === 'hu' ? 'Kezdőlap' : 'Home'}
                  </Link>
                </li>
                <li className="inline-block pr-2">›</li>
                <li className="inline-block pr-2">
                  <Link to="/blog" className="text-orange hover:underline">
                    Blog
                  </Link>
                </li>
                <li className="inline-block pr-2">›</li>
                <span>{post.frontmatter.title}</span>
              </ul>
            </nav>

            <div className="flex justify-around container mx-auto md:py-10 flex-col-reverse md:flex-row gap-12">
              <div className="md:flex-1 px-4 md:px-0">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-brown py-1 px-[10px] text-white rounded font-open font-semibold text-xs uppercase">
                    {language === 'hu' ? 'borászati blog' : 'winery blog'}
                  </span>
                  <p className="font-light font-open text-xs">{post.frontmatter.date}</p>
                </div>
                <h1 className="text-4xl title pb-6">{post.frontmatter.title}</h1>
                <div className="h-0 border-b border-button_black border-opacity-20 w-10"></div>
                <div className="prose max-w-none bold-text py-6">
                  <p>{post.frontmatter.summary}</p>
                </div>
              </div>
              {post.frontmatter.image && (
                <img
                  className="md:flex-1 md:rounded-full w-full my-1 md:max-w-80 md:max-h-80 aspect-square md:-mb-24 object-cover"
                  src={post.frontmatter.image}
                  alt={post.frontmatter.title}
                />
              )}
            </div>
            <div className="w-full h-0 border-b-[1px] border-button_black border-opacity-20"></div>
            <div className="container mx-auto py-10 md:pt-24 px-4 md:px-0">
              <div
                className="prose text-sm leading-6 font-normal font-open max-w-none"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query BlogPostQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
        slug
        summary
        image
      }
    }
  }
`;

export function Head({ data }) {
  const post = data.markdownRemark;
  return (
    <Seo
      title={`${post.frontmatter.title} — Wine&Sofi blog`}
      image={post.frontmatter.image}
      description={post.frontmatter.summary}
      pathname={post.frontmatter.slug}
    />
  );
}
