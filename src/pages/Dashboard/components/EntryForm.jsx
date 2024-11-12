import React, { useState } from 'react';
import FileInput from './FileInput';
import Swal from 'sweetalert2';
import { apiPostPhotos } from '../../../services/auth';


const EntryForm = ({ entry = {}, isDarkTheme, onSave, onCancel }) => {
  const [title, setTitle] = useState(entry.title || '');
  const [description, setDescription] = useState(entry.description || '');
  const [location, setLocation] = useState(entry.location || '');
  const [category, setCategory] = useState(entry.category || '');
  const [date, setDate] = useState(entry.date || '');
  const [photos, setPhotos] = useState(entry.photos || []);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setPhotos(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('location', location);
    formData.append('category', category);
    formData.append('date', date);
    photos.forEach((photo, index) => formData.append(`images[${index}]`, photo));

    try {
      const response = await apiPostPhotos(formData);
      console.log(response.data);

      Swal.fire({
        icon: 'success',
        title: 'Entry Saved!',
        text: 'Your entry has been successfully saved.',
        showConfirmButton: false,
        timer: 2000,
      });

      onSave(response.data);
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to save the entry. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">{entry.id ? 'Edit Entry' : 'Add a New Entry'}</h2>
      <input
        id="title"
        name="title"
        type="text"
        placeholder="Title"
        className={`w-full p-2 border rounded ${isDarkTheme ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-black border-gray-300'}`}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        id="description"
        name="description"
        placeholder="Describe what the image stands for..."
        className={`w-full p-2 border rounded ${isDarkTheme ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-black border-gray-300'}`}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        id="location"
        name="location"
        type="text"
        placeholder="Location"
        className={`w-full p-2 border rounded ${isDarkTheme ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-black border-gray-300'}`}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        id="category"
        name="category"
        type="text"
        placeholder="Category"
        className={`w-full p-2 border rounded ${isDarkTheme ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-black border-gray-300'}`}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        id="date"
        name="date"
        type="date"
        className={`w-full p-2 border rounded ${isDarkTheme ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-black border-gray-300'}`}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <FileInput onChange={handleFileChange} multiple={true} />

      <button
        type="submit"
        className={`mt-4 px-4 py-2 rounded ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
        disabled={isLoading}
      >
        {isLoading ? 'Processing...' : 'Save Entry'}
      </button>
      {onCancel && (
        <button onClick={onCancel} className="mt-4 ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
          Cancel
        </button>
      )}
    </form>
  );
};

export default EntryForm;
