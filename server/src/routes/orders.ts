import { Router } from 'express';

const router = Router();

type OrderItem = {
  productId: string;
  productName: string;
  productNameVi: string;
  quantity: number;
  price: number;
  image?: string;
};

type ShippingAddress = {
  fullName: string;
  phone: string;
  email?: string;
  address: string;
  ward?: string;
  district?: string;
  city: string;
  province: string;
  zipCode?: string;
};

type Order = {
  id: string;
  orderNumber: string;
  userId: string;
  userName?: string;
  userEmail?: string;
  items: OrderItem[];
  subtotal: number;
  shippingFee: number;
  tax: number;
  discount: number;
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';
  statusVi: string;
  shippingAddress: ShippingAddress;
  billingAddress?: ShippingAddress;
  paymentMethod: 'cod' | 'bank_transfer' | 'momo' | 'vnpay' | 'credit_card';
  paymentMethodVi: string;
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  trackingNumber?: string;
  notes?: string;
  adminNotes?: string;
  createdAt: string;
  updatedAt: string;
  confirmedAt?: string;
  shippedAt?: string;
  deliveredAt?: string;
};

// Mock orders data với sample data
let orders: Order[] = [
  {
    id: 'order-1',
    orderNumber: 'ORD-20251015-001',
    userId: 'user-1',
    userName: 'Nguyễn Văn A',
    userEmail: 'nguyenvana@email.com',
    items: [
      {
        productId: 'prod-1',
        productName: 'Cisco Catalyst 2960-X Series Switch',
        productNameVi: 'Switch Cisco Catalyst 2960-X 24 Port',
        quantity: 2,
        price: 14500000,
        image: '/images/products/cisco-switch-1.jpg'
      }
    ],
    subtotal: 29000000,
    shippingFee: 200000,
    tax: 0,
    discount: 0,
    totalAmount: 29200000,
    status: 'delivered',
    statusVi: 'Đã giao hàng',
    shippingAddress: {
      fullName: 'Nguyễn Văn A',
      phone: '0912345678',
      email: 'nguyenvana@email.com',
      address: '123 Đường Lê Lợi',
      ward: 'Phường Bến Thành',
      district: 'Quận 1',
      city: 'Hồ Chí Minh',
      province: 'TP. Hồ Chí Minh',
      zipCode: '700000'
    },
    paymentMethod: 'bank_transfer',
    paymentMethodVi: 'Chuyển khoản ngân hàng',
    paymentStatus: 'paid',
    trackingNumber: 'VN123456789',
    notes: 'Giao hàng giờ hành chính',
    createdAt: '2025-10-10T08:30:00Z',
    updatedAt: '2025-10-14T16:20:00Z',
    confirmedAt: '2025-10-10T09:00:00Z',
    shippedAt: '2025-10-11T10:00:00Z',
    deliveredAt: '2025-10-14T16:20:00Z'
  },
  {
    id: 'order-2',
    orderNumber: 'ORD-20251015-002',
    userId: 'user-2',
    userName: 'Trần Thị B',
    userEmail: 'tranthib@email.com',
    items: [
      {
        productId: 'prod-4',
        productName: 'Ubiquiti UniFi Dream Machine Pro',
        productNameVi: 'Ubiquiti UniFi Dream Machine Pro - Router & Controller',
        quantity: 1,
        price: 16500000,
        image: '/images/products/ubiquiti-udm-pro-1.jpg'
      },
      {
        productId: 'prod-6',
        productName: 'Ubiquiti UniFi 6 Long-Range Access Point',
        productNameVi: 'Access Point Ubiquiti UniFi 6 Long-Range',
        quantity: 3,
        price: 4800000,
        image: '/images/products/ubiquiti-ap-1.jpg'
      }
    ],
    subtotal: 30900000,
    shippingFee: 0,
    tax: 0,
    discount: 500000,
    totalAmount: 30400000,
    status: 'processing',
    statusVi: 'Đang xử lý',
    shippingAddress: {
      fullName: 'Trần Thị B',
      phone: '0987654321',
      email: 'tranthib@email.com',
      address: '456 Nguyễn Huệ',
      ward: 'Phường 1',
      district: 'Quận 5',
      city: 'Hồ Chí Minh',
      province: 'TP. Hồ Chí Minh'
    },
    paymentMethod: 'vnpay',
    paymentMethodVi: 'VNPay',
    paymentStatus: 'paid',
    notes: 'Gọi trước khi giao 30 phút',
    createdAt: '2025-10-14T14:20:00Z',
    updatedAt: '2025-10-15T09:15:00Z',
    confirmedAt: '2025-10-14T15:00:00Z'
  },
  {
    id: 'order-3',
    orderNumber: 'ORD-20251015-003',
    userId: 'user-3',
    userName: 'Lê Văn C',
    userEmail: 'levanc@email.com',
    items: [
      {
        productId: 'prod-2',
        productName: 'TP-Link TL-SG1024D 24-Port Gigabit Switch',
        productNameVi: 'Switch TP-Link TL-SG1024D 24 Cổng Gigabit',
        quantity: 5,
        price: 3500000,
        image: '/images/products/tplink-switch-1.jpg'
      }
    ],
    subtotal: 17500000,
    shippingFee: 150000,
    tax: 0,
    discount: 0,
    totalAmount: 17650000,
    status: 'pending',
    statusVi: 'Chờ xác nhận',
    shippingAddress: {
      fullName: 'Lê Văn C',
      phone: '0901234567',
      email: 'levanc@email.com',
      address: '789 Trần Hưng Đạo',
      district: 'Quận Tân Bình',
      city: 'Hồ Chí Minh',
      province: 'TP. Hồ Chí Minh'
    },
    paymentMethod: 'cod',
    paymentMethodVi: 'Thanh toán khi nhận hàng',
    paymentStatus: 'pending',
    createdAt: '2025-10-15T10:45:00Z',
    updatedAt: '2025-10-15T10:45:00Z'
  }
];

// Helper function to get status in Vietnamese
function getStatusVi(status: Order['status']): string {
  const statusMap: Record<Order['status'], string> = {
    pending: 'Chờ xác nhận',
    confirmed: 'Đã xác nhận',
    processing: 'Đang xử lý',
    shipped: 'Đang giao hàng',
    delivered: 'Đã giao hàng',
    cancelled: 'Đã hủy',
    refunded: 'Đã hoàn tiền'
  };
  return statusMap[status];
}

// Helper function to get payment method in Vietnamese
function getPaymentMethodVi(method: Order['paymentMethod']): string {
  const methodMap: Record<Order['paymentMethod'], string> = {
    cod: 'Thanh toán khi nhận hàng',
    bank_transfer: 'Chuyển khoản ngân hàng',
    momo: 'Ví MoMo',
    vnpay: 'VNPay',
    credit_card: 'Thẻ tín dụng'
  };
  return methodMap[method];
}

// GET all orders (Admin only)
router.get('/', (req, res) => {
  let result = [...orders];
  
  // Filter by status
  if (req.query.status) {
    result = result.filter(o => o.status === req.query.status);
  }
  
  // Filter by userId
  if (req.query.userId) {
    result = result.filter(o => o.userId === req.query.userId);
  }
  
  // Sort by date (newest first)
  result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  
  res.json({
    orders: result,
    total: result.length,
    stats: {
      pending: orders.filter(o => o.status === 'pending').length,
      confirmed: orders.filter(o => o.status === 'confirmed').length,
      processing: orders.filter(o => o.status === 'processing').length,
      shipped: orders.filter(o => o.status === 'shipped').length,
      delivered: orders.filter(o => o.status === 'delivered').length,
      cancelled: orders.filter(o => o.status === 'cancelled').length
    }
  });
});

// Create order
router.post('/', (req, res) => {
  const { items, shippingAddress, billingAddress, paymentMethod, userId = 'user-1', userName, userEmail, notes } = req.body;
  
  if (!items || !shippingAddress || !paymentMethod) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  const subtotal = items.reduce((sum: number, item: OrderItem) => sum + (item.price * item.quantity), 0);
  const shippingFee = subtotal > 10000000 ? 0 : 200000; // Free shipping for orders over 10M
  const tax = 0;
  const discount = 0;
  const totalAmount = subtotal + shippingFee + tax - discount;
  
  const dateStr = new Date().toISOString().split('T')[0]?.replace(/-/g, '') || '';
  const orderNumber = `ORD-${dateStr}-${String(orders.length + 1).padStart(3, '0')}`;
  
  const newOrder: Order = {
    id: `order-${Date.now()}`,
    orderNumber,
    userId,
    userName,
    userEmail,
    items,
    subtotal,
    shippingFee,
    tax,
    discount,
    totalAmount,
    status: 'pending',
    statusVi: getStatusVi('pending'),
    shippingAddress,
    billingAddress: billingAddress || shippingAddress,
    paymentMethod,
    paymentMethodVi: getPaymentMethodVi(paymentMethod),
    paymentStatus: paymentMethod === 'cod' ? 'pending' : 'pending',
    notes,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  orders.push(newOrder);
  
  res.status(201).json(newOrder);
});

// Get my orders
router.get('/my', (req, res) => {
  const userId = req.query.userId || 'user-1';
  const userOrders = orders.filter(o => o.userId === userId);
  
  res.json({
    orders: userOrders,
    total: userOrders.length,
    pagination: {
      page: 1,
      limit: 10,
      total: userOrders.length,
      totalPages: 1,
    },
  });
});

// Get order by ID
router.get('/:id', (req, res) => {
  const order = orders.find(o => o.id === req.params.id || o.orderNumber === req.params.id);
  
  if (order) {
    res.json(order);
  } else {
    res.status(404).json({ error: 'Order not found' });
  }
});

// Update order status (Admin only)
router.put('/:id/status', (req, res) => {
  const { status } = req.body;
  const order = orders.find(o => o.id === req.params.id);
  
  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }
  
  order.status = status;
  order.statusVi = getStatusVi(status);
  order.updatedAt = new Date().toISOString();
  
  if (status === 'confirmed' && !order.confirmedAt) {
    order.confirmedAt = new Date().toISOString();
  } else if (status === 'shipped' && !order.shippedAt) {
    order.shippedAt = new Date().toISOString();
  } else if (status === 'delivered' && !order.deliveredAt) {
    order.deliveredAt = new Date().toISOString();
    order.paymentStatus = 'paid';
  }
  
  res.json(order);
});

// Update order (Admin only)
router.put('/:id', (req, res) => {
  const index = orders.findIndex(o => o.id === req.params.id);
  
  if (index === -1) {
    return res.status(404).json({ error: 'Order not found' });
  }
  
  orders[index] = {
    ...orders[index],
    ...req.body,
    updatedAt: new Date().toISOString()
  };
  
  res.json(orders[index]);
});

// Cancel order
router.post('/:id/cancel', (req, res) => {
  const order = orders.find(o => o.id === req.params.id);
  
  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }
  
  if (['delivered', 'cancelled'].includes(order.status)) {
    return res.status(400).json({ error: 'Cannot cancel this order' });
  }
  
  order.status = 'cancelled';
  order.statusVi = getStatusVi('cancelled');
  order.updatedAt = new Date().toISOString();
  
  res.json(order);
});

// DELETE order (Admin only - soft delete)
router.delete('/:id', (req, res) => {
  const index = orders.findIndex(o => o.id === req.params.id);
  
  if (index === -1) {
    return res.status(404).json({ error: 'Order not found' });
  }
  
  const deleted = orders.splice(index, 1)[0];
  res.json({ message: 'Order deleted', order: deleted });
});

export default router;
