import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CategorySidebar from "../components/CategorySidebar";
import HeroSlider from "../components/HeroSlider";
import ProductGrid from "../components/ProductGrid";
import BrandSection from "../components/BrandSection";
import CategorySection from "../components/CategorySection";
import FeaturedProducts from "../components/FeaturedProducts";
import NewsletterSection from "../components/NewsletterSection";
import Footer from "../components/Footer";

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
                src="https://dummyimage.com/309x215/f5f5f5/333333?text=Smart+Watch+Banner" 
                alt="Smart Watch Banner"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1 lg:w-[309px] h-[150px] lg:h-[215px] bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://dummyimage.com/309x215/1aba1a/ffffff?text=Action+Camera+Banner" 
                alt="Action Camera Banner"
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
  );
}
