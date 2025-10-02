"use client"

import { useState } from "react"
import { Search, ChevronDown, Truck, RotateCcw, Shield } from "lucide-react"

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const categories = [
    "Router",
    "Switch",
    "Kích sóng wifi",
    "Hub-switch",
    "Card mạng",
    "USB wifi",
    "Camera",
    "Phụ kiện mạng",
  ]

  return (
    <div className="w-full max-w-[1300px] bg-green-600 rounded-lg mx-auto mt-0 px-4 md:px-8 py-4">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Search Section */}
        <div className="flex items-center w-full lg:w-auto">
          <div className="flex items-center h-[45px] rounded-full overflow-hidden bg-white w-full lg:w-[500px]">
            <div className="relative">
              <button
                className="flex items-center px-4 py-3 border-r border-gray-200 hover:bg-gray-50"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className="text-sm font-bold text-gray-800 mr-2">Danh mục</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 mt-1">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                      onClick={() => {
                        setIsDropdownOpen(false)
                      }}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <input
              type="text"
              placeholder="Tìm kiếm..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-3 text-sm text-gray-600 outline-none"
            />
            <button className="px-4 py-3 hover:bg-gray-50 transition-colors">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-8 text-white">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4" />
            <span className="text-sm font-medium uppercase">FREE SHIPPING OVER $199</span>
          </div>

          <div className="flex items-center gap-2">
            <RotateCcw className="w-4 h-4" />
            <span className="text-sm font-medium uppercase">30 DAYS MONEY BACK</span>
          </div>

          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium uppercase">100% SECURE PAYMENT</span>
          </div>
        </div>
      </div>
    </div>
  )
}
