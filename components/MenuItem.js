import React from 'react';

const MenuItem = ({ name, price, image }) => {
  return (
    <div className="flex items-center gap-4 py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 px-2 rounded-lg transition-colors duration-200">
      {image && (
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
        />
      )}
      <div className="flex-1 min-w-0">
        <span className="block text-gray-800 font-medium text-lg truncate">{name}</span>
      </div>
      <span className="text-primary font-semibold text-lg">₹{price}</span>
    </div>
  );
};

export default MenuItem;
