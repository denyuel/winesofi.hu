import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";

export default function CookiePolicy() {
  useEffect(() => {
    /**
     * All config. options available here:
     * https://cookieconsent.orestbida.com/reference/configuration-reference.html
     */
    CookieConsent.run({
      guiOptions: {
        consentModal: {
          position: "bottom left",
          equalWeightButtons: false
        },
      },
      categories: {
        necessary: {
          enabled: true, // this category is enabled by default
          readOnly: true, // this category cannot be disabled
        },
        analytics: {},
      },

      language: {
        default: "hu",
        translations: {
          hu: {
            consentModal: {
              title: "Adatvédelem",
              description: "A weboldal sütiket (cookie) használ a működéséhez",
              acceptAllBtn: "Rendben",
              acceptNecessaryBtn: "Elutasítom",
              showPreferencesBtn: "További beállítások",
              footer: `<a href="/winesofi_adatvedelmi.pdf" target="_blank">Adatkezelési tájékoztató</a>`
            },
            preferencesModal: {
              title: "Sütibeállítások",
              acceptAllBtn: "Mindet elfogadom",
              acceptNecessaryBtn: "Mindet elutasítom",
              savePreferencesBtn: "Kiválasztottak engedélyezése",
              closeIconLabel: "Bezár",
              sections: [
                {
                  title: "Működéshez szükséges sütik",
                  description:
                    "Ezek a sütik elengedhetetlenek a weboldal helyes működéséhez",

                  //this field will generate a toggle linked to the 'necessary' category
                  linkedCategory: "necessary",
                },
                {
                  title: "Teljesítmény és analitika",
                  description:
                    "Ezek a sütik információkat gyűjtenek arról, hogy miként használod a weboldalunkat. Minden adat név nélkül kerül feldolgozásra, és nem használható fel azonosításra.",
                  linkedCategory: "analytics",
                },
              ],
            },
          },
        },
      },
    });
  }, []);

  return null;
}
