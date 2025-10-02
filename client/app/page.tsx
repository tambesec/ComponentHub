import Header from "../components/Header"
import Footer from "../components/Footer"
import SearchBar from "../src/components/SearchBar"
import CategorySidebar from "../src/components/CategorySidebar"
import HeroSlider from "../src/components/HeroSlider"
import ProductGrid from "../src/components/ProductGrid"
import BrandSection from "../src/components/BrandSection"
import CategorySection from "../src/components/CategorySection"
import FeaturedProducts from "../src/components/FeaturedProducts"
import NewsletterSection from "../src/components/NewsletterSection"
import AnimatedSection from "../components/AnimatedSection"

export default function HomePage() {
  return (
    <div className="w-full max-w-[1920px] mx-auto bg-[#e2e4eb] relative min-h-screen">
      {/* Header */}
      <AnimatedSection className="px-4 lg:px-0">
        <Header />
      </AnimatedSection>

      {/* Search Bar */}
      <AnimatedSection className="px-4 lg:px-0" delay={0.1}>
        <SearchBar />
      </AnimatedSection>

      {/* Main Content */}
      <div className="w-full max-w-[1300px] mx-auto mt-5 px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Category Sidebar */}
          <AnimatedSection className="lg:w-[309px]" delay={0.2} direction="left">
            <CategorySidebar />
          </AnimatedSection>

          {/* Hero Slider */}
          <AnimatedSection className="flex-1 lg:w-[650px]" delay={0.3}>
            <HeroSlider />
          </AnimatedSection>

          {/* Side Banners */}
          <AnimatedSection className="flex flex-row lg:flex-col gap-4 lg:w-[309px]" delay={0.4} direction="right">
            <div className="flex-1 lg:w-[309px] h-[150px] lg:h-[215px] bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                src="/network-devices-collection-banner.jpg"
                alt="Network Devices Collection"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1 lg:w-[309px] h-[150px] lg:h-[215px] bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                src="/router-wifi-6-tp-link-banner.jpg"
                alt="Router Wifi 6 Banner"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Brand and Category Sections */}
      <div className="w-full max-w-[1300px] mx-auto mt-8 px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-8">
          <AnimatedSection delay={0.5} direction="left">
            <BrandSection />
          </AnimatedSection>
          <AnimatedSection delay={0.6} direction="right">
            <CategorySection />
          </AnimatedSection>
        </div>
      </div>

      {/* Newsletter */}
      <AnimatedSection className="px-4 lg:px-0" delay={0.7}>
        <NewsletterSection />
      </AnimatedSection>

      {/* Featured Products */}
      <AnimatedSection className="px-4 lg:px-0" delay={0.8}>
        <FeaturedProducts />
      </AnimatedSection>

      {/* Product Grid */}
      <AnimatedSection className="px-4 lg:px-0" delay={0.9}>
        <ProductGrid />
      </AnimatedSection>

      {/* Footer */}
      <AnimatedSection delay={1.0}>
        <Footer />
      </AnimatedSection>
    </div>
  )
}
