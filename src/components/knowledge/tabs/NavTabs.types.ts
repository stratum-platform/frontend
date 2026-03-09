export type TabId = 'overview' | 'categories';

export interface NavTab {
  id: TabId;
  label: string;
  icon: string;
  href: string;
}

export interface NavTabsProps {
  tabs: NavTab[];
  activeTab: TabId;
  onTabChange: (tabId: TabId) => void;
}