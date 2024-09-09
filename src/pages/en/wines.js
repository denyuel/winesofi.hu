import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Seo } from '../../components/seo';
import Layout from '../../components/layout';
import ContactForm from '../../components/en/contact-form';
import ShopifyBuyButton from '../../components/shopifyBuyButton';

export default function Borok() {
  return (
    <Layout>
      <main className="flex-grow">
        <div class="bg-narrow-hero w-full min-h-28 bg-cover"></div>
        <div className="bg-bio bg-contain bg-right-bottom bg-no-repeat">
          <div class="bg-white bg-opacity-80">
            <div className="container mx-auto px-4 pb-8">
              <h1 className="title text-4xl my-8">Wines</h1>
              <div className="prose max-w-none bold-text my-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
                  <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <ShopifyBuyButton productId="9365696282971" componentId="product-component-1724660548441" />
                  </div>

                  <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <ShopifyBuyButton productId="9365699559771" componentId="product-component-1724755265832" />
                  </div>

                  <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <ShopifyBuyButton productId="9365702836571" componentId="product-component-1724661037101" />
                  </div>
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
    title="Wine&Sofi | Elérhetőségek, kapcsolat"
    description="A Wine&Sofi Butikborászat elérhetőségei, lépj velünk kapcsolatba és ismerd meg a badacsonyi különleges borainkat."
    pathname="/en/contact/"
  />
);
