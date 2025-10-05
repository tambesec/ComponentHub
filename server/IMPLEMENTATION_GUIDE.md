# Hướng dẫn triển khai đầy đủ REST API cho NetTechPro

## ✅ Đã tạo sẵn

1. ✅ `src/utils/apiResponse.ts` - Chuẩn hóa response
2. ✅ `src/utils/appError.ts` - Custom error classes
3. ✅ `REST_API_STRUCTURE.md` - Tài liệu chi tiết cấu trúc

## 🔧 Bước tiếp theo - Cài đặt dependencies

```bash
cd server
npm install jsonwebtoken bcryptjs express-rate-limit helmet compression morgan
npm install --save-dev @types/jsonwebtoken @types/bcryptjs @types/morgan
```

## 📁 Files cần tạo

### 1. Error Handler Middleware

**File: `src/middleware/errorHandler.ts`**

```typescript
import type { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { ApiResponse } from '../utils/apiResponse.js';
import { AppError } from '../utils/appError.js';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ZodError) {
    const errors = err.issues.map((e) => `${e.path.join('.')}: ${e.message}`).join(', ');
    return res.status(400).json(
      ApiResponse.error('Dữ liệu không hợp lệ', errors)
    );
  }

  if (err instanceof AppError) {
    return res.status(err.statusCode).json(
      ApiResponse.error(err.message)
    );
  }

  console.error('❌ ERROR:', err);
  return res.status(500).json(
    ApiResponse.error('Lỗi server nội bộ', process.env.NODE_ENV === 'development' ? err.message : undefined)
  );
};

export const notFoundHandler = (req: Request, res: Response) => {
  res.status(404).json(
    ApiResponse.error(`Route ${req.method} ${req.originalUrl} không tồn tại`)
  );
};
```

### 2. Validation Middleware

**File: `src/middleware/validate.ts`**

```typescript
import type { Request, Response, NextFunction } from 'express';
import type { AnyZodObject } from 'zod';

export const validate = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error) {
      next(error);
    }
  };
};
```

### 3. JWT Config

**File: `src/config/jwt.ts`**

```typescript
export const jwtConfig = {
  secret: process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production',
  expiresIn: process.env.JWT_EXPIRES_IN || '15m',
  refreshSecret: process.env.JWT_REFRESH_SECRET || 'your-refresh-token-secret',
  refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
};
```

### 4. Auth Middleware

**File: `src/middleware/auth.ts`**

```typescript
import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UnauthorizedError, ForbiddenError } from '../utils/appError.js';
import { jwtConfig } from '../config/jwt.js';

export interface AuthRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: 'user' | 'admin';
  };
}

export const authenticate = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedError('Token không được cung cấp');
    }

    const token = authHeader.substring(7); // Remove 'Bearer '
    
    const decoded = jwt.verify(token, jwtConfig.secret) as any;
    
    req.user = {
      id: decoded.id,
      email: decoded.email,
      role: decoded.role,
    };
    
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      next(new UnauthorizedError('Token đã hết hạn'));
    } else if (error instanceof jwt.JsonWebTokenError) {
      next(new UnauthorizedError('Token không hợp lệ'));
    } else {
      next(error);
    }
  }
};

export const requireAdmin = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (req.user?.role !== 'admin') {
    throw new ForbiddenError('Chỉ admin mới có quyền truy cập');
  }
  next();
};
```

### 5. Types Definition

**File: `src/types/index.ts`**

```typescript
export interface User {
  id: string;
  email: string;
  password: string;
  fullName: string;
  role: 'user' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  salePrice?: number;
  stock: number;
  categoryId: string;
  images: string[];
  specifications?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  parentId?: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CartItem {
  id: string;
  userId: string;
  productId: string;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  id: string;
  userId: string;
  status: 'pending' | 'processing' | 'shipping' | 'completed' | 'cancelled';
  totalAmount: number;
  shippingAddress: string;
  phone: string;
  note?: string;
  items: OrderItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  price: number;
  createdAt: Date;
}
```

### 6. Product Validators

**File: `src/validators/product.validator.ts`**

```typescript
import { z } from 'zod';

export const createProductSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Tên sản phẩm không được để trống'),
    slug: z.string().min(1, 'Slug không được để trống'),
    description: z.string().optional(),
    price: z.number().positive('Giá phải lớn hơn 0'),
    salePrice: z.number().positive().optional(),
    stock: z.number().int().min(0, 'Số lượng không được âm'),
    categoryId: z.string().min(1, 'Category ID không được để trống'),
    images: z.array(z.string().url('URL hình ảnh không hợp lệ')).optional(),
    specifications: z.record(z.any()).optional(),
  }),
});

export const updateProductSchema = z.object({
  params: z.object({
    id: z.string().min(1, 'Product ID không hợp lệ'),
  }),
  body: z.object({
    name: z.string().min(1).optional(),
    slug: z.string().min(1).optional(),
    description: z.string().optional(),
    price: z.number().positive().optional(),
    salePrice: z.number().positive().optional(),
    stock: z.number().int().min(0).optional(),
    categoryId: z.string().min(1).optional(),
    images: z.array(z.string().url()).optional(),
    specifications: z.record(z.any()).optional(),
  }),
});

export const getProductsSchema = z.object({
  query: z.object({
    page: z.string().transform(Number).pipe(z.number().int().positive()).optional(),
    limit: z.string().transform(Number).pipe(z.number().int().positive()).optional(),
    category: z.string().optional(),
    minPrice: z.string().transform(Number).pipe(z.number().positive()).optional(),
    maxPrice: z.string().transform(Number).pipe(z.number().positive()).optional(),
    sort: z.enum(['price-asc', 'price-desc', 'newest', 'oldest', 'name-asc', 'name-desc']).optional(),
    search: z.string().optional(),
  }),
});
```

### 7. Auth Validators

**File: `src/validators/auth.validator.ts`**

```typescript
import { z } from 'zod';

export const registerSchema = z.object({
  body: z.object({
    email: z.string().email('Email không hợp lệ'),
    password: z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
    fullName: z.string().min(1, 'Họ tên không được để trống'),
    gender: z.enum(['male', 'female', 'other']).optional(),
  }),
});

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email('Email không hợp lệ'),
    password: z.string().min(1, 'Mật khẩu không được để trống'),
  }),
});

export const refreshTokenSchema = z.object({
  body: z.object({
    refreshToken: z.string().min(1, 'Refresh token không được để trống'),
  }),
});
```

### 8. Mock Data Store (Temporary)

**File: `src/data/store.ts`**

```typescript
import type { Product, Category, User, CartItem, Order } from '../types/index.js';

// Mock data storage (thay bằng database thật sau)
export const store = {
  users: [] as User[],
  products: [] as Product[],
  categories: [] as Category[],
  cartItems: [] as CartItem[],
  orders: [] as Order[],
  refreshTokens: new Map<string, { userId: string; expiresAt: Date }>(),
};

// Seed initial categories
store.categories = [
  {
    id: '1',
    name: 'Card mạng',
    slug: 'card-mang',
    description: 'Card mạng LAN, Wifi',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    name: 'Hub & Switch',
    slug: 'hub-switch',
    description: 'Thiết bị chuyển mạch và hub',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '3',
    name: 'Router',
    slug: 'router',
    description: 'Bộ định tuyến mạng',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '4',
    name: 'Bộ phát sóng WiFi',
    slug: 'wifi-access-point',
    description: 'Access Point WiFi',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '5',
    name: 'USB Wifi',
    slug: 'usb-wifi',
    description: 'USB thu phát WiFi',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// Seed initial products
store.products = [
  {
    id: '1',
    name: 'TP-Link TL-WN725N - USB WiFi chuẩn N 150Mbps',
    slug: 'tp-link-tl-wn725n',
    description: 'USB WiFi mini chuẩn N tốc độ 150Mbps',
    price: 85000,
    salePrice: 75000,
    stock: 50,
    categoryId: '5',
    images: ['/images/product/tp-link-wn725n.jpg'],
    specifications: {
      speed: '150Mbps',
      frequency: '2.4GHz',
      interface: 'USB 2.0',
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    name: 'TP-Link Archer C6 - Router WiFi Dual Band AC1200',
    slug: 'tp-link-archer-c6',
    description: 'Router WiFi chuẩn AC1200 MU-MIMO',
    price: 650000,
    salePrice: 590000,
    stock: 30,
    categoryId: '3',
    images: ['/images/product/tp-link-archer-c6.jpg'],
    specifications: {
      speed: '1200Mbps',
      frequency: '2.4GHz + 5GHz',
      antennas: '4 anten ngoài',
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
```

## 🚀 Tiếp theo

Tôi đã tạo cấu trúc và code mẫu chi tiết. Bạn có muốn tôi:

1. ✅ Tạo đầy đủ Product Controller & Service?
2. ✅ Tạo đầy đủ Auth System (Register, Login, JWT)?
3. ✅ Tạo Cart & Order APIs?
4. ✅ Setup API Services cho Client/Admin?
5. ✅ Tạo Postman Collection để test?

Cho tôi biết bạn muốn tôi tạo phần nào tiếp theo! 🚀
