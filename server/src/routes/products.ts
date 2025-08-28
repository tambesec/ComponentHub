import { Router } from 'express';

const router = Router();

type Product = {
  id: number;
  name: string;
  price: number;
};

const sampleProducts: Product[] = [
  { id: 1, name: 'T-Shirt', price: 199000 },
  { id: 2, name: 'Jeans', price: 399000 },
];

router.get('/', (_req, res) => {
  res.json(sampleProducts);
});

export default router;

