import React from 'react';
import AgeVerificationModal from './src/components/ageVerificationModal';
import { LanguageProvider } from './src/context/LanguageContext';

const PageWrapper = ({ children }) => {
  return (
    <div className="page-wrapper">
      {children}
      <AgeVerificationModal />
    </div>
  );
};

export const wrapPageElement = ({ element, props }) => {
  // Detect language from the URL path during SSR
  const urlPrefix = props?.location?.pathname.split('/')[1];
  const initialLanguage = urlPrefix === 'en' ? 'en' : 'hu';

  return (
    <LanguageProvider initialLanguage={initialLanguage}>
      <PageWrapper>{element}</PageWrapper>
    </LanguageProvider>
  );
};


export const onRenderBody = ({ pathname, setHtmlAttributes }) => {
  const urlPrefix = pathname.split('/')[1];
  const language = urlPrefix === 'en' ? 'en' : 'hu';

  // Set the `lang` attribute in the HTML tag
  setHtmlAttributes({ lang: language });
};
