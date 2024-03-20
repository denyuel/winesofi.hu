import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white py-4 px-2">
        <div className="container mx-auto xl:px-4">
          <Header />
        </div>
      </header>
      <main className="flex-grow">
        <div className="mx-auto xl:px-4">
          {/* Main content here */}
          {children}
        </div>
      </main>
      <footer className="bg-gray_light py-4 px-2">
        <div className="container mx-auto xl:px-4">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default Layout;
