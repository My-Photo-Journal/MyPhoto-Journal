// AllEntries.js
import React, { useState } from 'react';

const AllEntries = () => {
  const [entries, setEntries] = useState([
    { id: 1, title: "Weekend Trip", date: "2024-10-25", location: "Paris", category: "Vacation" },
    { id: 2, title: "Family Dinner", date: "2024-10-24", location: "Home", category: "Family" },
    { id: 3, title: "Beach Day", date: "2024-10-23", location: "Miami", category: "Outing" },
    // Add more sample entries as needed
  ]);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">All Entries</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left p-3 font-semibold">Title</th>
              <th className="text-left p-3 font-semibold">Date</th>
              <th className="text-left p-3 font-semibold">Location</th>
              <th className="text-left p-3 font-semibold">Category</th>
              <th className="text-left p-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {entries.map(entry => (
              <tr key={entry.id} className="border-t">
                <td className="p-3">{entry.title}</td>
                <td className="p-3">{entry.date}</td>
                <td className="p-3">{entry.location}</td>
                <td className="p-3">{entry.category}</td>
                <td className="p-3">
                  <button className="text-blue-500 hover:underline mr-2">View</button>
                  <button className="text-yellow-500 hover:underline mr-2">Edit</button>
                  <button className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEntries;
