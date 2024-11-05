import React, { useState } from 'react';
import FileInput from './FileInput'; // Adjust the import path as necessary

const EntryForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [photos, setPhotos] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setPhotos(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const entryData = {
      title,
      description,
      location,
      category,
      date,
      photos,
    };
    // Process entryData as needed
    console.log('Entry Submitted:', entryData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Add a New Entry</h2>

      {/* Title */}
      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 border border-gray-300 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      {/* Description */}
      <textarea
        placeholder="Describe what the image stands for..."
        className="w-full p-2 border border-gray-300 rounded"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      {/* Location */}
      <input
        type="text"
        placeholder="Location"
        className="w-full p-2 border border-gray-300 rounded"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      {/* Category */}
      <input
        type="text"
        placeholder="Category"
        className="w-full p-2 border border-gray-300 rounded"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      {/* Date */}
      <input
        type="date"
        className="w-full p-2 border border-gray-300 rounded"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      {/* Image Upload */}
      <FileInput onChange={handleFileChange} multiple={true} />

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default EntryForm;