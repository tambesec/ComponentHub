"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Home, Search, ArrowRight, Wifi, Router, Network } from "lucide-react"

export default function NotFound() {
  const [mounted, setMounted] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-blue-100 rounded-full opacity-30 animate-bounce delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-slate-100 rounded-full opacity-25 animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-green-50 rounded-full opacity-20 animate-bounce delay-2000"></div>
      </div>

      {/* Floating Network Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Wifi className="absolute top-1/4 left-1/4 w-8 h-8 text-green-200 animate-float" />
        <Router className="absolute top-1/3 right-1/4 w-6 h-6 text-slate-300 animate-float-delayed" />
        <Network className="absolute bottom-1/3 left-1/3 w-7 h-7 text-green-100 animate-float-slow" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* 404 Number with Luxury Animation */}
        <div className="relative mb-8">
          <h1 className="text-[12rem] md:text-[16rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 leading-none select-none animate-fade-in-up">
            404
          </h1>
          <div className="absolute inset-0 text-[12rem] md:text-[16rem] font-bold text-green-600 opacity-10 leading-none animate-pulse">
            404
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8 animate-fade-in-up delay-300">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 leading-tight">Kết nối bị gián đoạn</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển. Hãy khám phá các thiết bị mạng chất lượng
              cao của chúng tôi.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto animate-fade-in-up delay-500">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm thiết bị mạng..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 text-lg border-2 border-slate-200 rounded-full focus:border-green-500 focus:outline-none focus:ring-4 focus:ring-green-100 transition-all duration-300 bg-white/80 backdrop-blur-sm"
              />
              <button className="absolute right-2 top-2 bottom-2 px-6 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-700">
            <Link
              href="/"
              className="group flex items-center gap-3 px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 hover:scale-105 hover:shadow-xl font-semibold text-lg"
            >
              <Home className="w-5 h-5" />
              Về trang chủ
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/category/router"
              className="group flex items-center gap-3 px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-full hover:border-green-500 hover:text-green-600 transition-all duration-300 hover:scale-105 hover:shadow-lg font-semibold text-lg"
            >
              <Router className="w-5 h-5" />
              Xem Router
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Popular Categories */}
          <div className="animate-fade-in-up delay-1000">
            <p className="text-slate-500 mb-4 font-medium">Danh mục phổ biến:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { name: "Router WiFi 6", href: "/category/router" },
                { name: "Switch Gigabit", href: "/category/switch" },
                { name: "Kích sóng WiFi", href: "/category/wifi-extender" },
                { name: "Camera IP", href: "/category/camera" },
              ].map((category, index) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="px-6 py-2 bg-slate-100 text-slate-700 rounded-full hover:bg-green-100 hover:text-green-700 transition-all duration-300 hover:scale-105 font-medium"
                  style={{ animationDelay: `${1200 + index * 100}ms` }}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-8 bg-gradient-to-b from-green-400 to-transparent rounded-full"></div>
        </div>
      </div>

      {/* Luxury Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10 pointer-events-none"></div>
    </div>
  )
}
