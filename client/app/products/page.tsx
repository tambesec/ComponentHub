'use client'

import { useState } from 'react'
import { Grid, List, Star, Heart, ShoppingCart } from 'lucide-react'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('default')
  const [priceRange, setPriceRange] = useState([0, 10000000])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const products = [
    {
      id: 1,
      name: 'OPPO Smart Phone OPPO A78',
      price: 5790000,
      originalPrice: 6490000,
      image: '/oppo-a78.jpg',
      rating: 4.5,
      reviews: 128,
      discount: 11,
      isNew: false,
      category: 'Smartphone',
    },
    {
      id: 2,
      name: 'iPad Pro 12.9 M1 WiFi 128GB',
      price: 27990000,
      originalPrice: 31990000,
      image: '/ipad-pro-m1.jpg',
      rating: 4.8,
      reviews: 89,
      discount: 13,
      isNew: true,
      category: 'Tablet',
    },
    {
      id: 3,
      name: 'Samsung Galaxy Tab S8 5 inch, White',
      price: 11750000,
      originalPrice: 13990000,
      image: '/samsung-tab-s8.jpg',
      rating: 4.6,
      reviews: 156,
      discount: 16,
      isNew: false,
      category: 'Tablet',
    },
  ]

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="w-[1300px] mx-auto px-8 pb-16">
        {/* Top bar */}
        <div className="bg-white rounded-lg p-6 mb-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Sắp xếp theo:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-green-500"
            >
              <option value="default">Mặc định</option>
              <option value="price-low">Giá thấp đến cao</option>
              <option value="price-high">Giá cao đến thấp</option>
              <option value="newest">Mới nhất</option>
              <option value="popular">Phổ biến nhất</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${
                viewMode === 'grid'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${
                viewMode === 'list'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Products */}
        <div
          className={`grid gap-6 ${
            viewMode === 'grid' ? 'grid-cols-3' : 'grid-cols-1'
          }`}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                {product.isNew && (
                  <span className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 text-xs font-semibold rounded">
                    MỚI
                  </span>
                )}
                {product.discount > 0 && (
                  <span className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">
                    -{product.discount}%
                  </span>
                )}
                <div className="absolute top-3 right-3 mt-8">
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    ({product.reviews})
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-bold text-green-600">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>

                <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Thêm vào giỏ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
