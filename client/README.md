# NetTechPro Client - Website Bán Thiết Bị Mạng# Free eCommerce Template for Next.js - NextMerce



Website thương mại điện tử bán thiết bị mạng được xây dựng với Next.js 15, React 19, TypeScript và TailwindCSS.The free Next.js eCommerce template is a lite version of the NextMerce Next.js eCommerce boilerplate, designed to streamline the launch and management of your online store.



## 🚀 Tính năng![NextMerce](https://github.com/user-attachments/assets/57155689-a756-4222-8af7-134e556acae2)



- ✅ **100% Tiếng Việt** - Giao diện hoàn toàn bằng tiếng Việt

- ✅ **Đa ngôn ngữ** - Hỗ trợ Tiếng Việt và Tiếng Anh (next-i18next)While NextMerce Pro features advanced functionalities, seamless integration, and customizable options, providing all the essential tools needed to build and expand your business, the lite version offers a basic Next.js template specifically crafted for eCommerce websites. Both versions ensure superior performance and flexibility, all powered by Next.js.

- ✅ **Responsive Design** - Tối ưu cho mobile, tablet, desktop

- ✅ **Redux Toolkit** - State management hiện đại### NextMerce Free VS NextMerce Pro

- ✅ **API Integration** - Kết nối với backend API

- ✅ **SEO Friendly** - Tối ưu SEO với Next.js| ✨ Features                         | 🎁 NextMerce Free                 | 🔥 NextMerce Pro                        |

- ✅ **Modern UI** - TailwindCSS 3 với thiết kế đẹp mắt|----------------------------------|--------------------------------|--------------------------------------|

| Next.js Pages                    | Static                         | Dynamic Boilerplate Template         |

## 🛠️ Tech Stack| Components                       | Limited                        | All According to Demo                |

| eCommerce Functionality          | Included                       | Included                             |

- **Framework**: Next.js 15| Integrations (DB, Auth, etc.)    | Not Included                   | Included                             |

- **UI Library**: React 19| Community Support                | Included                       | Included                             |

- **Language**: TypeScript 5| Premium Email Support            | Not Included                   | Included                             |

- **Styling**: TailwindCSS 3| Lifetime Free Updates            | Included                       | Included                             |

- **State Management**: Redux Toolkit

- **HTTP Client**: Axios

- **i18n**: next-i18next#### [🚀 Live Demo](https://demo.nextmerce.com/)

- **Carousel**: Swiper

- **Icons**: Lucide React#### [🌐 Visit Website](https://nextmerce.com/)


## 📦 Cài đặt

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build production
npm run build

# Start production server
npm start
```

## 🌐 Environment Variables

Tạo file `.env.local`:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=NetTechPro
NEXT_PUBLIC_SITE_DESCRIPTION=Cửa hàng thiết bị mạng chuyên nghiệp

# Feature Flags
NEXT_PUBLIC_ENABLE_CART=true
NEXT_PUBLIC_ENABLE_WISHLIST=true
NEXT_PUBLIC_ENABLE_COMPARE=true
```

## 📁 Cấu trúc thư mục

```
client/
├── public/
│   ├── images/          # Hình ảnh static
│   └── locales/         # Translation files
│       ├── vi/          # Tiếng Việt
│       │   ├── common.json
│       │   ├── navigation.json
│       │   ├── product.json
│       │   ├── cart.json
│       │   └── ...
│       └── en/          # English
├── src/
│   ├── app/             # Next.js App Router
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/      # React components
│   │   ├── layout/
│   │   ├── product/
│   │   ├── cart/
│   │   └── common/
│   ├── redux/           # Redux store
│   │   ├── store.ts
│   │   └── slices/
│   ├── services/        # API services
│   │   └── api.ts
│   ├── types/           # TypeScript types
│   └── utils/           # Utility functions
├── next.config.js
├── next-i18next.config.js
├── tailwind.config.ts
└── package.json
```

## 🌍 Đa ngôn ngữ

Website hỗ trợ đa ngôn ngữ với `next-i18next`:

### Sử dụng trong component:

```tsx
import { useTranslation } from 'next-i18next';

export default function Component() {
  const { t } = useTranslation('common');
  
  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
```

### Translation files:

- `common.json` - Từ ngữ chung
- `navigation.json` - Menu điều hướng
- `product.json` - Trang sản phẩm
- `cart.json` - Giỏ hàng
- `checkout.json` - Thanh toán
- `categories.json` - Danh mục
- `hero.json` - Hero section
- `sections.json` - Các sections

## 🔌 API Integration

### API Client Configuration

```typescript
// src/services/api.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
```

### Sử dụng API:

```typescript
// Lấy danh sách sản phẩm
const response = await apiClient.get('/products');
const { products, total } = response.data;

// Lấy chi tiết sản phẩm
const product = await apiClient.get(`/products/${productId}`);

// Thêm vào giỏ hàng
await apiClient.post('/cart/items', {
  productId: 'prod-1',
  quantity: 1,
  price: 1000000
});

// Tạo đơn hàng
const order = await apiClient.post('/orders', {
  items: [...],
  shippingAddress: {...},
  paymentMethod: 'cod'
});
```

## 📱 Pages

### Trang chính

- **Homepage** (`/`) - Trang chủ với hero, featured products, categories
- **Products** (`/products`) - Danh sách sản phẩm với filter, sort
- **Product Detail** (`/products/[slug]`) - Chi tiết sản phẩm
- **Categories** (`/categories/[slug]`) - Sản phẩm theo danh mục
- **Brands** (`/brands/[slug]`) - Sản phẩm theo thương hiệu
- **Cart** (`/cart`) - Giỏ hàng
- **Checkout** (`/checkout`) - Thanh toán
- **Orders** (`/orders`) - Đơn hàng của tôi
- **Order Detail** (`/orders/[id]`) - Chi tiết đơn hàng

### Authentication

- **Sign In** (`/signin`) - Đăng nhập
- **Sign Up** (`/signup`) - Đăng ký
- **Profile** (`/profile`) - Hồ sơ người dùng

### Other pages

- **About** (`/about`) - Giới thiệu
- **Contact** (`/contact`) - Liên hệ
- **Search** (`/search`) - Tìm kiếm

## 🧪 Scripts

```json
{
  "scripts": {
    "dev": "next dev",              // Chạy dev server (port 3000)
    "build": "next build",          // Build production
    "start": "next start",          // Start production server
    "lint": "next lint",            // Run ESLint
    "clean": "rimraf .next"         // Xóa build cache
  }
}
```

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Cài đặt Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Environment Variables for Production

```env
NEXT_PUBLIC_API_URL=https://api.nettechpro.me/api
NEXT_PUBLIC_API_BASE_URL=https://api.nettechpro.me
NEXT_PUBLIC_SITE_URL=https://nettechpro.me
```

## 🐛 Troubleshooting

### Port 3000 đã được sử dụng

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Hoặc chạy trên port khác
PORT=3001 npm run dev
```

### API không kết nối được

- Kiểm tra backend server đang chạy: `http://localhost:5000/api/health`
- Kiểm tra CORS settings trong backend
- Kiểm tra `.env.local` có đúng API URL không

### Build errors

```bash
# Xóa cache và rebuild
npm run clean
rm -rf node_modules
npm install
npm run build
```

## 📄 License

MIT License

---

**Made with ❤️ by NetTechPro Team**
