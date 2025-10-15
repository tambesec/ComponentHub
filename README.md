# NetTechPro - Hệ thống bán thiết bị mạng

Dự án eCommerce hoàn chỉnh bao gồm: Website khách hàng, Admin Dashboard và API Server.

## 📦 Cấu trúc dự án

```
WebBanThietBiMang/
├── client/          # Website khách hàng (Next.js 15)
├── admin/           # Admin Dashboard (Next.js 15)
├── server/          # API Server (Express + TypeScript)
└── README.md        # File này
```

## 🚀 Quick Start

### 1. Clone và cài đặt

```powershell
# Clone repository
git clone <repository-url>
cd WebBanThietBiMang

# Cài đặt dependencies cho tất cả các project
cd server
npm install

cd ../client
npm install

cd ../admin
npm install
```

### 2. Cấu hình môi trường

**Server (.env):**
```env
PORT=3000
WEB_ORIGIN=http://localhost:5173,http://localhost:3001
NODE_ENV=development
```

**Client (.env.local):**
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

**Admin (.env.local):**
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### 3. Chạy các ứng dụng

Mở 3 terminal riêng biệt:

**Terminal 1 - API Server:**
```powershell
cd server
npm run dev
```
Server chạy tại: http://localhost:3000
API Docs: http://localhost:3000/docs

**Terminal 2 - Client:**
```powershell
cd client
npm run dev
```
Client chạy tại: http://localhost:5173

**Terminal 3 - Admin:**
```powershell
cd admin
npm run dev
```
Admin chạy tại: http://localhost:3001

## 📚 Chi tiết từng project

### 🛍️ Client - Website khách hàng

- **Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Features**: 
  - Xem sản phẩm, tìm kiếm, lọc
  - Giỏ hàng
  - Đặt hàng
  - Đăng ký/đăng nhập
  - Theo dõi đơn hàng
- **Port**: 5173
- **Docs**: [client/README.md](./client/README.md)

### 🎛️ Admin - Dashboard quản trị

- **Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Features**:
  - Dashboard với thống kê
  - Quản lý sản phẩm (CRUD)
  - Quản lý đơn hàng
  - Quản lý khách hàng
  - Báo cáo & analytics
- **Port**: 3001
- **Docs**: [admin/README.md](./admin/README.md)

### 🔌 Server - API Backend

- **Tech Stack**: Express.js, TypeScript, ES Modules
- **Features**:
  - RESTful API
  - OpenAPI 3.0 Documentation
  - Mock data cho development
  - CORS configuration
- **Port**: 3000
- **API Docs**: http://localhost:3000/docs
- **Docs**: [server/README.md](./server/README.md)

## 📖 API Documentation

### Public APIs (Client)

#### Products
- `GET /api/products` - Danh sách sản phẩm
- `GET /api/products/:id` - Chi tiết sản phẩm
- `GET /api/products/featured` - Sản phẩm nổi bật
- `GET /api/products/bestsellers` - Sản phẩm bán chạy

#### Categories & Brands
- `GET /api/categories` - Danh sách danh mục
- `GET /api/categories/:slug` - Chi tiết danh mục
- `GET /api/brands` - Danh sách thương hiệu
- `GET /api/brands/:slug` - Sản phẩm theo thương hiệu

#### Authentication
- `POST /api/auth/register` - Đăng ký
- `POST /api/auth/login` - Đăng nhập
- `GET /api/auth/me` - Thông tin user
- `POST /api/auth/logout` - Đăng xuất

#### Cart
- `GET /api/cart` - Xem giỏ hàng
- `POST /api/cart` - Thêm vào giỏ
- `PUT /api/cart/:id` - Cập nhật số lượng
- `DELETE /api/cart/:id` - Xóa khỏi giỏ
- `DELETE /api/cart` - Xóa toàn bộ giỏ

#### Orders
- `POST /api/orders` - Tạo đơn hàng
- `GET /api/orders` - Danh sách đơn hàng của user
- `GET /api/orders/:id` - Chi tiết đơn hàng
- `POST /api/orders/:id/cancel` - Hủy đơn hàng

### Admin APIs

#### Products Management
- `GET /api/admin/products` - Danh sách sản phẩm (admin)
- `POST /api/admin/products` - Tạo sản phẩm mới
- `PUT /api/admin/products/:id` - Cập nhật sản phẩm
- `DELETE /api/admin/products/:id` - Xóa sản phẩm
- `PATCH /api/admin/products/:id/toggle-status` - Bật/tắt sản phẩm

#### Orders Management
- `GET /api/admin/orders` - Danh sách đơn hàng (admin)
- `GET /api/admin/orders/:id` - Chi tiết đơn hàng
- `PUT /api/admin/orders/:id/status` - Cập nhật trạng thái đơn

#### Customers Management
- `GET /api/admin/customers` - Danh sách khách hàng
- `GET /api/admin/customers/:id` - Chi tiết khách hàng

#### Dashboard
- `GET /api/admin/dashboard/metrics` - Thống kê tổng quan
- `GET /api/admin/dashboard/revenue-chart` - Biểu đồ doanh thu
- `GET /api/admin/dashboard/top-products` - Sản phẩm bán chạy
- `GET /api/admin/dashboard/recent-orders` - Đơn hàng gần đây
- `GET /api/admin/dashboard/low-stock` - Sản phẩm sắp hết

**Xem full documentation tại:** http://localhost:3000/docs

## 🌐 Deployment

### Development

| Service | URL | Port |
|---------|-----|------|
| Client | http://localhost:5173 | 5173 |
| Admin | http://localhost:3001 | 3001 |
| API | http://localhost:3000 | 3000 |
| API Docs | http://localhost:3000/docs | 3000 |

### Production

| Service | URL |
|---------|-----|
| Client | https://nettechpro.me |
| Admin | https://admin.nettechpro.me |
| API | https://api.nettechpro.me |
| API Docs | https://api.nettechpro.me/docs |

### Cấu hình Production

**Server (.env.production):**
```env
PORT=3000
WEB_ORIGIN=https://nettechpro.me,https://www.nettechpro.me,https://admin.nettechpro.me
NODE_ENV=production
DATABASE_URL=postgresql://user:pass@host:5432/dbname
JWT_SECRET=your-secret-key
```

**Client (.env.production):**
```env
NEXT_PUBLIC_API_URL=https://api.nettechpro.me/api
NEXT_PUBLIC_SITE_URL=https://nettechpro.me
```

**Admin (.env.production):**
```env
NEXT_PUBLIC_API_URL=https://api.nettechpro.me/api
NEXT_PUBLIC_ADMIN_URL=https://admin.nettechpro.me
```

### Build & Deploy

**Server:**
```powershell
cd server
npm run build
npm start
```

**Client:**
```powershell
cd client
npm run build
npm start
```

**Admin:**
```powershell
cd admin
npm run build
npm start
```

## 🔧 Tech Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context / Redux (tùy chọn)
- **Form**: React Hook Form
- **HTTP Client**: Fetch API

### Backend
- **Runtime**: Node.js 20+
- **Framework**: Express.js 5
- **Language**: TypeScript (ES Modules)
- **API Docs**: Swagger UI + OpenAPI 3.0
- **Development**: tsx, nodemon
- **Testing**: Mock data

### DevOps
- **Version Control**: Git
- **Package Manager**: npm
- **Environment**: dotenv
- **CORS**: cors middleware
- **API Testing**: Swagger UI

## 📊 Database Schema (Planned)

```sql
-- Users
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  password_hash VARCHAR(255),
  name VARCHAR(255),
  phone VARCHAR(20),
  role VARCHAR(20),
  created_at TIMESTAMP
);

-- Products
CREATE TABLE products (
  id UUID PRIMARY KEY,
  name VARCHAR(255),
  sku VARCHAR(100) UNIQUE,
  category VARCHAR(100),
  brand VARCHAR(100),
  price DECIMAL(10,2),
  sale_price DECIMAL(10,2),
  stock INT,
  status VARCHAR(20),
  created_at TIMESTAMP
);

-- Orders
CREATE TABLE orders (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  total DECIMAL(10,2),
  status VARCHAR(50),
  payment_method VARCHAR(50),
  created_at TIMESTAMP
);

-- Order Items
CREATE TABLE order_items (
  id UUID PRIMARY KEY,
  order_id UUID REFERENCES orders(id),
  product_id UUID REFERENCES products(id),
  quantity INT,
  price DECIMAL(10,2)
);
```

*Hiện tại dùng mock data, sẽ integrate database trong giai đoạn production.*

## 🔐 Security

- ✅ CORS configuration
- ✅ Environment variables
- ✅ JWT authentication (planned)
- ✅ Input validation
- ⏳ Rate limiting (planned)
- ⏳ HTTPS/SSL (production)
- ⏳ Password hashing (bcrypt)

## 🧪 Testing

```powershell
# Unit tests (planned)
npm test

# E2E tests (planned)
npm run test:e2e

# API testing
# Sử dụng Swagger UI tại http://localhost:3000/docs
```

## 📝 Development Workflow

1. **Start API Server** - Terminal 1
2. **Start Client** - Terminal 2
3. **Start Admin** - Terminal 3
4. **Open Swagger Docs** - http://localhost:3000/docs
5. **Test API** - Dùng Swagger hoặc Postman
6. **Develop Features** - Edit code và test
7. **Commit Changes** - Git commit với message rõ ràng

## 🐛 Troubleshooting

### Port đã được sử dụng
```powershell
# Windows - Kill process on port
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Module not found
```powershell
rm -rf node_modules package-lock.json
npm install
```

### CORS error
- Kiểm tra `WEB_ORIGIN` trong server/.env
- Đảm bảo client/admin URL khớp với CORS config

### API connection failed
- Kiểm tra server đang chạy: http://localhost:3000/health
- Xác nhận `NEXT_PUBLIC_API_URL` trong .env

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Guide](https://expressjs.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [OpenAPI Specification](https://swagger.io/specification/)

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Team

- **Developer**: Your Name
- **Project**: NetTechPro
- **Contact**: your-email@example.com

## 🎯 Roadmap

### Phase 1 (Current - Development)
- ✅ API Server với mock data
- ✅ Client website cơ bản
- ✅ Admin dashboard
- ✅ API Documentation

### Phase 2 (Next - Production Ready)
- ⏳ Database integration (PostgreSQL)
- ⏳ Authentication & Authorization
- ⏳ Payment gateway integration
- ⏳ Email notifications
- ⏳ File upload (product images)

### Phase 3 (Future)
- ⏳ Advanced search & filters
- ⏳ Product reviews & ratings
- ⏳ Wishlist feature
- ⏳ Discount & coupon system
- ⏳ Inventory management
- ⏳ Analytics & reporting

## 📞 Support

Nếu bạn gặp vấn đề:
1. Kiểm tra [Troubleshooting](#-troubleshooting)
2. Xem API Docs tại http://localhost:3000/docs
3. Đọc README của từng project
4. Open an issue on GitHub

---

**Happy Coding! 🚀**
