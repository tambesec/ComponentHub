import React from 'react';

export default function NewsletterSection() {
  return (
    <div className="w-[1300px] h-[107px] mx-auto mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      <div className="relative z-10 flex items-center gap-8 text-white">
        <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
          </svg>
        </div>
        
        <div>
          <span className="text-lg font-normal">Thành viên</span>
          <span className="text-lg font-normal text-accent uppercase ml-2">FREE SHIPPING*</span>
          <span className="text-lg font-normal ml-2">đặt hàng không giới hạn!</span>
        </div>
        
        <span className="text-sm font-normal underline">Try free 30-days trial!</span>
      </div>
    </div>
  );
}
