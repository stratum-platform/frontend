import type { NavTabsProps } from './NavTabs.types';

export const NavTabs = ({ tabs, activeTab, onTabChange, className = '' }: NavTabsProps) => {
    return (
        <div className={`nav-tabs ${className}`}>
            {tabs.map((tab) => (
                <a
                    key={tab.id}
                    href={tab.href}
                    className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={(e) => {
                        e.preventDefault();
                        onTabChange(tab.id);
                    }}
                    style={{
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '0.75rem 1.5rem',
                        borderBottom: activeTab === tab.id ? '2px solid #3498db' : '2px solid transparent',
                        fontWeight: activeTab === tab.id ? 600 : 400,
                        transition: 'all 0.2s',
                        textDecoration: 'none'
                    }}
                >
                    <i className={`fas ${tab.icon}`} style={{ marginRight: '0.5rem' }}></i>
                    {tab.label}
                </a>
            ))}
        </div>
    );
};