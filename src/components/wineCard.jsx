import React from 'react';

const WineCard = ({ product, lang = 'hu' }) => {
  const { title, description, price, images, outOfStock, handle } = product;
  const imageUrl = images[0];

  // Format price
  let priceText = "";
  if (price === 0) {
    priceText = lang === 'en' ? 'Free' : 'Ingyenes';
  } else {
    priceText = lang === 'en' 
      ? `${price.toLocaleString('hu-HU')} HUF` 
      : `${price.toLocaleString('hu-HU')} Ft`;
  }

  const handleOrderClick = (e) => {
    e.preventDefault();
    const messageInput = document.getElementById('message');
    if (messageInput) {
      const currentVal = messageInput.value.trim();
      const isEn = lang === 'en';

      // 1. Gift wrapping validation (needs at least 3 wines)
      const isGiftWrapping = handle === 'diszcsomagolas' || handle === 'diszcsomagolas-copy';
      if (isGiftWrapping) {
        let wineCount = 0;
        if (currentVal) {
          const winesToCheck = [
            { search: 'fiora 2023' },
            { search: 'furmint 2023' },
            { search: 'lunara 2022' },
            { search: 'welschriesling 2022' },
            { search: 'lunessa 2022' },
            { search: 'welschriesling barrel selection 2022' },
            { search: 'welschriesling barrel' },
            { search: 'contessa 2021' },
            { search: 'blue stem 2021' }
          ];

          const lines = currentVal.replace(/\r/g, '').split('\n');
          for (const line of lines) {
            const lowerLine = line.toLowerCase().trim();
            const matchedWine = winesToCheck.find(w => lowerLine.includes(w.search));
            if (matchedWine) {
              let qty = 1;
              const qtyMatch = lowerLine.match(/(\d+)\s*(?:db|x\b)/);
              if (qtyMatch) {
                qty = parseInt(qtyMatch[1], 10);
              } else {
                const bulletMatch = lowerLine.match(/^-\s*(\d+)\s+/);
                if (bulletMatch) {
                  qty = parseInt(bulletMatch[1], 10);
                }
              }
              wineCount += qty;
            }
          }
        }

        if (wineCount < 3) {
          if (isEn) {
            alert('Free gift wrapping is only available when ordering at least 3 bottles of wine! Please add 3 bottles of wine first.');
          } else {
            alert('Az ajándék díszcsomagolás kizárólag legalább 3 üveg bor rendelése esetén kérhető! Kérlek, előbb adj hozzá legalább 3 üveg bort.');
          }
          return;
        }
      }
      
      // 2. Build template or append product
      const isDefaultTemplate = !currentVal || 
        currentVal.replace(/\r/g, '').startsWith("Kedves Wine&Sofi!\n\nSzeretnék rendelni a következő") ||
        currentVal.replace(/\r/g, '').startsWith("Dear Wine&Sofi!\n\nI would like to order the following");
      
      if (isDefaultTemplate) {
        let items = []; // Array of { qty, title, priceText }
        
        if (currentVal) {
          const lines = currentVal.replace(/\r/g, '').split('\n');
          for (const line of lines) {
            if (line.startsWith('- ')) {
              const content = line.substring(2);
              let match = null;
              if (isEn) {
                match = content.match(/^(\d+)x\s+(.*?)\s+\((.*?)\)$/);
              } else {
                match = content.match(/^(\d+)\s+db\s+(.*?)\s+\((.*?)\)$/);
              }
              
              if (match) {
                items.push({
                  qty: parseInt(match[1], 10),
                  title: match[2],
                  priceText: match[3]
                });
              } else {
                const simpleMatch = content.match(/^(.*?)\s+\((.*?)\)$/);
                if (simpleMatch) {
                  items.push({
                    qty: 1,
                    title: simpleMatch[1],
                    priceText: simpleMatch[2]
                  });
                }
              }
            }
          }
        }
        
        // Update quantity if exists, otherwise add new
        const existingItem = items.find(item => item.title === title);
        if (existingItem) {
          existingItem.qty += 1;
        } else {
          items.push({
            qty: 1,
            title: title,
            priceText: priceText
          });
        }
        
        const linesText = items.map(item => {
          if (isEn) {
            return `- ${item.qty}x ${item.title} (${item.priceText})`;
          } else {
            return `- ${item.qty} db ${item.title} (${item.priceText})`;
          }
        }).join('\n');
        
        if (isEn) {
          messageInput.value = `Dear Wine&Sofi!\n\nI would like to order the following products:\n${linesText}\n\nPlease contact me regarding the order details.\n\nBest regards,\n[Name]\n[Phone]\n[Delivery / Pickup choice: e.g. personal / shipping]`;
        } else {
          messageInput.value = `Kedves Wine&Sofi!\n\nSzeretnék rendelni a következő termékekből:\n${linesText}\n\nKérlek, vegyétek fel velem a kapcsolatot a részletekkel kapcsolatban.\n\nÜdvözlettel,\n[Név]\n[Telefon]\n[Átvétel módja: pl. személyes / szállítás]`;
        }
      } else {
        const newItem = `[Product: ${title} (${priceText})]`;
        messageInput.value = currentVal + `\n${newItem}`;
      }
      
      const event = new Event('input', { bubbles: true });
      messageInput.dispatchEvent(event);
    }
    
    const form = document.getElementById('contactForm');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isGlass = handle && handle.includes('borospohar');

  return (
    <div className={`flex flex-col justify-between items-center h-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 transition-colors duration-150 text-center dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ${outOfStock ? 'opacity-80' : ''}`}>
      <div className="flex flex-col items-center w-full">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className={`object-contain h-64 mb-6 ${outOfStock ? 'grayscale opacity-60' : ''}`}
            style={isGlass ? { mixBlendMode: 'multiply' } : {}}
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
          {outOfStock ? (lang === 'en' ? 'Sold out' : 'Elfogyott') : priceText}
        </div>
        {outOfStock ? (
          <button disabled className="px-5 py-2.75 bg-gray_strong opacity-50 rounded-[20px] text-white uppercase text-xs tracking-[2px] font-semibold font-open w-full text-center inline-block cursor-not-allowed">
            {lang === 'en' ? 'Sold out' : 'Elfogyott'}
          </button>
        ) : (
          <button onClick={handleOrderClick} className="button w-full text-center inline-block">
            {lang === 'en' ? 'Order' : 'Rendelés'}
          </button>
        )}
      </div>
    </div>
  );
};

export default WineCard;
