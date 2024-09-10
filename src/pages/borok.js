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
          <div className="prose max-w-none bold-text my-8">
            <div className="h-px w-10 opacity-20 bg-button_black mr-auto my-4"></div>
            <div className="prose max-w-none bold-text my-8">
              <p>
                Jelenleg 4,5 hektár szőlőterületet művelek. A területek egy része a Badacsony-hegy közepén, a "hegy
                veséjében", valamint a Köves-hegy tetején találhatók. A szőlőfajták között megtalálható az olaszrizling,
                amely a Badacsony-borvidék meghatározó fajtája, a rajnai rizling, ami összehasonlítást biztosít a
                nemzetközi borvidékekkel és a furmint, ami a vulkáni talajon érzi magát igazán otthon. Van egy öreg
                tőkékből álló, vegyes kis terület, aminek nagy része Kéknyelű, igazi kuriózum, a régió sokszínűségét és
                történelmét mutatja be.
              </p>
              <p>
                A "hegy veséje" a borászat szempontjából az arany középút. Példaként Burgundia hozható fel, ahol a borok
                besorolása három fő kategóriába esik: az alap borokat jelölő "Villages", a hegy tetején található
                kiemelkedő minőséget képviselő "Premier Cru", és a csúcsminőséget jelentő "Grand Cru", melyek
                legtöbbször a “hegy veséjében", a hegy közepén találhatók. A hegy közepén a talajerózió mértéke nem túl
                nagy, a talaj tápanyagellátása ideális, a nap beesési szöge és a szélhatások megfelelők.
              </p>
              <p>Tökéletes helyszín a szőlőtermesztésre.</p>
            </div>

            <div className="prose max-w-none basic-text mt-14 ">
              <h2 className="title text-post_title leading-7">WineSofi 2022-es évjáratú Olaszrizling</h2>
              <div className="flex flex-col justify-center items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="flex-1 p-4 text-sm md:text-base">
                  <p>
                    Az olaszrizling Magyarországon az egyik legelterjedtebb és legkedveltebb szőlőfajta, amely
                    változatos karakterrel rendelkezik. A könnyed, gyümölcsös boroktól kezdve, az ásványos és komplex
                    tételekig minden formában megmutatkozni.
                  </p>
                  <p>
                    A WineSofi 2022-es évjáratú olaszrizlingje ezen sokszínűségből, a könnyedséget képviseli. 1657
                    palack készült belőle. A frissesség és gyümölcsösség tökéletes egyensúlyát kínálja. Trópusi jegyek,
                    mint a bodza, mangó, sárgabarack és zöldalma, melyeket egy kis mangóval társítva, Badacsony
                    jellegzetes ízvilágával harmonizálnak.
                  </p>
                  <p>
                    Ez a bor stabil szerkezettel rendelkezik, így tökéletes választás azok számára, akik a badacsonyi
                    olaszrizling gazdag ízvilágát szeretnék felfedezni egy könnyedebb, mégis karakteres boron keresztül.
                  </p>
                </div>

                <div className="flex-shrink-0 p-4 md:p-8">
                  <ShopifyBuyButton
                    productId="9365696282971"
                    componentId="product-component-1724660548441"
                    className="w-48 h-48 md:w-64 md:h-64"
                  />
                </div>
              </div>

              <h2 class="title text-post_title leading-7">WineSofi 2022-es évjáratú hordóválogatás Olaszrizling</h2>

              <p>
                Az olaszrizling Magyarországon az egyik legelterjedtebb és legkedveltebb szőlőfajta, amely változatos
                karakterrel rendelkezik. A könnyed, gyümölcsös boroktól kezdve, az ásványos és komplex tételekig minden
                formában megmutatkozni.
              </p>

              <p>
                A WineSofi 2022-es évjáratú hordóválogatás olaszrizlingje ezen sokszínűség csúcsát képviseli, ahol a
                borászat tudásának és a terroir egyedi jellegének összhangja jelenik meg minden egyes palackban. 1278
                palack készült belőle.
              </p>

              <p>
                Ez a bor a Badacsony vulkanikus talajának köszönhetően ásványos és gazdag karakterrel büszkélkedik,
                amelyet a 6 hónapos érlelés 10 hektoliteres ászok hordóban még inkább kiemel. Érett aromák, méz, dió,
                teafű, kevés fehér virág és ásványoság jellemzi, tökéletes társ a beszélgetésekhez.
              </p>

              <h2 class="title text-post_title leading-7">WineSofi 2021-es évjáratú Kéknyelű</h2>

              <p>
                A kéknyelű Badacsonyban található, mindössze 47 hektáron termesztett szőlőfajta, melynek minden cseppje
                a terroir egyediségét hordozza. Levélnyelének kékes-vöröses árnyalata adja a nevét. Régen “Úri szőlőnek”
                gúnyolták mivel a szinte kizárólag női virágzatot hoz, így a termesztés során szükség van egy porzó
                fajtára is (Rózsakő), így magasabb törődést igényel, mint egy átlagos fajta.
              </p>

              <p>
                A WineSofi 2021-es kéknyelűje a borászat első évjárata, mindössze 483 palack készült belőle. Az öreg
                tőkék mély, gazdag ízrétegeket kölcsönöznek a borhoz, mely virágos illatvilágával és a talaj
                ásványosságával válik felejthetetlenné. Ez a tétel virágos és érett jegyekkel mutatkozik be, melyeket
                finom barack és egy csepp citrus frissesség egészít ki.
              </p>

              <p>
                Ez a bor egy ínyenc tétel, a kéknyelű és Badacsony házassága, mely minden kortyával az egyedi terroir és
                a fajta jellegzetességeit hordozza magában.
              </p>

              <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <ShopifyBuyButton productId="9365699559771" componentId="product-component-1724755265832" />
              </div>

              <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <ShopifyBuyButton productId="9365702836571" componentId="product-component-1724661037101" />
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
