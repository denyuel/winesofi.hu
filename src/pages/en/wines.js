import React from 'react';
import { Seo } from '../../components/seo';
import Layout from '../../components/layout';
import ContactForm from '../../components/en/contact-form';
import WineCard from '../../components/wineCard';
import productsEn from '../../data/products_en.json';

export default function Borok() {
  return (
    <Layout>
      <main className="flex-grow">
        <div className="bg-narrow-hero w-full min-h-28 bg-cover"></div>
        <div className="bg-bio bg-contain bg-right-bottom bg-no-repeat">
          <div className="bg-white bg-opacity-80">
            <div className="container mx-auto px-4 pb-8">
              <h1 className="title text-4xl my-8">Wines</h1>
              <div className="prose max-w-none bold-text my-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
                  {productsEn.map((product) => (
                    <WineCard key={product.id} product={product} lang="en" />
                  ))}
                </div>
                <div className="">
                  <h2 className="title text-post_title leading-7">WINE ORDERING</h2>

                  <p>
                    You can personally pick up the wines on the north shore of Lake Balaton, and in Budapest and Szeged
                    free of charge, based on prior arrangement.
                  </p>
                  <p>For other areas of the country, I can deliver to you with a shipping fee.</p>
                  <p>+36 20 505 1607</p>
                  <p>winesofi@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ContactForm />
    </Layout>
  );
}

export const Head = () => (
  <Seo
    title="Wine&Sofi | Contact Information"
    description="Get in touch with Wine&Sofi Boutique Winery. Contact us and discover our unique wines from the Badacsony region."
    pathname="/en/contact/"
  />
);
