export interface Category {
    id: number;
    name: string;
    slug: string;
    description: string;
    image: string;
    parentId: number | null;
    productCount: number;
}
export declare const categories: Category[];
//# sourceMappingURL=categories.d.ts.map