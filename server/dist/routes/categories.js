import { Router } from 'express';
const router = Router();
const sampleCategories = [
    { id: '1', name: 'Laptops', slug: 'laptops', description: 'Máy tính xách tay' },
    { id: '2', name: 'Smartphones', slug: 'smartphones', description: 'Điện thoại thông minh' },
    { id: '3', name: 'Tablets', slug: 'tablets', description: 'Máy tính bảng' },
    { id: '4', name: 'Accessories', slug: 'accessories', description: 'Phụ kiện' },
];
router.get('/', (_req, res) => {
    res.json(sampleCategories);
});
router.get('/:id', (req, res) => {
    const category = sampleCategories.find(c => c.id === req.params.id);
    if (category) {
        res.json(category);
    }
    else {
        res.status(404).json({ error: 'Category not found' });
    }
});
export default router;
//# sourceMappingURL=categories.js.map