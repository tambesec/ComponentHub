import { Router } from 'express';

const router = Router();

type Brand = {
  id: string;
  name: string;
  slug: string;
  logo: string;
  description: string;
  descriptionVi: string;
  website?: string;
  country: string;
  productCount: number;
  featured: boolean;
  order: number;
};

let brands: Brand[] = [
  { 
    id: 'brand-1', 
    name: 'Cisco', 
    slug: 'cisco', 
    logo: '/images/brands/cisco.png',
    description: 'Global leader in networking equipment and solutions',
    descriptionVi: 'Nhà lãnh đạo toàn cầu về thiết bị và giải pháp mạng',
    website: 'https://www.cisco.com',
    country: 'USA',
    productCount: 156,
    featured: true,
    order: 1
  },
  { 
    id: 'brand-2', 
    name: 'TP-Link', 
    slug: 'tp-link', 
    logo: '/images/brands/tp-link.png',
    description: 'Reliable networking devices for home and business',
    descriptionVi: 'Thiết bị mạng tin cậy cho gia đình và doanh nghiệp',
    website: 'https://www.tp-link.com',
    country: 'China',
    productCount: 89,
    featured: true,
    order: 2
  },
  { 
    id: 'brand-3', 
    name: 'D-Link', 
    slug: 'd-link', 
    logo: '/images/brands/d-link.png',
    description: 'Innovative networking solutions and smart home devices',
    descriptionVi: 'Giải pháp mạng sáng tạo và thiết bị nhà thông minh',
    website: 'https://www.dlink.com',
    country: 'Taiwan',
    productCount: 67,
    featured: true,
    order: 3
  },
  { 
    id: 'brand-4', 
    name: 'MikroTik', 
    slug: 'mikrotik', 
    logo: '/images/brands/mikrotik.png',
    description: 'Advanced routing and wireless systems',
    descriptionVi: 'Hệ thống định tuyến và không dây nâng cao',
    website: 'https://www.mikrotik.com',
    country: 'Latvia',
    productCount: 52,
    featured: true,
    order: 4
  },
  { 
    id: 'brand-5', 
    name: 'Ubiquiti', 
    slug: 'ubiquiti', 
    logo: '/images/brands/ubiquiti.png',
    description: 'Enterprise wireless and networking solutions',
    descriptionVi: 'Giải pháp mạng và không dây doanh nghiệp',
    website: 'https://www.ui.com',
    country: 'USA',
    productCount: 78,
    featured: true,
    order: 5
  },
  { 
    id: 'brand-6', 
    name: 'Fortinet', 
    slug: 'fortinet', 
    logo: '/images/brands/fortinet.png',
    description: 'Cybersecurity solutions and network security',
    descriptionVi: 'Giải pháp an ninh mạng và bảo mật',
    website: 'https://www.fortinet.com',
    country: 'USA',
    productCount: 45,
    featured: true,
    order: 6
  },
  { 
    id: 'brand-7', 
    name: 'Netgear', 
    slug: 'netgear', 
    logo: '/images/brands/netgear.png',
    description: 'Networking hardware for homes and businesses',
    descriptionVi: 'Phần cứng mạng cho gia đình và doanh nghiệp',
    website: 'https://www.netgear.com',
    country: 'USA',
    productCount: 63,
    featured: false,
    order: 7
  },
  { 
    id: 'brand-8', 
    name: 'Juniper Networks', 
    slug: 'juniper', 
    logo: '/images/brands/juniper.png',
    description: 'High-performance networking equipment',
    descriptionVi: 'Thiết bị mạng hiệu suất cao',
    website: 'https://www.juniper.net',
    country: 'USA',
    productCount: 38,
    featured: false,
    order: 8
  },
  { 
    id: 'brand-9', 
    name: 'Aruba (HPE)', 
    slug: 'aruba', 
    logo: '/images/brands/aruba.png',
    description: 'Enterprise networking and security solutions',
    descriptionVi: 'Giải pháp mạng và bảo mật doanh nghiệp',
    website: 'https://www.arubanetworks.com',
    country: 'USA',
    productCount: 41,
    featured: false,
    order: 9
  },
  { 
    id: 'brand-10', 
    name: 'Huawei', 
    slug: 'huawei', 
    logo: '/images/brands/huawei.png',
    description: 'ICT infrastructure and smart devices',
    descriptionVi: 'Hạ tầng ICT và thiết bị thông minh',
    website: 'https://www.huawei.com',
    country: 'China',
    productCount: 54,
    featured: false,
    order: 10
  }
];

// GET all brands
router.get('/', (req, res) => {
  let result = [...brands];
  
  // Filter by featured
  if (req.query.featured === 'true') {
    result = result.filter(b => b.featured);
  }
  
  // Sort by order
  result.sort((a, b) => a.order - b.order);
  
  res.json({
    brands: result,
    total: result.length
  });
});

// GET single brand
router.get('/:id', (req, res) => {
  const brand = brands.find(b => b.id === req.params.id || b.slug === req.params.id);
  if (brand) {
    res.json(brand);
  } else {
    res.status(404).json({ error: 'Brand not found' });
  }
});

// CREATE brand (Admin only)
router.post('/', (req, res) => {
  const newBrand: Brand = {
    id: `brand-${Date.now()}`,
    ...req.body,
    productCount: 0
  };
  brands.push(newBrand);
  res.status(201).json(newBrand);
});

// UPDATE brand (Admin only)
router.put('/:id', (req, res) => {
  const index = brands.findIndex(b => b.id === req.params.id);
  if (index !== -1) {
    brands[index] = {
      ...brands[index],
      ...req.body
    };
    res.json(brands[index]);
  } else {
    res.status(404).json({ error: 'Brand not found' });
  }
});

// DELETE brand (Admin only)
router.delete('/:id', (req, res) => {
  const index = brands.findIndex(b => b.id === req.params.id);
  if (index !== -1) {
    const deleted = brands.splice(index, 1)[0];
    res.json({ message: 'Brand deleted', brand: deleted });
  } else {
    res.status(404).json({ error: 'Brand not found' });
  }
});

export default router;
