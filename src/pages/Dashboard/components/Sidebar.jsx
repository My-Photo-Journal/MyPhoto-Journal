import React, { useState } from 'react';
import { LucideList, LucideCalendarPlus, LucideLogOut, LucideMoon, LucideSun } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/images/logo-trans.png'; // Ensure to replace with the actual path to your logo

const Sidebar = ({ setView, isDarkTheme, setIsDarkTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleThemeToggle = () => {
    setIsDarkTheme(prev => !prev);
  };

  return (
    <div 
      className={`bg-white shadow-md p-2 transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'} ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col items-center mb-6">
        <Link to="/" onClick={() => setView('home')}>
          <img src={logo} alt="Logo" className={`h-12 mb-2 transition-transform duration-300 ${isOpen ? 'scale-100' : 'scale-75'}`} />
        </Link>
      </div>
      <nav className="space-y-2">
        <button 
          onClick={() => setView('dashboard')} 
          className={`w-full flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition duration-200 transform ${isOpen ? 'hover:scale-105' : 'justify-center'}`}
        >
          <LucideList className="mr-3" /> 
          {isOpen && <span>Dashboard</span>}
        </button>

        <button 
          onClick={() => setView('journal')} 
          className={`w-full flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition duration-200 transform ${isOpen ? 'hover:scale-105' : 'justify-center'}`}
        >
          <LucideCalendarPlus className="mr-3" /> 
          {isOpen && <span>Journal</span>}
        </button>

        <button 
          onClick={() => setView('logout')} 
          className={`w-full flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition duration-200 transform ${isOpen ? 'hover:scale-105' : 'justify-center'}`}
        >
          <LucideLogOut className="mr-3" /> 
          {isOpen && <span>Logout</span>}
        </button>
        
        <div className="flex items-center mt-4">
          <input 
            type="checkbox" 
            id="themeToggle" 
            checked={isDarkTheme} 
            onChange={handleThemeToggle} 
            className="mr-2"
          />
          <label htmlFor="themeToggle" className="flex items-center">
            {isDarkTheme ? <LucideSun className="text-yellow-500" /> : <LucideMoon className="text-gray-800" />}
            <span className="ml-2">{isDarkTheme ? 'Light Theme' : 'Dark Theme'}</span>
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;