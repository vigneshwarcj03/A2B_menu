import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ category, items }) => {
  return (
    <div className="mb-12 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
        <h2 className="text-2xl font-bold text-secondary flex items-center gap-2">
          {category}
        </h2>
      </div>
      <div className="p-4 md:p-6 space-y-1">
        {items.map((item, index) => (
          <MenuItem
            key={index}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
