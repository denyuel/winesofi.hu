import React from 'react';
import { Seo } from '../components/seo';
import Layout from '../components/layout';
import ContactForm from '../components/contact-form';
import WineCard from '../components/wineCard';
import productsHu from '../data/products_hu.json';

export default function Borok() {
  return (
    <Layout>
      <main className="flex-grow">
        <div className="bg-narrow-hero w-full min-h-28 bg-cover"></div>
        <div className="bg-bio bg-contain bg-right-bottom bg-no-repeat">
          <div className="bg-white bg-opacity-80">
            <div className="container mx-auto px-4 pb-8">
              <h1 className="title text-4xl my-8">Borok</h1>
              <div className="prose max-w-none bold-text my-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
                  {productsHu.map((product) => (
                    <WineCard key={product.id} product={product} lang="hu" />
                  ))}
                </div>
                <h2 className="title text-post_title leading-7">Borrendelés</h2>

                <p>
                  A borokat személyesen is átveheted a Balaton északi partján, Budapesten és Szegeden ingyenesen,
                  előzetes egyeztetés alapján.
                </p>
                <p>Az ország többi területére szállítási költséggel tudom eljuttatni hozzád.</p>
                <p>+36 20 505 1607</p>
                <p>winesofi@gmail.com</p>
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
    title="Wine&Sofi | Borbutik"
    description="A Wine&Sofi Butikborászat, ismerd meg a badacsonyi különleges borainkat."
    pathname="/borok"
  />
);
