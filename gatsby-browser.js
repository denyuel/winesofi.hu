import React from 'react';
import './src/styles/global.css';
import '@fontsource/cormorant-sc/700.css';
import '@fontsource/kaushan-script';
import AgeVerificationModal from './src/components/ageVerificationModal';
import CookiePolicy from './src/components/cookiePolicy';
import { LanguageProvider } from './src/context/LanguageContext';

const PageWrapper = ({ children }) => {
  return (
    <div className="page-wrapper">
      {children}
      <AgeVerificationModal />
      <CookiePolicy />
    </div>
  );
};

export const wrapPageElement = ({ element, props }) => {
  // Detect language from the URL path during CSR
  const urlPrefix = props?.location?.pathname.split('/')[1];
  const initialLanguage = urlPrefix === 'en' ? 'en' : 'hu';

  return (
    <LanguageProvider initialLanguage={initialLanguage}>
      <PageWrapper>{element}</PageWrapper>
    </LanguageProvider>
  );
};

export function onRouteUpdate({ location }) {
  if (process.env.NODE_ENV === `production`) {
    const pagePath = location
      ? location.pathname + location.search + location.hash
      : undefined;
    setTimeout(() => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'pageview',
        page: {
          path: pagePath,
        },
      });
    }, 50);
  }
}
