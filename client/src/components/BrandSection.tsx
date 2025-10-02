import React from 'react';

export default function BrandSection() {
  const brands = [
    'https://dummyimage.com/97x35/f5f5f5/333333?text=Brand+1',
    'https://dummyimage.com/79x29/f5f5f5/333333?text=Brand+2',
    'https://dummyimage.com/72x33/f5f5f5/333333?text=Brand+3',
    'https://dummyimage.com/90x25/f5f5f5/333333?text=Brand+4',
    'https://dummyimage.com/58x15/f5f5f5/333333?text=Brand+5',
    'https://dummyimage.com/92x13/f5f5f5/333333?text=Brand+6',
    'https://dummyimage.com/69x24/f5f5f5/333333?text=Brand+7',
    'https://dummyimage.com/87x34/f5f5f5/333333?text=Brand+8',
    'https://dummyimage.com/81x31/f5f5f5/333333?text=Brand+9',
    'https://dummyimage.com/60x23/f5f5f5/333333?text=Brand+10'
  ];

  return (
    <div className="w-[642px] h-[227px] bg-white rounded-lg p-8">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-lg font-bold text-black uppercase">nhãn hàng</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500 capitalize">xem tất cả</span>
          <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
            <path d="M4 2l4 4-4 4V2z"/>
          </svg>
        </div>
      </div>
      
      <div className="grid grid-cols-5 gap-4 items-center">
        {brands.map((brand, index) => (
          <div key={index} className="flex items-center justify-center h-12">
            <img 
              src={brand} 
              alt={`Brand ${index + 1}`}
              referrerPolicy="no-referrer"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
