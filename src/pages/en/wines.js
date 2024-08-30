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
                <div className="h-px w-10 opacity-20 bg-button_black mr-auto my-4"></div>
                <div className="prose max-w-none bold-text my-8">
                  <p>
                    Currently, I cultivate 4.5 hectares of vineyards. Some of these areas are located in the middle of
                    Badacsony Hill, known as the "kidney of the hill," and on the top of Köves Hill. Among the grape
                    varieties, you will find Olaszrizling, which is a defining variety of the Badacsony wine region,
                    Riesling, which provides a comparison with international wine regions, and Furmint, which thrives on
                    volcanic soil. There is also a small, old vine mixed plot, mostly consisting of Kéknyelű, a real
                    curiosity that showcases the diversity and history of the region.
                  </p>
                  <p>
                    The "kidney of the hill" represents the golden mean from a winemaking perspective. Burgundy can be
                    cited as an example, where wine classification falls into three main categories: "Villages" for
                    basic wines, "Premier Cru" for outstanding quality found at the top of the hill, and "Grand Cru",
                    which is often located in the middle of the hill, the "kidney of the hill". In the middle of the
                    hill, soil erosion is minimal, nutrient supply is ideal, and the angle of sunlight and wind effects
                    are favourable.
                  </p>
                  <p>It’s the perfect location for viticulture.</p>
                </div>

                <div className="prose max-w-none basic-text mt-14">
                  <h2 className="title text-post_title leading-7">WINESOFI 2022 VINTAGE OLASZRIZLING</h2>
                  <div className="flex justify-center">
                    <StaticImage
                      className="max-h-104 max-w-104 mx-auto "
                      src="../../images/2022_olaszrizling.webp"
                      alt="olaszriz1ing 2022"
                      placeholder="blurred"
                    />
                  </div>

                  <p>
                    Olaszrizling is one of the most widespread and beloved grape varieties in Hungary, known for its
                    diverse character. It ranges from light, fruity wines to mineral and complex ones.
                  </p>

                  <p>
                    The WineSofi 2022 vintage Olaszrizling represents this diversity with a light character, producing
                    1657 bottles. It offers a perfect balance of freshness and fruitiness. Tropical notes such as
                    elderflower, mango, apricot, and green apple blend harmoniously with a hint of mango, characteristic
                    of the Badacsony flavour profile.
                  </p>

                  <p>
                    This wine has a stable structure, making it an ideal choice for those who wish to explore the rich
                    flavours of Badacsony's Olaszrizling in a lighter, yet characterful wine.
                  </p>

                  <div className="flex justify-center mb-4">
                    <ShopifyBuyButton productId="9365696282971" componentId="product-component-1724660548441" />
                  </div>

                  <h2 class="title text-post_title leading-7">WINESOFI 2022 BARREL SELECTION OLASZRIZLING</h2>

                  <div className="flex justify-center">
                    <StaticImage
                      className="max-h-104 max-w-104 mx-auto "
                      src="../../images/2022_hordovalogatas_olaszrizling.webp"
                      alt="olaszriz1ing hordovalogatas 2022"
                      placeholder="blurred"
                    />
                  </div>

                  <p>
                    Olaszrizling is one of the most widespread and favoured grape varieties in Hungary, known for its
                    varied character. It ranges from light, fruity wines to mineral and complex expressions.
                  </p>

                  <p>
                    The WineSofi 2022 barrel selection Olaszrizling represents the pinnacle of this diversity, where the
                    winemaking expertise and the unique characteristics of the terroir are harmoniously reflected in
                    each bottle. A total of 1278 bottles were produced.
                  </p>

                  <p>
                    This wine boasts a mineral and rich character, thanks to the volcanic soil of Badacsony, further
                    enhanced by 6 months of ageing in 10-hectoliter oak barrels. It features mature aromas of honey,
                    walnut, tea leaves, subtle white flowers, and minerality, making it a perfect companion for
                    conversations.
                  </p>

                  <div className="flex justify-center mb-4">
                    <ShopifyBuyButton productId="9365699559771" componentId="product-component-1724755265832" />
                  </div>

                  <h2 class="title text-post_title leading-7">WINESOFI 2021 VINTAGE KÉKNYELŰ</h2>

                  <div className="flex justify-center">
                    <StaticImage
                      className="max-h-104 max-w-104 mx-auto "
                      src="../../images/2021_keknyelu.webp"
                      alt="keknyelu 2021"
                      placeholder="blurred"
                    />
                  </div>

                  <p>
                  Kéknyelű is a grape variety exclusively grown in Badacsony, covering just 47 hectares, each drop carrying the uniqueness of the terroir. Its name comes from the bluish-reddish shade of its leaf petiole. Historically dubbed the "Gentleman's grape" because it predominantly bears female flowers, requiring a pollinator variety (Rózsakő) during cultivation, thus demanding more care than the average variety.
                  </p>

                  <p>
                  The WineSofi 2021 Kéknyelű is the winery's first vintage, with only 483 bottles produced. The old vines lend deep, rich layers of flavour to the wine, which becomes memorable with its floral aromatics and the soil's minerality. This batch presents floral and ripe notes, complemented by subtle peach and a hint of citrus freshness.
                  </p>

                  <p>
                  This wine is a gourmet batch, a marriage of Kéknyelű and Badacsony, carrying the unique terroir and varietal characteristics in every sip.
                  </p>

                  <div className="flex justify-center mb-4">
                    <ShopifyBuyButton productId="9365702836571" componentId="product-component-1724661037101" />
                  </div>

                  <h2 className="title text-post_title leading-7">WINE ORDERING</h2>

                  <p>
                  You can personally pick up the wines on the north shore of Lake Balaton, and in Budapest and Szeged free of charge, based on prior arrangement.
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
    pathname="/kapcsolat"
  />
);
