import Header from "../src/components/Header"
import SearchBar from "../src/components/SearchBar"
import CategorySidebar from "../src/components/CategorySidebar"
import HeroSlider from "../src/components/HeroSlider"
import ProductGrid from "../src/components/ProductGrid"
import BrandSection from "../src/components/BrandSection"
import CategorySection from "../src/components/CategorySection"
import FeaturedProducts from "../src/components/FeaturedProducts"
import NewsletterSection from "../src/components/NewsletterSection"
import Footer from "../src/components/Footer"

export default function HomePage() {
  return (
    <div className="w-full max-w-[1920px] mx-auto bg-[#e2e4eb] relative min-h-screen">
      {/* Header */}
      <div className="px-4 lg:px-0">
        <Header />
      </div>

      {/* Search Bar */}
      <div className="px-4 lg:px-0">
        <SearchBar />
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[1300px] mx-auto mt-5 px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Category Sidebar */}
          <div className="lg:w-[309px]">
            <CategorySidebar />
          </div>

          {/* Hero Slider */}
          <div className="flex-1 lg:w-[650px]">
            <HeroSlider />
          </div>

          {/* Side Banners */}
          <div className="flex flex-row lg:flex-col gap-4 lg:w-[309px]">
            <div className="flex-1 lg:w-[309px] h-[150px] lg:h-[215px] bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                src="/network-devices-banner.jpg"
                alt="Network Devices Collection"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1 lg:w-[309px] h-[150px] lg:h-[215px] bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                src="/router-wifi6-tplink.jpg"
                alt="Router Wifi 6 Banner"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Brand and Category Sections */}
      <div className="w-full max-w-[1300px] mx-auto mt-8 px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-8">
          <BrandSection />
          <CategorySection />
        </div>
      </div>

      {/* Newsletter */}
      <div className="px-4 lg:px-0">
        <NewsletterSection />
      </div>

      {/* Featured Products */}
      <div className="px-4 lg:px-0">
        <FeaturedProducts />
      </div>

      {/* Product Grid */}
      <div className="px-4 lg:px-0">
        <ProductGrid />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
