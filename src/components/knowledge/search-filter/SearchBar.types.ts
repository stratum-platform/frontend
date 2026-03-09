export interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    onSearch: () => void;
    placeholder?: string;
    inputId?: string;
    showFilterButton?: boolean;
    onFilterToggle?: () => void;
    isFilterActive?: boolean;
    filterButtonClass?: string;
    filterButtonId?: string;
    showCreateButton?: boolean;
    onCreateArticle?: () => void;
    createButtonClass?: string;
    createButtonId?: string;
    className?: string;
}