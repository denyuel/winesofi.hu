import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Seo } from '../../components/seo';
import Layout from '../../components/layout';
import ContactForm from '../../components/en/contact-form';

export default function Contact() {
  return (
    <Layout>
      <div>
        <div className='bg-narrow-hero w-full min-h-28 bg-cover'></div>
        <div className='flex flex-col'>
          <div className='container mx-auto flex flex-col md:flex-row justify-center items-center gap-2 px-4 py-12'>
            <div className='flex flex-col items-center md:items-start gap-8 w-11/12 md:w-8/12'>
              <h1 className='text-3xl md:text-4xl title'>Contact Us</h1>
              <div className="border-t-2 border-gray w-10"></div>
              <p className='bold-text text-center md:text-left'>
              Reach out through one of the contact options, or fill out the form below and I'll get in touch with you soon.
              </p>
              <p className='py-8'>
                <b className='font-bold'>Wine&Sofi Boutique Winery<br /><br />Laposa Zsófia</b><br />
                8261 Badacsonytomaj, Római út 197/1.<br />
                +36 20 505 1607<br />
                zsofialaposa@gmail.com<br />
              </p>
            </div>
            <div className='flex justify-center md:justify-end w-11/12 md:w-4/12'>
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
  <Seo title="Wine&Sofi | Contacts" description="Contact details of Wine&Sofi Boutique Winery, contact us and get to know our special wines from Badacsony." pathname="/en/contact" />
);
