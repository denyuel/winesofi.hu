import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Seo } from '../components/seo';
import Layout from '../components/layout';
import ContactForm from '../components/contact-form';

export default function Contact() {
  return (
    <Layout>
      <div>
        <div className='bg-narrow-hero w-full min-h-28 bg-cover'></div>
        <div className='flex flex-col'>
          <div className='flex flex-col md:flex-row justify-center items-center gap-2 px-4 md:px-20 xl:px-72 py-12'>
            <div className='flex flex-col items-center md:items-start gap-8 w-11/12 md:w-8/12'>
              <h1 className='text-3xl md:text-4xl title'>kapcsolat</h1>
              <div className="border-t-2 border-gray w-10"></div>
              <p className='bold-text text-center md:text-left'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies.
              </p>
            </div>
            <div className='flex justify-center md:justify-end w-11/12 md:w-4/12 -mb-20'>
              <div className='w-64 h-64 overflow-hidden z-10 rounded-full aspect-square'>
                <StaticImage className='rounded-full' src='../images/contact.jpg' alt='' />
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </Layout>
  )
};

export const Head = () => (
  <Seo title="Kapcsolat — Wine&Sofi borászat Badacsony`}" pathname="/kapcsolat" />
);
