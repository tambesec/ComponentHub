import { Metadata } from "next";
import PageBreadCrumb from "@/components/common/PageBreadCrumb";
import ProductForm from "@/components/ecommerce/ProductForm";

export const metadata: Metadata = {
  title: "Chỉnh Sửa Sản Phẩm | NetTechPro Admin",
  description: "Chỉnh sửa thông tin sản phẩm",
};

export default function EditProductPage({ params }: { params: { id: string } }) {
  // TODO: Fetch product data from API
  const productData = {
    id: params.id,
    name: "TP-Link Archer C6 - Router WiFi AC1200 MU-MIMO",
    category: "Router",
    brand: "TP-Link",
    price: 850000,
    salePrice: 650000,
    stock: 85,
    status: "active",
    description: "Router WiFi chuẩn AC1200 với công nghệ MU-MIMO",
    shortDescription: "Router WiFi AC1200 hiệu suất cao",
    specifications: '{"speed": "AC1200", "ports": "4x LAN + 1x WAN", "antennas": "4x External"}',
    images: ["/images/products/product-2-sm-1.png"],
  };

  return (
    <>
      <PageBreadCrumb pageTitle="Chỉnh Sửa Sản Phẩm" />
      
      <div className="flex flex-col gap-6">
        <ProductForm mode="edit" productData={productData} />
      </div>
    </>
  );
}
