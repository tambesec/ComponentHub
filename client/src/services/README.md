# API Service Documentation

## 📋 Tổng quan

File này chứa tất cả các API services để kết nối với backend server. Hỗ trợ TypeScript đầy đủ với types và interfaces.

## 🔧 Cấu hình

API URL được lấy từ environment variable `NEXT_PUBLIC_API_URL`:
- **Development**: `http://localhost:3000` (định nghĩa trong `.env.local`)
- **Production**: `https://api.nettechpro.me` (định nghĩa trong `.env.production`)

## 📦 Cài đặt

```bash
npm install axios
```

## 🚀 Cách sử dụng

### Import API service

```typescript
import api from '@/services/api';

// Hoặc import từng module
import { productsApi, cartApi, authApi } from '@/services/api';
```

### 1. Products API

```typescript
// Lấy danh sách sản phẩm
const products = await api.products.getAll({
  page: 1,
  limit: 12,
  category: 'laptops',
  minPrice: 1000000,
  maxPrice: 5000000
});

// Lấy chi tiết sản phẩm
const product = await api.products.getById('product-id');

// Lấy sản phẩm theo slug
const product = await api.products.getBySlug('laptop-dell-xps-13');

// Lấy sản phẩm liên quan
const related = await api.products.getRelated('product-id', 4);

// Tìm kiếm sản phẩm
const results = await api.products.search('laptop', {
  page: 1,
  limit: 20
});
```

### 2. Categories API

```typescript
// Lấy tất cả danh mục
const categories = await api.categories.getAll();

// Lấy chi tiết danh mục
const category = await api.categories.getById('category-id');

// Lấy danh mục theo slug
const category = await api.categories.getBySlug('laptops');

// Lấy sản phẩm theo danh mục
const products = await api.categories.getProducts('category-id', {
  page: 1,
  limit: 12
});
```

### 3. Brands API

```typescript
// Lấy tất cả thương hiệu
const brands = await api.brands.getAll();

// Lấy chi tiết thương hiệu
const brand = await api.brands.getById('brand-id');

// Lấy sản phẩm theo thương hiệu
const products = await api.brands.getProducts('brand-id', {
  page: 1,
  limit: 12
});
```

### 4. Cart API

```typescript
// Lấy giỏ hàng hiện tại
const cart = await api.cart.get();

// Thêm sản phẩm vào giỏ
const cart = await api.cart.addItem('product-id', 2);

// Cập nhật số lượng
const cart = await api.cart.updateItem('item-id', 5);

// Xóa sản phẩm khỏi giỏ
const cart = await api.cart.removeItem('item-id');

// Xóa toàn bộ giỏ hàng
await api.cart.clear();
```

### 5. Orders API

```typescript
// Tạo đơn hàng mới
const order = await api.orders.create({
  items: [
    { productId: 'product-1', quantity: 2, price: 1000000 },
    { productId: 'product-2', quantity: 1, price: 2000000 }
  ],
  shippingAddress: {
    fullName: 'Nguyễn Văn A',
    phone: '0123456789',
    address: '123 Đường ABC',
    city: 'Hồ Chí Minh',
    district: 'Quận 1',
    ward: 'Phường Bến Nghé'
  },
  paymentMethod: 'cod',
  shippingMethod: 'standard',
  note: 'Giao hàng giờ hành chính'
});

// Lấy danh sách đơn hàng của user
const orders = await api.orders.getMyOrders({
  page: 1,
  limit: 10
});

// Lấy chi tiết đơn hàng
const order = await api.orders.getById('order-id');

// Hủy đơn hàng
const order = await api.orders.cancel('order-id', 'Đổi ý không mua nữa');
```

### 6. Auth API

```typescript
// Đăng ký
const { token, user } = await api.auth.register({
  email: 'user@example.com',
  password: 'password123',
  fullName: 'Nguyễn Văn A',
  phone: '0123456789'
});

// Đăng nhập
const { token, user } = await api.auth.login(
  'user@example.com',
  'password123'
);

// Đăng xuất
await api.auth.logout();

// Lấy thông tin user hiện tại
const user = await api.auth.getMe();

// Cập nhật thông tin user
const user = await api.auth.updateProfile({
  fullName: 'Nguyễn Văn B',
  phone: '0987654321'
});

// Đổi mật khẩu
await api.auth.changePassword('oldPassword', 'newPassword');

// Quên mật khẩu
await api.auth.forgotPassword('user@example.com');

// Reset mật khẩu
await api.auth.resetPassword('reset-token', 'newPassword');
```

## 🔐 Authentication

API service tự động xử lý authentication thông qua localStorage:

- Token được lưu tại `localStorage.getItem('token')`
- User info được lưu tại `localStorage.getItem('user')`
- Token tự động được thêm vào header mọi request
- Khi token hết hạn (401), tự động redirect về `/signin`

## 📝 TypeScript Types

Tất cả các types và interfaces đều được export:

```typescript
import type { 
  Product, 
  Category, 
  Brand, 
  Cart, 
  Order, 
  User,
  PaginatedResponse 
} from '@/services/api';
```

## 🎯 Response Format

### Paginated Response

```typescript
{
  data: T[],
  pagination: {
    page: number,
    limit: number,
    total: number,
    totalPages: number
  }
}
```

### Error Handling

```typescript
try {
  const products = await api.products.getAll();
} catch (error) {
  if (axios.isAxiosError(error)) {
    console.error('API Error:', error.response?.data);
    console.error('Status:', error.response?.status);
  }
}
```

## 🌐 CORS Configuration

Backend server đã được cấu hình CORS để chấp nhận requests từ:
- `http://localhost:5173` (Client)
- `http://localhost:3001` (Admin)
- `https://nettechpro.me` (Production Client)
- `https://admin.nettechpro.me` (Production Admin)

## 🔧 Axios Instance

Nếu cần custom request, có thể sử dụng axios instance trực tiếp:

```typescript
import api from '@/services/api';

const response = await api.client.get('/custom-endpoint');
```

## 📚 Related Files

- **Server API**: `server/src/routes/` - Backend routes
- **API Documentation**: `http://localhost:3000/docs` - Swagger UI
- **Environment Config**: `.env.local`, `.env.production`
