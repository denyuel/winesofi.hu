import React from 'react';
import { graphql, Link } from 'gatsby';
import { PortableText, toPlainText } from '@portabletext/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import SanityImage from 'gatsby-plugin-sanity-image';
import Layout from '../components/layout';
import { Seo } from '../components/seo';
import imageGallery from '../components/imageGallery';
import { useLanguage } from '../context/LanguageContext';

export default function BlogPost({ data }) {
  const { language } = useLanguage();
  const post = data.sanityPost;
  const portableTextComponents = {
    types: {
      image: ({ value }) => (
        <SanityImage {...value} width={1200} className="max-w-5xl max-h-104 w-auto h-auto mx-auto" alt={post.title} />
      ),
      imageGallery: imageGallery,
    },
    marks: {
      link: ({ children, value }) => (
        <a href={value.href} className="underline text-orange">
          {children}
        </a>
      ),
    },
    block: {
      h2: ({ children }) => <h2 className="title text-post_title leading-7 mt-10 mb-4">{children}</h2>,
      h3: ({ children }) => <h3 className="title text-2xl leading-7 mt-8 mb-3">{children}</h3>,
      h4: ({ children }) => <h4 className="title text-xl leading-7 mt-6 mb-3">{children}</h4>,
    },
  };

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
                <span>{post.title}</span>
              </ul>
            </nav>

            <div className="flex justify-around container mx-auto md:py-10 flex-col-reverse md:flex-row gap-12">
              <div className="md:flex-1 px-4 md:px-0">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-brown py-1 px-[10px] text-white rounded font-open font-semibold text-xs uppercase">
                    {language === 'hu' ? 'borászati blog' : 'winery blog'}
                  </span>
                  <p className="font-light font-open text-xs">{post._createdAt}</p>
                </div>
                <h1 className="text-4xl title pb-6">{post.title}</h1>
                <div className="h-0 border-b border-button_black border-opacity-20 w-10"></div>
                <div className="prose max-w-none bold-text py-6">
                  <PortableText value={post._rawSummary} />
                </div>
              </div>
              <GatsbyImage
                className="md:flex-1 md:rounded-full w-full my-1 md:max-w-80 md:max-h-80 aspect-square md:-mb-24"
                image={post.mainImage.asset.gatsbyImageData}
                alt={post.title}
              />
            </div>
            <div className="w-full h-0 border-b-[1px] border-button_black border-opacity-20"></div>
            <div className="container mx-auto py-10 md:pt-24 px-4 md:px-0">
              <div className="prose text-sm leading-6 font-normal font-open max-w-none">
                <PortableText value={post._rawBody} components={portableTextComponents} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query MyQuery($id: String) {
    sanityPost(id: { eq: $id }) {
      id
      title
      mainImage {
        asset {
          gatsbyImageData
          url
        }
      }
      _createdAt(formatString: "YYYY.MM.DD")
      _updatedAt
      _rawBody(resolveReferences: { maxDepth: 5 })
      slug {
        current
      }
      _rawSummary(resolveReferences: { maxDepth: 2 })
    }
  }
`;

export function Head({ data, location }) {
  const post = data.sanityPost;
  const imageUrl = post.mainImage?.asset?.url 
    ? `${post.mainImage.asset.url}?w=1200&fit=max&fm=jpg` 
    : post.mainImage?.asset?.gatsbyImageData?.images?.fallback?.src || '';

  return (
    <Seo
      title={`${post.title} — Wine&Sofi blog`}
      image={imageUrl}
      description={post._rawSummary ? toPlainText(post._rawSummary) : ''}
      pathname={location?.pathname || `/post/${post.slug?.current}`}
    />
  );
}
