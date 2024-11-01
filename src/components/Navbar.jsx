import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/images/logo-trans.png'; // Update the path to your logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4 px-8 fixed top-0 w-full flex justify-between items-center z-10">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src={logo} alt="MyPhoto Journal Logo" className="h-10 w-auto" />
      </Link>
      
      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center" onClick={toggleMenu}>
        <button className="focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <div className={`md:flex md:space-x-6 ${isOpen ? 'block' : 'hidden'} absolute md:static bg-white w-full md:w-auto top-16 left-0 md:top-auto md:left-auto`}>
        <div className="flex flex-col md:flex-row md:items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
          <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
          <Link to="/features" className="text-gray-600 hover:text-blue-600">Features</Link>
          <Link to="/signup" className="text-gray-600 hover:text-blue-600">Sign Up</Link>
          <Link to="/login" className="text-gray-600 hover:text-blue-600">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;