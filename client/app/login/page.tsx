"use client"

import React from "react"
import Link from "next/link"
import { Eye, EyeOff, Search, LogIn, Mail, Lock } from "lucide-react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false)
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempt:", { email, password })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

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
          <Link href="/" className="hover:text-green-600">
            Trang chủ
          </Link>
          <span>/</span>
          <span className="text-black font-medium">Đăng nhập</span>
        </div>
      </div>

      {/* Login Content */}
      <div className="w-full max-w-[1300px] mx-auto px-4 lg:px-0 pb-12">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Illustration */}
            <div className="lg:w-1/2 bg-gradient-to-br from-green-50 to-blue-50 p-8 lg:p-12 flex items-center justify-center">
              <div className="max-w-md text-center">
                <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <LogIn className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-gray-600 text-sm">Secure Login</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <div className="max-w-md mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Welcome Back</h1>
                <p className="text-gray-600 text-center mb-8">Đăng nhập vào tài khoản của bạn</p>

                <form onSubmit={handleSubmit} className="space-y-6">
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Example@gmail.com"
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">Ghi nhớ mật khẩu ?</span>
                    </label>
                  </div>

                  {/* Login Button */}
                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 uppercase text-sm flex items-center justify-center gap-2"
                  >
                    <LogIn className="w-5 h-5" />
                    ĐĂNG NHẬP
                  </button>

                  {/* Register Link */}
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      Bạn chưa có tài khoản?{" "}
                      <Link href="/register" className="text-green-600 hover:text-green-700 font-medium">
                        ĐĂNG KÝ
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
