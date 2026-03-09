import type { ReactNode } from 'react';

export type ViewMode = 'grid' | 'list' | 'compact';

export interface KnowledgeLayoutProps {
    children: ReactNode;
    activeDepartment: string;
    viewMode: ViewMode;
    onViewModeChange: (mode: ViewMode) => void;
    title?: string;
    description?: string;
    className?: string;
}

export interface KnowledgeLayoutContextType {
    activeDepartment: string;
    viewMode: ViewMode;
    setViewMode: (mode: ViewMode) => void;
}