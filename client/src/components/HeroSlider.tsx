"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, ShoppingCart } from "lucide-react"

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "Router Wifi 6 Cao Cấp",
      subtitle: "Tốc độ siêu nhanh",
      features: ["Wifi 6 AX3000", "Phủ sóng 300m²", "Bảo mật WPA3"],
      price: "2,890,000",
      originalPrice: "3,490,000",
      image: "/router-wifi6-tplink.jpg",
      bgColor: "from-green-600 to-green-800",
    },
    {
      id: 2,
      title: "Switch Gigabit 24 Port",
      subtitle: "Hiệu suất vượt trội",
      features: ["24 Port Gigabit", "Plug & Play", "Tiết kiệm năng lượng"],
      price: "4,590,000",
      originalPrice: "5,290,000",
      image: "/network-switch-24port.jpg",
      bgColor: "from-blue-600 to-blue-800",
    },
    {
      id: 3,
      title: "Camera IP 4K Ultra HD",
      subtitle: "An ninh tuyệt đối",
      features: ["Độ phân giải 4K", "Nhìn đêm AI", "Chống nước IP67"],
      price: "1,990,000",
      originalPrice: "2,490,000",
      image: "/ip-camera-4k.jpg",
      bgColor: "from-red-600 to-red-800",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <div className="w-full lg:w-[650px] h-[310px] bg-white rounded-lg overflow-hidden relative shadow-lg">
      <div className="w-full h-full relative">
        <div className={`absolute inset-0 bg-gradient-to-r ${currentSlideData.bgColor} opacity-90`}></div>
        <img
          src={currentSlideData.image || "/placeholder.svg"}
          alt={currentSlideData.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12 text-white">
          <div className="max-w-md">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{currentSlideData.title}</h2>
            <p className="text-lg font-light mb-4 opacity-90">{currentSlideData.subtitle}</p>

            <div className="space-y-2 mb-6">
              {currentSlideData.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Star className="w-3 h-3 fill-current" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-bold">{currentSlideData.price}₫</span>
              <span className="text-lg line-through opacity-60">{currentSlideData.originalPrice}₫</span>
              <span className="bg-secondary text-white px-2 py-1 rounded text-xs font-bold">SALE</span>
            </div>

            <button className="bg-white text-gray-800 px-6 py-3 rounded-lg text-sm font-bold uppercase hover:bg-gray-100 transition-colors flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              Mua ngay
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute bottom-4 right-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-xs text-white font-medium">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>
    </div>
  )
}
