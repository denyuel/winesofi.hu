import React, { createContext, useContext, useState, useEffect } from 'react';
import { navigate } from 'gatsby';

const LanguageContext = createContext();

export const LanguageProvider = ({ initialLanguage, children }) => {
  const [language, setLanguage] = useState(initialLanguage || 'en');

  useEffect(() => {
    // Only run this effect on the client side
    if (typeof document !== 'undefined') {
      const htmlTag = document.querySelector('html');
      htmlTag?.setAttribute('lang', language);
    }
  }, [language]);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'hu' : 'en';
    setLanguage(newLanguage);

    // Update the URL when language is toggled
    navigate(`/${newLanguage === 'en' ? 'en' : ''}`);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
