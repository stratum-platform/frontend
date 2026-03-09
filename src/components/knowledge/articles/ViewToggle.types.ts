export type ViewMode = 'grid' | 'list' | 'compact';

export interface ViewToggleProps {
    currentView: ViewMode;
    onViewChange: (mode: ViewMode) => void;
    className?: string;
}