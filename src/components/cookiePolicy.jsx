import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import { useLanguage } from "../context/LanguageContext";

export default function CookiePolicy() {
  const { language } = useLanguage();

  useEffect(() => {
    /**
     * All config. options available here:
     * https://cookieconsent.orestbida.com/reference/configuration-reference.html
     */
    CookieConsent.run({
      guiOptions: {
        consentModal: {
          position: "bottom left",
          equalWeightButtons: false,
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
        default: language || "hu",
        translations: {
          hu: {
            consentModal: {
              title: "Adatvédelem",
              description: "A weboldal sütiket (cookie) használ a működéséhez",
              acceptAllBtn: "Rendben",
              acceptNecessaryBtn: "Elutasítom",
              showPreferencesBtn: "További beállítások",
              footer: `<a href="/winesofi_adatvedelmi.pdf" target="_blank">Adatkezelési tájékoztató</a>`,
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
          en: {
            consentModal: {
              title: "Privacy Policy",
              description: "This website uses cookies to operate properly.",
              acceptAllBtn: "Accept",
              acceptNecessaryBtn: "Decline",
              showPreferencesBtn: "Additional Settings",
              footer: `<a href="/winesofi_privacy_policy.pdf" target="_blank">Privacy Policy</a>`,
            },
            preferencesModal: {
              title: "Cookie Settings",
              acceptAllBtn: "Accept All",
              acceptNecessaryBtn: "Reject All",
              savePreferencesBtn: "Save Preferences",
              closeIconLabel: "Close",
              sections: [
                {
                  title: "Essential Cookies",
                  description:
                    "These cookies are necessary for the proper functioning of the website.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Performance and Analytics",
                  description:
                    "These cookies collect information on how you use our website. All data is processed without personal identification.",
                  linkedCategory: "analytics",
                },
              ],
            },
          },
        },
      },
    });
  }, [language]);

  return null;
}
