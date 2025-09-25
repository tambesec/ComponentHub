"use client"

import { useState } from "react"
import {
  Star,
  Heart,
  ShoppingCart,
  Minus,
  Plus,
  Share2,
  Shield,
  Truck,
  RotateCcw,
  Phone,
  ArrowLeft,
} from "lucide-react"
import { motion } from "framer-motion"
import Header from "../../../src/components/Header"
import Footer from "../../../src/components/Footer"
import Link from "next/link"
import { getProductById, networkProducts } from "../../../src/data/products"
import { useParams } from "next/navigation"

export default function SingleProductPage() {
  const params = useParams()
  const productId = params.id as string

  const product = getProductById(productId) || networkProducts[0]

  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("description")

  const productImages = [
    product.image,
    `/placeholder.svg?height=500&width=500&query=${product.name} side view`,
    `/placeholder.svg?height=500&width=500&query=${product.name} back view`,
    `/placeholder.svg?height=500&width=500&query=${product.name} packaging`,
  ]

  const relatedProducts = networkProducts.filter((p) => p.id !== product.id).slice(0, 4)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price)
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
          <Link href="/products" className="hover:text-green-600 transition-colors">
            Sản phẩm
          </Link>
          <span>/</span>
          <span className="text-black font-medium">{product.nameVi}</span>
        </div>
      </motion.div>

      <div className="w-full max-w-[1300px] mx-auto px-4 lg:px-8 pb-16">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Quay lại danh sách sản phẩm
          </Link>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg p-4 lg:p-8 mb-8 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="mb-4">
                <motion.img
                  key={selectedImage}
                  src={productImages[selectedImage]}
                  alt={product.nameVi}
                  className="w-full h-[300px] lg:h-[500px] object-cover rounded-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                />
              </div>
              <div className="flex gap-3 overflow-x-auto">
                {productImages.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? "border-green-600" : "border-gray-200"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Product ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="mb-6">
                <motion.h1
                  className="text-xl lg:text-2xl font-bold text-gray-900 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {product.nameVi}
                </motion.h1>

                <motion.div
                  className="flex items-center gap-4 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + i * 0.05 }}
                      >
                        <Star
                          className={`w-5 h-5 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      </motion.div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews} đánh giá)</span>
                  <span className="text-sm text-gray-600">|</span>
                  <span className="text-sm text-green-600">{product.inStock ? "Còn hàng" : "Hết hàng"}</span>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <span className="text-2xl lg:text-3xl font-bold text-green-600">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-lg lg:text-xl text-gray-500 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                      <span className="bg-red-500 text-white px-2 py-1 text-sm font-semibold rounded">
                        -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                      </span>
                    </>
                  )}
                </motion.div>
              </div>

              {/* Brand and Category */}
              <motion.div
                className="flex gap-4 mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="bg-gray-50 px-3 py-1 rounded-lg">
                  <span className="text-sm text-gray-600">Thương hiệu: </span>
                  <span className="text-sm font-semibold">{product.brand}</span>
                </div>
                <div className="bg-gray-50 px-3 py-1 rounded-lg">
                  <span className="text-sm text-gray-600">Danh mục: </span>
                  <span className="text-sm font-semibold capitalize">{product.category}</span>
                </div>
              </motion.div>

              {/* Quantity */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <h3 className="font-semibold text-gray-900 mb-3">Số lượng:</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <motion.button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-gray-100 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Minus className="w-4 h-4" />
                    </motion.button>
                    <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
                    <motion.button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 hover:bg-gray-100 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Plus className="w-4 h-4" />
                    </motion.button>
                  </div>
                  <span className="text-sm text-gray-600">sản phẩm có sẵn</span>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="space-y-4 mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    disabled={!product.inStock}
                    whileHover={{ scale: product.inStock ? 1.02 : 1 }}
                    whileTap={{ scale: product.inStock ? 0.98 : 1 }}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    {product.inStock ? "Thêm vào giỏ hàng" : "Hết hàng"}
                  </motion.button>
                  <motion.button
                    className="px-6 py-3 border border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed"
                    disabled={!product.inStock}
                    whileHover={{ scale: product.inStock ? 1.02 : 1 }}
                    whileTap={{ scale: product.inStock ? 0.98 : 1 }}
                  >
                    Mua ngay
                  </motion.button>
                </div>

                <div className="flex gap-4">
                  <motion.button
                    className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Heart className="w-5 h-5" />
                    Yêu thích
                  </motion.button>
                  <motion.button
                    className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Share2 className="w-5 h-5" />
                    Chia sẻ
                  </motion.button>
                </div>
              </motion.div>

              {/* Guarantees */}
              <motion.div
                className="border-t pt-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: Shield, title: "Bảo hành chính hãng", subtitle: "12 tháng" },
                    { icon: Truck, title: "Miễn phí vận chuyển", subtitle: "Đơn hàng từ 500k" },
                    { icon: RotateCcw, title: "Đổi trả 30 ngày", subtitle: "Miễn phí đổi trả" },
                    { icon: Phone, title: "Hỗ trợ 24/7", subtitle: "(025) 3686 25 16" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                    >
                      <item.icon className="w-6 h-6 text-green-600" />
                      <div>
                        <p className="font-semibold text-sm">{item.title}</p>
                        <p className="text-xs text-gray-600">{item.subtitle}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Product Details Tabs */}
        <motion.div
          className="bg-white rounded-lg p-4 lg:p-8 mb-8 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="border-b mb-6">
            <div className="flex gap-4 lg:gap-8 overflow-x-auto">
              {[
                { id: "description", label: "Mô tả sản phẩm" },
                { id: "specifications", label: "Thông số kỹ thuật" },
                { id: "reviews", label: `Đánh giá (${product.reviews})` },
              ].map((tab, index) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-4 border-b-2 font-semibold whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-green-600 text-green-600"
                      : "border-transparent text-gray-600 hover:text-green-600"
                  } transition-colors`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </div>

          <motion.div
            className="prose max-w-none"
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "description" && (
              <div>
                <h3 className="text-xl font-bold mb-4">{product.nameVi}</h3>
                <p className="text-gray-700 mb-6">{product.descriptionVi}</p>

                <h4 className="text-lg font-semibold mb-3">Tính năng nổi bật:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {product.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "specifications" && (
              <div>
                <h3 className="text-xl font-bold mb-4">Thông số kỹ thuật</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      className="flex justify-between py-2 border-b border-gray-100"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="font-semibold text-gray-700">{key}:</span>
                      <span className="text-gray-600">{value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <h3 className="text-xl font-bold mb-4">Đánh giá khách hàng</h3>
                <div className="space-y-6">
                  {[
                    {
                      name: "Nguyễn Văn A",
                      rating: 5,
                      time: "2 ngày trước",
                      comment: "Sản phẩm rất tốt, chất lượng cao, giao hàng nhanh. Rất hài lòng với sự lựa chọn này.",
                    },
                    {
                      name: "Trần Thị B",
                      rating: 4,
                      time: "1 tuần trước",
                      comment: "Chất lượng ổn, giá cả hợp lý. Sẽ tiếp tục ủng hộ shop.",
                    },
                  ].map((review, index) => (
                    <motion.div
                      key={index}
                      className="border-b pb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <div className="flex items-center gap-4 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span className="font-semibold">{review.name}</span>
                        <span className="text-sm text-gray-500">{review.time}</span>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* Related Products */}
        <motion.div
          className="bg-white rounded-lg p-4 lg:p-8 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Sản phẩm liên quan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct, index) => (
              <motion.div
                key={relatedProduct.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative">
                  <img
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.nameVi}
                    className="w-full h-48 object-cover"
                  />
                  {relatedProduct.originalPrice && (
                    <span className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">
                      -
                      {Math.round(
                        ((relatedProduct.originalPrice - relatedProduct.price) / relatedProduct.originalPrice) * 100,
                      )}
                      %
                    </span>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm">{relatedProduct.nameVi}</h3>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${i < Math.floor(relatedProduct.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">({relatedProduct.reviews})</span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg font-bold text-green-600">{formatPrice(relatedProduct.price)}</span>
                    {relatedProduct.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {formatPrice(relatedProduct.originalPrice)}
                      </span>
                    )}
                  </div>

                  <Link href={`/products/${relatedProduct.id}`}>
                    <motion.button
                      className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Xem chi tiết
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}
