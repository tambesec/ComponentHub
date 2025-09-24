"use client"

import React from "react"
import Link from "next/link"
import { Phone, Globe, ShoppingCart, User, Search, CreditCard, Package, Truck } from "lucide-react"
import Footer from "../../src/components/Footer"

export default function CheckoutPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isGuest, setIsGuest] = React.useState(true)
  const [billingData, setBillingData] = React.useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "Việt Nam (VN)",
    streetAddress: "",
    apartment: "",
    city: "",
    state: "Washington",
    zipCode: "",
    phone: "",
    email: "",
    orderNotes: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setBillingData({
      ...billingData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="w-full max-w-[1920px] mx-auto bg-[#e2e4eb] relative min-h-screen">
      {/* Header - Same as other pages */}
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
                <span className="text-xs text-white font-bold">1</span>
              </div>
            </div>
          </div>
        </div>
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
              <Truck className="w-4 h-4" />
              <span>FREE SHIPPING OVER $199</span>
            </div>
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              <span>30 DAYS MONEY BACK</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
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
          <span className="text-gray-800 font-medium">Thông tin thanh toán</span>
        </div>
      </div>

      {/* Checkout Content */}
      <div className="w-full max-w-[1300px] mx-auto px-4 lg:px-0 pb-12">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-8 lg:p-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">THANH TOÁN</h1>

            {/* Login/Guest Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  Khách hàng quay lại?{" "}
                  <Link href="/login" className="text-red-500 underline">
                    Đăng nhập
                  </Link>
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  Có mã giảm giá?{" "}
                  <Link href="#" className="text-red-500 underline">
                    Nhập vào đây để nhập mã
                  </Link>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Billing Information */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Chi tiết đơn hàng</h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Họ <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={billingData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tên <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={billingData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tên công ty (không bắt buộc)</label>
                    <input
                      type="text"
                      name="company"
                      value={billingData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Quốc gia <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="country"
                      value={billingData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                      required
                    >
                      <option value="Việt Nam (VN)">Việt Nam (VN)</option>
                      <option value="United States">United States</option>
                      <option value="China">China</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Số nhà, đường</label>
                    <input
                      type="text"
                      name="streetAddress"
                      value={billingData.streetAddress}
                      onChange={handleInputChange}
                      placeholder="Số nhà và tên đường"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none mb-3"
                    />
                    <input
                      type="text"
                      name="apartment"
                      value={billingData.apartment}
                      onChange={handleInputChange}
                      placeholder="Phường, tỉnh..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phường / Xã <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={billingData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Quận / Quốc gia <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="state"
                      value={billingData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                      required
                    >
                      <option value="Washington">Washington</option>
                      <option value="Ho Chi Minh">Hồ Chí Minh</option>
                      <option value="Hanoi">Hà Nội</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mã bưu điện <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={billingData.zipCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={billingData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Địa chỉ email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={billingData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                      required
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="createAccount"
                      className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <label htmlFor="createAccount" className="text-sm text-gray-600">
                      Tạo tài khoản?
                    </label>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Thông tin định kèm</h3>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ghi chú đơn hàng (không bắt buộc)
                    </label>
                    <textarea
                      name="orderNotes"
                      value={billingData.orderNotes}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Ghi chú cho người giao hàng"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none resize-none"
                    />
                  </div>
                </form>
              </div>

              {/* Order Summary */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Đơn hàng</h2>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
                    <span className="font-medium text-gray-700">SẢN PHẨM</span>
                    <span className="font-medium text-gray-700">TỔNG CỘNG</span>
                  </div>

                  {/* Product Item */}
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src="/macbook-pro-laptop.png"
                      alt="Pineapple MacBook Pro 2022"
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">Pineapple MacBook Pro 2022</h4>
                      <p className="text-sm text-gray-600">M1T 512GB</p>
                      <p className="text-sm text-gray-600">× 3</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Worldwide Standard Shopping Free</span>
                      <span className="text-red-500">+ $0.50</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg">
                      <span>Tổng đơn</span>
                      <span className="text-green-600">$1,748.50</span>
                    </div>
                  </div>

                  {/* Payment Options */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <input
                        type="checkbox"
                        id="newsletter"
                        className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                      />
                      <label htmlFor="newsletter" className="text-sm text-gray-600">
                        Chuyển khoản ngân hàng trực tiếp
                      </label>
                    </div>
                    <p className="text-xs text-gray-500 mb-4">
                      Vui lòng thanh toán trực tiếp vào tài khoản ngân hàng của chúng tôi. Vui lòng sử dụng ID đơn hàng
                      của bạn làm tham chiếu thanh toán. Đơn hàng sẽ không được giao cho đến khi tiền đã được xóa trong
                      tài khoản của chúng tôi.
                    </p>

                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Tài khoản thanh toán</h4>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-medium">Paypal</span>
                        <Link href="#" className="text-sm text-blue-600 underline">
                          Paypal là gì?
                        </Link>
                        <div className="ml-auto">
                          <img src="/paypal-logo.png" alt="PayPal" className="h-5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 uppercase text-sm flex items-center justify-center gap-2"
                  >
                    <CreditCard className="w-5 h-5" />
                    PLACE ORDER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
