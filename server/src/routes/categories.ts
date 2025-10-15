import { Router } from 'express';

const router = Router();

type Category = {
  id: string;
  name: string;
  nameVi: string;
  slug: string;
  description: string;
  descriptionVi: string;
  icon?: string;
  image?: string;
  productCount: number;
  parentId?: string | null;
  order: number;
};

let categories: Category[] = [
  { 
    id: 'cat-1', 
    name: 'Network Switches', 
    nameVi: 'Switch Mạng',
    slug: 'network-switches', 
    description: 'Managed and unmanaged network switches',
    descriptionVi: 'Switch mạng có quản lý và không quản lý',
    icon: 'switch-icon',
    image: '/images/categories/switches.jpg',
    productCount: 45,
    parentId: null,
    order: 1
  },
  { 
    id: 'cat-2', 
    name: 'Routers', 
    nameVi: 'Bộ Định Tuyến',
    slug: 'routers', 
    description: 'Enterprise and SOHO routers',
    descriptionVi: 'Router doanh nghiệp và văn phòng nhỏ',
    icon: 'router-icon',
    image: '/images/categories/routers.jpg',
    productCount: 32,
    parentId: null,
    order: 2
  },
  { 
    id: 'cat-3', 
    name: 'Firewalls & Security', 
    nameVi: 'Tường Lửa & Bảo Mật',
    slug: 'firewalls-security', 
    description: 'Network security appliances and firewalls',
    descriptionVi: 'Thiết bị bảo mật mạng và tường lửa',
    icon: 'firewall-icon',
    image: '/images/categories/firewalls.jpg',
    productCount: 28,
    parentId: null,
    order: 3
  },
  { 
    id: 'cat-4', 
    name: 'Wireless Access Points', 
    nameVi: 'Điểm Truy Cập Không Dây',
    slug: 'wireless-access-points', 
    description: 'Wi-Fi access points and controllers',
    descriptionVi: 'Access Point Wi-Fi và bộ điều khiển',
    icon: 'wifi-icon',
    image: '/images/categories/access-points.jpg',
    productCount: 38,
    parentId: null,
    order: 4
  },
  { 
    id: 'cat-5', 
    name: 'Network Cables & Accessories', 
    nameVi: 'Cáp Mạng & Phụ Kiện',
    slug: 'cables-accessories', 
    description: 'Network cables, patch panels, and accessories',
    descriptionVi: 'Cáp mạng, patch panel và phụ kiện',
    icon: 'cable-icon',
    image: '/images/categories/cables.jpg',
    productCount: 156,
    parentId: null,
    order: 5
  },
  { 
    id: 'cat-6', 
    name: 'Network Adapters', 
    nameVi: 'Card Mạng',
    slug: 'network-adapters', 
    description: 'Network interface cards and USB adapters',
    descriptionVi: 'Card mạng và adapter USB',
    icon: 'adapter-icon',
    image: '/images/categories/adapters.jpg',
    productCount: 42,
    parentId: null,
    order: 6
  },
  { 
    id: 'cat-7', 
    name: 'PoE Devices', 
    nameVi: 'Thiết Bị PoE',
    slug: 'poe-devices', 
    description: 'Power over Ethernet switches and injectors',
    descriptionVi: 'Switch PoE và injector',
    icon: 'poe-icon',
    image: '/images/categories/poe.jpg',
    productCount: 25,
    parentId: null,
    order: 7
  },
  { 
    id: 'cat-8', 
    name: 'Network Storage (NAS)', 
    nameVi: 'Lưu Trữ Mạng (NAS)',
    slug: 'network-storage', 
    description: 'Network attached storage devices',
    descriptionVi: 'Thiết bị lưu trữ gắn mạng',
    icon: 'nas-icon',
    image: '/images/categories/nas.jpg',
    productCount: 18,
    parentId: null,
    order: 8
  }
];

// GET all categories
router.get('/', (_req, res) => {
  res.json({
    categories,
    total: categories.length
  });
});

// GET single category
router.get('/:id', (req, res) => {
  const category = categories.find(c => c.id === req.params.id || c.slug === req.params.id);
  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ error: 'Category not found' });
  }
});

// CREATE category (Admin only)
router.post('/', (req, res) => {
  const newCategory: Category = {
    id: `cat-${Date.now()}`,
    ...req.body,
    productCount: 0
  };
  categories.push(newCategory);
  res.status(201).json(newCategory);
});

// UPDATE category (Admin only)
router.put('/:id', (req, res) => {
  const index = categories.findIndex(c => c.id === req.params.id);
  if (index !== -1) {
    categories[index] = {
      ...categories[index],
      ...req.body
    };
    res.json(categories[index]);
  } else {
    res.status(404).json({ error: 'Category not found' });
  }
});

// DELETE category (Admin only)
router.delete('/:id', (req, res) => {
  const index = categories.findIndex(c => c.id === req.params.id);
  if (index !== -1) {
    const deleted = categories.splice(index, 1)[0];
    res.json({ message: 'Category deleted', category: deleted });
  } else {
    res.status(404).json({ error: 'Category not found' });
  }
});

export default router;
