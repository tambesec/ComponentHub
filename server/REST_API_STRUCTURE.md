# REST API Structure cho NetTechPro E-commerce

## 📁 Cấu trúc thư mục

```
server/
├── src/
│   ├── config/           # Cấu hình (database, jwt, etc)
│   ├── controllers/      # Controllers xử lý business logic
│   ├── middleware/       # Middlewares (auth, validation, error handling)
│   ├── models/           # Data models (hoặc Prisma schemas)
│   ├── routes/           # API routes
│   ├── services/         # Business logic services
│   ├── types/            # TypeScript types & interfaces
│   ├── utils/            # Utility functions
│   ├── validators/       # Zod validation schemas
│   ├── app.ts           # Express app setup
│   └── index.ts         # Server entry point
├── .env                 # Environment variables
├── package.json
└── tsconfig.json
```

## 🔧 Dependencies cần thêm

```bash
npm install jsonwebtoken bcryptjs
npm install --save-dev @types/jsonwebtoken @types/bcryptjs
```

## 🌐 API Endpoints

### Authentication
- POST `/api/auth/register` - Đăng ký tài khoản
- POST `/api/auth/login` - Đăng nhập
- POST `/api/auth/refresh` - Refresh access token
- POST `/api/auth/logout` - Đăng xuất
- GET `/api/auth/me` - Lấy thông tin user hiện tại

### Products  
- GET `/api/products` - Danh sách sản phẩm (pagination, filter, sort)
- GET `/api/products/:id` - Chi tiết sản phẩm
- POST `/api/products` - Tạo sản phẩm (Admin)
- PUT `/api/products/:id` - Cập nhật sản phẩm (Admin)
- DELETE `/api/products/:id` - Xóa sản phẩm (Admin)
- GET `/api/products/search` - Tìm kiếm sản phẩm

### Categories
- GET `/api/categories` - Danh sách danh mục
- GET `/api/categories/:id` - Chi tiết danh mục
- GET `/api/categories/:id/products` - Sản phẩm theo danh mục
- POST `/api/categories` - Tạo danh mục (Admin)
- PUT `/api/categories/:id` - Cập nhật danh mục (Admin)
- DELETE `/api/categories/:id` - Xóa danh mục (Admin)

### Cart
- GET `/api/cart` - Lấy giỏ hàng
- POST `/api/cart/items` - Thêm sản phẩm vào giỏ
- PUT `/api/cart/items/:id` - Cập nhật số lượng
- DELETE `/api/cart/items/:id` - Xóa sản phẩm khỏi giỏ
- DELETE `/api/cart` - Xóa toàn bộ giỏ hàng

### Orders
- GET `/api/orders` - Lịch sử đơn hàng của user
- GET `/api/orders/:id` - Chi tiết đơn hàng
- POST `/api/orders` - Tạo đơn hàng mới
- PUT `/api/orders/:id/cancel` - Hủy đơn hàng
- GET `/api/admin/orders` - Tất cả đơn hàng (Admin)
- PUT `/api/admin/orders/:id/status` - Cập nhật trạng thái (Admin)

### Users (Admin only)
- GET `/api/admin/users` - Danh sách users
- GET `/api/admin/users/:id` - Chi tiết user
- PUT `/api/admin/users/:id` - Cập nhật user
- DELETE `/api/admin/users/:id` - Xóa user

## 🔐 Authentication Flow

1. User đăng ký/đăng nhập → Nhận `accessToken` và `refreshToken`
2. Client lưu tokens vào localStorage/cookies
3. Mỗi request cần auth thêm header: `Authorization: Bearer <accessToken>`
4. Khi accessToken hết hạn → Gọi `/api/auth/refresh` với refreshToken
5. Nhận accessToken mới và tiếp tục request

## 📦 Response Format chuẩn

### Success Response
```json
{
  "success": true,
  "message": "Thành công",
  "data": { ... }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Lỗi xảy ra",
  "error": "Chi tiết lỗi"
}
```

### Paginated Response
```json
{
  "success": true,
  "message": "Lấy dữ liệu thành công",
  "data": [ ... ],
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10
  }
}
```

## 🚀 Triển khai từng bước

1. ✅ Setup cấu trúc base (utils, types, middleware)
2. ✅ Tạo Authentication system (JWT)
3. ✅ Tạo Product CRUD API
4. ✅ Tạo Category API
5. ✅ Tạo Cart API
6. ✅ Tạo Order API
7. ✅ Tạo Admin APIs
8. ✅ Connect Client/Admin với APIs

## 📝 Environment Variables (.env)

```env
# Server
PORT=5000
NODE_ENV=development

# CORS
WEB_ORIGIN=http://localhost:3000
ADMIN_ORIGIN=http://localhost:3001

# JWT
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=15m
JWT_REFRESH_SECRET=your-refresh-token-secret
JWT_REFRESH_EXPIRES_IN=7d

# Database (nếu dùng PostgreSQL/MySQL)
DATABASE_URL=postgresql://user:password@localhost:5432/nettechpro

# Upload (nếu có)
UPLOAD_DIR=./uploads
MAX_FILE_SIZE=5242880
```

## 🔄 Workflow Development

1. Tạo types/interfaces trong `src/types/`
2. Tạo validation schema với Zod trong `src/validators/`
3. Tạo service functions trong `src/services/`
4. Tạo controller trong `src/controllers/`
5. Tạo routes trong `src/routes/`
6. Register routes trong `src/app.ts`

## 🧪 Testing với Postman/Thunder Client

Collection sẽ được tạo với tất cả endpoints để test dễ dàng.

---

**Tiếp theo: Tôi sẽ tạo đầy đủ code cho tất cả các phần trên**
