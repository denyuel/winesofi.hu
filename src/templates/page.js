import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { Seo } from '../components/seo';
import ContactForm from '../components/contact-form';

export default function Page({ data }) {
  const post = data.markdownRemark;

  return (
    <Layout>
      <div className='bg-narrow-hero w-full min-h-28 bg-cover'></div>
      <div className='bg-bio bg-contain bg-right-bottom bg-no-repeat'>
        <div className='bg-white bg-opacity-80'>
          <div className='container mx-auto px-4 pb-8'>
            <h1 className='title text-4xl my-8'>{post.frontmatter.title}</h1>
            <div className='h-px w-10 opacity-20 bg-button_black mr-auto my-4'></div>
            <div className="prose max-w-none bold-text my-8">
              <p>{post.frontmatter.summary}</p>
            </div>
            <div
              className="prose max-w-none basic-text mt-14"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </div>
      </div>
      <ContactForm />
    </Layout>
  );
}

export const query = graphql`
  query PageQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        slug
        summary
      }
    }
  }
`;

export function Head({ data }) {
  const page = data.markdownRemark;

  let title = page.frontmatter.title;
  let description = page.frontmatter.summary;
  let winesofi = 'Wine&Sofi |';

  switch (page.frontmatter.slug) {
    case '/kepzesek':
    case '/en/education': {
      title = `${winesofi} Borászati képzések, kurzusok`;
      description = `Tanuld meg a borászat mesterségét egy természetközeli butikborászat megálmodójától, a Badacsony szívében, a Balaton mellett.`;
      break;
    }
    case '/szaktanacsadas':
    case '/en/consultancy': {
      title = `${winesofi} Borászati Szaktanácsadás`;
      description = `Szaktanácsadás a Wine&Sofi természetközeli butikborászat megálmodójától, a Badacsony szívében, a Balaton mellett.`;
      break;
    }
    default: {
      title = `${winesofi} ${page.frontmatter.title}`;
      break;
    }
  }
  return (
    <Seo title={title} description={description} />
  );
}
