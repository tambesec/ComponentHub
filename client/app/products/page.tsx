"use client"

import { useState } from "react"
import { Grid, List, ShoppingCart, Filter } from "lucide-react"
import { motion } from "framer-motion"
import Header from "../../src/components/Header"
import Footer from "../../src/components/Footer"
import ProductCard from "../../src/components/ProductCard"
import Link from "next/link"
import { networkProducts } from "../../src/data/products"

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("default")
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const products = networkProducts

  const categories = [
    { name: "router", displayName: "Router WiFi", count: products.filter((p) => p.category === "router").length },
    { name: "camera", displayName: "Camera IP", count: products.filter((p) => p.category === "camera").length },
    { name: "switch", displayName: "Switch Mạng", count: products.filter((p) => p.category === "switch").length },
    { name: "access-point", displayName: "Access Point", count: 12 },
    { name: "modem", displayName: "Modem", count: 8 },
    { name: "firewall", displayName: "Firewall", count: 6 },
  ]

  const brands = [
    { name: "TP-Link", count: products.filter((p) => p.brand === "TP-Link").length },
    { name: "ASUS", count: products.filter((p) => p.brand === "ASUS").length },
    { name: "NETGEAR", count: products.filter((p) => p.brand === "NETGEAR").length },
    { name: "Hikvision", count: products.filter((p) => p.brand === "Hikvision").length },
    { name: "Dahua", count: products.filter((p) => p.brand === "Dahua").length },
    { name: "Cisco", count: products.filter((p) => p.brand === "Cisco").length },
    { name: "Ubiquiti", count: 15 },
    { name: "D-Link", count: 12 },
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price)
  }

  // Filter and sort products
  let filteredProducts = products

  if (selectedCategories.length > 0) {
    filteredProducts = filteredProducts.filter((product) => selectedCategories.includes(product.category))
  }

  if (selectedBrands.length > 0) {
    filteredProducts = filteredProducts.filter((product) => selectedBrands.includes(product.brand))
  }

  // Sort products
  switch (sortBy) {
    case "price-low":
      filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price)
      break
    case "price-high":
      filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price)
      break
    case "rating":
      filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating)
      break
    case "newest":
      filteredProducts = [...filteredProducts].sort((a, b) => b.reviews - a.reviews)
      break
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <motion.div
        className="w-full max-w-[1300px] mx-auto px-4 lg:px-8 py-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-green-600 transition-colors">
            Trang chủ
          </Link>
          <span>/</span>
          <span className="text-black font-medium">Thiết bị mạng</span>
        </div>
      </motion.div>

      <div className="w-full max-w-[1300px] mx-auto px-4 lg:px-8 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full bg-white rounded-lg p-4 flex items-center justify-center gap-2 shadow-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Filter className="w-4 h-4" />
              Bộ lọc
            </motion.button>
          </div>

          {/* Sidebar Filters */}
          <motion.div
            className={`w-full lg:w-80 bg-white rounded-lg p-6 h-fit shadow-sm ${showFilters ? "block" : "hidden lg:block"}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-bold text-black uppercase mb-6">THIẾT BỊ MẠNG</h3>

            {/* Categories */}
            <div className="mb-8">
              <h4 className="font-semibold text-black mb-4">Danh mục</h4>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <motion.label
                    key={category.name}
                    className="flex items-center justify-between cursor-pointer group"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedCategories([...selectedCategories, category.name])
                          } else {
                            setSelectedCategories(selectedCategories.filter((c) => c !== category.name))
                          }
                        }}
                      />
                      <span className="text-sm text-gray-700 group-hover:text-green-600 transition-colors">
                        {category.displayName}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">({category.count})</span>
                  </motion.label>
                ))}
              </div>
            </div>

            {/* Brands */}
            <div className="mb-8">
              <h4 className="font-semibold text-black mb-4">Thương hiệu</h4>
              <div className="space-y-3">
                {brands.map((brand, index) => (
                  <motion.label
                    key={brand.name}
                    className="flex items-center justify-between cursor-pointer group"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedBrands([...selectedBrands, brand.name])
                          } else {
                            setSelectedBrands(selectedBrands.filter((b) => b !== brand.name))
                          }
                        }}
                      />
                      <span className="text-sm text-gray-700 group-hover:text-green-600 transition-colors">
                        {brand.name}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">({brand.count})</span>
                  </motion.label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-8">
              <h4 className="font-semibold text-black mb-4">Khoảng giá</h4>
              <div className="space-y-3">
                {[
                  { label: "Dưới 1 triệu", value: "under-1m" },
                  { label: "1 - 3 triệu", value: "1m-3m" },
                  { label: "3 - 5 triệu", value: "3m-5m" },
                  { label: "5 - 10 triệu", value: "5m-10m" },
                  { label: "Trên 10 triệu", value: "over-10m" },
                ].map((price, index) => (
                  <motion.label
                    key={price.value}
                    className="flex items-center gap-3 cursor-pointer group"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    whileHover={{ x: 5 }}
                  >
                    <input type="radio" name="price" className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700 group-hover:text-green-600 transition-colors">
                      {price.label}
                    </span>
                  </motion.label>
                ))}
              </div>
            </div>

            {/* Filter Button */}
            <motion.button
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Áp dụng bộ lọc
            </motion.button>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Top Bar */}
            <motion.div
              className="bg-white rounded-lg p-4 lg:p-6 mb-6 shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">Sắp xếp theo:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-green-500"
                  >
                    <option value="default">Mặc định</option>
                    <option value="price-low">Giá thấp đến cao</option>
                    <option value="price-high">Giá cao đến thấp</option>
                    <option value="rating">Đánh giá cao nhất</option>
                    <option value="newest">Phổ biến nhất</option>
                  </select>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">
                    Hiển thị: 1-{filteredProducts.length} của {filteredProducts.length} sản phẩm
                  </span>
                  <div className="flex items-center gap-2">
                    <motion.button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded transition-colors ${viewMode === "grid" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Grid className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded transition-colors ${viewMode === "list" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <List className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Products Grid */}
            <motion.div
              className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Link href={`/products/${product.id}`}>
                    <ProductCard
                      id={Number.parseInt(product.id.split("-")[0] || "1")}
                      name={product.nameVi}
                      price={product.price}
                      originalPrice={product.originalPrice}
                      rating={product.rating}
                      reviewCount={product.reviews}
                      image={product.image}
                      badges={product.features.slice(0, 2)}
                      inStock={product.inStock}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-gray-400 mb-4">
                  <ShoppingCart className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Không tìm thấy sản phẩm</h3>
                <p className="text-gray-500">Thử thay đổi bộ lọc để xem thêm sản phẩm</p>
              </motion.div>
            )}

            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <motion.div
                className="flex items-center justify-center gap-2 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <motion.button
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Trước
                </motion.button>
                <motion.button
                  className="px-4 py-2 bg-green-600 text-white rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  1
                </motion.button>
                <motion.button
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  2
                </motion.button>
                <span className="px-2 text-gray-500">...</span>
                <motion.button
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sau
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
