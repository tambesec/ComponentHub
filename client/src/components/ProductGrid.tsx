import React from 'react';

export default function ProductGrid() {
  const productSections = [
    {
      title: 'top cellphones & tablets',
      categories: [
        { name: 'iPhone (iOS)', items: '74 Items' },
        { name: 'Android', items: '35 Items' },
        { name: '5G Support', items: '12 Items' },
        { name: 'Gaming', items: '9 Items' },
        { name: 'Xiaomi', items: '52 Items' },
        { name: 'Accessories', items: '29 Items' }
      ]
    },
    {
      title: 'Best Laptops & Computers',
      categories: [
        { name: 'Macbook', items: '74 Items' },
        { name: 'Gaming PC', items: '5 Items' },
        { name: 'Laptop Office', items: '22 Items' },
        { name: 'Laptop 15\'\'', items: '55 Items' },
        { name: 'M1 2023', items: '32 Items' },
        { name: 'Secondhand', items: '16 Items' }
      ]
    }
  ];

  return (
    <div className="w-[1300px] mx-auto mt-4 space-y-4">
      {productSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="bg-white rounded-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-black uppercase">{section.title}</h3>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 capitalize">View All</span>
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                <path d="M4 2l4 4-4 4V2z"/>
              </svg>
            </div>
          </div>
          
          <div className="flex gap-8">
            {/* Featured Banner */}
            <div className="w-[605px] h-[200px] bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center px-8">
                <div className="text-white">
                  <h4 className="text-2xl font-medium uppercase mb-2">
                    {sectionIndex === 0 ? 'redmi note 12 Pro+ 5g' : 'Mobok 2 supercharged by M2'}
                  </h4>
                  <p className="text-sm text-gray-300 mb-4">
                    {sectionIndex === 0 ? 'Rise to the challenge' : 'Start from $1,199'}
                  </p>
                  <button className="bg-gray-800 text-white px-6 py-2 rounded-lg text-xs font-medium uppercase hover:bg-gray-700">
                    shop now
                  </button>
                </div>
              </div>
            </div>
            
            {/* Categories Grid */}
            <div className="flex-1 grid grid-cols-3 gap-6">
              {section.categories.map((category, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h5 className="text-sm font-bold text-black">{category.name}</h5>
                  <span className="text-xs text-gray-500">{category.items}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
