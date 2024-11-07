import React, { useState } from 'react';
import { LucidePlus, LucideList, LucideHeart } from 'lucide-react';
import CreateEventModal from './components/CreateEventModal';
import { useNavigate } from 'react-router-dom';
import EntryForm from './components/EntryForm';
import EntryModal from './components/EntryModal';

const Dashboard = ({ setView, recentEntries, isDarkTheme, setIsDarkTheme }) => {
  const navigate = useNavigate();
  const user = {
    name: "John Doe",
    profilePic: "/api/placeholder/150/150"
  };

  const favoriteEntries = recentEntries.filter(entry => entry.isFavorite);
  const [events, setEvents] = useState([]);
  const handleSaveEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const [isEntryFormOpen, setEntryFormOpen] = useState(false);

  return (
    <div className={`flex h-screen ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-8">
        {/* Welcome Message */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
          <p className="text-gray-600">What would you like to capture today?</p>
        </div>

        {/* Quick Access Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <button
            onClick={() => setEntryFormOpen(true)} // Open the EntryForm modal
            className="flex items-center p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            <LucidePlus className="mr-2" />
            Add New Entry
          </button>
          <CreateEventModal onSave={handleSaveEvent} isDarkTheme={isDarkTheme} />

          <button
            className="flex items-center justify-center p-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
            onClick={() => setView('entries')}
          >
            <LucideList className="mr-2" />
            View All Entries
          </button>
        </div>

        {/* Recent and Favorite Entries */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Recent Entries */}
          <div className={`p-6 rounded-lg shadow-md ${isDarkTheme ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
            <h2 className="text-xl font-semibold mb-4">Recent Entries</h2>
            <div className="space-y-4">
              {recentEntries.map(entry => (
                <div
                  key={entry.id}
                  className={`flex items-center justify-between p-3 rounded-lg ${isDarkTheme ? 'bg-gray-600 text-gray-300' : 'bg-gray-50 text-gray-700'}`}
                >
                  <div>
                    <h3 className="font-medium">{entry.title}</h3>
                    <p className={`${isDarkTheme ? 'text-gray-400' : 'text-gray-500'} text-sm`}>{entry.date}</p>
                  </div>
                  {entry.isFavorite && (
                    <LucideHeart className="text-red-500" size={20} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Favorite Entries */}
          <div className={`p-6 rounded-lg shadow-md ${isDarkTheme ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
            <h2 className="text-xl font-semibold mb-4">Favorite Entries</h2>
            <div className="space-y-4">
              {favoriteEntries.map(entry => (
                <div
                  key={entry.id}
                  className={`flex items-center justify-between p-3 rounded-lg ${isDarkTheme ? 'bg-gray-600 text-gray-300' : 'bg-gray-50 text-gray-700'}`}
                >
                  <div>
                    <h3 className="font-medium">{entry.title}</h3>
                    <p className={`${isDarkTheme ? 'text-gray-400' : 'text-gray-500'} text-sm`}>{entry.date}</p>
                  </div>
                  <LucideHeart className="text-red-500" size={20} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Event-Based Organization */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Your Events</h2>
          {events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {events.map((event) => (
                <div key={event.id} className="p-4 bg-white rounded shadow-md">
                  <h3 className="font-bold text-lg">{event.eventName}</h3>
                  <p className="text-gray-600">{event.eventDescription}</p>
                  <p className="text-sm text-gray-500">
                    {event.startDate} - {event.endDate}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No events created yet. Click "Create New Event" to get started.</p>
          )}
        </div>
      </div>

      {/* Modal for Entry Form */}
      <EntryModal isOpen={isEntryFormOpen} onClose={() => setEntryFormOpen(false)} isDarkTheme={isDarkTheme}>
        <EntryForm isDarkTheme={isDarkTheme} />
      </EntryModal>
    </div>
  );
};

export default Dashboard;