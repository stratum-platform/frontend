export type NavTabId = 'overview' | 'categories';

export interface NavTab {
    id: NavTabId;
    label: string;
    icon: string;
    href: string;
}

export interface NavTabsProps {
    tabs: NavTab[];
    activeTab: NavTabId;
    onTabChange: (tabId: NavTabId) => void;
    className?: string;
}