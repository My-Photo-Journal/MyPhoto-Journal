import React, { useState } from 'react';
import Sidebar from './Dashboard/components/Sidebar';
import Dashboard from './Dashboard';
import Journal from './Dashboard/components/Journal';


const Overview = () => {
  const [view, setView] = useState('dashboard');
  
  const recentEntries = [
    { id: 1, title: "Weekend Trip", date: "2024-10-25", isFavorite: true },
    { id: 2, title: "Family Dinner", date: "2024-10-24", isFavorite: false },
    { id: 3, title: "Beach Day", date: "2024-10-23", isFavorite: true }
  ];

  const entries = [
    { id: 1, image: "./src/assets/images/frame.jpg", title: "Weekend Trip", category: "Travel", location: "Beach" },
    { id: 2, image: "/path/to/image.jpg", title: "Family Dinner", category: "Food", location: "Home" },
    { id: 3, image: "/path/to/image.jpg", title: "Beach Day", category: "Recreation", location: "Beach" }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar setView={setView} />
      <div className="flex-1 overflow-y-auto">
        {view === 'dashboard' && <Dashboard recentEntries={recentEntries} />}
        {view === 'journal' && <Journal entries={entries} />}
        {/* Add other views like profile, settings, and home as needed */}
      </div>
    </div>
  );
};

export default Overview;
