# 🛠️ Hệ Thống Quản Trị Admin - NetTechPro

## 📋 Tổng Quan

Hệ thống quản trị được thiết kế dựa trên source code client để quản lý website bán thiết bị mạng NetTechPro.

---

## 🎯 Cấu Trúc Đã Tạo

### 1. **Product Management** ✅ (Hoàn thành)

#### **Pages:**
- `/products` - Danh sách sản phẩm
- `/products/add` - Thêm sản phẩm mới
- `/products/edit/[id]` - Chỉnh sửa sản phẩm

#### **Components:**
- `ProductsTable.tsx` - Bảng danh sách sản phẩm
- `ProductForm.tsx` - Form thêm/sửa sản phẩm

#### **Features:**
✅ Hiển thị danh sách sản phẩm với pagination
✅ Tìm kiếm sản phẩm theo tên
✅ Lọc theo danh mục
✅ Hiển thị trạng thái tồn kho (Còn hàng/Sắp hết/Hết hàng)
✅ Form thêm/sửa sản phẩm đầy đủ
✅ Upload nhiều ảnh sản phẩm
✅ Quản lý thông số kỹ thuật (JSON format)
✅ Quản lý giá gốc và giá khuyến mãi
✅ Quản lý số lượng tồn kho

---

### 2. **Order Management** (Cần triển khai)

#### **Pages cần tạo:**
```
admin/src/app/(admin)/orders/
├── page.tsx              # Danh sách đơn hàng
├── [id]/
│   └── page.tsx          # Chi tiết đơn hàng
```

#### **Components cần tạo:**
```
admin/src/components/ecommerce/
├── OrdersTable.tsx       # Bảng danh sách đơn hàng
├── OrderDetail.tsx       # Chi tiết đơn hàng
├── OrderTimeline.tsx     # Timeline trạng thái đơn
└── OrderStatusBadge.tsx  # Badge trạng thái đơn
```

#### **Features cần có:**
- [ ] Danh sách đơn hàng với filters (trạng thái, ngày, khách hàng)
- [ ] Chi tiết đơn hàng
- [ ] Cập nhật trạng thái đơn hàng (Pending → Processing → Shipping → Completed)
- [ ] In hóa đơn/phiếu giao hàng
- [ ] Quản lý thanh toán (COD, VNPay, MoMo)
- [ ] Timeline lịch sử đơn hàng
- [ ] Thống kê đơn hàng theo trạng thái

---

### 3. **Category Management** (Cần triển khai)

#### **Pages cần tạo:**
```
admin/src/app/(admin)/categories/
├── page.tsx              # Danh sách danh mục
└── [id]/
    └── page.tsx          # Chỉnh sửa danh mục
```

#### **Danh mục sản phẩm:**
```typescript
const categories = [
  { name: "Router", icon: "router-icon", slug: "router" },
  { name: "Switch", icon: "switch-icon", slug: "switch" },
  { name: "Access Point", icon: "ap-icon", slug: "access-point" },
  { name: "Firewall", icon: "firewall-icon", slug: "firewall" },
  { name: "USB WiFi", icon: "usb-icon", slug: "usb-wifi" },
  { name: "Cáp mạng", icon: "cable-icon", slug: "cable" },
  { name: "Card mạng", icon: "card-icon", slug: "network-card" },
  { name: "Modem", icon: "modem-icon", slug: "modem" },
  { name: "Repeater", icon: "repeater-icon", slug: "repeater" },
  { name: "PoE", icon: "poe-icon", slug: "poe" },
];
```

---

### 4. **Customer Management** (Cần triển khai)

#### **Pages cần tạo:**
```
admin/src/app/(admin)/customers/
├── page.tsx              # Danh sách khách hàng
└── [id]/
    └── page.tsx          # Chi tiết khách hàng
```

#### **Features cần có:**
- [ ] Danh sách khách hàng
- [ ] Tìm kiếm theo tên, email, số điện thoại
- [ ] Xem lịch sử mua hàng
- [ ] Thống kê giá trị đơn hàng/khách hàng
- [ ] Khách hàng VIP/thường
- [ ] Export danh sách khách

---

### 5. **Dashboard** (Cần cập nhật)

#### **File:** `admin/src/app/(admin)/page.tsx`

#### **Metrics cần hiển thị:**
```typescript
{
  totalRevenue: 125000000,      // Tổng doanh thu
  totalOrders: 245,             // Tổng đơn hàng
  totalProducts: 156,           // Tổng sản phẩm
  totalCustomers: 892,          // Tổng khách hàng
  
  revenueGrowth: 12.5,          // % tăng trưởng doanh thu
  ordersGrowth: 8.3,            // % tăng trưởng đơn hàng
  
  topSellingProducts: [...],    // Top sản phẩm bán chạy
  recentOrders: [...],          // Đơn hàng gần đây
  lowStockProducts: [...],      // Sản phẩm sắp hết hàng
}
```

---

## 🔗 Tích Hợp với Client

### **Data Mapping từ Client:**

#### **Product Type** (từ `client/src/types/product.ts`):
```typescript
interface Product {
  id: number;
  title: string;
  price: number;
  discountedPrice: number;
  reviews: number;
  imgs: {
    thumbnails: string[];
    previews: string[];
  };
}
```

#### **Cần mở rộng cho Admin:**
```typescript
interface AdminProduct extends Product {
  category: string;
  brand: string;
  stock: number;
  sold: number;
  status: "active" | "inactive" | "draft";
  description?: string;
  shortDescription?: string;
  specifications?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}
```

---

## 🎨 UI Components Sẵn Có

### **Từ Admin Template:**
- ✅ `EcommerceMetrics` - Metrics cards
- ✅ `RecentOrders` - Bảng đơn hàng gần đây
- ✅ `MonthlySalesChart` - Biểu đồ doanh thu
- ✅ `StatisticsChart` - Thống kê
- ✅ `DemographicCard` - Thống kê khách hàng
- ✅ Tables components
- ✅ Form components
- ✅ Chart components

---

## 📊 API Endpoints Cần Có

### **Products:**
```
GET    /api/admin/products           # Danh sách sản phẩm
GET    /api/admin/products/:id       # Chi tiết sản phẩm
POST   /api/admin/products           # Tạo sản phẩm
PUT    /api/admin/products/:id       # Cập nhật sản phẩm
DELETE /api/admin/products/:id       # Xóa sản phẩm
```

### **Orders:**
```
GET    /api/admin/orders             # Danh sách đơn hàng
GET    /api/admin/orders/:id         # Chi tiết đơn hàng
PUT    /api/admin/orders/:id/status  # Cập nhật trạng thái
```

### **Customers:**
```
GET    /api/admin/customers          # Danh sách khách hàng
GET    /api/admin/customers/:id      # Chi tiết khách hàng
```

### **Categories:**
```
GET    /api/admin/categories         # Danh sách danh mục
POST   /api/admin/categories         # Tạo danh mục
PUT    /api/admin/categories/:id     # Cập nhật danh mục
DELETE /api/admin/categories/:id     # Xóa danh mục
```

### **Dashboard:**
```
GET    /api/admin/dashboard/metrics  # Metrics tổng quan
GET    /api/admin/dashboard/charts   # Data cho charts
```

---

## 🚀 Các Bước Tiếp Theo

### **Phase 1: Hoàn thiện Core Features**
1. ✅ Product Management (Done)
2. [ ] Order Management
3. [ ] Customer Management
4. [ ] Category Management

### **Phase 2: Dashboard & Analytics**
5. [ ] Cập nhật Dashboard với data thực
6. [ ] Thống kê doanh thu theo ngày/tháng/năm
7. [ ] Top sản phẩm bán chạy
8. [ ] Báo cáo tồn kho

### **Phase 3: Advanced Features**
9. [ ] Quản lý mã giảm giá/coupon
10. [ ] Quản lý banner/slider
11. [ ] Quản lý reviews
12. [ ] Quản lý shipping methods
13. [ ] Settings (cấu hình website)
14. [ ] User roles & permissions

### **Phase 4: Integration**
15. [ ] Kết nối với Server API
16. [ ] Upload ảnh lên Cloudinary
17. [ ] Tích hợp VNPay/MoMo
18. [ ] Email notifications

---

## 📁 Cấu Trúc Thư Mục Admin

```
admin/src/
├── app/(admin)/
│   ├── page.tsx                    # Dashboard ✅
│   ├── products/                   # Product Management ✅
│   │   ├── page.tsx               # List ✅
│   │   ├── add/page.tsx           # Add ✅
│   │   └── edit/[id]/page.tsx     # Edit ✅
│   ├── orders/                     # Order Management 🔄
│   │   ├── page.tsx               # List
│   │   └── [id]/page.tsx          # Detail
│   ├── categories/                 # Category Management 🔄
│   │   └── page.tsx
│   ├── customers/                  # Customer Management 🔄
│   │   ├── page.tsx
│   │   └── [id]/page.tsx
│   ├── reports/                    # Reports 🔄
│   └── settings/                   # Settings 🔄
│
├── components/ecommerce/
│   ├── ProductsTable.tsx          # ✅
│   ├── ProductForm.tsx            # ✅
│   ├── OrdersTable.tsx            # 🔄
│   ├── OrderDetail.tsx            # 🔄
│   ├── CustomersTable.tsx         # 🔄
│   └── ...
│
└── types/
    ├── product.ts                  # ✅
    ├── order.ts                    # 🔄
    └── customer.ts                 # 🔄
```

**Legend:**
- ✅ = Đã hoàn thành
- 🔄 = Đang triển khai
- ⏳ = Chưa bắt đầu

---

## 💡 Lưu Ý Quan Trọng

### **Authentication:**
- Cần thêm middleware kiểm tra admin role
- JWT token authentication
- Protected routes cho admin

### **Data Sync:**
- Đảm bảo data giữa Client và Admin đồng bộ
- Real-time updates (optional: Socket.io)

### **Performance:**
- Pagination cho tất cả danh sách
- Lazy loading images
- Debounce cho search

### **Security:**
- Validate input data
- CSRF protection
- Rate limiting
- SQL injection prevention

---

## 📞 Tiếp Theo

Bạn muốn tôi triển khai phần nào tiếp theo?

1. **Order Management** - Quản lý đơn hàng
2. **Customer Management** - Quản lý khách hàng
3. **Category Management** - Quản lý danh mục
4. **Dashboard Update** - Cập nhật dashboard với data thực
5. **API Integration** - Kết nối với backend API

Hãy cho tôi biết! 🚀
