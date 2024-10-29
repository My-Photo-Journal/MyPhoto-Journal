import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white shadow-md py-4 px-8 fixed top-0 w-full flex justify-between items-center z-10">
    <Link to="/" className="text-2xl font-bold text-blue-600">MyPhoto Journal</Link>
    <div className="flex space-x-6">
      <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
      <Link to="/features" className="text-gray-600 hover:text-blue-600">Features</Link>
      <Link to="/signup" className="text-gray-600 hover:text-blue-600">Sign Up</Link>
      <Link to="/login" className="text-gray-600 hover:text-blue-600">Login</Link>
    </div>
  </nav>
);

export default Navbar;
