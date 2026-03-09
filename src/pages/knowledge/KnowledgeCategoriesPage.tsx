import { useState } from 'react';
import { KnowledgeLayout } from '../../components/knowledge/layout/KnowledgeLayout';
import { NavTabs } from '../../components/knowledge/navigation/NavTabs';
import { DepartmentSwitcher } from '../../components/knowledge/department/DepartmentSwitcher';
import { Breadcrumbs } from '../../components/knowledge/breadcrumbs/Breadcrumbs';
import { CategoryTree } from '../../components/knowledge/category-tree/CategoryTree';
import { SearchBar } from '../../components/knowledge/search-filter/SearchBar';
import { AdvancedFilters } from '../../components/knowledge/search-filter/AdvancedFilters';
import { ArticlesContainer } from '../../components/knowledge/articles/ArticlesContainer';
import { ViewToggle } from '../../components/knowledge/articles/ViewToggle';
import { Pagination } from '../../components/knowledge/articles/Pagination';
import type { ViewMode } from '../../components/knowledge/layout/KnowledgeLayout.types';
import type { NavTabId } from '../../components/knowledge/navigation/NavTabs.types';
import type { AdvancedFiltersValues } from '../../components/knowledge/search-filter/AdvancedFilters.types';
import type { Article } from '../../components/knowledge/articles/ArticleCard.types';

const mockArticles: Article[] = [
    {
        id: '1',
        title: 'Настройка рабочего окружения',
        excerpt: 'Как настроить IDE, плагины и инструменты для эффективной работы.',
        author: { name: 'Фёдоров П.А.' },
        views: 456,
        tags: ['настройка', 'инструменты']
    },
    {
        id: '2',
        title: 'Code review: чек-лист',
        excerpt: 'Что проверять при code review и как оставлять полезные комментарии.',
        author: { name: 'Васильев К.И.' },
        views: 389,
        tags: ['code review', 'процессы']
    },
    {
        id: '3',
        title: 'Шаблон технической документации',
        excerpt: 'Готовый шаблон для создания технической документации в проектах.',
        author: { name: 'Новикова О.Л.' },
        views: 267,
        tags: ['документация', 'шаблон']
    },
    {
        id: '4',
        title: 'Git workflow',
        excerpt: 'Описание процесса работы с Git: ветки, коммиты, мерж-реквесты.',
        author: { name: 'Соколов Д.В.' },
        views: 189,
        tags: ['git', 'процессы']
    }
];

const categoryTree = [
    {
        id: 'procedures',
        name: 'Процедуры',
        icon: 'fas fa-folder',
        count: 8,
        children: [
            { id: 'procedures-standards', name: 'Стандартные процедуры', icon: 'fas fa-file-alt', count: 5 },
            { id: 'procedures-checklists', name: 'Чек-листы', icon: 'fas fa-check-square', count: 3 }
        ]
    },
    {
        id: 'technical',
        name: 'Техническая база',
        icon: 'fas fa-folder',
        count: 12,
        children: [
            { id: 'tech-architecture', name: 'Архитектура', icon: 'fas fa-cubes', count: 4 },
            { id: 'tech-databases', name: 'Базы данных', icon: 'fas fa-database', count: 3 },
            { id: 'tech-devops', name: 'DevOps', icon: 'fas fa-cloud', count: 3 },
            { id: 'tech-languages', name: 'Языки программирования', icon: 'fas fa-code', count: 2 }
        ]
    },
    {
        id: 'docs',
        name: 'Документация',
        icon: 'fas fa-folder',
        count: 6,
        children: [
            { id: 'docs-api', name: 'API документация', icon: 'fas fa-plug', count: 2 },
            { id: 'docs-user', name: 'Пользовательская', icon: 'fas fa-user', count: 2 },
            { id: 'docs-tech', name: 'Техническая', icon: 'fas fa-cog', count: 2 }
        ]
    },
    {
        id: 'policies',
        name: 'Внутренние политики',
        icon: 'fas fa-folder',
        count: 4,
        children: [
            { id: 'policies-security', name: 'Безопасность', icon: 'fas fa-shield-alt', count: 2 },
            { id: 'policies-hr', name: 'HR политики', icon: 'fas fa-users', count: 1 },
            { id: 'policies-ethics', name: 'Этика', icon: 'fas fa-gavel', count: 1 }
        ]
    },
    {
        id: 'faq',
        name: 'Часто задаваемые вопросы',
        icon: 'fas fa-question-circle',
        count: 9
    }
];

export const KnowledgeCategoriesPage = () => {
    const [activeTab, setActiveTab] = useState<NavTabId>('categories');
    const [activeDepartment, setActiveDepartment] = useState('development');
    const [viewMode, setViewMode] = useState<ViewMode>('grid');
    const [searchQuery, setSearchQuery] = useState('');
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);
    const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [articles, setArticles] = useState(mockArticles);
    const [loading, setLoading] = useState(false);

    const [filters, setFilters] = useState<AdvancedFiltersValues>({
        category: 'all',
        sort: 'newest',
        status: 'all',
        author: 'all',
        dateFrom: '',
        dateTo: '',
        tags: [],
        access: 'all'
    });

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

    const filterOptions = {
        categories: [
            { value: 'all', label: 'Все категории' },
            { value: 'procedures', label: 'Процедуры' },
            { value: 'technical', label: 'Техническая база' },
            { value: 'documentation', label: 'Документация' }
        ],
        sortOptions: [
            { value: 'newest', label: 'Сначала новые' },
            { value: 'oldest', label: 'Сначала старые' },
            { value: 'popular', label: 'По популярности' },
            { value: 'relevant', label: 'По релевантности' }
        ],
        statusOptions: [
            { value: 'all', label: 'Все статусы' },
            { value: 'published', label: 'Опубликовано' },
            { value: 'draft', label: 'Черновик' },
            { value: 'review', label: 'На проверке' }
        ],
        authors: [
            { value: 'all', label: 'Все авторы' },
            { value: 'petrov', label: 'Петров А.В.' },
            { value: 'sidorova', label: 'Сидорова Е.К.' },
            { value: 'kuznetsov', label: 'Кузнецов И.С.' }
        ],
        tags: [
            { value: 'обучение', label: 'обучение' },
            { value: 'процедуры', label: 'процедуры' },
            { value: 'техника', label: 'техника' },
            { value: 'безопасность', label: 'безопасность' },
            { value: 'отчетность', label: 'отчетность' }
        ],
        accessOptions: [
            { value: 'all', label: 'Все' },
            { value: 'public', label: 'Публичные' },
            { value: 'private', label: 'Приватные' }
        ]
    };

    const breadcrumbItems = [
        { label: 'Главная знаний', href: '/knowledge', icon: 'fa-home' },
        { label: 'Все категории', href: '/knowledge/categories' },
        { label: `Отдел: ${departments.find(d => d.id === activeDepartment)?.name || 'Разработка'}`, id: 'dept' },
        { label: activeCategoryId ? 'Выбранная категория' : 'Все статьи', id: 'current' }
    ];

    const handleTabChange = (tabId: NavTabId) => {
        setActiveTab(tabId);
        if (tabId === 'overview') {
            window.location.href = '/knowledge';
        }
    };

    const handleDepartmentChange = (deptId: string) => {
        setActiveDepartment(deptId);
        console.log('Department changed:', deptId);
    };

    const handleCategoryClick = (categoryId: string) => {
        setActiveCategoryId(categoryId);
        setLoading(true);

        setTimeout(() => {
            if (categoryId.includes('procedures')) {
                setArticles(mockArticles.slice(0, 2));
            } else {
                setArticles(mockArticles);
            }
            setLoading(false);
        }, 500);
    };

    const handleSearch = () => {
        console.log('Searching for:', searchQuery);
    };

    const handleApplyFilters = () => {
        console.log('Applying filters:', filters);
        setIsFiltersOpen(false);
    };

    const handleResetFilters = () => {
        setFilters({
            category: 'all',
            sort: 'newest',
            status: 'all',
            author: 'all',
            dateFrom: '',
            dateTo: '',
            tags: [],
            access: 'all'
        });
    };

    const getCurrentTitle = () => {
        if (activeCategoryId) {
            const findCategoryName = (cats: typeof categoryTree): string => {
                for (const cat of cats) {
                    if (cat.id === activeCategoryId) return cat.name;
                    if (cat.children) {
                        const found = cat.children.find(c => c.id === activeCategoryId);
                        if (found) return found.name;
                    }
                }
                return 'Все статьи';
            };
            return findCategoryName(categoryTree);
        }
        return 'Все статьи';
    };

    const getCurrentDescription = () => {
        const deptName = departments.find(d => d.id === activeDepartment)?.name || 'Разработка';
        if (activeCategoryId) {
            return `Статьи в категории «${getCurrentTitle()}» отдела ${deptName}`;
        }
        return `Все материалы отдела ${deptName}`;
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

                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'end', marginBottom: '1rem' }}>
                    <SearchBar 
                        value={searchQuery}
                        onChange={setSearchQuery}
                        onSearch={handleSearch}
                        showFilterButton={true}
                        onFilterToggle={() => setIsFiltersOpen(!isFiltersOpen)}
                        isFilterActive={isFiltersOpen}
                        inputId="knowledge-search"
                        filterButtonId="toggle-filters-btn"
                        filterButtonClass="btn btn-secondary"
                        showCreateButton={true}
                        onCreateArticle={() => console.log('Create article')}
                        createButtonId="create-article-btn"
                        createButtonClass="btn btn-primary"
                    />
                    <ViewToggle 
                        currentView={viewMode}
                        onViewChange={setViewMode}
                    />
                </div>

                <AdvancedFilters
                    filters={filters}
                    onFilterChange={(key, value) => setFilters(prev => ({ ...prev, [key]: value }))}
                    onApply={handleApplyFilters}
                    onReset={handleResetFilters}
                    isOpen={isFiltersOpen}
                    options={filterOptions}
                />

                <div className="knowledge-layout" style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
                    <CategoryTree
                        categories={categoryTree}
                        activeCategoryId={activeCategoryId}
                        onCategoryClick={handleCategoryClick}
                        departmentName={departments.find(d => d.id === activeDepartment)?.name || 'Разработка'}
                    />

                    <main className="knowledge-content" style={{ flex: 1, minWidth: 0 }}>
                        <Breadcrumbs
                            items={breadcrumbItems}
                            showHomeButton={true}
                            onHomeClick={() => window.location.href = '/knowledge'}
                        />

                        <ArticlesContainer
                            articles={articles}
                            viewMode={viewMode}
                            title={getCurrentTitle()}
                            description={getCurrentDescription()}
                            onArticleClick={(id) => console.log('Article clicked:', id)}
                            loading={loading}
                        />

                        <Pagination
                            currentPage={currentPage}
                            totalPages={5}
                            onPageChange={setCurrentPage}
                        />
                    </main>
                </div>
            </div>
        </KnowledgeLayout>
    );
};