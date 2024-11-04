import React from 'react';

const EntryModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
     <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative max-h-[80vh] overflow-y-auto">
  <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>
    &times;
  </button>
  {children}
</div>

    </div>
  );
};

export default EntryModal;