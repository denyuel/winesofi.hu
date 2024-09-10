import React, { useEffect } from "react";

const ShopifyBuyButton = ({ productId, componentId }) => {
  useEffect(() => {
    const scriptURL =
      "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

    function loadScript() {
      const script = document.createElement("script");
      script.async = true;
      script.src = scriptURL;
      document.head.appendChild(script);
      script.onload = () => {
        if (window.ShopifyBuy) {
          ShopifyBuyInit();
        } else {
          console.error("ShopifyBuy is not available after script load");
        }
      };
    }

    function ShopifyBuyInit() {
      if (!window.ShopifyBuy) {
        console.error("ShopifyBuy is not defined");
        return;
      }

      const client = window.ShopifyBuy.buildClient({
        domain: "37f8e8-e0.myshopify.com",
        storefrontAccessToken: "c5e1a0cedd650f1c8258b95a91b0c1e2",
      });

      window.ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent("product", {
          id: productId,
          node: document.getElementById(componentId),
          moneyFormat:
            "%7B%7Bamount_no_decimals_with_comma_separator%7D%7D%20Ft",
          options: {
            product: {
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "80%",
                    "margin-left": "0",
                  },
                  "text-align": "left",
                },
                img: {
                  "margin-bottom": "30px",
                },
                title: {
                  "font-size": "26px",
                  "text-align": "center",
                },
                button: {
                  "border-radius": "12px",
                  "text-align": "center",
                  "margin-left": "auto",
                  "margin-right": "auto",
                },
                price: {
                  "font-size": "18px",
                  "text-align": "center",
                },
                compareAt: {
                  "font-size": "15.3px",
                  "text-align": "center",
                },
                unitPrice: {
                  "font-size": "15.3px",
                  "text-align": "center",
                },
              },
              layout: "horizontal",
              contents: {
                img: true,
                imgWithCarousel: false,
                description: false,
              },
              width: "100%",
              text: {
                button: "Kosárba rak",
              },
            },
            productSet: {
              styles: {
                products: {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px",
                  },
                },
              },
            },
            modalProduct: {
              contents: {
                img: false,
                imgWithCarousel: true,
                button: false,
                buttonWithQuantity: true,
              },
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px",
                  },
                },
                button: {
                  "border-radius": "12px",
                },
                title: {
                  "font-family": "Helvetica Neue, sans-serif",
                  "font-weight": "bold",
                  "font-size": "26px",
                  color: "#4c4c4c",
                  "text-align": "center", // Centered title in modal
                },
                price: {
                  "font-family": "Helvetica Neue, sans-serif",
                  "font-weight": "normal",
                  "font-size": "18px",
                  color: "#4c4c4c",
                  "text-align": "center", // Centered price in modal
                },
                compareAt: {
                  "font-family": "Helvetica Neue, sans-serif",
                  "font-weight": "normal",
                  "font-size": "15.3px",
                  color: "#4c4c4c",
                  "text-align": "center", // Centered compare-at price in modal
                },
                unitPrice: {
                  "font-family": "Helvetica Neue, sans-serif",
                  "font-weight": "normal",
                  "font-size": "15.3px",
                  color: "#4c4c4c",
                  "text-align": "center", // Centered unit price in modal
                },
              },
              text: {
                button: "Add to cart",
              },
            },
            cart: {
              styles: {
                button: {
                  "border-radius": "12px",
                },
              },
              text: {
                title: "Kosár",
                total: "Összeg",
                empty: "A kosara üres.",
                notice:
                  "Szállítási djak és kedvezmények a rendelés véglegesítése során kerülnek kiszámításra.",
                button: "Pénztárhoz",
              },
            },
            toggle: {},
          },
        });
      });
    }

    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
  }, [productId, componentId]);

  return <div id={componentId}></div>;
};

export default ShopifyBuyButton;
