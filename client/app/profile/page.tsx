"use client"

import React from "react"
import Link from "next/link"
import { Phone, Globe, ShoppingCart, User, Menu, X, Search, Camera, Save, Mail, Building } from "lucide-react"
import Footer from "../../src/components/Footer"

export default function ProfilePage() {
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
                  <span className="text-sm font-bold text-black uppercase">Nguyen Van A</span>
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
                <span className="text-xs text-white font-bold">5</span>
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
          <span className="text-gray-800 font-medium">Thông tin cá nhân</span>
        </div>
      </div>

      {/* Profile Content */}
      <div className="w-full max-w-[1300px] mx-auto px-4 lg:px-0 pb-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left side - User Info */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <img
                  src="/professional-male-avatar-with-beard-smiling.jpg"
                  alt="User Avatar"
                  className="w-full h-full rounded-full object-cover"
                />
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700">
                  <Camera className="w-4 h-4" />
                </button>
              </div>
              <h3 className="font-bold text-lg mb-2">Nguyen Van A</h3>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Mail className="w-4 h-4 text-gray-500" />
                <p className="text-gray-600 text-sm">example@gmail.com</p>
              </div>

              <button className="w-full bg-green-500 text-white py-2 px-4 rounded-md mb-4 hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
                <Camera className="w-4 h-4" />
                Thay đổi ảnh
              </button>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span>Bán hàng:</span>
                  <select className="border rounded px-2 py-1 text-sm">
                    <option>Chọn</option>
                    <option>Có</option>
                    <option>Không</option>
                  </select>
                </div>
                <div className="flex justify-between items-center">
                  <span>Địa chỉ:</span>
                  <select className="border rounded px-2 py-1 text-sm">
                    <option>Chọn</option>
                    <option>Hà Nội</option>
                    <option>TP.HCM</option>
                  </select>
                </div>
                <div className="flex justify-between items-center">
                  <span>Ghi chú khác:</span>
                  <select className="border rounded px-2 py-1 text-sm">
                    <option>Chọn</option>
                    <option>VIP</option>
                    <option>Thường</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Right side - Profile Information */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-center mb-8">Thông Tin</h2>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Họ *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value="Nguyen"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tên *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value="Van A"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tên của công ty</label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Địa chỉ email *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      value="example@gmail.com"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      value="+1 (555) 4545 454"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>

                <div className="md:col-span-2 flex justify-center">
                  <button
                    type="submit"
                    className="bg-green-500 text-white py-2 px-8 rounded-md hover:bg-green-600 transition-colors flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    Lưu
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
