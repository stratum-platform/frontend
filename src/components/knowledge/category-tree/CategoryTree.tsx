import { useState, useEffect } from 'react';
import type { CategoryTreeProps } from './CategoryTree.types';
import { TreeNode } from './TreeNode';
import { CategorySearch } from './CategorySearch';

export const CategoryTree = ({
    categories,
    activeCategoryId,
    onCategoryClick,
    onExpandAll,
    className = '',
    title = 'Категории отдела'
}: CategoryTreeProps) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCategories, setFilteredCategories] = useState(categories);
    const [isExpandedAll, setIsExpandedAll] = useState(false);

    useEffect(() => {
        if (!searchQuery.trim()) {
            setFilteredCategories(categories);
            return;
        }

        const filterCategories = (cats: typeof categories): typeof categories => {
            return cats.reduce((acc, cat) => {
                const matchesCurrent = cat.name.toLowerCase().includes(searchQuery.toLowerCase());

                const filteredChildren = cat.children ? filterCategories(cat.children) : [];

                if (matchesCurrent || filteredChildren.length > 0) {
                    acc.push({
                        ...cat,
                        children: filteredChildren.length > 0 ? filteredChildren : cat.children
                    });
                }

                return acc;
            }, [] as typeof categories);
        };

        setFilteredCategories(filterCategories(categories));
    }, [searchQuery, categories]);

    const handleExpandAll = () => {
        setIsExpandedAll(!isExpandedAll);
        if (onExpandAll) {
            onExpandAll();
        }
    };

    return (
        <aside
            className={`knowledge-tree-sidebar ${className}`}
            style={{
                flex: '0 0 320px',
                background: 'white',
                borderRadius: '16px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                padding: '1.5rem',
                height: 'fit-content',
                position: 'sticky',
                top: '1rem'
            }}
        >
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.5rem'
            }}>
                <h3 style={{
                    fontSize: '1.1rem',
                    color: '#2c3e50',
                    margin: 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    <i className="fas fa-sitemap" style={{ color: '#3498db' }}></i>
                    {title}
                </h3>
                <button
                    onClick={handleExpandAll}
                    className="btn btn-secondary btn-sm"
                    style={{
                        padding: '0.25rem 0.75rem',
                        fontSize: '0.8rem',
                        border: '1px solid #e9ecef',
                        borderRadius: '20px',
                        background: '#f8f9fa',
                        color: '#2c3e50',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem'
                    }}
                    title={isExpandedAll ? "Свернуть всё" : "Развернуть всё"}
                >
                    <i className={`fas fa-${isExpandedAll ? 'compress' : 'expand'}-alt`}></i>
                    {isExpandedAll ? 'Свернуть всё' : 'Развернуть всё'}
                </button>
            </div>

            <CategorySearch
                value={searchQuery}
                onChange={setSearchQuery}
            />

            <div className="category-tree">
                {filteredCategories.length > 0 ? (
                    filteredCategories.map((category) => (
                        <TreeNode
                            key={category.id}
                            category={category}
                            level={1}
                            activeCategoryId={activeCategoryId}
                            onCategoryClick={onCategoryClick}
                            initiallyExpanded={isExpandedAll || searchQuery.length > 0}
                        />
                    ))
                ) : (
                    <div style={{
                        textAlign: 'center',
                        padding: '2rem',
                        color: '#6c757d',
                        background: '#f8f9fa',
                        borderRadius: '8px'
                    }}>
                        <i className="fas fa-search" style={{ fontSize: '2rem', marginBottom: '0.5rem', opacity: 0.5 }}></i>
                        <p>Категории не найдены</p>
                    </div>
                )}
            </div>

            <div style={{
                marginTop: '2rem',
                paddingTop: '1rem',
                borderTop: '1px solid #f0f0f0'
            }}>
                <button
                    className="btn btn-primary"
                    style={{
                        width: '100%',
                        justifyContent: 'center',
                        padding: '0.75rem',
                        border: 'none',
                        borderRadius: '8px',
                        background: '#3498db',
                        color: 'white',
                        fontWeight: 500,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}
                    id="new-category-btn"
                >
                    <i className="fas fa-plus-circle"></i>
                    Добавить категорию
                </button>
            </div>
        </aside>
    );
};