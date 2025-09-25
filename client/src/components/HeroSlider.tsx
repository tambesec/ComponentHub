"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, ShoppingCart } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

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
    <motion.div
      className="w-full h-[250px] sm:h-[280px] lg:h-[310px] bg-white rounded-lg overflow-hidden relative shadow-lg"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full h-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${currentSlideData.bgColor} opacity-90`}></div>
            <img
              src={currentSlideData.image || "/placeholder.svg"}
              alt={currentSlideData.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-12 text-white">
          <div className="max-w-xs sm:max-w-sm lg:max-w-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.h2
                  className="text-lg sm:text-xl lg:text-3xl font-bold mb-1 sm:mb-2 leading-tight"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {currentSlideData.title}
                </motion.h2>
                <motion.p
                  className="text-sm sm:text-base lg:text-lg font-light mb-3 sm:mb-4 opacity-90"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {currentSlideData.subtitle}
                </motion.p>

                <motion.div
                  className="space-y-1 sm:space-y-2 mb-4 sm:mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {currentSlideData.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    >
                      <Star className="w-2 h-2 sm:w-3 sm:h-3 fill-current flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold">{currentSlideData.price}₫</span>
                  <span className="text-sm sm:text-base lg:text-lg line-through opacity-60">
                    {currentSlideData.originalPrice}₫
                  </span>
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold self-start">SALE</span>
                </motion.div>

                <motion.button
                  className="bg-white text-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-bold uppercase hover:bg-gray-100 transition-all flex items-center gap-2 hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
                  Mua ngay
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Arrows - Hidden on mobile */}
        <motion.button
          onClick={prevSlide}
          className="hidden sm:flex absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full items-center justify-center transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
        </motion.button>

        <motion.button
          onClick={nextSlide}
          className="hidden sm:flex absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full items-center justify-center transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
        </motion.button>

        {/* Pagination Dots */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <motion.div
          className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="text-xs text-white font-medium">
            {currentSlide + 1} / {slides.length}
          </span>
        </motion.div>
      </div>
    </motion.div>
  )
}
