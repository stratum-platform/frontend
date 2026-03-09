import type { TabsProps } from './Tabs.types';

export const Tabs = ({ tabs, activeTab, onTabChange }: TabsProps) => (
  <div className="tab-bar">
    <div className="px-6 flex gap-2 overflow-x-auto pb-1">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`tab ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  </div>
);