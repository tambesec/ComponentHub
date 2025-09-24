"use client"

import { Phone, Mail, Facebook, Twitter, Instagram, Youtube, Linkedin, Globe, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [currencyOpen, setCurrencyOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)
  const [selectedCurrency, setSelectedCurrency] = useState("USD")
  const [selectedLanguage, setSelectedLanguage] = useState("ENG")

  return (
    <footer className="w-full bg-white mt-16">
      <div className="w-[1300px] mx-auto px-8 py-16">
        <div className="grid grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold text-black uppercase mb-6">PEE - 1st thiết bị mạng</h4>
            <div className="space-y-4">
              <div>
                <span className="text-sm font-normal text-black uppercase">hotline 24/7</span>
                <div className="flex items-center gap-2 mt-1">
                  <Phone className="w-4 h-4 text-green-600" />
                  <p className="text-3xl font-bold text-green-600 whitespace-nowrap">(025) 3686 25 16</p>
                </div>
              </div>
              <p className="text-sm text-black">Học viện công nghệ bưu chính viễn thông</p>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-600" />
                <p className="text-sm text-black">n22dcat047@student.ptithcm.edu.vn</p>
              </div>

              {/* Social Media */}
              <div className="flex gap-3 mt-6">
                <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white cursor-pointer transition-colors">
                  <Facebook className="w-4 h-4" />
                </div>
                <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white cursor-pointer transition-colors">
                  <Twitter className="w-4 h-4" />
                </div>
                <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white cursor-pointer transition-colors">
                  <Instagram className="w-4 h-4" />
                </div>
                <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white cursor-pointer transition-colors">
                  <Youtube className="w-4 h-4" />
                </div>
                <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white cursor-pointer transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold text-black uppercase mb-6">danh mục</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="hover:text-primary cursor-pointer capitalize">Router</li>
              <li className="hover:text-primary cursor-pointer capitalize">Switch</li>
              <li className="hover:text-primary cursor-pointer capitalize">Kích sóng wifi</li>
              <li className="hover:text-primary cursor-pointer capitalize">hub-switch</li>
              <li className="hover:text-primary cursor-pointer capitalize">card mạng</li>
              <li className="hover:text-primary cursor-pointer capitalize">uSB wifi</li>
              <li className="hover:text-primary cursor-pointer capitalize">camera</li>
              <li className="hover:text-primary cursor-pointer capitalize">phụ kiện mạng</li>
            </ul>
          </div>

          {/* About */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold text-black uppercase mb-6">về chúng tôi</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="hover:text-primary cursor-pointer capitalize">About pee</li>
              <li className="hover:text-primary cursor-pointer capitalize">liên hệ</li>
              <li className="hover:text-primary cursor-pointer capitalize">career</li>
              <li className="hover:text-primary cursor-pointer capitalize">Blog</li>
              <li className="hover:text-primary cursor-pointer capitalize">Sitemap</li>
              <li className="hover:text-primary cursor-pointer capitalize">vị trí cửa hàng</li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold text-black uppercase mb-6">trợ giúp</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="hover:text-primary cursor-pointer capitalize">dịch vụ khách hàng</li>
              <li className="hover:text-primary cursor-pointer capitalize">chính sách</li>
              <li className="hover:text-primary cursor-pointer capitalize">điều khoản</li>
              <li className="hover:text-primary cursor-pointer capitalize">theo dõi đơn</li>
              <li className="hover:text-primary cursor-pointer capitalize">FAQs</li>
              <li className="hover:text-primary cursor-pointer capitalize">tài khoản của tôi</li>
              <li className="hover:text-primary cursor-pointer capitalize">hỗ trợ sản phẩm</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold text-black uppercase mb-6">
              đăng ký và nhận 10% giảm giá cho lần đặt hàng đầu tiên
            </h4>
            <div className="flex mb-4">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg text-sm outline-none focus:border-primary"
              />
              <button className="bg-primary text-white px-6 py-2 rounded-r-lg text-sm font-bold uppercase hover:bg-green-600">
                đăng ký
              </button>
            </div>
            <p className="text-xs text-gray-600">
              Nhấn subscribing, bạn đã đồng ý với chính sách của chúng tôi{" "}
              <span className="underline cursor-pointer">Policy</span>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex items-center justify-between">
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
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                  >
                    USD
                  </button>
                  <button
                    onClick={() => {
                      setSelectedCurrency("VND")
                      setCurrencyOpen(false)
                    }}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                  >
                    VND
                  </button>
                  <button
                    onClick={() => {
                      setSelectedCurrency("EUR")
                      setCurrencyOpen(false)
                    }}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
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
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                  >
                    ENG
                  </button>
                  <button
                    onClick={() => {
                      setSelectedLanguage("VIE")
                      setLanguageOpen(false)
                    }}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                  >
                    VIE
                  </button>
                  <button
                    onClick={() => {
                      setSelectedLanguage("中文")
                      setLanguageOpen(false)
                    }}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                  >
                    中文
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">© 2025 Pee. All Rights Reserved</span>
            <div className="flex gap-2">
              <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-white">VISA</span>
              </div>
              <div className="w-10 h-6 bg-red-600 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-white">MC</span>
              </div>
              <div className="w-10 h-6 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-white">PP</span>
              </div>
              <div className="w-10 h-6 bg-green-600 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-white">AX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
