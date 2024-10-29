// Journal.js
import React from 'react';
import { LucidePlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Journal = ({ entries }) => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-8">Journal Entries</h1>
    <Link to="/entryform">
    <button className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center">
      <LucidePlus className="mr-2" /> Add Entry
    </button>
    </Link>
    <table className="w-full bg-white rounded-lg shadow-md">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-4 text-left">Image</th>
          <th className="p-4 text-left">Title</th>
          <th className="p-4 text-left">Category</th>
          <th className="p-4 text-left">Location</th>
          <th className="p-4 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {entries.map(entry => (
          <tr key={entry.id} className="border-t">
            <td className="p-4"><img src={entry.image} alt={entry.title} className="w-12 h-12 rounded-md" /></td>
            <td className="p-4">{entry.title}</td>
            <td className="p-4">{entry.category}</td>
            <td className="p-4">{entry.location}</td>
            <td className="p-4">
              <button className="text-blue-500 hover:underline mr-2">Edit</button>
              <button className="text-red-500 hover:underline">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Journal;
