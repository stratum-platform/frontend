export interface FilterOption {
    value: string;
    label: string;
}

export interface DateRange {
    from: string;
    to: string;
}

export interface AdvancedFiltersValues {
    category: string;
    sort: string;
    status: string;
    author: string;
    dateFrom: string;
    dateTo: string;
    tags: string[];
    access: string;
}

export interface AdvancedFiltersProps {
    filters: AdvancedFiltersValues;
    onFilterChange: (key: keyof AdvancedFiltersValues, value: any) => void;
    onApply: () => void;
    onReset: () => void;
    isOpen: boolean;
    options: {
        categories: FilterOption[];
        sortOptions: FilterOption[];
        statusOptions: FilterOption[];
        authors: FilterOption[];
        tags: FilterOption[];
        accessOptions: FilterOption[];
    };
    className?: string;
}