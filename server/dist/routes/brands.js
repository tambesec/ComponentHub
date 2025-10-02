import { Router } from 'express';
import { brands } from '../data/brands.js';
const router = Router();
router.get('/', (_req, res) => {
    try {
        res.json(brands);
    }
    catch (error) {
        console.error('Error fetching brands:', error);
        res.status(500).json({
            error: 'INTERNAL_SERVER_ERROR',
            message: 'Failed to fetch brands'
        });
    }
});
router.get('/:slug', (req, res) => {
    try {
        const { slug } = req.params;
        const brand = brands.find(b => b.slug === slug);
        if (!brand) {
            return res.status(404).json({
                error: 'NOT_FOUND',
                message: 'Brand not found'
            });
        }
        res.json(brand);
    }
    catch (error) {
        console.error('Error fetching brand:', error);
        res.status(500).json({
            error: 'INTERNAL_SERVER_ERROR',
            message: 'Failed to fetch brand'
        });
    }
});
export default router;
//# sourceMappingURL=brands.js.map