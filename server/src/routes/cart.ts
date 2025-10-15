import { Router } from 'express';

const router = Router();

type CartItem = {
  id: string;
  productId: string;
  quantity: number;
  price: number;
};

type Cart = {
  id: string;
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
};

// Mock cart data
let mockCart: Cart = {
  id: 'cart-1',
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

// Get cart
router.get('/', (_req, res) => {
  res.json(mockCart);
});

// Add item to cart
router.post('/items', (req, res) => {
  const { productId, quantity, price } = req.body;
  
  const existingItem = mockCart.items.find(item => item.productId === productId);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    mockCart.items.push({
      id: `item-${Date.now()}`,
      productId,
      quantity,
      price,
    });
  }
  
  mockCart.totalItems = mockCart.items.reduce((sum, item) => sum + item.quantity, 0);
  mockCart.totalPrice = mockCart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  res.json(mockCart);
});

// Update cart item
router.put('/items/:itemId', (req, res) => {
  const { itemId } = req.params;
  const { quantity } = req.body;
  
  const item = mockCart.items.find(i => i.id === itemId);
  
  if (item) {
    item.quantity = quantity;
    mockCart.totalItems = mockCart.items.reduce((sum, item) => sum + item.quantity, 0);
    mockCart.totalPrice = mockCart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    res.json(mockCart);
  } else {
    res.status(404).json({ error: 'Cart item not found' });
  }
});

// Remove item from cart
router.delete('/items/:itemId', (req, res) => {
  const { itemId } = req.params;
  
  mockCart.items = mockCart.items.filter(i => i.id !== itemId);
  mockCart.totalItems = mockCart.items.reduce((sum, item) => sum + item.quantity, 0);
  mockCart.totalPrice = mockCart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  res.json(mockCart);
});

// Clear cart
router.delete('/', (_req, res) => {
  mockCart = {
    id: 'cart-1',
    items: [],
    totalItems: 0,
    totalPrice: 0,
  };
  res.json(mockCart);
});

export default router;
