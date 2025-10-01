import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { 
  HERO_IMAGES,
  CATEGORY_IMAGES,
  PRODUCT_IMAGES,
  PROMO_IMAGES,
  RECENT_IMAGES
} from '@/constants/images';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="max-w-[1320px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative aspect-[2/1] rounded-lg overflow-hidden">
              <Image
                src={HERO_IMAGES.main}
                alt="Main Banner"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center p-12">
                <h1 className="text-4xl font-bold text-white mb-4">Flash Sale<br/>Giảm 50%</h1>
                <button className="bg-white text-black px-8 py-3 rounded-full w-fit">
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="relative aspect-[2/1] rounded-lg overflow-hidden">
              <Image
                src={HERO_IMAGES.promo1}
                alt="Promotion 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[2/1] rounded-lg overflow-hidden">
              <Image
                src={HERO_IMAGES.promo2}
                alt="Promotion 2" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Network Equipment Section */}
      <section className="max-w-[1320px] mx-auto px-4 py-12 bg-white rounded-lg">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold uppercase">Thiết bị mạng</h2>
          <button className="text-gray-600 hover:text-green-500 capitalize">
            Xem tất cả
          </button>
        </div>

        {/* Featured Banner */}
        <div className="relative aspect-[3/1] rounded-lg overflow-hidden mb-12">
          <Image
            src={PROMO_IMAGES.networkBanner}
            alt="Network Equipment"
            fill
            className="object-cover"
          />
          <div className="absolute top-1/2 left-12 -translate-y-1/2">
            <h3 className="text-lg text-white font-bold uppercase mb-2">Router Gaming</h3>
            <h2 className="text-3xl text-white font-bold mb-4">WiFi Mesh System</h2>
            <span className="text-white text-sm">Best Performance</span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            { name: 'Router', count: 12, slug: 'router' },
            { name: 'Switch', count: 30, slug: 'switch' },
            { name: 'Hub', count: 15, slug: 'hub' },
            { name: 'Network Card', count: 9, slug: 'networkCard' },
            { name: 'WiFi USB', count: 25, slug: 'wifiUsb' },
            { name: 'Camera', count: 42, slug: 'camera' },
            { name: 'Gateway', count: 8, slug: 'gateway' },
            { name: 'Accessories', count: 56, slug: 'accessories' },
          ].map((category) => (
            <div key={category.name} className="group cursor-pointer">
              <div className="relative aspect-square rounded-full overflow-hidden mb-4 border-4 border-transparent group-hover:border-green-500 transition-colors">
                <Image
                  src={CATEGORY_IMAGES[category.slug as keyof typeof CATEGORY_IMAGES]}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-center text-lg">{category.name}</h3>
              <p className="text-sm text-gray-600 text-center">{category.count} Items</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-[1320px] mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold uppercase">Sản phẩm nổi bật</h2>
          <button className="text-gray-600 hover:text-green-500 capitalize">
            Xem tất cả
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              image: '/rational/product-1.jpg',
              title: 'ASUS RT-AX86U Pro',
              price: 579.00,
              rating: 5,
              reviewCount: 152,
              isNew: true,
              description: 'Dual Band WiFi 6 Gaming Router'
            },
            {
              image: '/rational/product-2.jpg',
              title: 'UniFi Dream Router',
              price: 979.00,
              rating: 4.8,
              reviewCount: 89,
              description: 'All-in-One Security Gateway'
            },
            {
              image: '/rational/product-3.jpg',
              title: 'Mikrotik CCR2004',
              price: '1279.00',
              rating: 4.6,
              reviewCount: 234,
              description: '12G-2XS Cloud Core Router'
            },
            {
              image: '/rational/product-4.jpg',
              title: 'TP-Link Deco X90',
              price: 579.00,
              originalPrice: 779.00,
              rating: 4.7,
              reviewCount: 152,
              description: 'AX6600 Whole Home Mesh System',
              discount: true
            },
          ].map((product) => (
            <ProductCard 
              key={product.title} 
              {...product} 
              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow"
            />
          ))}
        </div>
      </section>

      {/* Promotions */}
      <section className="max-w-[1320px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-lg overflow-hidden h-[180px]">
            <Image
              src="/rational/cashback-banner.jpg"
              alt="10% Cashback Promotion"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-8">
              <h3 className="text-[#FFE400] text-[40px] font-bold mb-2">10% Back</h3>
              <p className="text-white text-sm">
                Earn 10% Cash back on <span className="text-white">Swootech</span>.{' '}
                <span className="underline cursor-pointer">Learn How</span>
              </p>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden h-[180px] bg-gradient-to-br from-[#1a1a1a] to-[#333]">
            <div className="p-8 h-full flex flex-col">
              <h3 className="text-white text-2xl font-medium mb-2">
                Download<br />our app
              </h3>
              <p className="text-gray-400 text-xs mb-6">
                Enter your phone number and we&apos;ll<br />
                send you a download link.
              </p>
              <div className="flex gap-2 mt-auto">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="(+xx) xxx..."
                    className="w-full bg-white/10 text-white placeholder-gray-500 rounded-md px-4 py-3 text-sm"
                  />
                </div>
                <button className="text-green-400 uppercase text-xs font-bold bg-white/5 px-6 py-3 rounded-md hover:bg-white/10 transition-colors">
                  Send link
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Products */}
      <section className="max-w-[1320px] mx-auto px-4 py-12 bg-white rounded-lg">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold uppercase">Sản phẩm gần đây đã xem</h2>
          <button className="text-gray-600 hover:text-green-500 capitalize">
            Xem tất cả
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              image: '/rational/recent-1.jpg',
              title: 'Xomie Remid 8 Sport',
              description: 'Water Resistance Watch',
              price: 579.00,
              rating: 5,
              reviewCount: 152,
              isNew: true,
            },
            {
              image: '/rational/recent-2.jpg',
              title: 'Microte Surface 2.0',
              description: 'Laptop',
              price: 979.00,
              rating: 4.8,
              reviewCount: 89,
            },
            {
              image: '/rational/recent-3.jpg',
              title: 'aPod Pro Tablet 2023',
              description: 'LTE + Wifi, GPS Cellular',
              price: '979.00 - 1,259.00',
              rating: 4.6,
              reviewCount: 234,
            },
            {
              image: '/rational/recent-4.jpg',
              title: 'SROK Smart Phone',
              description: '128GB, Oled Retina',
              price: 579.00,
              originalPrice: 779.00,
              rating: 4.7,
              reviewCount: 152,
              discount: true
            },
          ].map((product) => (
            <ProductCard 
              key={product.title} 
              {...product} 
              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow"
            />
          ))}
        </div>
      </section>

      {/* Description */}
      <section className="max-w-[1320px] mx-auto px-4 py-12">
        <h2 className="text-xl font-bold mb-6">PEE - #1 Online Marketplace for technology</h2>
        <div className="space-y-6 text-gray-600">
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae posuere mi. 
            Quisque iaculis dignissim scelerisque. Morbi condimentum sagittis leo vitae tempor.
            Suspendisse in dolor odio. Sed aliquet ac lacus ut luctus. Fusce mattis sollicitudin sem, 
            id lobortis nibh ullamcorper a. Donec vehicula dolor et arcu consequat mattis.
            Fusce mattis nec nulla in scelerisque.
          </p>
          <p className="leading-relaxed">
            Morbi pharetra sem mauris, nec aliquet ipsum vestibulum suscipit. Curabitur non euismod dui. 
            Proin eget justo eu erat luctus placerat. Nam rhoncus ipsum ac enim faucibus, at consequat
            ante maximus. Vestibulum at nibh ac odio ultrices varius. Duis vitae libero mollis, lobortis ligula id, 
            varius erat. Sed id odio dictum, laoreet enim ac, commodo magna. Praesent sodales porttitor
            maximus. Sed a lacus felis. Maecenas consectetur consequat orci scelerisque malesuada.
          </p>
        </div>
        <button className="text-gray-600 hover:text-green-500 mt-4 capitalize flex items-center gap-2">
          Xem tất cả
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </section>

      <Footer />
    </main>
  );
}