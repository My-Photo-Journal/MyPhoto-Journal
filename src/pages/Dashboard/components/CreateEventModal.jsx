// CreateEventModal.js
import React, { useState } from 'react';
import EventForm from './EventForm';

const CreateEventModal = ({ onSave, isDarkTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`flex items-center justify-center p-4 rounded-lg ${isDarkTheme ? 'bg-green-600 hover:bg-green-500 text-white' : 'bg-green-500 hover:bg-green-600 text-white'}`}
      >
        Create New Event
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className={`p-8 rounded shadow-lg max-w-md w-full ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 float-right">
              &times;
            </button>
            <EventForm onSave={(newEvent) => {
              onSave(newEvent);
              setIsOpen(false);
            }} isDarkTheme={isDarkTheme} />
          </div>
        </div>
      )}
    </>
  );
};


export default CreateEventModal;