import React from 'react';

const EntryModal = ({ isOpen, onClose, children, isDarkTheme }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className={`rounded-lg shadow-lg p-6 max-w-md w-full relative max-h-[80vh] overflow-y-auto ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        <button className="absolute top-2 right-2" onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
};

export default EntryModal;