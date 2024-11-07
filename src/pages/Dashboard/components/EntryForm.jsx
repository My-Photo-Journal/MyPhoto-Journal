import React, { useState } from 'react'; 
import FileInput from './FileInput';

const EntryForm = ({ isDarkTheme }) => { // Accept isDarkTheme as a prop
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
    console.log('Entry Submitted:', entryData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Add a New Entry</h2>

      <input
        type="text"
        placeholder="Title"
        className={`w-full p-2 border rounded ${isDarkTheme ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-black border-gray-300'}`}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Describe what the image stands for..."
        className={`w-full p-2 border rounded ${isDarkTheme ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-black border-gray-300'}`}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Location"
        className={`w-full p-2 border rounded ${isDarkTheme ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-black border-gray-300'}`}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <input
        type="text"
        placeholder="Category"
        className={`w-full p-2 border rounded ${isDarkTheme ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-black border-gray-300'}`}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        type="date"
        className={`w-full p-2 border rounded ${isDarkTheme ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-black border-gray-300'}`}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <FileInput onChange={handleFileChange} multiple={true} />

      <button
        type="submit"
        className={`mt-4 px-4 py-2 rounded ${isDarkTheme ? 'bg-blue-700 text-white hover:bg-blue-800' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
      >
        Submit
      </button>
    </form>
  );
};

export default EntryForm;
