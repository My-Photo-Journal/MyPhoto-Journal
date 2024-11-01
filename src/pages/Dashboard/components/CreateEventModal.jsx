// CreateEventModal.js
import React, { useState } from 'react';
import EventForm from './EventForm';

const CreateEventModal = ({ onSave }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center p-4 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Create New Event
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-lg max-w-md w-full"> {/* Set max width here */}
            <button onClick={() => setIsOpen(false)} className="text-gray-500 float-right">
              &times; {/* Close Icon */}
            </button>
            <EventForm onSave={(newEvent) => {
              onSave(newEvent);
              setIsOpen(false);
            }} />
          </div>
        </div>
      )}
    </>
  );
};

export default CreateEventModal;