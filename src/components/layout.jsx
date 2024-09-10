import React from 'react';
import Header from './header';
import Footer from './footer';
import { LanguageProvider } from '../context/LanguageContext';

const Layout = ({ children }) => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <header className="bg-white py-4 px-2">
          <div className="container mx-auto lg:px-4">
            <Header />
          </div>
        </header>
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-gray_light py-4 px-2">
          <div className="container mx-auto lg:px-4">
            <Footer />
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
};

export default Layout;
