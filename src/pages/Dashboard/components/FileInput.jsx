import React, { useState } from 'react';

const FileInput = ({ onChange, multiple = false }) => {
  const [photoURLs, setPhotoURLs] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const fileURLs = files.map((file) => URL.createObjectURL(file));
    setPhotoURLs(fileURLs);
    onChange(e);
  };

  return (
    <div>
      <label className="block mb-2 text-sm text-gray-700">
        Upload Images (You can select multiple)
      </label>
      <input
        type="file"
        multiple={multiple}
        accept="image/*"
        onChange={handleFileChange}
        className="w-full p-2 mb-4 border rounded"
      />

      {/* Photo Preview Grid */}
      <div className="photo-grid grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
        {photoURLs.map((photoURL, index) => (
          <img
            key={index}
            src={photoURL}
            alt={`Preview ${index}`}
            className="w-full h-full object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default FileInput;