import type { NavTabsProps } from './NavTabs.types';

export const NavTabs = ({ tabs, activeTab, onTabChange }: NavTabsProps) => (
  <div className="nav-tabs">
    {tabs.map((tab) => (
      <a
        key={tab.id}
        href={tab.href}
        className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
        onClick={(e) => {
          e.preventDefault();
          onTabChange(tab.id);
        }}
      >
        <i className={`fas ${tab.icon}`} style={{ marginRight: '0.5rem' }}></i>
        {tab.label}
      </a>
    ))}
  </div>
);