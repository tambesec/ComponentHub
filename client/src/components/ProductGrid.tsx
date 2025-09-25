"use client"

import { ChevronRight, Wifi, Network, Camera, Radio, Usb, Package, Video, RotateCcw, Monitor } from "lucide-react"
import { motion } from "framer-motion"

export default function ProductGrid() {
  const productSections = [
    {
      title: "top cellphones & tablets",
      categories: [
        { name: "iPhone (iOS)", items: "74 Items" },
        { name: "Android", items: "35 Items" },
        { name: "5G Support", items: "12 Items" },
        { name: "Gaming", items: "9 Items" },
        { name: "Xiaomi", items: "52 Items" },
        { name: "Accessories", items: "29 Items" },
      ],
    },
    {
      title: "Best Laptops & Computers",
      categories: [
        { name: "Macbook", items: "74 Items" },
        { name: "Gaming PC", items: "5 Items" },
        { name: "Laptop Office", items: "22 Items" },
        { name: "Laptop 15''", items: "55 Items" },
        { name: "M1 2023", items: "32 Items" },
        { name: "Secondhand", items: "16 Items" },
      ],
    },
    {
      title: "Thiết bị mạng hàng đầu",
      categories: [
        { name: "Router Wifi 6", items: "24 Sản phẩm" },
        { name: "Switch Gigabit", items: "15 Sản phẩm" },
        { name: "Camera IP 4K", items: "32 Sản phẩm" },
        { name: "Mesh Wifi", items: "18 Sản phẩm" },
        { name: "USB Wifi", items: "12 Sản phẩm" },
        { name: "Phụ kiện", items: "29 Sản phẩm" },
      ],
      bannerImage: "/tp-link-ax73-wifi-6-router-black-modern-design.jpg",
      bannerTitle: "Router Wifi 6 TP-Link AX73",
      bannerSubtitle: "Tốc độ siêu nhanh AX5400",
    },
    {
      title: "Camera an ninh tốt nhất",
      categories: [
        { name: "Camera 4K", items: "18 Sản phẩm" },
        { name: "Camera IP", items: "25 Sản phẩm" },
        { name: "Camera Wifi", items: "22 Sản phẩm" },
        { name: "Camera PTZ", items: "8 Sản phẩm" },
        { name: "NVR 4K", items: "12 Sản phẩm" },
        { name: "Phụ kiện", items: "16 Sản phẩm" },
      ],
      bannerImage: "/hikvision-white-dome-security-camera-with-infrared.jpg",
      bannerTitle: "Camera IP 4K Hikvision",
      bannerSubtitle: "An ninh tuyệt đối cho gia đình",
    },
  ]

  return (
    <div className="w-full max-w-[1300px] mx-auto mt-4 space-y-4 px-4 lg:px-0">
      {productSections.map((section, sectionIndex) => (
        <motion.div
          key={sectionIndex}
          className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
        >
          <div className="flex items-center justify-between mb-6 lg:mb-8">
            <h3 className="text-base sm:text-lg font-bold text-black uppercase">{section.title}</h3>
            <motion.div
              className="flex items-center gap-2 text-green-600 hover:text-green-700 cursor-pointer transition-colors"
              whileHover={{ x: 5 }}
            >
              <span className="text-sm capitalize hidden sm:inline">View All</span>
              <span className="text-sm capitalize sm:hidden">Xem tất cả</span>
              <ChevronRight className="w-3 h-3" />
            </motion.div>
          </div>

          <div className="flex flex-col xl:flex-row gap-6 lg:gap-8">
            {/* Banner Section */}
            <motion.div
              className="w-full xl:w-[605px] h-[160px] sm:h-[180px] lg:h-[200px] bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg overflow-hidden relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {section.bannerImage && (
                <img
                  src={section.bannerImage || "/placeholder.svg"}
                  alt={section.bannerTitle}
                  className="w-full h-full object-cover opacity-80"
                />
              )}
              <div className="absolute inset-0 flex items-center px-4 sm:px-6 lg:px-8">
                <div className="text-white">
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 leading-tight">
                    {section.bannerTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-200 mb-3 sm:mb-4">{section.bannerSubtitle}</p>
                  <motion.button
                    className="bg-white text-blue-800 px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-semibold hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Shop Now
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Categories Grid */}
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
              {section.categories.map((category, index) => (
                <motion.div
                  key={index}
                  className="text-center group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 group-hover:bg-green-600 group-hover:text-white rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    {sectionIndex === 0 ? (
                      index === 0 ? (
                        <Wifi className="w-4 h-4 sm:w-6 sm:h-6" />
                      ) : index === 1 ? (
                        <Network className="w-4 h-4 sm:w-6 sm:h-6" />
                      ) : index === 2 ? (
                        <Camera className="w-4 h-4 sm:w-6 sm:h-6" />
                      ) : index === 3 ? (
                        <Radio className="w-4 h-4 sm:w-6 sm:h-6" />
                      ) : index === 4 ? (
                        <Usb className="w-4 h-4 sm:w-6 sm:h-6" />
                      ) : (
                        <Package className="w-4 h-4 sm:w-6 sm:h-6" />
                      )
                    ) : index === 0 ? (
                      <Camera className="w-4 h-4 sm:w-6 sm:h-6" />
                    ) : index === 1 ? (
                      <Video className="w-4 h-4 sm:w-6 sm:h-6" />
                    ) : index === 2 ? (
                      <Wifi className="w-4 h-4 sm:w-6 sm:h-6" />
                    ) : index === 3 ? (
                      <RotateCcw className="w-4 h-4 sm:w-6 sm:h-6" />
                    ) : index === 4 ? (
                      <Monitor className="w-4 h-4 sm:w-6 sm:h-6" />
                    ) : (
                      <Package className="w-4 h-4 sm:w-6 sm:h-6" />
                    )}
                  </motion.div>
                  <h5 className="text-xs sm:text-sm font-bold text-black group-hover:text-green-600 transition-colors leading-tight">
                    {category.name}
                  </h5>
                  <span className="text-xs text-gray-500">{category.items}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
