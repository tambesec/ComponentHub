import { Router } from 'express';
import { products } from '../data/products.js';
import { categories } from '../data/categories.js';
import { brands } from '../data/brands.js';
const router = Router();
router.get('/', (req, res) => {
    try {
        const { category, brand, minPrice, maxPrice, search, page = '1', limit = '20' } = req.query;
        let filteredProducts = [...products];
        // Filter by category
        if (category) {
            const categoryObj = categories.find(c => c.slug === category);
            if (categoryObj) {
                filteredProducts = filteredProducts.filter(p => p.categoryId === categoryObj.id);
            }
        }
        // Filter by brand
        if (brand) {
            const brandObj = brands.find(b => b.slug === brand);
            if (brandObj) {
                filteredProducts = filteredProducts.filter(p => p.brandId === brandObj.id);
            }
        }
        // Filter by price range
        if (minPrice) {
            const min = parseFloat(minPrice);
            filteredProducts = filteredProducts.filter(p => p.price >= min);
        }
        if (maxPrice) {
            const max = parseFloat(maxPrice);
            filteredProducts = filteredProducts.filter(p => p.price <= max);
        }
        // Search by name or description
        if (search) {
            const searchLower = search.toLowerCase();
            filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(searchLower) ||
                p.description.toLowerCase().includes(searchLower) ||
                p.tags.some(tag => tag.toLowerCase().includes(searchLower)));
        }
        // Pagination
        const pageNum = Math.max(1, parseInt(page));
        const limitNum = Math.min(100, Math.max(1, parseInt(limit)));
        const total = filteredProducts.length;
        const totalPages = Math.ceil(total / limitNum);
        const offset = (pageNum - 1) * limitNum;
        const paginatedProducts = filteredProducts.slice(offset, offset + limitNum);
        // Add category and brand info to products
        const enrichedProducts = paginatedProducts.map(product => ({
            ...product,
            category: categories.find(c => c.id === product.categoryId),
            brand: brands.find(b => b.id === product.brandId)
        }));
        // Get price range for filters
        const prices = filteredProducts.map(p => p.price);
        const priceRange = {
            min: prices.length > 0 ? Math.min(...prices) : 0,
            max: prices.length > 0 ? Math.max(...prices) : 0
        };
        res.json({
            products: enrichedProducts,
            pagination: {
                page: pageNum,
                limit: limitNum,
                total,
                totalPages,
                hasNext: pageNum < totalPages,
                hasPrev: pageNum > 1
            },
            filters: {
                categories: categories.filter(c => filteredProducts.some(p => p.categoryId === c.id)),
                brands: brands.filter(b => filteredProducts.some(p => p.brandId === b.id)),
                priceRange
            }
        });
    }
    catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({
            error: 'INTERNAL_SERVER_ERROR',
            message: 'Failed to fetch products'
        });
    }
});
router.get('/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id || '0');
        const product = products.find(p => p.id === id);
        if (!product) {
            return res.status(404).json({
                error: 'NOT_FOUND',
                message: 'Product not found'
            });
        }
        // Add category and brand info
        const enrichedProduct = {
            ...product,
            category: categories.find(c => c.id === product.categoryId),
            brand: brands.find(b => b.id === product.brandId)
        };
        res.json(enrichedProduct);
    }
    catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({
            error: 'INTERNAL_SERVER_ERROR',
            message: 'Failed to fetch product'
        });
    }
});
export default router;
//# sourceMappingURL=products.js.map