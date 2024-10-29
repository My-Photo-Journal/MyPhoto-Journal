// Sidebar.js
import React from 'react';
import { LucideUser, LucideList, LucideCalendarPlus, LucideLogOut, LucideSettings } from 'lucide-react';

const Sidebar = ({ setView }) => (
  <div className="w-64 bg-white shadow-md p-6">
    <div className="flex flex-col items-center mb-6">
      <h2 className="text-xl font-semibold">My Journal</h2>
    </div>
    <nav className="space-y-2">
      <button onClick={() => setView('home')} className="w-full flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg">
        <LucideUser className="mr-3" /> Home
      </button>
      
      <div className="relative">
        <button className="w-full flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg">
          <LucideUser className="mr-3" /> Account
        </button>
        <div className="space-y-2 mt-2 pl-6">
          <button onClick={() => setView('profile')} className="w-full text-gray-700 hover:bg-gray-100 rounded-lg">Profile</button>
          <button onClick={() => setView('settings')} className="w-full text-gray-700 hover:bg-gray-100 rounded-lg">Settings</button>
        </div>
      </div>

      <button onClick={() => setView('dashboard')} className="w-full flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg">
        <LucideList className="mr-3" /> Dashboard
      </button>

      <button onClick={() => setView('journal')} className="w-full flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg">
        <LucideCalendarPlus className="mr-3" /> Journal
      </button>

      <button onClick={() => setView('logout')} className="w-full flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg">
        <LucideLogOut className="mr-3" /> Logout
      </button>
    </nav>
  </div>
);

export default Sidebar;
