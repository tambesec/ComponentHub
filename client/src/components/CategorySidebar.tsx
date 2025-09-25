"use client"

import { useState } from "react"
import {
  Router,
  Wifi,
  Network,
  Usb,
  Settings,
  TestTube,
  Globe,
  CreditCard,
  Repeat,
  Radio,
  MoreHorizontal,
  ChevronDown,
  Menu,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function CategorySidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null)

  const categories = [
    { name: "Router", icon: Router, count: 45 },
    { name: "Switch", icon: Network, count: 32 },
    { name: "Kích sóng wifi", icon: Wifi, count: 28 },
    { name: "Hub-switch", icon: Network, count: 15 },
    { name: "Card mạng", icon: CreditCard, count: 22 },
    { name: "USB wifi", icon: Usb, count: 18 },
    { name: "Bộ chuyển", icon: Repeat, count: 12 },
    { name: "Bộ phát sóng", icon: Radio, count: 8 },
    { name: "Máy test", icon: TestTube, count: 6 },
    { name: "Bộ định tuyến", icon: Globe, count: 25 },
    { name: "Camera IP", icon: Settings, count: 35 },
    { name: "Phụ kiện khác", icon: MoreHorizontal, count: 42 },
  ]

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-white rounded-lg p-4 shadow-sm flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <Menu className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-bold text-black">Danh mục sản phẩm</span>
          </div>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className="w-5 h-5 text-gray-600" />
          </motion.div>
        </button>
      </div>

      {/* Desktop Sidebar / Mobile Dropdown */}
      <AnimatePresence>
        <motion.aside
          className={`
            w-full lg:w-[309px] bg-white rounded-lg shadow-sm overflow-hidden
            ${isOpen ? "block" : "hidden lg:block"}
          `}
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isOpen || window.innerWidth >= 1024 ? "auto" : 0,
            opacity: isOpen || window.innerWidth >= 1024 ? 1 : 0,
          }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-4 lg:p-6">
            {/* Special Offer Banner */}
            <div className="mb-6">
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-2 rounded-lg inline-block">
                <span className="text-xs lg:text-sm font-bold uppercase">Giảm giá lên đến 40%</span>
              </div>
            </div>

            {/* Categories Navigation */}
            <nav className="space-y-1">
              {categories.map((category, index) => {
                const IconComponent = category.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <button
                      className="w-full flex items-center justify-between gap-3 p-2 lg:p-3 rounded-lg hover:bg-gray-50 hover:text-green-600 cursor-pointer transition-all group"
                      onClick={() => setExpandedCategory(expandedCategory === index ? null : index)}
                    >
                      <div className="flex items-center gap-2 lg:gap-3">
                        <IconComponent className="w-4 h-4 text-gray-600 group-hover:text-green-600 flex-shrink-0" />
                        <span className="text-xs lg:text-sm font-semibold text-black capitalize group-hover:text-green-600 text-left">
                          {category.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                        <ChevronDown className="w-3 h-3 text-gray-400 lg:hidden" />
                      </div>
                    </button>

                    {/* Mobile Subcategory Expansion */}
                    <AnimatePresence>
                      {expandedCategory === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="lg:hidden ml-6 mt-2 space-y-1"
                        >
                          <button className="block w-full text-left text-xs text-gray-600 py-1 hover:text-green-600">
                            Tất cả {category.name}
                          </button>
                          <button className="block w-full text-left text-xs text-gray-600 py-1 hover:text-green-600">
                            Hàng mới về
                          </button>
                          <button className="block w-full text-left text-xs text-gray-600 py-1 hover:text-green-600">
                            Khuyến mãi
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </nav>

            {/* Special Offer Banner */}
            <motion.div
              className="mt-6 bg-gradient-to-br from-green-600 to-green-700 rounded-lg p-3 lg:p-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h4 className="text-xs lg:text-sm font-bold mb-2">Ưu đãi đặc biệt!</h4>
              <p className="text-xs mb-3 leading-relaxed">Mua 2 tặng 1 cho tất cả sản phẩm Router</p>
              <button className="bg-white text-green-600 px-3 py-1 rounded text-xs font-bold hover:bg-gray-100 transition-colors">
                Xem ngay
              </button>
            </motion.div>
          </div>
        </motion.aside>
      </AnimatePresence>
    </>
  )
}
