import React, { useState } from 'react';
import { LucideList, LucideCalendarPlus, LucideLogOut, LucideMoon, LucideSun, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      className={`shadow-md p-2 transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'} ${isDarkTheme ? 'bg-gray-800 text-white border-r border-white' : 'bg-white text-gray-800'}`} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center p-2">
        <Camera className={`h-8 w-8 ${isDarkTheme ? 'text-yellow-500' : 'text-orange-500'}`} />
        {isOpen && (
          <Link 
            to="/" 
            className={`font-bold text-xl ${isDarkTheme ? 'text-white' : 'text-gray-800'}`} 
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Snap Diary
          </Link>
        )}
      </div>
      <nav className="space-y-2">
        <button 
          onClick={() => setView('dashboard')} 
          className={`w-full flex items-center p-3 transition duration-200 transform ${isDarkTheme ? 'text-white hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'} rounded-lg`}
        >
          <LucideList className={`mr-3 ${isDarkTheme ? 'text-white' : 'text-gray-700'} ${isOpen ? 'w-5 h-5' : 'w-6 h-6'}`} /> 
          {isOpen && <span>Dashboard</span>}
        </button>

        <button 
          onClick={() => setView('journal')} 
          className={`w-full flex items-center p-3 transition duration-200 transform ${isDarkTheme ? 'text-white hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'} rounded-lg`}
        >
          <LucideCalendarPlus className={`mr-3 ${isDarkTheme ? 'text-white' : 'text-gray-700'} ${isOpen ? 'w-5 h-5' : 'w-6 h-6'}`} /> 
          {isOpen && <span>Journal</span>}
        </button>

        <button 
          onClick={() => setView('logout')} 
          className={`w-full flex items-center p-3 transition duration-200 transform ${isDarkTheme ? 'text-white hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'} rounded-lg`}
        >
          <LucideLogOut className={`mr-3 ${isDarkTheme ? 'text-white' : 'text-gray-700'} ${isOpen ? 'w-5 h-5' : 'w-6 h-6'}`} /> 
          {isOpen && <span>Logout</span>}
        </button>
        
        <button 
          onClick={handleThemeToggle} 
          className={`w-full flex items-center p-3 transition duration-200 transform ${isDarkTheme ? 'text-white hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'} rounded-lg`}
        >
          {isDarkTheme ? <LucideSun className="mr-3 text-yellow-500" /> : <LucideMoon className="mr-3 text-gray-800" />}
          {isOpen && <span>{isDarkTheme ? 'Light Theme' : 'Dark Theme'}</span>}
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
