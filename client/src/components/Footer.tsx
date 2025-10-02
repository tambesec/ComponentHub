"use client"

import { Phone, Mail, Facebook, Twitter, Instagram, Youtube, Linkedin, Globe, ChevronDown, MapPin } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function Footer() {
  const [currencyOpen, setCurrencyOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)
  const [selectedCurrency, setSelectedCurrency] = useState("USD")
  const [selectedLanguage, setSelectedLanguage] = useState("ENG")

  return (
    <footer className="w-full bg-white mt-16">
      <div className="w-full max-w-[1300px] mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">
          {/* Company Info - Takes more space */}
          <div className="lg:col-span-4">
            <h4 className="text-lg font-bold text-black uppercase mb-6">PEE - 1st thiết bị mạng</h4>
            <div className="space-y-4">
              <div>
                <span className="text-sm font-normal text-black uppercase">hotline 24/7</span>
                <div className="flex items-center gap-2 mt-1">
                  <Phone className="w-4 h-4 text-green-600" />
                  <Link
                    href="tel:+84253686256"
                    className="text-2xl md:text-3xl font-bold text-green-600 hover:text-green-700 transition-colors"
                  >
                    (025) 3686 25 16
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-black">Học viện công nghệ bưu chính viễn thông, Hà Nội, Việt Nam</p>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-600" />
                <Link
                  href="mailto:n22dcat047@student.ptithcm.edu.vn"
                  className="text-sm text-black hover:text-green-600 transition-colors"
                >
                  n22dcat047@student.ptithcm.edu.vn
                </Link>
              </div>

              <div className="flex gap-3 mt-6">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white cursor-pointer transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center hover:bg-sky-500 hover:text-white cursor-pointer transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="w-4 h-4" />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white cursor-pointer transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-4 h-4" />
                </Link>
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white cursor-pointer transition-all duration-300 hover:scale-110"
                >
                  <Youtube className="w-4 h-4" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-700 hover:text-white cursor-pointer transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold text-black uppercase mb-6">danh mục</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link
                  href="/category/router"
                  className="hover:text-green-600 cursor-pointer capitalize transition-colors"
                >
                  Router
                </Link>
              </li>
              <li>
                <Link
                  href="/category/switch"
                  className="hover:text-green-600 cursor-pointer capitalize transition-colors"
                >
                  Switch
                </Link>
              </li>
              <li>
                <Link
                  href="/category/wifi-extender"
                  className="hover:text-green-600 cursor-pointer capitalize transition-colors"
                >
                  Kích sóng wifi
                </Link>
              </li>
              <li>
                <Link
                  href="/category/hub-switch"
                  className="hover:text-green-600 cursor-pointer capitalize transition-colors"
                >
                  Hub-switch
                </Link>
              </li>
              <li>
                <Link
                  href="/category/network-card"
                  className="hover:text-green-600 cursor-pointer capitalize transition-colors"
                >
                  Card mạng
                </Link>
              </li>
              <li>
                <Link
                  href="/category/usb-wifi"
                  className="hover:text-green-600 cursor-pointer capitalize transition-colors"
                >
                  USB wifi
                </Link>
              </li>
              <li>
                <Link
                  href="/category/camera"
                  className="hover:text-green-600 cursor-pointer capitalize transition-colors"
                >
                  Camera
                </Link>
              </li>
              <li>
                <Link
                  href="/category/accessories"
                  className="hover:text-green-600 cursor-pointer capitalize transition-colors"
                >
                  Phụ kiện mạng
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold text-black uppercase mb-6">về chúng tôi</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/about" className="hover:text-green-600 cursor-pointer capitalize transition-colors">
                  About PEE
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-600 cursor-pointer capitalize transition-colors">
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-green-600 cursor-pointer capitalize transition-colors">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-green-600 cursor-pointer capitalize transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:text-green-600 cursor-pointer capitalize transition-colors">
                  Sitemap
                </Link>
              </li>
              <li>
                <Link href="/stores" className="hover:text-green-600 cursor-pointer capitalize transition-colors">
                  Vị trí cửa hàng
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold text-black uppercase mb-6">trợ giúp</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/support" className="hover:text-green-600 cursor-pointer capitalize transition-colors">
                  Dịch vụ khách hàng
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-green-600 cursor-pointer capitalize transition-colors">
                  Chính sách
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-green-600 cursor-pointer capitalize transition-colors">
                  Điều khoản
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="hover:text-green-600 cursor-pointer capitalize transition-colors">
                  Theo dõi đơn
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-green-600 cursor-pointer capitalize transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/account" className="hover:text-green-600 cursor-pointer capitalize transition-colors">
                  Tài khoản của tôi
                </Link>
              </li>
              <li>
                <Link
                  href="/product-support"
                  className="hover:text-green-600 cursor-pointer capitalize transition-colors"
                >
                  Hỗ trợ sản phẩm
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold text-black uppercase mb-6 leading-tight">
              đăng ký và nhận 10% giảm giá cho lần đặt hàng đầu tiên
            </h4>
            <div className="flex flex-col sm:flex-row mb-4">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg sm:rounded-r-none rounded-r-lg text-sm outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all"
              />
              <button className="bg-green-600 text-white px-6 py-2 rounded-r-lg sm:rounded-l-none rounded-l-lg text-sm font-bold uppercase hover:bg-green-700 transition-all duration-300 hover:shadow-lg mt-2 sm:mt-0">
                đăng ký
              </button>
            </div>
            <p className="text-xs text-gray-600">
              Nhấn subscribing, bạn đã đồng ý với chính sách của chúng tôi{" "}
              <Link href="/privacy" className="underline cursor-pointer hover:text-green-600 transition-colors">
                Policy
              </Link>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setCurrencyOpen(!currencyOpen)}
                className="flex items-center gap-2 hover:text-green-600 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm text-black">{selectedCurrency}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {currencyOpen && (
                <div className="absolute bottom-full mb-2 left-0 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[80px] z-10">
                  <button
                    onClick={() => {
                      setSelectedCurrency("USD")
                      setCurrencyOpen(false)
                    }}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 transition-colors"
                  >
                    USD
                  </button>
                  <button
                    onClick={() => {
                      setSelectedCurrency("VND")
                      setCurrencyOpen(false)
                    }}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 transition-colors"
                  >
                    VND
                  </button>
                  <button
                    onClick={() => {
                      setSelectedCurrency("EUR")
                      setCurrencyOpen(false)
                    }}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 transition-colors"
                  >
                    EUR
                  </button>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center gap-2 hover:text-green-600 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm text-black">{selectedLanguage}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {languageOpen && (
                <div className="absolute bottom-full mb-2 left-0 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[80px] z-10">
                  <button
                    onClick={() => {
                      setSelectedLanguage("ENG")
                      setLanguageOpen(false)
                    }}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 transition-colors"
                  >
                    ENG
                  </button>
                  <button
                    onClick={() => {
                      setSelectedLanguage("VIE")
                      setLanguageOpen(false)
                    }}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 transition-colors"
                  >
                    VIE
                  </button>
                  <button
                    onClick={() => {
                      setSelectedLanguage("中文")
                      setLanguageOpen(false)
                    }}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 transition-colors"
                  >
                    中文
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-sm text-gray-600">© 2025 PEE. All Rights Reserved</span>
            <div className="flex gap-2">
              <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center hover:shadow-md transition-shadow">
                <span className="text-xs font-bold text-white">VISA</span>
              </div>
              <div className="w-10 h-6 bg-red-600 rounded flex items-center justify-center hover:shadow-md transition-shadow">
                <span className="text-xs font-bold text-white">MC</span>
              </div>
              <div className="w-10 h-6 bg-blue-500 rounded flex items-center justify-center hover:shadow-md transition-shadow">
                <span className="text-xs font-bold text-white">PP</span>
              </div>
              <div className="w-10 h-6 bg-green-600 rounded flex items-center justify-center hover:shadow-md transition-shadow">
                <span className="text-xs font-bold text-white">AX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
