import React, { useState, useEffect } from 'react';
import Sidebar from './Dashboard/components/Sidebar';
import Dashboard from './Dashboard';
import Journal from './Dashboard/components/Journal';
import AllEntries from './Dashboard/components/AllEntries';

const Overview = () => {
  const [view, setView] = useState('dashboard');
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    return localStorage.getItem('theme') === 'dark'; // Check localStorage for saved theme
  });

  useEffect(() => {
    // Apply the theme class to the body element on load
    document.body.classList.toggle('dark-theme', isDarkTheme);
    document.body.classList.toggle('light-theme', !isDarkTheme);
    // Save theme preference in localStorage
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  const recentEntries = [
    { id: 1, title: "Weekend Trip", date: "2024-10-25", isFavorite: true },
    { id: 2, title: "Family Dinner", date: "2024-10-24", isFavorite: false },
    { id: 3, title: "Beach Day", date: "2024-10-23", isFavorite: true }
  ];

  const entries = [
    { id: 1, image: "./src/assets/images/frame.jpg", title: "Weekend Trip", category: "Travel", location: "Beach" },
    { id: 2, image: "/path/to/image.jpg", title: "Family Dinner", category: "Food", location: "Home" },
    { id: 3, image: "/path/to/image.jpg", title: "Beach Day", category: "Recreation", location: "Beach" },
  ];

  return (
    <div className={`flex h-screen ${isDarkTheme ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <Sidebar setView={setView} isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      <div className="flex-1 overflow-y-auto">
        {view === 'dashboard' && <Dashboard setView={setView} recentEntries={recentEntries} isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />}
        {view === 'journal' && <Journal entries={entries} isDarkTheme={isDarkTheme} />} 
        {view === 'entries' && <AllEntries isDarkTheme={isDarkTheme} />} 
      </div>
    </div>
  );
};

export default Overview;