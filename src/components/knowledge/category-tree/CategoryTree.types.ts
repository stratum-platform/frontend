export interface Category {
    id: string;
    name: string;
    icon?: string;
    count?: number;
    children?: Category[];
}

export interface CategoryTreeProps {
    categories: Category[];
    activeCategoryId: string | null;
    onCategoryClick: (categoryId: string, categoryName: string) => void;
    onExpandAll?: () => void;
    departmentName: string;
    className?: string;
    title?: string;
}