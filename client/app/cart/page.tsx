"use client"

import React from "react"
import Link from "next/link"
import { Phone, Globe, ShoppingCart, User, Menu, X, Search, Plus, Minus, Trash2, Star, Package } from "lucide-react"
import Footer from "../../src/components/Footer"

export default function CartPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <div className="w-full max-w-[1920px] mx-auto bg-[#e2e4eb] relative min-h-screen">
      {/* Header */}
      <header className="w-full max-w-[1300px] bg-white rounded-lg mx-auto mt-1 relative shadow-sm">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 md:px-8 py-3 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-[#ebeef6] rounded px-3 py-1">
              <Phone className="w-3 h-3" />
              <span className="text-xs font-normal text-black hidden sm:inline">Hotline 24/7</span>
            </div>
            <span className="text-xs font-bold text-black">(025) 3886 25 16</span>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span className="text-sm text-black hidden sm:inline">USD</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-black hidden sm:inline">Eng</span>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between px-4 md:px-8 py-4">
          <div className="flex items-center gap-4 md:gap-8">
            <div className="w-[120px] md:w-[161px] h-[30px] md:h-[40px]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-green-600 font-bold text-lg leading-none">SWOO</span>
                  <span className="text-gray-600 text-xs leading-none">TECH MART</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/" className="text-sm font-bold text-black uppercase hover:text-green-600 transition-colors">
                Trang chủ
              </Link>
              <a href="#" className="text-sm font-bold text-black uppercase hover:text-green-600 transition-colors">
                Danh mục sản phẩm
              </a>
              <a href="#" className="text-sm font-bold text-black uppercase hover:text-green-600 transition-colors">
                Bài viết
              </a>
              <a href="#" className="text-sm font-bold text-black uppercase hover:text-green-600 transition-colors">
                Liên hệ
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            {/* Desktop User Info */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-gray-500" />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase">chào mừng</span>
                  <Link
                    href="/login"
                    className="text-sm font-bold text-black uppercase cursor-pointer hover:text-green-600 transition-colors"
                  >
                    Đăng nhập/Đăng ký
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500 uppercase">số dư</span>
                <span className="text-sm font-bold text-black">$1,089.00</span>
              </div>
            </div>

            {/* Cart */}
            <div className="relative">
              <button className="w-10 h-10 bg-[#ebeef6] rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <ShoppingCart className="w-5 h-5" />
              </button>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">3</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-50">
            <nav className="flex flex-col p-4 space-y-4">
              <Link href="/" className="text-sm font-bold text-black uppercase hover:text-green-600">
                Trang chủ
              </Link>
              <a href="#" className="text-sm font-bold text-black uppercase hover:text-green-600">
                Danh mục sản phẩm
              </a>
              <a href="#" className="text-sm font-bold text-black uppercase hover:text-green-600">
                Bài viết
              </a>
              <a href="#" className="text-sm font-bold text-black uppercase hover:text-green-600">
                Liên hệ
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Search Bar */}
      <div className="w-full max-w-[1300px] mx-auto mt-5 px-4 lg:px-0">
        <div className="bg-green-600 rounded-lg p-4 flex flex-col md:flex-row items-center gap-4">
          <div className="flex flex-1 bg-white rounded-lg overflow-hidden">
            <select className="px-4 py-3 bg-gray-50 border-r border-gray-200 text-sm font-medium text-gray-700 focus:outline-none">
              <option>Danh mục</option>
              <option>Router</option>
              <option>Switch</option>
              <option>Camera</option>
            </select>
            <input type="text" placeholder="Tìm kiếm..." className="flex-1 px-4 py-3 text-sm focus:outline-none" />
            <button className="px-6 py-3 bg-green-600 text-white font-medium hover:bg-green-700 transition-colors">
              <Search className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-6 text-white text-sm">
            <div className="flex items-center gap-2">
              <span>FREE SHIPPING OVER $199</span>
            </div>
            <div className="flex items-center gap-2">
              <span>30 DAYS MONEY BACK</span>
            </div>
            <div className="flex items-center gap-2">
              <span>100% SECURE PAYMENT</span>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="w-full max-w-[1300px] mx-auto mt-5 px-4 lg:px-0">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-primary">
            Trang chủ
          </Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">Giỏ hàng</span>
        </div>
      </div>

      {/* Cart Content */}
      <div className="w-full max-w-[1300px] mx-auto px-4 lg:px-0 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {/* Product 1 */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img src="/wireless-router-black.jpg" alt="Router" className="w-20 h-20 object-cover rounded" />
                  <span className="absolute -top-2 -left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    SALE
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">Bộ phát wifi 4 Anten TP-LINK Archer C6 AC1200 Dual-band Wireless</h3>
                  <p className="text-green-500 font-bold text-lg">1,200,000 đ</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <button className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-100">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4">1</span>
                    <button className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-100">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">5 reviews</span>
                  </div>
                </div>
                <button className="text-red-500 hover:text-red-700 p-2">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center space-x-4">
                <img src="/network-switch-black.jpg" alt="Switch" className="w-20 h-20 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="font-semibold">Thiết bị chuyển mạch PoE Switch Tplink TL-SG1005P</h3>
                  <p className="text-green-500 font-bold text-lg">2,300,000 đ</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <button className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-100">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4">1</span>
                    <button className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-100">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Package className="w-4 h-4 text-green-600" />
                    <p className="text-sm text-green-600">Còn hàng</p>
                  </div>
                </div>
                <button className="text-red-500 hover:text-red-700 p-2">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center space-x-4">
                <img src="/usb-wifi-adapter-black.jpg" alt="USB Wifi" className="w-20 h-20 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="font-semibold">USB Wifi 6 AC600T-U Nano Wireless AC600</h3>
                  <p className="text-green-500 font-bold text-lg">185,000 đ</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <button className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-100">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4">1</span>
                    <button className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-100">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">5 reviews</span>
                  </div>
                </div>
                <button className="text-red-500 hover:text-red-700 p-2">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg p-6 shadow-sm h-fit">
            <h3 className="font-bold text-lg mb-4">Order Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Sub Total:</span>
                <span>$3,685.00</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping cost:</span>
                <span>$60.00</span>
              </div>
              <div className="flex justify-between">
                <span>Discount:</span>
                <span>$0.00</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>GRAND TOTAL:</span>
                <span>$3,745.00</span>
              </div>
            </div>
            <Link href="/checkout">
              <button className="w-full bg-green-500 text-white py-3 rounded-md mt-6 hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                CHECKOUT
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
