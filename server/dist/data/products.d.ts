export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    categoryId: number;
    brandId: number;
    images: string[];
    specifications: Record<string, string>;
    inStock: boolean;
    stockQuantity: number;
    rating: number;
    reviewCount: number;
    tags: string[];
    createdAt: string;
    updatedAt: string;
}
export declare const products: Product[];
//# sourceMappingURL=products.d.ts.map