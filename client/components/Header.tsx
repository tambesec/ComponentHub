"use client"

import { useState } from "react"
import { Phone, Globe, ShoppingCart, User, Menu, X } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
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
          <Link href="/" className="w-[120px] md:w-[161px] h-[30px] md:h-[40px]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-green-600 font-bold text-lg leading-none">SWOO</span>
                <span className="text-gray-600 text-xs leading-none">TECH MART</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-bold text-black uppercase hover:text-green-600 transition-colors">
              Trang chủ
            </Link>
            <Link
              href="/products"
              className="text-sm font-bold text-black uppercase hover:text-green-600 transition-colors"
            >
              Danh mục sản phẩm
            </Link>
            <Link
              href="/about"
              className="text-sm font-bold text-black uppercase hover:text-green-600 transition-colors"
            >
              Về chúng tôi
            </Link>
            <Link
              href="/contact"
              className="text-sm font-bold text-black uppercase hover:text-green-600 transition-colors"
            >
              Liên hệ
            </Link>
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
          <Link href="/cart" className="relative">
            <button className="w-10 h-10 bg-[#ebeef6] rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">5</span>
            </div>
          </Link>

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
            <Link href="/products" className="text-sm font-bold text-black uppercase hover:text-green-600">
              Danh mục sản phẩm
            </Link>
            <Link href="/about" className="text-sm font-bold text-black uppercase hover:text-green-600">
              Về chúng tôi
            </Link>
            <Link href="/contact" className="text-sm font-bold text-black uppercase hover:text-green-600">
              Liên hệ
            </Link>
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
  )
}
