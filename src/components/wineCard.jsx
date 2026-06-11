import React from 'react';

const WineCard = ({ product, lang = 'hu' }) => {
  const { title, description, price, images } = product;
  const imageUrl = images[0];

  const emailAddress = "winesofi@gmail.com";
  
  // Format price
  let priceText = "";
  if (price === 0) {
    priceText = lang === 'en' ? 'Free' : 'Ingyenes';
  } else {
    priceText = lang === 'en' 
      ? `${price.toLocaleString('hu-HU')} HUF` 
      : `${price.toLocaleString('hu-HU')} Ft`;
  }

  // Pre-filled email details
  const subject = encodeURIComponent(
    lang === 'en' ? `Wine Order - ${title}` : `Borrendelés - ${title}`
  );
  
  const body = encodeURIComponent(
    lang === 'en'
      ? `Dear Wine&Sofi!\n\nI would like to order the following product:\nProduct: ${title}\nPrice: ${priceText}\n\nPlease contact me regarding the order details.\n\nBest regards,\n[Name]\n[Phone]\n[Delivery / Pickup choice: e.g. personal / shipping]`
      : `Kedves Wine&Sofi!\n\nSzeretném megrendelni a következő terméket:\nTermék: ${title}\nÁr: ${priceText}\n\nKérlek, vegyétek fel velem a kapcsolatot a részletekkel kapcsolatban.\n\nÜdvözlettel,\n[Név]\n[Telefon]\n[Átvétel módja: pl. személyes / szállítás]`
  );

  const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

  return (
    <div className="flex flex-col justify-between items-center h-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 transition-colors duration-150 text-center dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="flex flex-col items-center w-full">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="object-contain h-64 mb-6"
          />
        )}
        <h3 className="font-cormorant_sc text-button_black font-bold uppercase text-xl md:text-2xl mb-4 min-h-[4.5rem] flex items-center justify-center dark:text-white">
          {title}
        </h3>
        <p className="basic-text mb-6 text-center text-gray_strong text-sm leading-6 font-open dark:text-gray-300">
          {description}
        </p>
      </div>
      <div className="w-full mt-auto flex flex-col items-center">
        <div className="font-open text-lg font-bold text-button_black mb-6 dark:text-white">
          {priceText}
        </div>
        <a href={mailtoLink} className="button w-full text-center inline-block">
          {lang === 'en' ? 'Order via email' : 'Rendelés e-mailben'}
        </a>
      </div>
    </div>
  );
};

export default WineCard;
