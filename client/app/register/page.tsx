"use client"

import React from "react"
import Link from "next/link"
import { Eye, EyeOff, Phone, Globe, ShoppingCart, User, Menu, X, Search, UserPlus, Mail, Lock } from "lucide-react"
import Footer from "../../src/components/Footer"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = React.useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)
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
              <div className="border-t pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <User className="w-4 h-4 text-gray-500" />
                  <Link href="/login" className="text-sm font-bold text-black uppercase">
                    Đăng nhập/Đăng ký
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 uppercase">số dư:</span>
                  <span className="text-sm font-bold text-black">$1,089.00</span>
                </div>
              </div>
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
              <option>Điện thoại</option>
              <option>Laptop</option>
              <option>Phụ kiện</option>
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
          <span className="text-gray-800 font-medium">Đăng ký</span>
        </div>
      </div>

      {/* Registration Content */}
      <div className="w-full max-w-[1300px] mx-auto px-4 lg:px-0 pb-12">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Illustration */}
            <div className="lg:w-1/2 bg-gradient-to-br from-green-50 to-blue-50 p-8 lg:p-12 flex items-center justify-center">
              <div className="max-w-md text-center">
                <img
                  src="/registration-security-illustration-with-people-and.jpg"
                  alt="Registration illustration"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <div className="flex items-center justify-center gap-4 text-green-600">
                  <div className="flex items-center gap-2">
                    <Lock className="w-5 h-5" />
                    <span className="text-sm">Secure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <UserPlus className="w-5 h-5" />
                    <span className="text-sm">Easy Setup</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Registration Form */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <div className="max-w-md mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">ĐĂNG KÝ</h1>
                <p className="text-gray-600 text-center mb-8">Tạo tài khoản mới để bắt đầu mua sắm</p>

                <form className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Tên của bạn
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        placeholder="Nhập tên của bạn"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Địa chỉ email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        placeholder="example@gmail.com"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Mật khẩu
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password Field */}
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                      Nhập lại mật khẩu
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Register Button */}
                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 uppercase text-sm flex items-center justify-center gap-2"
                  >
                    <UserPlus className="w-5 h-5" />
                    ĐĂNG KÝ
                  </button>

                  {/* Login Link */}
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      Bạn đã có tài khoản?{" "}
                      <Link href="/login" className="text-green-600 hover:text-green-700 font-medium">
                        ĐĂNG NHẬP
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
