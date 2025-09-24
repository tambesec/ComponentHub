"use client"
\
'../../src/components/Footerw I\'ll create the about page based on the about page image provided:

<CodeProject id="Home11" taskNameActive="Creating about page" taskNameComplete="Created about page">

```tsx file="app/about/page.tsx"
'use client'

import { Users, Award, TrendingUp } from "lucide-react"
import Header from "../../src/components/Header"
import Footer from "../../src/components/Footer"

export default function AboutPage() {
  const stats = [
    { number: "$12,5M", label: "Tổng doanh thu năm 2024", icon: TrendingUp },
    { number: "12K+", label: "Khách hàng tin tưởng và sử dụng dịch vụ", icon: Users },
    { number: "725+", label: "Loại sản phẩm được cung cấp", icon: Award },
  ]

  const timeline = [
    { year: "1995", event: "Thành lập công ty với 5 nhân viên đầu tiên" },
    { year: "2000", event: "Mở rộng sang thị trường miền Nam" },
    { year: "2004", event: "Ra mắt website thương mại điện tử đầu tiên" },
    { year: "2008", event: "Đạt mốc 1 triệu khách hàng" },
    { year: "2012", event: "Khai trương trung tâm logistics hiện đại" },
    { year: "2016", event: "Triển khai ứng dụng mobile" },
    { year: "2020", event: "Chuyển đổi số toàn diện" },
    { year: "2024", event: "Đạt doanh thu 12.5 triệu USD" },
  ]

  const leaders = [
    {
      name: "Henry Berry",
      position: "CEO & Founder",
      image: "/henry-berry.jpg",
    },
    {
      name: "Michael Edward",
      position: "CTO",
      image: "/michael-edward.jpg",
    },
    {
      name: "Eden Howard",
      position: "Marketing Director",
      image: "/eden-howard.jpg",
    },
    {
      name: "Robert Downey Jr",
      position: "Sales Director",
      image: "/robert-downey.jpg",
    },
    {
      name: "Nathan Drake",
      position: "Product Manager",
      image: "/nathan-drake.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative w-[1300px] mx-auto px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Best experience always wins</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            #1 Online Marketplace for Electronics & Technology in Vietnam, CA
          </p>
          <div className="flex justify-center">
            <img src="/modern-office-building-with-delivery-boxes.jpg" alt="Company Building" className="rounded-lg shadow-2xl max-w-2xl" />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="w-[1300px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              OUR PURPOSE IS TO DESIGN TECHNOLOGY THROUGH TECHNOLOGY
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-green-600 text-white">
        <div className="w-[1300px] mx-auto px-8">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                We connect millions of buyers and sellers around the world, empowering people & creating economic
                opportunity for all.
              </h2>
              <p className="text-lg mb-6">
                Chúng tôi kết nối hàng triệu người mua và người bán trên khắp thế giới, trao quyền cho mọi người và tạo
                cơ hội kinh tế cho tất cả. Với sứ mệnh mang lại trải nghiệm mua sắm tốt nhất, chúng tôi luôn đặt khách
                hàng làm trung tâm của mọi hoạt động.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <p className="text-sm">Chất lượng sản phẩm hàng đầu</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <p className="text-sm">Dịch vụ khách hàng tận tâm</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <p className="text-sm">Giao hàng nhanh chóng</p>
                </div>
              </div>
            </div>
            <div>
              <img src="/happy-customer-service-team-working-together.jpg" alt="Our Team" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Company Story */}
      <div className="py-16 bg-white">
        <div className="w-[1300px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">SỰ MỆNH VÀ TẦM NHÌN CỦA CHÚNG TÔI</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Năm ngoái chúng tôi đã trở thành một nền tảng thương mại điện tử hàng đầu. Chúng tôi đã mang lại những sản
              phẩm chất lượng cao và dịch vụ tốt nhất cho khách hàng. Với hơn 10 năm kinh nghiệm trong ngành, chúng tôi
              hiểu rõ nhu cầu của khách hàng và luôn nỗ lực để đáp ứng mọi mong đợi.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 mb-16">
            <img src="/modern-warehouse-with-technology-equipment.jpg" alt="Our Warehouse" className="rounded-lg shadow-lg" />
            <img src="/customer-using-laptop-for-online-shopping.jpg" alt="Customer Experience" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-16 bg-gray-100">
        <div className="w-[1300px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">FROM A RETAIL STORE TO THE GLOBAL CHAIN OF STORES</h2>
            <p className="text-lg text-gray-600">Hành trình phát triển của chúng tôi qua các năm</p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              {timeline.slice(0, 4).map((item, index) => (
                <div key={index} className="flex gap-4 mb-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                      {item.year}
                    </div>
                  </div>
                  <div className="pt-3">
                    <p className="text-gray-700">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              {timeline.slice(4).map((item, index) => (
                <div key={index} className="flex gap-4 mb-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                      {item.year}
                    </div>
                  </div>
                  <div className="pt-3">
                    <p className="text-gray-700">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="py-16 bg-white">
        <div className="w-[1300px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">LEADERSHIPS</h2>
            <p className="text-lg text-gray-600">Đội ngũ lãnh đạo giàu kinh nghiệm của chúng tôi</p>
          </div>

          <div className="grid grid-cols-5 gap-6">
            {leaders.map((leader, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={`/professional-business-person.png?height=128&width=128&query=professional business person ${leader.name}`}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-900">{leader.name}</h3>
                <p className="text-sm text-gray-600">{leader.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
