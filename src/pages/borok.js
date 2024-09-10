import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Seo } from '../components/seo';
import Layout from '../components/layout';
import ContactForm from '../components/contact-form';
import ShopifyBuyButton from '../components/shopifyBuyButton';

export default function Borok() {
  return (
    <Layout>
      <main className="flex-grow">
        <div class="bg-narrow-hero w-full min-h-28 bg-cover"></div>
        <div className="bg-bio bg-contain bg-right-bottom bg-no-repeat">
          <h1 className="title text-4xl my-8">Borok</h1>
          <div className=" max-w-none bold-text my-8">
            <div className="max-w-none bold-text my-8">
              <p className="pb-6">
                Jelenleg 4,5 hektár szőlőterületet művelek. A területek egy része a Badacsony-hegy közepén, a "hegy
                veséjében", valamint a Köves-hegy tetején találhatók. A szőlőfajták között megtalálható az olaszrizling,
                amely a Badacsony-borvidék meghatározó fajtája, a rajnai rizling, ami összehasonlítást biztosít a
                nemzetközi borvidékekkel és a furmint, ami a vulkáni talajon érzi magát igazán otthon. Van egy öreg
                tőkékből álló, vegyes kis terület, aminek nagy része Kéknyelű, igazi kuriózum, a régió sokszínűségét és
                történelmét mutatja be.
              </p>
              <p className="pb-6">
                A "hegy veséje" a borászat szempontjából az arany középút. Példaként Burgundia hozható fel, ahol a borok
                besorolása három fő kategóriába esik: az alap borokat jelölő "Villages", a hegy tetején található
                kiemelkedő minőséget képviselő "Premier Cru", és a csúcsminőséget jelentő "Grand Cru", melyek
                legtöbbször a “hegy veséjében", a hegy közepén találhatók. A hegy közepén a talajerózió mértéke nem túl
                nagy, a talaj tápanyagellátása ideális, a nap beesési szöge és a szélhatások megfelelők.
              </p>
              <p className="pb-6">Tökéletes helyszín a szőlőtermesztésre.</p>
            </div>

            <div className="flex flex-wrap mx-4">
              <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-4 flex">
                <div className="flex-1 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className="p-6 flex flex-col h-full">
                    <ShopifyBuyButton
                      productId="9365696282971"
                      componentId="product-component-1724660548441"
                      className="w-48 h-48 md:w-64 md:h-64 mb-4"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-4 flex">
                <div className="flex-1 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className="p-6 flex flex-col h-full">
                    <ShopifyBuyButton
                      productId="9365699559771"
                      componentId="product-component-1724755265832"
                      className="w-48 h-48 md:w-64 md:h-64 mb-4"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-4 flex">
                <div className="flex-1 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className="p-6 flex flex-col h-full">
                    <ShopifyBuyButton
                      productId="9365702836571"
                      componentId="product-component-1724661037101"
                      className="w-48 h-48 md:w-64 md:h-64 mb-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </Layout>
  );
}

export const Head = () => (
  <Seo
    title="Wine&Sofi | Elérhetőségek, kapcsolat"
    description="A Wine&Sofi Butikborászat elérhetőségei, lépj velünk kapcsolatba és ismerd meg a badacsonyi különleges borainkat."
    pathname="/kapcsolat"
  />
);
