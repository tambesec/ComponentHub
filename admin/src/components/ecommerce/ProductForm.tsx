"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface ProductFormProps {
  mode: "add" | "edit";
  productData?: any;
}

const ProductForm: React.FC<ProductFormProps> = ({ mode, productData }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: productData?.name || "",
    category: productData?.category || "",
    brand: productData?.brand || "",
    price: productData?.price || "",
    salePrice: productData?.salePrice || "",
    stock: productData?.stock || "",
    description: productData?.description || "",
    shortDescription: productData?.shortDescription || "",
    specifications: productData?.specifications || "",
    status: productData?.status || "active",
  });

  const [images, setImages] = useState<string[]>(productData?.images || []);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // Handle image upload - placeholder
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages((prev) => [...prev, ...newImages]);
    }
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // TODO: API call to save product
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      alert(
        mode === "add"
          ? "Thêm sản phẩm thành công!"
          : "Cập nhật sản phẩm thành công!"
      );
      router.push("/products");
    } catch (error) {
      alert("Có lỗi xảy ra. Vui lòng thử lại!");
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    "Router",
    "Switch",
    "Access Point",
    "Firewall",
    "USB WiFi",
    "Cáp mạng",
    "Card mạng",
    "Modem",
    "Repeater",
    "Power over Ethernet (PoE)",
  ];

  const brands = [
    "TP-Link",
    "Asus",
    "D-Link",
    "Tenda",
    "Mercusys",
    "Cisco",
    "Ubiquiti",
    "Aruba",
    "Commscope",
    "AMP",
  ];

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">
          {mode === "add" ? "Thông tin sản phẩm mới" : "Chỉnh sửa sản phẩm"}
        </h3>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="p-6.5">
          <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
            {/* Product Name */}
            <div className="w-full xl:w-1/2">
              <label className="mb-2.5 block text-black dark:text-white">
                Tên sản phẩm <span className="text-meta-1">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Nhập tên sản phẩm"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            {/* Brand */}
            <div className="w-full xl:w-1/2">
              <label className="mb-2.5 block text-black dark:text-white">
                Thương hiệu <span className="text-meta-1">*</span>
              </label>
              <select
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                required
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              >
                <option value="">Chọn thương hiệu</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
            {/* Category */}
            <div className="w-full xl:w-1/2">
              <label className="mb-2.5 block text-black dark:text-white">
                Danh mục <span className="text-meta-1">*</span>
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              >
                <option value="">Chọn danh mục</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Status */}
            <div className="w-full xl:w-1/2">
              <label className="mb-2.5 block text-black dark:text-white">
                Trạng thái <span className="text-meta-1">*</span>
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              >
                <option value="active">Đang bán</option>
                <option value="inactive">Ngừng bán</option>
                <option value="draft">Nháp</option>
              </select>
            </div>
          </div>

          <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
            {/* Price */}
            <div className="w-full xl:w-1/3">
              <label className="mb-2.5 block text-black dark:text-white">
                Giá gốc (VNĐ) <span className="text-meta-1">*</span>
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                placeholder="0"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            {/* Sale Price */}
            <div className="w-full xl:w-1/3">
              <label className="mb-2.5 block text-black dark:text-white">
                Giá khuyến mãi (VNĐ)
              </label>
              <input
                type="number"
                name="salePrice"
                value={formData.salePrice}
                onChange={handleChange}
                placeholder="0"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            {/* Stock */}
            <div className="w-full xl:w-1/3">
              <label className="mb-2.5 block text-black dark:text-white">
                Số lượng tồn kho <span className="text-meta-1">*</span>
              </label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                required
                placeholder="0"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
          </div>

          {/* Short Description */}
          <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Mô tả ngắn
            </label>
            <textarea
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleChange}
              rows={2}
              placeholder="Mô tả ngắn về sản phẩm (hiển thị trong danh sách)"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            ></textarea>
          </div>

          {/* Description */}
          <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Mô tả chi tiết
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={6}
              placeholder="Mô tả chi tiết về sản phẩm"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            ></textarea>
          </div>

          {/* Specifications */}
          <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Thông số kỹ thuật (JSON)
            </label>
            <textarea
              name="specifications"
              value={formData.specifications}
              onChange={handleChange}
              rows={4}
              placeholder='{"speed": "AC1200", "ports": "4x LAN + 1x WAN"}'
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-mono text-sm outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            ></textarea>
          </div>

          {/* Images Upload */}
          <div className="mb-6">
            <label className="mb-2.5 block text-black dark:text-white">
              Hình ảnh sản phẩm
            </label>
            
            <div className="mb-4">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
              />
            </div>

            {/* Image Preview */}
            {images.length > 0 && (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {images.map((image, index) => (
                  <div key={index} className="relative group">
                    <Image
                      src={image}
                      alt={`Product ${index + 1}`}
                      width={150}
                      height={150}
                      className="h-32 w-full rounded-lg object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 rounded-full bg-danger p-1.5 text-white opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      <svg
                        className="fill-current"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.225 3.775L8 8L3.775 3.775L3.062 4.488L7.287 8.713L3.062 12.938L3.775 13.651L8 9.426L12.225 13.651L12.938 12.938L8.713 8.713L12.938 4.488L12.225 3.775Z"
                          fill=""
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-95 disabled:opacity-50"
            >
              {loading ? "Đang xử lý..." : mode === "add" ? "Thêm sản phẩm" : "Cập nhật"}
            </button>
            
            <Link
              href="/products"
              className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
            >
              Hủy
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
