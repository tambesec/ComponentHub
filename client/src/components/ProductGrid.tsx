import { ChevronRight, Wifi, Network, Camera, Radio, Usb, Package, Video, RotateCcw, Monitor } from "lucide-react"

export default function ProductGrid() {
  const productSections = [
    {
      title: "top cellphones & tablets",
      categories: [
        { name: "iPhone (iOS)", items: "74 Items" },
        { name: "Android", items: "35 Items" },
        { name: "5G Support", items: "12 Items" },
        { name: "Gaming", items: "9 Items" },
        { name: "Xiaomi", items: "52 Items" },
        { name: "Accessories", items: "29 Items" },
      ],
    },
    {
      title: "Best Laptops & Computers",
      categories: [
        { name: "Macbook", items: "74 Items" },
        { name: "Gaming PC", items: "5 Items" },
        { name: "Laptop Office", items: "22 Items" },
        { name: "Laptop 15''", items: "55 Items" },
        { name: "M1 2023", items: "32 Items" },
        { name: "Secondhand", items: "16 Items" },
      ],
    },
    {
      title: "Thiết bị mạng hàng đầu",
      categories: [
        { name: "Router Wifi 6", items: "24 Sản phẩm" },
        { name: "Switch Gigabit", items: "15 Sản phẩm" },
        { name: "Camera IP 4K", items: "32 Sản phẩm" },
        { name: "Mesh Wifi", items: "18 Sản phẩm" },
        { name: "USB Wifi", items: "12 Sản phẩm" },
        { name: "Phụ kiện", items: "29 Sản phẩm" },
      ],
      bannerImage: "/network-devices-banner.jpg",
      bannerTitle: "Router Wifi 6 TP-Link AX73",
      bannerSubtitle: "Tốc độ siêu nhanh AX5400",
    },
    {
      title: "Camera an ninh tốt nhất",
      categories: [
        { name: "Camera 4K", items: "18 Sản phẩm" },
        { name: "Camera IP", items: "25 Sản phẩm" },
        { name: "Camera Wifi", items: "22 Sản phẩm" },
        { name: "Camera PTZ", items: "8 Sản phẩm" },
        { name: "NVR 4K", items: "12 Sản phẩm" },
        { name: "Phụ kiện", items: "16 Sản phẩm" },
      ],
      bannerImage: "/ip-camera-4k.jpg",
      bannerTitle: "Camera IP 4K Hikvision",
      bannerSubtitle: "An ninh tuyệt đối với gia đình",
    },
  ]

  return (
    <div className="w-full max-w-[1300px] mx-auto mt-4 space-y-4 px-4 lg:px-0">
      {productSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-black uppercase">{section.title}</h3>
            <div className="flex items-center gap-2 text-primary hover:text-primary-dark cursor-pointer transition-colors">
              <span className="text-sm capitalize">View All</span>
              <ChevronRight className="w-3 h-3" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-[605px] h-[200px] bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg overflow-hidden relative">
              {section.bannerImage && (
                <img
                  src={section.bannerImage || "/placeholder.svg"}
                  alt={section.bannerTitle}
                  className="w-full h-full object-cover opacity-80"
                />
              )}
              <div className="absolute inset-0 flex items-center px-8">
                <div className="text-white">
                  <h4 className="text-xl md:text-2xl font-bold mb-2">{section.bannerTitle}</h4>
                  <p className="text-sm text-gray-200 mb-4">{section.bannerSubtitle}</p>
                  <button className="bg-white text-blue-800 px-6 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>

            {/* Categories Grid */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6">
              {section.categories.map((category, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="w-12 h-12 bg-gray-100 group-hover:bg-primary group-hover:text-white rounded-full mx-auto mb-3 flex items-center justify-center transition-colors">
                    {sectionIndex === 0 ? (
                      index === 0 ? (
                        <Wifi className="w-6 h-6" />
                      ) : index === 1 ? (
                        <Network className="w-6 h-6" />
                      ) : index === 2 ? (
                        <Camera className="w-6 h-6" />
                      ) : index === 3 ? (
                        <Radio className="w-6 h-6" />
                      ) : index === 4 ? (
                        <Usb className="w-6 h-6" />
                      ) : (
                        <Package className="w-6 h-6" />
                      )
                    ) : index === 0 ? (
                      <Camera className="w-6 h-6" />
                    ) : index === 1 ? (
                      <Video className="w-6 h-6" />
                    ) : index === 2 ? (
                      <Wifi className="w-6 h-6" />
                    ) : index === 3 ? (
                      <RotateCcw className="w-6 h-6" />
                    ) : index === 4 ? (
                      <Monitor className="w-6 h-6" />
                    ) : (
                      <Package className="w-6 h-6" />
                    )}
                  </div>
                  <h5 className="text-sm font-bold text-black group-hover:text-primary transition-colors">
                    {category.name}
                  </h5>
                  <span className="text-xs text-gray-500">{category.items}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
