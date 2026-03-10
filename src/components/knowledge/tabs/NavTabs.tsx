import type { NavTabsProps } from './NavTabs.types';
import { Link } from 'react-router-dom';

export const NavTabs = ({ tabs, activeTab, onTabChange }: NavTabsProps) => (
  <div className="nav-tabs">
    {tabs.map((tab) => (
      <Link 
        key={tab.id}
        to={tab.href}
        className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
        onClick={() => onTabChange(tab.id)}
      >
        <i className={`fas ${tab.icon}`} style={{ marginRight: '0.5rem' }}></i>
        {tab.label}
      </Link>
    ))}
  </div>
);