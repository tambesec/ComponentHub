"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import ProductCard from "./ProductCard"

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("bestseller")

  const tabs = [
    { id: "bestseller", label: "Bán chạy" },
    { id: "new", label: "Mới" },
    { id: "popular", label: "Phổ biến" },
  ]

  const products = [
    {
      id: 1,
      name: "Router Wifi 6 TP-Link Archer AX73 AX5400",
      price: 2890000,
      originalPrice: 3490000,
      rating: 5,
      reviewCount: 152,
      image: "/router-wifi6-tplink.jpg",
      badges: ["Miễn phí vận chuyển"],
      inStock: true,
    },
    {
      id: 2,
      name: "Switch Gigabit 24 Port TP-Link TL-SG1024D",
      price: 4590000,
      originalPrice: 5290000,
      rating: 4,
      reviewCount: 89,
      image: "/network-switch-24port.jpg",
      badges: ["Miễn phí vận chuyển", "Quà tặng"],
      inStock: true,
    },
    {
      id: 3,
      name: "Camera IP 4K Hikvision DS-2CD2143G2-I",
      price: 1990000,
      originalPrice: 2490000,
      rating: 5,
      reviewCount: 203,
      image: "/ip-camera-4k.jpg",
      badges: ["Miễn phí vận chuyển"],
      inStock: true,
    },
    {
      id: 4,
      name: "Kích sóng Wifi Mesh TP-Link Deco M4",
      price: 1290000,
      originalPrice: 1590000,
      rating: 4,
      reviewCount: 76,
      image: "/mesh-wifi-system.jpg",
      badges: ["Quà tặng"],
      inStock: true,
    },
    {
      id: 5,
      name: "USB Wifi AC1300 TP-Link Archer T4U Plus",
      price: 590000,
      originalPrice: 790000,
      rating: 4,
      reviewCount: 134,
      image: "/usb-wifi-adapter.jpg",
      badges: ["Miễn phí vận chuyển"],
      inStock: false,
    },
  ]

  const handleAddToCart = (id: number) => {
    console.log("Add to cart:", id)
    // Implement add to cart logic
  }

  const handleAddToWishlist = (id: number) => {
    console.log("Add to wishlist:", id)
    // Implement add to wishlist logic
  }

  const handleQuickView = (id: number) => {
    console.log("Quick view:", id)
    // Implement quick view logic
  }

  return (
    <section className="w-full max-w-[1300px] mx-auto mt-8 bg-white rounded-lg p-6 md:p-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <div className="flex flex-wrap items-center gap-4 md:gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-lg font-semibold uppercase transition-colors ${
                activeTab === tab.id ? "text-black border-b-2 border-primary" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors">
          <span className="capitalize">Xem tất cả</span>
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist}
            onQuickView={handleQuickView}
          />
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-colors">
          Xem thêm sản phẩm
        </button>
      </div>
    </section>
  )
}
