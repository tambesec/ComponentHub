import { Router } from 'express';
const router = Router();
// Mock orders data
const mockOrders = [];
// Create order
router.post('/', (req, res) => {
    const { items, shippingAddress, paymentMethod, userId = 'user-1' } = req.body;
    if (!items || !shippingAddress || !paymentMethod) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    const totalAmount = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const newOrder = {
        id: `order-${Date.now()}`,
        userId,
        items,
        totalAmount,
        status: 'pending',
        shippingAddress,
        paymentMethod,
        createdAt: new Date().toISOString(),
    };
    mockOrders.push(newOrder);
    res.json(newOrder);
});
// Get my orders
router.get('/my', (_req, res) => {
    res.json({
        data: mockOrders,
        pagination: {
            page: 1,
            limit: 10,
            total: mockOrders.length,
            totalPages: 1,
        },
    });
});
// Get order by ID
router.get('/:id', (req, res) => {
    const order = mockOrders.find(o => o.id === req.params.id);
    if (order) {
        res.json(order);
    }
    else {
        res.status(404).json({ error: 'Order not found' });
    }
});
// Cancel order
router.post('/:id/cancel', (req, res) => {
    const order = mockOrders.find(o => o.id === req.params.id);
    if (order) {
        order.status = 'cancelled';
        res.json(order);
    }
    else {
        res.status(404).json({ error: 'Order not found' });
    }
});
export default router;
//# sourceMappingURL=orders.js.map