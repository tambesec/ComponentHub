# 🇻🇳 Hướng Dẫn Việt Hóa Admin Dashboard - NetTechPro

## 📋 Tổng Quan Tiến Độ

### ✅ Đã Hoàn Thành
- [x] **Sidebar Menu Navigation** - Tất cả menu đã được dịch
- [x] **Auth Pages (SignIn)** - Trang đăng nhập hoàn chỉnh
- [x] **Metadata** - Title và description cho auth pages

### 🔄 Đang Tiến Hành
- [ ] **SignUp Form** - Cần dịch toàn bộ form đăng ký
- [ ] **Header Components** - User dropdown, notifications
- [ ] **Dashboard Pages** - Các trang chính

### ⏳ Chưa Bắt Đầu
- [ ] **Form Components** - Labels, placeholders, validation
- [ ] **Table Components** - Headers, filters, pagination  
- [ ] **Chart Components** - Titles, legends, tooltips
- [ ] **Common Components** - Buttons, modals, alerts
- [ ] **Error Pages** - 404, 500, etc.

---

## 📂 Danh Sách File Cần Dịch

### 1. 🔐 Authentication (Ưu tiên cao)

#### ✅ Đã dịch:
- `src/app/(full-width-pages)/(auth)/signin/page.tsx`
- `src/components/auth/SignInForm.tsx`

#### 🔄 Cần dịch tiếp:
```typescript
// src/components/auth/SignUpForm.tsx
- "Back to dashboard" → "Quay lại trang chủ"
- "Sign Up" → "Đăng Ký"
- "Enter your email and password to sign up!" → "Nhập email và mật khẩu để đăng ký!"
- "Sign up with Google" → "Đăng ký với Google"
- "Sign up with X" → "Đăng ký với X"
- "Or" → "Hoặc"
- "First Name" → "Tên"
- "Last Name" → "Họ"
- "Email" → "Email"
- "Password" → "Mật khẩu"
- "Enter your first name" → "Nhập tên của bạn"
- "Enter your last name" → "Nhập họ của bạn"
- "Enter your email" → "Nhập email của bạn"
- "Enter your password" → "Nhập mật khẩu của bạn"
- "I agree to the Terms and Conditions" → "Tôi đồng ý với Điều khoản và Điều kiện"
- "Sign Up" (button) → "Đăng ký"
- "Already have an account?" → "Đã có tài khoản?"
- "Sign In" → "Đăng nhập"
```

```typescript
// src/app/(full-width-pages)/(auth)/reset-password/page.tsx (nếu có)
- "Reset Password" → "Đặt lại mật khẩu"
- "Enter your email to reset password" → "Nhập email để đặt lại mật khẩu"
- "Send Reset Link" → "Gửi liên kết đặt lại"
```

---

### 2. 📊 Dashboard Pages (Ưu tiên cao)

```typescript
// src/app/(admin)/page.tsx
- Metadata: "Dashboard" → "Trang chủ"
- "Welcome back!" → "Chào mừng trở lại!"
- "Total Revenue" → "Tổng doanh thu"
- "Total Orders" → "Tổng đơn hàng"
- "Total Customers" → "Tổng khách hàng"
- "Growth Rate" → "Tỷ lệ tăng trưởng"
```

```typescript
// src/components/ecommerce/* (nếu có)
- "Products" → "Sản phẩm"
- "Categories" → "Danh mục"
- "Orders" → "Đơn hàng"
- "Customers" → "Khách hàng"
- "Revenue" → "Doanh thu"
- "Sales" → "Bán hàng"
```

---

### 3. 🧑‍💼 User Profile

```typescript
// src/app/(admin)/profile/page.tsx
- "User Profile" → "Hồ sơ người dùng"
- "Personal Information" → "Thông tin cá nhân"
- "Account Settings" → "Cài đặt tài khoản"
- "Update Profile" → "Cập nhật hồ sơ"
- "Change Password" → "Đổi mật khẩu"
- "Upload Photo" → "Tải ảnh lên"
```

```typescript
// src/components/user-profile/UserInfoCard.tsx
- "Full Name" → "Họ và tên"
- "Phone Number" → "Số điện thoại"
- "Bio" → "Giới thiệu"
- "Website" → "Website"
- "Update your details to keep your profile up-to-date" → "Cập nhật thông tin để giữ hồ sơ luôn mới nhất"
```

---

### 4. 📝 Forms

```typescript
// src/app/(admin)/form-elements/page.tsx
- "Form Elements" → "Các phần tử biểu mẫu"
- "Input Fields" → "Trường nhập liệu"
- "Text Input" → "Ô nhập văn bản"
- "Select Dropdown" → "Dropdown chọn"
- "Checkbox" → "Hộp kiểm"
- "Radio Button" → "Nút radio"
- "File Upload" → "Tải file lên"
- "Date Picker" → "Chọn ngày"
- "Submit" → "Gửi"
- "Reset" → "Đặt lại"
- "Cancel" → "Hủy"
```

---

### 5. 📋 Tables

```typescript
// src/app/(admin)/basic-tables/page.tsx
- "Basic Tables" → "Bảng cơ bản"
- "Name" → "Tên"
- "Email" → "Email"
- "Role" → "Vai trò"
- "Status" → "Trạng thái"
- "Actions" → "Hành động"
- "Edit" → "Sửa"
- "Delete" → "Xóa"
- "View" → "Xem"
- "Active" → "Hoạt động"
- "Inactive" → "Không hoạt động"
- "Pending" → "Đang chờ"
```

```typescript
// src/components/tables/BasicTableOne.tsx
- "Package" → "Gói"
- "Invoice date" → "Ngày xuất hóa đơn"
- "Status" → "Trạng thái"
- "Amount" → "Số tiền"
- "Paid" → "Đã thanh toán"
- "Unpaid" → "Chưa thanh toán"
```

---

### 6. 📈 Charts

```typescript
// src/app/(admin)/line-chart/page.tsx
- "Line Chart" → "Biểu đồ đường"
- "Sales Overview" → "Tổng quan doanh số"
- "Monthly Revenue" → "Doanh thu hàng tháng"
```

```typescript
// src/app/(admin)/bar-chart/page.tsx
- "Bar Chart" → "Biểu đồ cột"
- "Comparison" → "So sánh"
- "Growth" → "Tăng trưởng"
```

```typescript
// src/components/charts/* (tất cả chart components)
- "Total" → "Tổng"
- "Average" → "Trung bình"
- "This Month" → "Tháng này"
- "Last Month" → "Tháng trước"
- "This Year" → "Năm nay"
- "Last Year" → "Năm ngoái"
```

---

### 7. 🎨 UI Elements

```typescript
// src/app/(admin)/alerts/page.tsx
- "Alerts" → "Cảnh báo"
- "Success" → "Thành công"
- "Warning" → "Cảnh báo"
- "Error" → "Lỗi"
- "Info" → "Thông tin"
```

```typescript
// src/app/(admin)/buttons/page.tsx
- "Buttons" → "Nút bấm"
- "Primary" → "Chính"
- "Secondary" → "Phụ"
- "Outline" → "Viền"
- "Disabled" → "Vô hiệu hóa"
```

```typescript
// src/app/(admin)/badge/page.tsx
- "Badge" → "Huy hiệu"
- "New" → "Mới"
- "Hot" → "Nóng"
- "Sale" → "Giảm giá"
```

---

### 8. 🎯 Header & Navigation

```typescript
// src/layout/AppHeader.tsx
- "Search" → "Tìm kiếm"
- "Notifications" → "Thông báo"
- "Messages" → "Tin nhắn"
- "Settings" → "Cài đặt"
```

```typescript
// src/components/header/UserDropdown.tsx
- "My Profile" → "Hồ sơ của tôi"
- "Edit profile" → "Chỉnh sửa hồ sơ"
- "Account Settings" → "Cài đặt tài khoản"
- "Sign out" → "Đăng xuất"
```

```typescript
// src/components/common/Breadcrumb.tsx
- "Home" → "Trang chủ"
- "Dashboard" → "Trang chủ"
```

---

### 9. 📅 Calendar

```typescript
// src/app/(admin)/calendar/page.tsx
- "Calendar" → "Lịch"
- "Today" → "Hôm nay"
- "Month" → "Tháng"
- "Week" → "Tuần"
- "Day" → "Ngày"
- "Add Event" → "Thêm sự kiện"
- "Event Details" → "Chi tiết sự kiện"
```

---

### 10. ❌ Error Pages

```typescript
// src/app/(admin)/error-404/page.tsx
- "Page Not Found" → "Không tìm thấy trang"
- "The page you are looking for doesn't exist" → "Trang bạn đang tìm không tồn tại"
- "Go back to home" → "Quay lại trang chủ"
```

```typescript
// src/app/not-found.tsx
- "404 - Not Found" → "404 - Không tìm thấy"
- "Back to Home" → "Quay lại trang chủ"
```

---

## 🔧 Cách Thực Hiện Nhanh

### Bước 1: Sử dụng Find & Replace (VS Code)
```
Ctrl + Shift + H (Windows) hoặc Cmd + Shift + H (Mac)

Find: "Sign In"
Replace: "Đăng nhập"
Files to include: admin/src/**/*.tsx
```

### Bước 2: Dịch từng file theo thứ tự ưu tiên
1. Auth pages (signin, signup) ✅ Đã xong
2. Sidebar menu ✅ Đã xong
3. Header & User dropdown
4. Dashboard main page
5. Forms & Tables
6. Charts & UI Elements
7. Error pages

### Bước 3: Test từng phần sau khi dịch
```bash
cd admin
npm run dev
```

---

## 📝 Từ điển thuật ngữ (Glossary)

### Chung
- Dashboard → Trang chủ / Bảng điều khiển
- Settings → Cài đặt
- Profile → Hồ sơ
- Account → Tài khoản
- Home → Trang chủ
- Search → Tìm kiếm
- Filter → Lọc
- Sort → Sắp xếp
- Export → Xuất
- Import → Nhập
- Save → Lưu
- Cancel → Hủy
- Submit → Gửi
- Update → Cập nhật
- Delete → Xóa
- Edit → Sửa
- View → Xem
- Add → Thêm
- Create → Tạo
- Remove → Xóa bỏ

### Authentication
- Sign In → Đăng nhập
- Sign Up → Đăng ký
- Sign Out → Đăng xuất
- Log In → Đăng nhập
- Log Out → Đăng xuất
- Register → Đăng ký
- Password → Mật khẩu
- Email → Email
- Username → Tên đăng nhập
- Forgot Password? → Quên mật khẩu?
- Reset Password → Đặt lại mật khẩu
- Remember Me → Ghi nhớ đăng nhập
- Keep me logged in → Giữ đăng nhập

### E-commerce
- Products → Sản phẩm
- Orders → Đơn hàng
- Customers → Khách hàng
- Revenue → Doanh thu
- Sales → Bán hàng
- Inventory → Tồn kho
- Categories → Danh mục
- Cart → Giỏ hàng
- Checkout → Thanh toán
- Payment → Thanh toán
- Shipping → Vận chuyển
- Discount → Giảm giá
- Coupon → Phiếu giảm giá

### Forms
- Input → Nhập liệu
- Select → Chọn
- Checkbox → Hộp kiểm
- Radio Button → Nút radio
- Upload → Tải lên
- Download → Tải xuống
- Required → Bắt buộc
- Optional → Tùy chọn
- Placeholder → Trình giữ chỗ
- Label → Nhãn
- Validation → Xác thực

### Tables
- Name → Tên
- Status → Trạng thái
- Actions → Hành động
- Active → Hoạt động
- Inactive → Không hoạt động
- Pending → Đang chờ
- Approved → Đã duyệt
- Rejected → Đã từ chối
- Rows per page → Số dòng mỗi trang
- Show entries → Hiển thị mục
- Showing → Đang hiển thị
- of → trong số
- entries → mục

### Charts
- Chart → Biểu đồ
- Line Chart → Biểu đồ đường
- Bar Chart → Biểu đồ cột
- Pie Chart → Biểu đồ tròn
- Total → Tổng
- Average → Trung bình
- Growth → Tăng trưởng
- Comparison → So sánh

### Status
- Success → Thành công
- Error → Lỗi
- Warning → Cảnh báo
- Info → Thông tin
- Loading → Đang tải
- Processing → Đang xử lý
- Completed → Đã hoàn thành
- Failed → Thất bại

### Time
- Today → Hôm nay
- Yesterday → Hôm qua
- This Week → Tuần này
- Last Week → Tuần trước
- This Month → Tháng này
- Last Month → Tháng trước
- This Year → Năm nay
- Last Year → Năm ngoái
- Date → Ngày
- Time → Thời gian

---

## ✅ Checklist Hoàn Thành

### Phase 1: Core (Ưu tiên cao) ✅
- [x] Sidebar menu items
- [x] SignIn page metadata
- [x] SignIn form
- [ ] SignUp form (50%)
- [ ] Header user dropdown
- [ ] Main dashboard page

### Phase 2: Components (Ưu tiên trung bình)
- [ ] Form elements
- [ ] Table components
- [ ] Chart components
- [ ] UI elements (buttons, badges, alerts)

### Phase 3: Pages (Ưu tiên thấp)
- [ ] Profile pages
- [ ] Calendar page
- [ ] Error pages
- [ ] Blank page

---

## 🚀 Lệnh Hữu Ích

```bash
# Test admin dashboard
cd admin
npm run dev

# Build admin
npm run build

# Tìm tất cả file chứa text tiếng Anh cần dịch
grep -r "Sign In" src/
grep -r "Dashboard" src/
grep -r "Profile" src/
```

---

## 📞 Liên Hệ & Hỗ Trợ

Nếu cần hỗ trợ thêm về việc dịch, vui lòng:
1. Kiểm tra file này trước
2. Test kỹ sau mỗi lần thay đổi
3. Commit changes theo từng phần nhỏ

---

**Cập nhật lần cuối:** 02/10/2025
**Tiến độ tổng thể:** ~15% hoàn thành
**Ước tính thời gian còn lại:** 4-6 giờ
