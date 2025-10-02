"use client"
import { Star, Heart, ShoppingCart, Eye } from "lucide-react"
import { motion } from "framer-motion"

interface ProductCardProps {
  id: number
  name: string
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  image: string
  badges?: string[]
  inStock: boolean
  onAddToCart?: (id: number) => void
  onAddToWishlist?: (id: number) => void
  onQuickView?: (id: number) => void
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  rating,
  reviewCount,
  image,
  badges = [],
  inStock,
  onAddToCart,
  onAddToWishlist,
  onQuickView,
}: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price)
  }

  const discountPercentage = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0

  return (
    <motion.div
      className="bg-white rounded-lg border border-gray-100 p-4 hover:shadow-xl transition-all duration-300 group relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {/* Product Image */}
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <motion.img
          src={image}
          alt={name}
          referrerPolicy="no-referrer"
          className="w-full h-48 object-cover transition-transform duration-500"
          whileHover={{ scale: 1.1 }}
        />

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <motion.div
            className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold"
            initial={{ scale: 0, rotate: -12 }}
            animate={{ scale: 1, rotate: -12 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 500 }}
          >
            -{discountPercentage}%
          </motion.div>
        )}

        {/* Action Buttons */}
        <motion.div
          className="absolute top-2 right-2 flex flex-col gap-2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            onClick={() => onAddToWishlist?.(id)}
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 shadow-md"
            title="Thêm vào yêu thích"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
          </motion.button>
          <motion.button
            onClick={() => onQuickView?.(id)}
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 shadow-md"
            title="Xem nhanh"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Eye className="w-4 h-4 text-gray-600" />
          </motion.button>
        </motion.div>

        {/* Stock Status */}
        {!inStock && (
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-white font-bold">Hết hàng</span>
          </motion.div>
        )}
      </div>

      {/* Product Info */}
      <motion.div
        className="space-y-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex text-yellow-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.div
                key={star}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + star * 0.05 }}
              >
                <Star className={`w-3 h-3 ${star <= rating ? "fill-current" : ""}`} />
              </motion.div>
            ))}
          </div>
          <span className="text-xs text-gray-500">({reviewCount})</span>
        </div>

        {/* Product Name */}
        <motion.h4
          className="text-sm font-bold text-black line-clamp-2 hover:text-green-600 cursor-pointer transition-colors"
          whileHover={{ scale: 1.02 }}
        >
          {name}
        </motion.h4>

        {/* Price */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <span className="text-lg font-semibold text-green-600">{formatPrice(price)}</span>
          {originalPrice && (
            <span className="text-sm font-semibold text-gray-500 line-through">{formatPrice(originalPrice)}</span>
          )}
        </motion.div>

        {/* Badges */}
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {badges.slice(0, 2).map((badge, index) => (
              <motion.span
                key={index}
                className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded uppercase"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {badge}
              </motion.span>
            ))}
          </div>
        )}

        {/* Stock Status */}
        <div className="flex items-center gap-2">
          <motion.div
            className={`w-2 h-2 rounded-full ${inStock ? "bg-green-500" : "bg-red-500"}`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
          ></motion.div>
          <span className="text-xs text-gray-600">{inStock ? "Còn hàng" : "Hết hàng"}</span>
        </div>

        {/* Add to Cart Button */}
        <motion.button
          onClick={() => onAddToCart?.(id)}
          disabled={!inStock}
          className="w-full bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-bold uppercase hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
          whileHover={{ scale: inStock ? 1.02 : 1 }}
          whileTap={{ scale: inStock ? 0.98 : 1 }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <ShoppingCart className="w-4 h-4" />
          {inStock ? "Thêm vào giỏ" : "Hết hàng"}
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
