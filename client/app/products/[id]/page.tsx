'use client'

import { useState } from "react"
import {
  Star,
  Heart,
  ShoppingCart,
  Minus,
  Plus,
  Share2,
  Shield,
  Truck,
  RotateCcw,
  Phone,
} from "lucide-react"
import Header from "../../../src/components/Header"
import Footer from "../../../src/components/Footer"

export default function SingleProductPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState("Xanh dương")
  const [selectedStorage, setSelectedStorage] = useState("128GB")

  const product = {
    id: 1,
    name: "Macbook Pro 2021 M1 CHIP 8 Core CPU - 8GB RAM - 256GB SSD",
    price: 27990000,
    originalPrice: 31990000,
    rating: 4.8,
    reviews: 156,
    discount: 13,
    inStock: true,
    sku: "MBP-2021-M1-256",
    brand: "Apple",
    category: "Laptop",
    images: [
      "/macbook-pro-m1-1.jpg",
      "/macbook-pro-m1-2.jpg",
      "/macbook-pro-m1-3.jpg",
      "/macbook-pro-m1-4.jpg",
    ],
    colors: [
      { name: "Xanh dương", color: "bg-blue-600" },
      { name: "Xám", color: "bg-gray-600" },
      { name: "Bạc", color: "bg-gray-300" },
    ],
    storage: ["128GB", "256GB", "512GB", "1TB"],
    features: [
      "Chip M1 8-core CPU",
      "8GB Unified Memory",
      "256GB SSD Storage",
      "13.3-inch Retina Display",
      "Touch Bar và Touch ID",
      "Thời lượng pin lên đến 17 giờ",
    ],
  }

  const relatedProducts = [
    {
      id: 2,
      name: "iPad Pro 12.9 M1 WiFi 128GB",
      price: 27990000,
      originalPrice: 31990000,
      image: "/ipad-pro-m1.jpg",
      rating: 4.8,
      discount: 13,
    },
    {
      id: 3,
      name: "iPhone 14 Pro Max 128GB",
      price: 29990000,
      originalPrice: 34990000,
      image: "/iphone-14-pro-max.jpg",
      rating: 4.9,
      discount: 14,
    },
    {
      id: 4,
      name: "Samsung Galaxy Tab S8",
      price: 11750000,
      originalPrice: 13990000,
      image: "/samsung-tab-s8.jpg",
      rating: 4.6,
      discount: 16,
    },
    {
      id: 5,
      name: "MacBook Air M2 2022",
      price: 24990000,
      originalPrice: 29990000,
      image: "/macbook-air-m2.jpg",
      rating: 4.7,
      discount: 17,
    },
  ]

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="w-[1300px] mx-auto px-8 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>Trang chủ</span>
          <span>/</span>
          <span>Sản phẩm</span>
          <span>/</span>
          <span className="text-black font-medium">{product.name}</span>
        </div>
      </div>

      <div className="w-[1300px] mx-auto px-8 pb-16">
        <div className="bg-white rounded-lg p-8 mb-8 grid grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-[500px] object-cover rounded-lg"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index
                      ? "border-green-600"
                      : "border-gray-200"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                ({product.reviews} đánh giá)
              </span>
              <span className="text-sm text-gray-600">|</span>
              <span className="text-sm text-green-600">Còn hàng</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-green-600">
                {formatPrice(product.price)}
              </span>
              <span className="text-xl text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
              <span className="bg-red-500 text-white px-2 py-1 text-sm font-semibold rounded">
                -{product.discount}%
              </span>
            </div>

          </div>
        </div>

        {/* Related Products */}
        <div className="bg-white rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Sản phẩm liên quan
          </h2>
          <div className="grid grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <div
                key={p.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-48 object-cover"
                  />
                  {p.discount > 0 && (
                    <span className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">
                      -{p.discount}%
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {p.name}
                  </h3>
                  <span className="text-lg font-bold text-green-600">
                    {formatPrice(p.price)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
