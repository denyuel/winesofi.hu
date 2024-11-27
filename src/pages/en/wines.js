import React from 'react';
import { Seo } from '../../components/seo';
import Layout from '../../components/layout';
import ContactForm from '../../components/en/contact-form';
import ShopifyBuyButtonEng from '../../components/shopifyBuyButtonEng';

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
                <div className="items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <ShopifyBuyButtonEng productId="9596896641371" componentId="product-component-1732702266438" />
                  </div>

                  <div className="items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <ShopifyBuyButtonEng productId="9596904472923" componentId="product-component-1732702488108" />
                  </div>

                  <div className="items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <ShopifyBuyButtonEng productId="9596914598235" componentId="product-component-1732703425832" />
                  </div>

                  <div className="items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <ShopifyBuyButtonEng productId="9596878389595" componentId="product-component-1732704264862" />
                  </div>

                  <div className="items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <ShopifyBuyButtonEng productId="9596881437019" componentId="product-component-1732704355873" />
                  </div>


                  <div className="items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <ShopifyBuyButtonEng productId="9596923150683" componentId="product-component-1732704186903" />
                  </div>

                  <div className="items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <ShopifyBuyButtonEng productId="9457752342875" componentId="product-component-1726210304942" />
                  </div>

                  <div className="items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <ShopifyBuyButtonEng productId="9457751228763" componentId="product-component-1726210267165" />
                  </div>

                  <div className="items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <ShopifyBuyButtonEng productId="9454030160219" componentId="product-component-1726143603645" />
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
    title="Wine&Sofi | Contact Information"
    description="Get in touch with Wine&Sofi Boutique Winery. Contact us and discover our unique wines from the Badacsony region."
    pathname="/en/contact/"
  />
);
