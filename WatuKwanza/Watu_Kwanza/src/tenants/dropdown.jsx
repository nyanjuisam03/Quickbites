import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mx-4 bg-indigo-700 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
      >
        {label}
      </button>

      {isOpen && (
        <div className="absolute mt-2 space-y-2 bg-white border border-gray-300 rounded shadow-lg">
          {options.map((option, index) => (
            <Link
              key={index}
              to={option.url}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              {option.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
