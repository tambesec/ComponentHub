import React from 'react';
import { Star, Heart, ShoppingCart, Eye } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  badges?: string[];
  inStock: boolean;
  onAddToCart?: (id: number) => void;
  onAddToWishlist?: (id: number) => void;
  onQuickView?: (id: number) => void;
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  rating,
  reviewCount,
  image,
  badges = [],
  inStock,
  onAddToCart,
  onAddToWishlist,
  onQuickView
}: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const discountPercentage = originalPrice 
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white rounded-lg border border-gray-100 p-4 hover:shadow-lg transition-all duration-300 group relative">
      {/* Product Image */}
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <img 
          src={image}
          alt={name}
          referrerPolicy="no-referrer"
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-2 left-2 bg-secondary text-white px-2 py-1 rounded text-xs font-bold">
            -{discountPercentage}%
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={() => onAddToWishlist?.(id)}
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 shadow-md"
            title="Thêm vào yêu thích"
          >
            <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
          </button>
          <button 
            onClick={() => onQuickView?.(id)}
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 shadow-md"
            title="Xem nhanh"
          >
            <Eye className="w-4 h-4 text-gray-600" />
          </button>
        </div>
        
        {/* Stock Status */}
        {!inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-bold">Hết hàng</span>
          </div>
        )}
      </div>
      
      {/* Product Info */}
      <div className="space-y-2">
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex text-yellow-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star} 
                className={`w-3 h-3 ${star <= rating ? 'fill-current' : ''}`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({reviewCount})</span>
        </div>
        
        {/* Product Name */}
        <h4 className="text-sm font-bold text-black line-clamp-2 hover:text-primary cursor-pointer">
          {name}
        </h4>
        
        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-secondary">
            {formatPrice(price)}
          </span>
          {originalPrice && (
            <span className="text-sm font-semibold text-gray-500 line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>
        
        {/* Badges */}
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {badges.map((badge, index) => (
              <span 
                key={index}
                className="text-xs font-medium text-primary bg-primary bg-opacity-10 px-2 py-1 rounded uppercase"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
        
        {/* Stock Status */}
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
          <span className="text-xs text-gray-600">
            {inStock ? 'Còn hàng' : 'Hết hàng'}
          </span>
        </div>
        
        {/* Add to Cart Button */}
        <button 
          onClick={() => onAddToCart?.(id)}
          disabled={!inStock}
          className="w-full bg-primary text-white py-2 px-4 rounded-lg text-sm font-bold uppercase hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
        >
          <ShoppingCart className="w-4 h-4" />
          {inStock ? 'Thêm vào giỏ' : 'Hết hàng'}
        </button>
      </div>
    </div>
  );
}
