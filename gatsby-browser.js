import React from 'react';
import './src/styles/global.css'
import '@fontsource/cormorant-sc/700.css';
import '@fontsource/kaushan-script';
import AgeVerificationModal from './src/components/ageVerificationModal';
import CookiePolicy from './src/components/cookiePolicy';

const PageWrapper = ({ children }) => {
  return (
    <div className="page-wrapper">
      {children}
      <AgeVerificationModal />
      <CookiePolicy />
    </div>
  )
};

export const wrapPageElement = ({ element }) => {
  return (<PageWrapper>
    {element}
  </PageWrapper>
  );
};

export function onRouteUpdate({ location }) {
  if (
    process.env.NODE_ENV === `production`
  ) {
    const pagePath = location
      ? location.pathname + location.search + location.hash
      : undefined
    setTimeout(() => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'pageview',
        page: {
          path: pagePath
        }
      });
    }, 50)
  }
};
