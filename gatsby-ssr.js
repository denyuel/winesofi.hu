import React from 'react';
import AgeVerificationModal from './src/components/ageVerificationModal';

const PageWrapper = ({ children }) => {
  return (
    <div className="page-wrapper">
      {children}
      <AgeVerificationModal />
    </div>
  )
};

export const wrapPageElement = ({ element }) => {
  return (<PageWrapper>
    {element}
  </PageWrapper>
  );
};
