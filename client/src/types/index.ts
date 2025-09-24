export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  images: string[];
  category: Category;
  brand: Brand;
  badges: string[];
  inStock: boolean;
  stockQuantity: number;
  specifications: Record<string, string>;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  parentId?: number;
  children?: Category[];
  productCount: number;
}

export interface Brand {
  id: number;
  name: string;
  slug: string;
  logo: string;
  description?: string;
  website?: string;
  productCount: number;
}

export interface CartItem {
  id: number;
  product: Product;
  quantity: number;
  selectedVariant?: ProductVariant;
}

export interface ProductVariant {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  inStock: boolean;
  attributes: Record<string, string>;
}

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  avatar?: string;
  addresses: Address[];
  createdAt: string;
}

export interface Address {
  id: number;
  type: 'home' | 'office' | 'other';
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  ward: string;
  district: string;
  city: string;
  isDefault: boolean;
}

export interface Order {
  id: number;
  orderNumber: string;
  status: 'pending' | 'confirmed' | 'processing' | 'shipping' | 'delivered' | 'cancelled';
  items: OrderItem[];
  subtotal: number;
  shippingFee: number;
  discount: number;
  total: number;
  shippingAddress: Address;
  paymentMethod: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  id: number;
  product: Product;
  quantity: number;
  price: number;
  selectedVariant?: ProductVariant;
}

export interface Review {
  id: number;
  user: User;
  product: Product;
  rating: number;
  title: string;
  content: string;
  images?: string[];
  helpful: number;
  createdAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  errors?: Record<string, string[]>;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
