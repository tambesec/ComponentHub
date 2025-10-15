# Admin API Service Documentation

## 📋 Tổng quan

File này chứa tất cả các API services cho Admin Dashboard để quản lý hệ thống. Hỗ trợ TypeScript đầy đủ với types và interfaces.

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
import adminApi from '@/services/api';

// Hoặc import từng module
import { adminProductsApi, adminOrdersApi, adminAuthApi } from '@/services/api';
```

### 1. Admin Auth API

```typescript
// Đăng nhập admin
const { token, user } = await adminApi.auth.login(
  'admin@example.com',
  'adminpassword'
);

// Đăng xuất
await adminApi.auth.logout();

// Lấy thông tin admin hiện tại
const admin = await adminApi.auth.getMe();

// Đổi mật khẩu
await adminApi.auth.changePassword('oldPassword', 'newPassword');
```

### 2. Admin Products API

```typescript
// Lấy danh sách sản phẩm
const products = await adminApi.products.getAll({
  page: 1,
  limit: 20,
  search: 'laptop',
  category: 'laptops',
  isActive: true
});

// Lấy chi tiết sản phẩm
const product = await adminApi.products.getById('product-id');

// Tạo sản phẩm mới
const newProduct = await adminApi.products.create({
  name: 'Laptop Dell XPS 13',
  description: 'Laptop cao cấp...',
  price: 25000000,
  salePrice: 23000000,
  images: ['/images/product1.jpg'],
  category: 'category-id',
  brand: 'brand-id',
  stock: 100,
  specifications: {
    CPU: 'Intel Core i7',
    RAM: '16GB',
    Storage: '512GB SSD'
  },
  tags: ['laptop', 'dell', 'business'],
  isActive: true,
  isFeatured: false
});

// Cập nhật sản phẩm
const updated = await adminApi.products.update('product-id', {
  price: 24000000,
  stock: 95
});

// Xóa sản phẩm
await adminApi.products.delete('product-id');

// Xóa nhiều sản phẩm
await adminApi.products.bulkDelete(['id1', 'id2', 'id3']);

// Cập nhật số lượng tồn kho
const product = await adminApi.products.updateStock('product-id', 50);

// Bật/tắt trạng thái active
const product = await adminApi.products.toggleActive('product-id');

// Bật/tắt featured
const product = await adminApi.products.toggleFeatured('product-id');

// Upload ảnh sản phẩm
const imageFiles = [file1, file2, file3];
const imageUrls = await adminApi.products.uploadImages('product-id', imageFiles);
```

### 3. Admin Categories API

```typescript
// Lấy danh sách danh mục
const categories = await adminApi.categories.getAll({
  page: 1,
  limit: 50
});

// Lấy chi tiết danh mục
const category = await adminApi.categories.getById('category-id');

// Tạo danh mục mới
const newCategory = await adminApi.categories.create({
  name: 'Laptops',
  description: 'Máy tính xách tay',
  image: '/images/category-laptop.jpg',
  parentId: null,
  order: 1,
  isActive: true
});

// Cập nhật danh mục
const updated = await adminApi.categories.update('category-id', {
  name: 'Laptops & Notebooks',
  order: 2
});

// Xóa danh mục
await adminApi.categories.delete('category-id');

// Sắp xếp lại thứ tự danh mục
await adminApi.categories.reorder([
  { id: 'cat1', order: 1 },
  { id: 'cat2', order: 2 },
  { id: 'cat3', order: 3 }
]);

// Bật/tắt trạng thái active
const category = await adminApi.categories.toggleActive('category-id');
```

### 4. Admin Brands API

```typescript
// Lấy danh sách thương hiệu
const brands = await adminApi.brands.getAll();

// Lấy chi tiết thương hiệu
const brand = await adminApi.brands.getById('brand-id');

// Tạo thương hiệu mới
const newBrand = await adminApi.brands.create({
  name: 'Dell',
  logo: '/images/brands/dell.png',
  description: 'Dell Technologies Inc.',
  website: 'https://www.dell.com',
  isActive: true
});

// Cập nhật thương hiệu
const updated = await adminApi.brands.update('brand-id', {
  name: 'Dell Technologies',
  website: 'https://www.delltechnologies.com'
});

// Xóa thương hiệu
await adminApi.brands.delete('brand-id');

// Bật/tắt trạng thái active
const brand = await adminApi.brands.toggleActive('brand-id');
```

### 5. Admin Orders API

```typescript
// Lấy danh sách đơn hàng
const orders = await adminApi.orders.getAll({
  page: 1,
  limit: 20,
  status: 'pending',
  paymentMethod: 'cod',
  search: 'customer-name'
});

// Lấy chi tiết đơn hàng
const order = await adminApi.orders.getById('order-id');

// Cập nhật trạng thái đơn hàng
const order = await adminApi.orders.updateStatus(
  'order-id',
  'confirmed',
  'Đơn hàng đã được xác nhận'
);

// Cập nhật trạng thái thanh toán
const order = await adminApi.orders.updatePaymentStatus(
  'order-id',
  'paid'
);

// Thêm ghi chú cho đơn hàng
const order = await adminApi.orders.addNote(
  'order-id',
  'Khách hàng yêu cầu giao trước 5PM'
);

// Hủy đơn hàng
const order = await adminApi.orders.cancel(
  'order-id',
  'Hết hàng'
);
```

### 6. Admin Users API

```typescript
// Lấy danh sách người dùng
const users = await adminApi.users.getAll({
  page: 1,
  limit: 20,
  role: 'customer',
  isActive: true
});

// Lấy chi tiết người dùng
const user = await adminApi.users.getById('user-id');

// Tạo người dùng mới
const newUser = await adminApi.users.create({
  email: 'user@example.com',
  password: 'password123',
  fullName: 'Nguyễn Văn A',
  phone: '0123456789',
  role: 'customer',
  isActive: true
});

// Cập nhật người dùng
const updated = await adminApi.users.update('user-id', {
  fullName: 'Nguyễn Văn B',
  phone: '0987654321'
});

// Xóa người dùng
await adminApi.users.delete('user-id');

// Bật/tắt trạng thái active
const user = await adminApi.users.toggleActive('user-id');

// Reset mật khẩu
await adminApi.users.resetPassword('user-id', 'newPassword123');
```

### 7. Admin Dashboard API

```typescript
// Lấy thống kê tổng quan
const stats = await adminApi.dashboard.getStats('month');
// Returns: {
//   totalRevenue: number,
//   totalOrders: number,
//   totalProducts: number,
//   totalUsers: number,
//   revenueGrowth: number,
//   ordersGrowth: number,
//   productsGrowth: number,
//   usersGrowth: number,
//   recentOrders: Order[],
//   topProducts: Product[]
// }

// Lấy dữ liệu biểu đồ doanh thu
const revenueChart = await adminApi.dashboard.getRevenueChart('month');
// Returns: {
//   labels: string[],
//   data: number[]
// }

// Lấy dữ liệu biểu đồ đơn hàng
const ordersChart = await adminApi.dashboard.getOrdersChart('week');
```

### 8. Admin Upload API

```typescript
// Upload một ảnh
const file = document.querySelector('input[type="file"]').files[0];
const imageUrl = await adminApi.upload.uploadImage(file, 'product');

// Upload nhiều ảnh
const files = Array.from(document.querySelector('input[type="file"]').files);
const imageUrls = await adminApi.upload.uploadImages(files, 'product');
```

## 🔐 Authentication

Admin API service tự động xử lý authentication:

- Token được lưu tại `localStorage.getItem('admin_token')`
- Admin info được lưu tại `localStorage.getItem('admin_user')`
- Token tự động được thêm vào header mọi request
- Khi token hết hạn (401), tự động redirect về `/signin`

## 📝 TypeScript Types

```typescript
import type { 
  Product, 
  Category, 
  Brand, 
  Order, 
  User,
  AdminUser,
  DashboardStats,
  PaginatedResponse 
} from '@/services/api';
```

## 🎯 Order Status Flow

```
pending → confirmed → processing → shipped → delivered
                                   ↓
                                cancelled
```

## 💳 Payment Status

- `pending`: Chờ thanh toán
- `paid`: Đã thanh toán
- `failed`: Thanh toán thất bại
- `refunded`: Đã hoàn tiền

## 📊 Dashboard Periods

- `day`: Hôm nay
- `week`: 7 ngày qua
- `month`: 30 ngày qua
- `year`: 12 tháng qua

## 🔧 Axios Instance

```typescript
import adminApi from '@/services/api';

const response = await adminApi.client.post('/custom-endpoint', data);
```

## 📚 Related Files

- **Server API**: `server/src/routes/admin/` - Backend admin routes
- **API Documentation**: `http://localhost:3000/docs` - Swagger UI
- **Environment Config**: `.env.local`, `.env.production`

## ⚠️ Permissions

Một số API endpoints yêu cầu quyền `super_admin`. Kiểm tra permissions của user trước khi gọi:

```typescript
const admin = await adminApi.auth.getMe();
if (admin.role === 'super_admin') {
  // Có thể thực hiện các thao tác nhạy cảm
}
```
