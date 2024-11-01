// EventForm.js
import React, { useState } from 'react';

const EventForm = ({ onSave }) => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [eventPhoto, setEventPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: Date.now(),
      eventName,
      eventDescription,
      startDate,
      endDate,
      eventPhoto,
      entries: []
    };
    onSave(newEvent);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Create New Event</h2>
      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <textarea
        placeholder="Event Description"
        value={eventDescription}
        onChange={(e) => setEventDescription(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <input
        type="file"
        onChange={(e) => setEventPhoto(e.target.files[0])}
        className="w-full p-2 mb-4 border rounded"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Save Event
      </button>
    </form>
  );
};

export default EventForm;