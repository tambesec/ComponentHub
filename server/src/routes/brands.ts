import { Router } from 'express';

const router = Router();

type Brand = {
  id: string;
  name: string;
  slug: string;
  logo?: string;
};

const sampleBrands: Brand[] = [
  { id: '1', name: 'Dell', slug: 'dell', logo: '/images/brands/dell.png' },
  { id: '2', name: 'HP', slug: 'hp', logo: '/images/brands/hp.png' },
  { id: '3', name: 'Lenovo', slug: 'lenovo', logo: '/images/brands/lenovo.png' },
  { id: '4', name: 'Asus', slug: 'asus', logo: '/images/brands/asus.png' },
];

router.get('/', (_req, res) => {
  res.json(sampleBrands);
});

router.get('/:id', (req, res) => {
  const brand = sampleBrands.find(b => b.id === req.params.id);
  if (brand) {
    res.json(brand);
  } else {
    res.status(404).json({ error: 'Brand not found' });
  }
});

export default router;
