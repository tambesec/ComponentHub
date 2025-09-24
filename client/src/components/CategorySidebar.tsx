import React from 'react';
import { Router, Wifi, Network, Usb, Settings, TestTube, Globe, CreditCard, Repeat, Radio, Wrench, MoreHorizontal } from 'lucide-react';

export default function CategorySidebar() {
  const categories = [
    { name: 'Router', icon: Router, count: 45 },
    { name: 'Switch', icon: Network, count: 32 },
    { name: 'Kích sóng wifi', icon: Wifi, count: 28 },
    { name: 'Hub-switch', icon: Network, count: 15 },
    { name: 'Card mạng', icon: CreditCard, count: 22 },
    { name: 'USB wifi', icon: Usb, count: 18 },
    { name: 'Bộ chuyển', icon: Repeat, count: 12 },
    { name: 'Bộ phát sóng', icon: Radio, count: 8 },
    { name: 'Máy test', icon: TestTube, count: 6 },
    { name: 'Bộ định tuyến', icon: Globe, count: 25 },
    { name: 'Camera IP', icon: Settings, count: 35 },
    { name: 'Phụ kiện khác', icon: MoreHorizontal, count: 42 }
  ];

  return (
    <aside className="w-full lg:w-[309px] bg-white rounded-lg p-6 shadow-sm">
      <div className="mb-6">
        <div className="bg-gradient-to-r from-secondary to-red-600 text-white px-3 py-2 rounded-lg inline-block">
          <span className="text-sm font-bold uppercase">Giảm giá lên đến 40%</span>
        </div>
      </div>
      
      <nav className="space-y-1">
        {categories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <button 
              key={index} 
              className="w-full flex items-center justify-between gap-3 p-3 rounded-lg hover:bg-gray-50 hover:text-primary cursor-pointer transition-all group"
            >
              <div className="flex items-center gap-3">
                <IconComponent className="w-4 h-4 text-gray-600 group-hover:text-primary" />
                <span className="text-sm font-semibold text-black capitalize group-hover:text-primary">
                  {category.name}
                </span>
              </div>
              <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </button>
          );
        })}
      </nav>
      
      {/* Special Offer Banner */}
      <div className="mt-6 bg-gradient-to-br from-primary to-green-600 rounded-lg p-4 text-white">
        <h4 className="text-sm font-bold mb-2">Ưu đãi đặc biệt!</h4>
        <p className="text-xs mb-3">Mua 2 tặng 1 cho tất cả sản phẩm Router</p>
        <button className="bg-white text-primary px-3 py-1 rounded text-xs font-bold hover:bg-gray-100 transition-colors">
          Xem ngay
        </button>
      </div>
    </aside>
  );
}
