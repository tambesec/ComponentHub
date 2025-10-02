import { Router } from 'express';
import { categories } from '../data/categories.js';
const router = Router();
router.get('/', (_req, res) => {
    try {
        res.json(categories);
    }
    catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({
            error: 'INTERNAL_SERVER_ERROR',
            message: 'Failed to fetch categories'
        });
    }
});
router.get('/:slug', (req, res) => {
    try {
        const { slug } = req.params;
        const category = categories.find(c => c.slug === slug);
        if (!category) {
            return res.status(404).json({
                error: 'NOT_FOUND',
                message: 'Category not found'
            });
        }
        res.json(category);
    }
    catch (error) {
        console.error('Error fetching category:', error);
        res.status(500).json({
            error: 'INTERNAL_SERVER_ERROR',
            message: 'Failed to fetch category'
        });
    }
});
export default router;
//# sourceMappingURL=categories.js.map