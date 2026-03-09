import { useState } from 'react';
import { KnowledgeLayout } from '../../components/knowledge/layout/KnowledgeLayout';
import { NavTabs } from '../../components/knowledge/navigation/NavTabs';
import { DepartmentSwitcher } from '../../components/knowledge/department/DepartmentSwitcher';
import { WelcomeCard } from '../../components/knowledge/department/WelcomeCard';
import { SearchBar } from '../../components/knowledge/search-filter/SearchBar';
import type { ViewMode } from '../../components/knowledge/layout/KnowledgeLayout.types';
import type { NavTabId } from '../../components/knowledge/navigation/NavTabs.types';

export const KnowledgeOverviewPage = () => {
    const [activeTab, setActiveTab] = useState<NavTabId>('overview');
    const [activeDepartment, setActiveDepartment] = useState('development');
    const [viewMode, setViewMode] = useState<ViewMode>('grid');
    const [searchQuery, setSearchQuery] = useState('');

    const tabs = [
        { id: 'overview' as const, label: 'Обзор', icon: 'fa-chart-pie', href: '/knowledge' },
        { id: 'categories' as const, label: 'Категории и статьи', icon: 'fa-sitemap', href: '/knowledge/categories' }
    ];

    const departments = [
        { id: 'development', name: 'Разработка' },
        { id: 'sales', name: 'Продажи' },
        { id: 'support', name: 'Поддержка' },
        { id: 'hr', name: 'HR' },
        { id: 'marketing', name: 'Маркетинг' }
    ];

    const handleTabChange = (tabId: NavTabId) => {
        setActiveTab(tabId);
        if (tabId === 'categories') {
            window.location.href = '/knowledge/categories';
        }
    };

    const handleDepartmentChange = (deptId: string) => {
        setActiveDepartment(deptId);
        console.log('Department changed:', deptId);
    };

    const handleSearch = () => {
        console.log('Searching for:', searchQuery);
    };

    const getDepartmentName = () => {
        return departments.find(d => d.id === activeDepartment)?.name || 'Разработка';
    };

    return (
        <KnowledgeLayout
            activeDepartment={activeDepartment}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
        >
            <NavTabs
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={handleTabChange}
            />

            <div className="content-area">
                <DepartmentSwitcher
                    departments={departments}
                    activeDepartment={activeDepartment}
                    onDepartmentChange={handleDepartmentChange}
                    lastUpdated="сегодня"
                />

                <WelcomeCard
                    userName="Александр"
                    departmentName={getDepartmentName()}
                    onArticleCreate={() => console.log('Create article')}
                    onQuestionAsk={() => console.log('Ask question')}
                />

                <SearchBar
                    value={searchQuery}
                    onChange={setSearchQuery}
                    onSearch={handleSearch}
                    showFilterButton={false}
                />

            </div>
        </KnowledgeLayout>
    );
};