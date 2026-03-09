export interface BreadcrumbItem {
    label: string;
    href?: string;
    icon?: string;
    id?: string;
}

export interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    onItemClick?: (item: BreadcrumbItem) => void;
    separator?: React.ReactNode;
    className?: string;
    showHomeButton?: boolean;
    onHomeClick?: () => void;
}