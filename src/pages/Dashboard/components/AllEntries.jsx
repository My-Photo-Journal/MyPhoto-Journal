import React, { useState } from 'react';
import EntryForm from './EntryForm'; // import EntryForm for editing
import ViewEntry from './ViewEntry'; // import ViewEntry for viewing details

const AllEntries = ({ isDarkTheme }) => {
  const [entries, setEntries] = useState([
    { id: 1, title: "Weekend Trip", date: "2024-10-25", location: "Paris", category: "Vacation" },
    { id: 2, title: "Family Dinner", date: "2024-10-24", location: "Home", category: "Family" },
    { id: 3, title: "Beach Day", date: "2024-10-23", location: "Miami", category: "Outing" },
  ]);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isViewing, setIsViewing] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Handle View
  const handleView = (entry) => {
    setSelectedEntry(entry);
    setIsViewing(true);
  };

  // Handle Edit
  const handleEdit = (entry) => {
    setSelectedEntry(entry);
    setIsEditing(true);
  };

  // Handle Delete
  const handleDelete = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  // Handle Save after Editing
  const handleSaveEdit = (updatedEntry) => {
    setEntries(entries.map((entry) => (entry.id === updatedEntry.id ? updatedEntry : entry)));
    setIsEditing(false);
    setSelectedEntry(null);
  };

  return (
    <div className={`p-8 ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} min-h-screen`}>
      <h2 className="text-3xl font-bold mb-6">All Entries</h2>
      <div className={`shadow-md rounded-lg p-6 ${isDarkTheme ? 'bg-gray-800' : 'bg-white'}`}>
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
                  <button className="text-blue-500 hover:underline mr-2" onClick={() => handleView(entry)}>View</button>
                  <button className="text-yellow-500 hover:underline mr-2" onClick={() => handleEdit(entry)}>Edit</button>
                  <button className="text-red-500 hover:underline" onClick={() => handleDelete(entry.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View Entry Modal */}
      {isViewing && selectedEntry && (
        <ViewEntry entry={selectedEntry} onClose={() => setIsViewing(false)} />
      )}

      {/* Edit Entry Modal */}
      {isEditing && selectedEntry && (
        <EntryForm
          isDarkTheme={isDarkTheme}
          entry={selectedEntry}
          onSave={handleSaveEdit}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default AllEntries;
