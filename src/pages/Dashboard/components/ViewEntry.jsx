import React from 'react';

const ViewEntry = ({ entry, onClose }) => (
  <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
    <div className="bg-white text-black rounded-lg p-6 max-w-lg w-full">
      <h2 className="text-2xl font-bold mb-4">{entry.title}</h2>
      <p><strong>Date:</strong> {entry.date}</p>
      <p><strong>Location:</strong> {entry.location}</p>
      <p><strong>Category:</strong> {entry.category}</p>
      <p><strong>Description:</strong> {entry.description}</p>

      {/* Images Section */}
      {entry.images && entry.images.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Images:</h3>
          <div className="grid grid-cols-2 gap-2">
            {entry.images.map((photoURL, index) => (
              <img
                key={index}
                src={photoURL}
                alt={`Entry Image ${index + 1}`}
                className="w-full h-32 object-cover rounded-md"
              />
            ))}
          </div>
        </div>
      )}

      <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Close</button>
    </div>
  </div>
);

export default ViewEntry;
