import React from 'react';

export default function CategorySection() {
  const categories = [
    { name: 'Laptops', image: 'https://dummyimage.com/113x60/f5f5f5/333333?text=Laptops' },
    { name: 'PC Gaming', image: 'https://dummyimage.com/113x60/f5f5f5/333333?text=PC+Gaming' },
    { name: 'Headphones', image: 'https://dummyimage.com/113x60/f5f5f5/333333?text=Headphones' },
    { name: 'Monitors', image: 'https://dummyimage.com/113x60/f5f5f5/333333?text=Monitors' }
  ];

  return (
    <div className="w-[642px] h-[227px] bg-white rounded-lg p-8">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-lg font-bold text-black uppercase">danh mục</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500 capitalize">xem tất cả</span>
          <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
            <path d="M4 2l4 4-4 4V2z"/>
          </svg>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="text-center">
            <div className="w-[113px] h-[60px] mb-2 rounded-lg overflow-hidden">
              <img 
                src={category.image} 
                alt={category.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-semibold text-black">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
