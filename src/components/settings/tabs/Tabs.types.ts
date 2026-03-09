export type TabId = 'company' | 'modules' | 'users' | 'security' | 'integrations';

export interface Tab {
  id: TabId;
  label: string;
}

export interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: TabId) => void;
}