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

export const wrapPageElement = ({ element }) => {
  return (
    <LanguageProvider>
      <PageWrapper>{element}</PageWrapper>
    </LanguageProvider>
  );
};

