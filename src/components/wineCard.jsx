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

  // Wine titles for gift wrapping validation
  const wineTitles = ["Fiora 2023", "Furmint 2023", "Lunara 2022", "Lunessa 2022", "Contessa 2021", "Blue stem 2021"];

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
          const lines = currentVal.split('\n');
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
                const qty = parseInt(match[1], 10);
                const itemTitle = match[2];
                if (wineTitles.includes(itemTitle)) {
                  wineCount += qty;
                }
              } else {
                const simpleMatch = content.match(/^(.*?)\s+\((.*?)\)$/);
                if (simpleMatch) {
                  const itemTitle = simpleMatch[1];
                  if (wineTitles.includes(itemTitle)) {
                    wineCount += 1;
                  }
                }
              }
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
        currentVal.startsWith("Kedves Wine&Sofi!\n\nSzeretnék rendelni a következő") ||
        currentVal.startsWith("Dear Wine&Sofi!\n\nI would like to order the following");
      
      if (isDefaultTemplate) {
        let items = []; // Array of { qty, title, priceText }
        
        if (currentVal) {
          const lines = currentVal.split('\n');
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
            style={isGlass ? { filter: 'brightness(0.92) contrast(1.15) drop-shadow(0px 4px 12px rgba(0,0,0,0.15))' } : {}}
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
