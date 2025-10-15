# API Connection Testing Guide

## ✅ Test Kết Nối API

Sau khi tạo xong API services, hãy làm theo các bước sau để test kết nối:

## 1. Khởi động tất cả servers

```bash
# Cách 1: Sử dụng script tự động
.\start-all.ps1

# Cách 2: Chạy từng server
# Terminal 1 - Backend API
cd server
npm run dev

# Terminal 2 - Client
cd client
npm run dev

# Terminal 3 - Admin
cd admin
npm run dev
```

## 2. Kiểm tra Backend API

Mở trình duyệt và truy cập:

**Swagger Documentation**: http://localhost:3000/docs

Kiểm tra các endpoints sau:
- ✅ `GET /api/health` - Health check
- ✅ `GET /api/products` - Danh sách sản phẩm
- ✅ `GET /api/categories` - Danh sách danh mục
- ✅ `GET /api/brands` - Danh sách thương hiệu

## 3. Test Client API

### Mở Developer Console

1. Mở **Client**: http://localhost:5173
2. Nhấn `F12` để mở Developer Tools
3. Chuyển sang tab **Console**
4. Copy và paste code sau:

```javascript
// Test import API
import api from './src/services/api.ts';

// Test lấy sản phẩm
api.products.getAll({ page: 1, limit: 12 })
  .then(data => {
    console.log('✅ Products API works:', data);
  })
  .catch(error => {
    console.error('❌ Products API failed:', error);
  });

// Test lấy danh mục
api.categories.getAll()
  .then(data => {
    console.log('✅ Categories API works:', data);
  })
  .catch(error => {
    console.error('❌ Categories API failed:', error);
  });

// Test lấy thương hiệu
api.brands.getAll()
  .then(data => {
    console.log('✅ Brands API works:', data);
  })
  .catch(error => {
    console.error('❌ Brands API failed:', error);
  });
```

### Test trong Component

Tạo file test component: `client/src/components/TestAPI.tsx`

```typescript
'use client';

import { useEffect, useState } from 'react';
import api from '@/services/api';

export default function TestAPI() {
  const [status, setStatus] = useState({
    products: 'loading',
    categories: 'loading',
    brands: 'loading'
  });

  useEffect(() => {
    // Test Products API
    api.products.getAll({ page: 1, limit: 1 })
      .then(() => setStatus(prev => ({ ...prev, products: 'success' })))
      .catch(() => setStatus(prev => ({ ...prev, products: 'error' })));

    // Test Categories API
    api.categories.getAll()
      .then(() => setStatus(prev => ({ ...prev, categories: 'success' })))
      .catch(() => setStatus(prev => ({ ...prev, categories: 'error' })));

    // Test Brands API
    api.brands.getAll()
      .then(() => setStatus(prev => ({ ...prev, brands: 'success' })))
      .catch(() => setStatus(prev => ({ ...prev, brands: 'error' })));
  }, []);

  return (
    <div style={{ padding: '20px', background: '#f5f5f5', margin: '20px' }}>
      <h2>API Connection Status</h2>
      <ul>
        <li>Products API: {status.products === 'success' ? '✅' : status.products === 'error' ? '❌' : '⏳'}</li>
        <li>Categories API: {status.categories === 'success' ? '✅' : status.categories === 'error' ? '❌' : '⏳'}</li>
        <li>Brands API: {status.brands === 'success' ? '✅' : status.brands === 'error' ? '❌' : '⏳'}</li>
      </ul>
    </div>
  );
}
```

Thêm component vào trang home để test:

```typescript
// client/src/app/(site)/page.tsx
import TestAPI from '@/components/TestAPI';

export default function Home() {
  return (
    <>
      <TestAPI />
      {/* ... rest of home page */}
    </>
  );
}
```

## 4. Test Admin API

### Mở Admin Console

1. Mở **Admin**: http://localhost:3001
2. Nhấn `F12` để mở Developer Tools
3. Chuyển sang tab **Console**
4. Copy và paste code sau:

```javascript
// Test import Admin API
import adminApi from './src/services/api.ts';

// Test lấy sản phẩm (admin)
adminApi.products.getAll({ page: 1, limit: 20 })
  .then(data => {
    console.log('✅ Admin Products API works:', data);
  })
  .catch(error => {
    console.error('❌ Admin Products API failed:', error);
  });

// Test dashboard stats
adminApi.dashboard.getStats('month')
  .then(data => {
    console.log('✅ Dashboard API works:', data);
  })
  .catch(error => {
    console.error('❌ Dashboard API failed:', error);
  });
```

## 5. Kiểm tra CORS

Nếu gặp lỗi CORS, kiểm tra:

### Backend CORS Config

File: `server/src/app.ts`

```typescript
const allowedOrigins = [
  'http://localhost:5173',  // Client
  'http://localhost:3001',  // Admin
  'https://nettechpro.me',
  'https://admin.nettechpro.me'
];
```

### Browser Console

Nếu thấy lỗi:
```
Access to XMLHttpRequest at 'http://localhost:3000/api/products' 
from origin 'http://localhost:5173' has been blocked by CORS policy
```

**Fix**: Đảm bảo origin đã được thêm vào `allowedOrigins` trong `server/src/app.ts`

## 6. Test với curl

```bash
# Test Products API
curl http://localhost:3000/api/products

# Test Categories API
curl http://localhost:3000/api/categories

# Test Brands API
curl http://localhost:3000/api/brands

# Test với pagination
curl "http://localhost:3000/api/products?page=1&limit=10"
```

## 7. Kiểm tra Network Tab

1. Mở Developer Tools (`F12`)
2. Chuyển sang tab **Network**
3. Reload trang
4. Xem các request đến API server:
   - Status code `200` = Success ✅
   - Status code `404` = Not Found ❌
   - Status code `500` = Server Error ❌
   - Status code `CORS` = CORS Error ❌

## 8. Common Issues

### Issue 1: Cannot connect to API server

**Error**: `Network Error` hoặc `ERR_CONNECTION_REFUSED`

**Fix**:
1. Kiểm tra backend server đang chạy: `http://localhost:3000/docs`
2. Kiểm tra `.env.local` có đúng `NEXT_PUBLIC_API_URL`

### Issue 2: CORS Error

**Error**: `blocked by CORS policy`

**Fix**:
1. Kiểm tra `server/src/app.ts` có origin của client/admin
2. Restart backend server sau khi sửa

### Issue 3: 401 Unauthorized

**Error**: `401 Unauthorized`

**Fix**:
1. Đăng nhập lại để lấy token mới
2. Kiểm tra token trong localStorage: `localStorage.getItem('token')`
3. Clear localStorage và đăng nhập lại

### Issue 4: Module not found: axios

**Error**: `Cannot find module 'axios'`

**Fix**:
```bash
# Client
cd client
npm install axios

# Admin
cd admin
npm install axios
```

## 9. Expected Results

Sau khi test thành công, bạn sẽ thấy:

### Console Output
```
✅ Products API works: { data: [...], pagination: {...} }
✅ Categories API works: [...]
✅ Brands API works: [...]
```

### Network Tab
```
GET http://localhost:3000/api/products     200 OK
GET http://localhost:3000/api/categories   200 OK
GET http://localhost:3000/api/brands       200 OK
```

## 10. Next Steps

Sau khi verify API hoạt động tốt:

1. ✅ Commit code: `git add . && git commit -m "test: verify API connections"`
2. ✅ Tích hợp API vào components
3. ✅ Implement loading states và error handling
4. ✅ Test các tính năng: thêm vào giỏ, đặt hàng, đăng nhập, etc.

## 📚 Tài liệu liên quan

- **Client API Documentation**: `client/src/services/README.md`
- **Admin API Documentation**: `admin/src/services/README.md`
- **Backend API Documentation**: `http://localhost:3000/docs`
- **Project Setup**: `README.md` (root)
