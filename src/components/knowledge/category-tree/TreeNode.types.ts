import type { Category } from './CategoryTree.types';

export interface TreeNodeProps {
    category: Category;
    level: number;
    activeCategoryId: string | null;
    onCategoryClick: (categoryId: string, categoryName: string) => void;
    initiallyExpanded?: boolean;
}