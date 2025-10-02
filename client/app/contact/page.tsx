"use client"

import React from "react"
import Link from "next/link"
import { MapPin, Search, Send, Mail, MessageSquare, User, Phone, Globe } from "lucide-react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    country: "Việt Nam (VN)",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
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
          <span className="text-black font-medium">Liên hệ</span>
        </div>
      </div>

      {/* Contact Content */}
      <div className="w-full max-w-[1300px] mx-auto px-4 lg:px-0 pb-12">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-8 lg:p-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">LIÊN HỆ VỚI CHÚNG TÔI</h1>
            <p className="text-gray-600 mb-8">Liên hệ nếu có bất kỳ vấn đề nào</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Họ <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tên <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Địa chỉ email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Số điện thoại (không bắt buộc)
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Quốc gia <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                        required
                      >
                        <option value="Việt Nam (VN)">Việt Nam (VN)</option>
                        <option value="United States">United States</option>
                        <option value="China">China</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Chủ đề (không bắt buộc)</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tin nhắn</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        placeholder="Mô tả chi tiết vấn đề bạn cần hỗ trợ ở đây"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none resize-none"
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500 mt-1"
                      required
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      Tôi muốn nhận tin tức và cập nhật thường xuyên. Bằng cách gửi, tôi đồng ý với{" "}
                      <Link href="#" className="text-green-600 underline">
                        Terms & Conditions
                      </Link>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 uppercase flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    GỬI
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Trụ Sở Chính</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <p className="text-sm text-gray-700">Mân Thiện, Hiệp Phú, Thành Phố Hồ Chí Minh</p>
                        <p className="text-sm font-bold text-gray-900">(+025) 3886 25 16</p>
                        <Link href="mailto:hcm@pee.com" className="text-sm text-green-600 hover:underline">
                          hcm@pee.com
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Chi nhánh Hà Nội</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <p className="text-sm text-gray-700">Trần Phú, phường Hà Đông, thành phố Hà Nội</p>
                        <p className="text-sm font-bold text-gray-900">(+788) 895-5350</p>
                        <Link href="mailto:hanoi@pee.com" className="text-sm text-green-600 hover:underline">
                          hanoi@pee.com
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex gap-4">
                  {["facebook", "twitter", "instagram", "youtube", "linkedin"].map((social) => (
                    <div
                      key={social}
                      className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white cursor-pointer transition-colors"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
                      </svg>
                    </div>
                  ))}
                </div>

                {/* Contact Image */}
                <div className="mt-8">
                  <img
                    src="/laptop-on-desk-with-hands-typing-customer-support.jpg"
                    alt="Contact support"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Section */}
          <div className="border-t border-gray-200">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">TÌM CHÚNG TÔI NGAY TRÊN GOOGLE MAP</h2>
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <p className="text-gray-600">Google Maps Integration</p>
                  <p className="text-sm text-gray-500">SWOO Tech Mart</p>
                  <p className="text-sm text-gray-500">Mân Thiện, Hiệp Phú, TP.HCM</p>
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
