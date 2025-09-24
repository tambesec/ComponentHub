import LoginForm from "./components/LoginForm"
import "./App.css"

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          {/* Top bar */}
          <div className="flex justify-between items-center py-2 text-sm border-b border-gray-200">
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Hotline 24/7</span>
              <span className="font-semibold">(028) 3888 25 10</span>
            </div>
            <div className="flex items-center gap-4">
              <select className="text-sm border-none bg-transparent">
                <option>USD</option>
                <option>VND</option>
              </select>
              <select className="text-sm border-none bg-transparent">
                <option>🇺🇸 Eng</option>
                <option>🇻🇳 Vie</option>
              </select>
            </div>
          </div>

          {/* Main header */}
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-8">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <div>
                  <div className="font-bold text-lg">SWOO</div>
                  <div className="text-xs text-gray-600">TECH MART</div>
                </div>
              </div>

              {/* Navigation */}
              <nav className="flex items-center gap-6">
                <div className="relative">
                  <button className="flex items-center gap-1 text-gray-700 hover:text-green-500">
                    TRANG CHỦ
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <div className="relative">
                  <button className="flex items-center gap-1 text-gray-700 hover:text-green-500">
                    DANH MỤC SẢN PHẨM
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <a href="#" className="text-gray-700 hover:text-green-500">
                  BÀI VIẾT
                </a>
                <a href="#" className="text-gray-700 hover:text-green-500">
                  LIÊN HỆ
                </a>
              </nav>
            </div>

            {/* User info */}
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-xs text-gray-500">CHÀO MỪNG</div>
                <div className="text-sm font-semibold">ĐĂNG NHẬP/ ĐĂNG KÝ</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500">GIỎ HÀNG</div>
                <div className="text-sm font-semibold text-green-500">$1,689.00</div>
              </div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-green-500 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4">
            <div className="flex-1 flex">
              <select className="px-4 py-2 bg-white border-r border-gray-300 rounded-l-md">
                <option>Danh mục</option>
              </select>
              <input type="text" placeholder="Tìm kiếm..." className="flex-1 px-4 py-2 border-none outline-none" />
              <button className="px-6 py-2 bg-green-600 text-white rounded-r-md hover:bg-green-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
            <div className="flex gap-8 text-white text-sm">
              <span>FREE SHIPPING OVER $199</span>
              <span>30 DAYS MONEY BACK</span>
              <span>100% SECURE PAYMENT</span>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-200 py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="#" className="hover:text-green-500">
              Trang chủ
            </a>
            <span>/</span>
            <span>Đăng nhập</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Illustration */}
            <div className="flex justify-center">
              <img src="/vietnamese-e-commerce-login-illustration-with-peop.jpg" alt="Login illustration" className="max-w-full h-auto" />
            </div>

            {/* Login Form */}
            <div>
              <h1 className="text-2xl font-bold text-green-500 mb-8">Welcome Back</h1>
              <LoginForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
