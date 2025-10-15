import { Router } from 'express';

const router = Router();

type Product = {
  id: string;
  name: string;
  nameVi: string;
  slug: string;
  description: string;
  descriptionVi: string;
  price: number;
  salePrice?: number;
  discount?: number;
  stock: number;
  categoryId: string;
  brandId: string;
  images: string[];
  specifications: Record<string, string>;
  rating: number;
  reviewCount: number;
  featured: boolean;
  new: boolean;
  bestseller: boolean;
  createdAt: string;
  updatedAt: string;
};

// Mock data - Thiết bị mạng
let products: Product[] = [
  {
    id: 'prod-1',
    name: 'Cisco Catalyst 2960-X Series Switch',
    nameVi: 'Switch Cisco Catalyst 2960-X 24 Port',
    slug: 'cisco-catalyst-2960-x-24-port',
    description: '24-port Gigabit Ethernet switch with advanced security and QoS features',
    descriptionVi: 'Switch 24 cổng Gigabit Ethernet với tính năng bảo mật và QoS nâng cao',
    price: 15900000,
    salePrice: 14500000,
    discount: 9,
    stock: 25,
    categoryId: 'cat-1',
    brandId: 'brand-1',
    images: ['/images/products/cisco-switch-1.jpg', '/images/products/cisco-switch-2.jpg'],
    specifications: {
      'Số cổng': '24 ports',
      'Tốc độ': '10/100/1000 Mbps',
      'Uplink': '4x 1G SFP',
      'Công suất': '30W',
      'Bảo hành': '3 năm'
    },
    rating: 4.8,
    reviewCount: 124,
    featured: true,
    new: false,
    bestseller: true,
    createdAt: '2025-01-15T00:00:00Z',
    updatedAt: '2025-10-15T00:00:00Z'
  },
  {
    id: 'prod-2',
    name: 'TP-Link TL-SG1024D 24-Port Gigabit Switch',
    nameVi: 'Switch TP-Link TL-SG1024D 24 Cổng Gigabit',
    slug: 'tp-link-tl-sg1024d',
    description: 'Unmanaged 24-port Gigabit desktop/rackmount switch',
    descriptionVi: 'Switch Gigabit 24 cổng không quản lý, lắp rack hoặc để bàn',
    price: 3500000,
    stock: 50,
    categoryId: 'cat-1',
    brandId: 'brand-2',
    images: ['/images/products/tplink-switch-1.jpg'],
    specifications: {
      'Số cổng': '24 ports',
      'Tốc độ': '10/100/1000 Mbps',
      'Kiểu': 'Unmanaged',
      'Công suất': '18.7W',
      'Bảo hành': '2 năm'
    },
    rating: 4.5,
    reviewCount: 89,
    featured: false,
    new: false,
    bestseller: true,
    createdAt: '2025-02-10T00:00:00Z',
    updatedAt: '2025-10-14T00:00:00Z'
  },
  {
    id: 'prod-3',
    name: 'MikroTik RB4011iGS+RM Router',
    nameVi: 'Router MikroTik RB4011iGS+RM 10 Cổng',
    slug: 'mikrotik-rb4011igs-rm',
    description: '10 Gigabit port router with SFP+ cage and powerful quad-core CPU',
    descriptionVi: 'Router 10 cổng Gigabit với SFP+ và CPU 4 nhân mạnh mẽ',
    price: 9800000,
    salePrice: 9200000,
    discount: 6,
    stock: 15,
    categoryId: 'cat-2',
    brandId: 'brand-4',
    images: ['/images/products/mikrotik-router-1.jpg', '/images/products/mikrotik-router-2.jpg'],
    specifications: {
      'CPU': 'Quad-core 1.4GHz',
      'RAM': '1GB',
      'Số cổng': '10x Gigabit',
      'SFP+': '1x 10Gbps',
      'Bảo hành': '2 năm'
    },
    rating: 4.7,
    reviewCount: 67,
    featured: true,
    new: true,
    bestseller: false,
    createdAt: '2025-09-01T00:00:00Z',
    updatedAt: '2025-10-15T00:00:00Z'
  },
  {
    id: 'prod-4',
    name: 'Ubiquiti UniFi Dream Machine Pro',
    nameVi: 'Ubiquiti UniFi Dream Machine Pro - Router & Controller',
    slug: 'ubiquiti-udm-pro',
    description: 'All-in-one enterprise gateway with UniFi Network Controller',
    descriptionVi: 'Gateway doanh nghiệp tích hợp UniFi Network Controller',
    price: 16500000,
    stock: 12,
    categoryId: 'cat-2',
    brandId: 'brand-5',
    images: ['/images/products/ubiquiti-udm-pro-1.jpg'],
    specifications: {
      'CPU': 'Quad-core 1.7GHz',
      'RAM': '4GB',
      'Storage': '128GB SSD',
      'Cổng WAN': '1x RJ45 + 1x SFP+',
      'Cổng LAN': '8x Gigabit',
      'Bảo hành': '1 năm'
    },
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    new: true,
    bestseller: true,
    createdAt: '2025-08-20T00:00:00Z',
    updatedAt: '2025-10-15T00:00:00Z'
  },
  {
    id: 'prod-5',
    name: 'Fortinet FortiGate 60F Firewall',
    nameVi: 'Tường lửa Fortinet FortiGate 60F',
    slug: 'fortinet-fortigate-60f',
    description: 'Next-generation firewall for small to mid-sized businesses',
    descriptionVi: 'Tường lửa thế hệ mới cho doanh nghiệp vừa và nhỏ',
    price: 28500000,
    salePrice: 26800000,
    discount: 6,
    stock: 8,
    categoryId: 'cat-3',
    brandId: 'brand-6',
    images: ['/images/products/fortinet-firewall-1.jpg'],
    specifications: {
      'Throughput': '10 Gbps',
      'VPN': '2 Gbps',
      'Concurrent Sessions': '400,000',
      'Cổng LAN': '10x Gigabit',
      'Cổng WAN': '2x Gigabit',
      'Bảo hành': '3 năm'
    },
    rating: 4.8,
    reviewCount: 92,
    featured: true,
    new: false,
    bestseller: true,
    createdAt: '2025-03-15T00:00:00Z',
    updatedAt: '2025-10-12T00:00:00Z'
  },
  {
    id: 'prod-6',
    name: 'Ubiquiti UniFi 6 Long-Range Access Point',
    nameVi: 'Access Point Ubiquiti UniFi 6 Long-Range',
    slug: 'ubiquiti-u6-lr',
    description: 'Wi-Fi 6 access point with extended range coverage',
    descriptionVi: 'Access Point Wi-Fi 6 với khả năng phủ sóng xa',
    price: 4800000,
    stock: 35,
    categoryId: 'cat-4',
    brandId: 'brand-5',
    images: ['/images/products/ubiquiti-ap-1.jpg'],
    specifications: {
      'Wi-Fi': '802.11ax (Wi-Fi 6)',
      'Tốc độ': '3 Gbps',
      'Tầm phủ': '183m',
      'PoE': '802.3at',
      'Người dùng': '300+',
      'Bảo hành': '1 năm'
    },
    rating: 4.7,
    reviewCount: 143,
    featured: false,
    new: true,
    bestseller: true,
    createdAt: '2025-07-10T00:00:00Z',
    updatedAt: '2025-10-14T00:00:00Z'
  },
  {
    id: 'prod-7',
    name: 'Cisco Meraki MX68 Security Appliance',
    nameVi: 'Thiết bị bảo mật Cisco Meraki MX68',
    slug: 'cisco-meraki-mx68',
    description: 'Cloud-managed security and SD-WAN appliance',
    descriptionVi: 'Thiết bị bảo mật và SD-WAN quản lý cloud',
    price: 22900000,
    stock: 10,
    categoryId: 'cat-3',
    brandId: 'brand-1',
    images: ['/images/products/meraki-mx68-1.jpg'],
    specifications: {
      'Throughput': '450 Mbps',
      'VPN': '200 Mbps',
      'Cổng LAN': '8x Gigabit',
      'Cổng WAN': '2x Gigabit',
      'PoE+': '2 ports',
      'Bảo hành': '3 năm'
    },
    rating: 4.6,
    reviewCount: 78,
    featured: true,
    new: false,
    bestseller: false,
    createdAt: '2025-04-05T00:00:00Z',
    updatedAt: '2025-10-13T00:00:00Z'
  },
  {
    id: 'prod-8',
    name: 'D-Link DGS-1210-28 Smart Managed Switch',
    nameVi: 'Switch Quản Lý D-Link DGS-1210-28',
    slug: 'dlink-dgs-1210-28',
    description: '28-port Gigabit Smart Managed Switch with 4 SFP ports',
    descriptionVi: 'Switch Gigabit quản lý thông minh 28 cổng với 4 cổng SFP',
    price: 7200000,
    salePrice: 6800000,
    discount: 6,
    stock: 20,
    categoryId: 'cat-1',
    brandId: 'brand-3',
    images: ['/images/products/dlink-switch-1.jpg'],
    specifications: {
      'Số cổng': '24x Gigabit + 4x SFP',
      'VLAN': 'Hỗ trợ',
      'QoS': '4 queues',
      'Công suất': '250W PoE',
      'Bảo hành': '2 năm'
    },
    rating: 4.4,
    reviewCount: 56,
    featured: false,
    new: false,
    bestseller: false,
    createdAt: '2025-05-20T00:00:00Z',
    updatedAt: '2025-10-11T00:00:00Z'
  }
];

// GET all products with filtering
router.get('/', (req, res) => {
  let result = [...products];
  
  // Filter by category
  if (req.query.categoryId) {
    result = result.filter(p => p.categoryId === req.query.categoryId);
  }
  
  // Filter by brand
  if (req.query.brandId) {
    result = result.filter(p => p.brandId === req.query.brandId);
  }
  
  // Filter by featured
  if (req.query.featured === 'true') {
    result = result.filter(p => p.featured);
  }
  
  // Filter by new
  if (req.query.new === 'true') {
    result = result.filter(p => p.new);
  }
  
  // Filter by bestseller
  if (req.query.bestseller === 'true') {
    result = result.filter(p => p.bestseller);
  }
  
  // Search by name
  if (req.query.search) {
    const search = (req.query.search as string).toLowerCase();
    result = result.filter(p => 
      p.name.toLowerCase().includes(search) || 
      p.nameVi.toLowerCase().includes(search)
    );
  }
  
  // Sort
  if (req.query.sortBy === 'price-asc') {
    result.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
  } else if (req.query.sortBy === 'price-desc') {
    result.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
  } else if (req.query.sortBy === 'name') {
    result.sort((a, b) => a.nameVi.localeCompare(b.nameVi));
  } else if (req.query.sortBy === 'newest') {
    result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
  
  res.json({
    products: result,
    total: result.length,
    page: 1,
    limit: result.length
  });
});

// GET single product
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id || p.slug === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// CREATE product (Admin only)
router.post('/', (req, res) => {
  const newProduct: Product = {
    id: `prod-${Date.now()}`,
    ...req.body,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// UPDATE product (Admin only)
router.put('/:id', (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index !== -1) {
    products[index] = {
      ...products[index],
      ...req.body,
      updatedAt: new Date().toISOString()
    };
    res.json(products[index]);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// DELETE product (Admin only)
router.delete('/:id', (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index !== -1) {
    const deleted = products.splice(index, 1)[0];
    res.json({ message: 'Product deleted', product: deleted });
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

export default router;

