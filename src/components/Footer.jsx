import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 text-white text-center py-4">
    <p>© {new Date().getFullYear()} MyPhoto Journal. All rights reserved.</p>
    <div className="flex justify-center space-x-4 mt-2">
      <a href="/about" className="text-gray-400 hover:text-white">About</a>
      <a href="/features" className="text-gray-400 hover:text-white">Features</a>
      <a href="/features" className="text-gray-400 hover:text-white">Contact</a>
    </div>
  </footer>
);

export default Footer;
