import { useState, useEffect } from 'react';
import type { TreeNodeProps } from './TreeNode.types';

export const TreeNode = ({
    category,
    level,
    activeCategoryId,
    onCategoryClick,
    initiallyExpanded = false
}: TreeNodeProps) => {
    const [isExpanded, setIsExpanded] = useState(initiallyExpanded);
    const hasChildren = category.children && category.children.length > 0;
    const isActive = activeCategoryId === category.id;

    useEffect(() => {
        if (activeCategoryId && hasChildren) {
            const hasActiveChild = category.children?.some(
                child => child.id === activeCategoryId ||
                    child.children?.some(grandChild => grandChild.id === activeCategoryId)
            );
            if (hasActiveChild) {
                setIsExpanded(true);
            }
        }
    }, [activeCategoryId, category.children, hasChildren]);

    const handleToggle = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsExpanded(!isExpanded);
    };

    const handleClick = () => {
        onCategoryClick(category.id, category.name);
    };

    return (
        <div className="tree-category" data-category={category.id}>
            <div
                className={`tree-node ${isActive ? 'active' : ''}`}
                onClick={handleClick}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0.5rem 0',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    userSelect: 'none',
                    backgroundColor: isActive ? '#f0f7ff' : 'transparent',
                    paddingLeft: level > 1 ? `${level * 0.5}rem` : '0',
                    transition: 'background-color 0.2s'
                }}
            >
                {hasChildren ? (
                    <i
                        className="fas fa-chevron-right"
                        onClick={handleToggle}
                        style={{
                            width: '20px',
                            fontSize: '0.8rem',
                            color: '#6c757d',
                            transition: 'transform 0.2s',
                            transform: isExpanded ? 'rotate(90deg)' : 'none',
                            marginRight: '0.5rem',
                            cursor: 'pointer'
                        }}
                    />
                ) : (
                    <span style={{ width: '20px', marginRight: '0.5rem' }} />
                )}

                <i
                    className={category.icon || (hasChildren ? 'fas fa-folder' : 'fas fa-file-alt')}
                    style={{
                        color: hasChildren ? '#f39c12' : '#3498db',
                        marginRight: '0.75rem',
                        width: '18px',
                        fontSize: '1rem'
                    }}
                />

                <span style={{
                    flex: 1,
                    fontWeight: level === 1 ? 500 : 'normal',
                    color: isActive ? '#3498db' : 'inherit'
                }}>
                    {category.name}
                </span>

                {category.count !== undefined && (
                    <span
                        className="category-badge"
                        style={{
                            background: isActive ? '#3498db' : '#e9ecef',
                            color: isActive ? 'white' : '#495057',
                            padding: '0.15rem 0.6rem',
                            borderRadius: '20px',
                            fontSize: '0.7rem',
                            transition: 'all 0.2s'
                        }}
                    >
                        {category.count}
                    </span>
                )}
            </div>

            {hasChildren && isExpanded && (
                <div className="tree-children" style={{ marginLeft: '1.5rem' }}>
                    {category.children?.map((child) => (
                        <TreeNode
                            key={child.id}
                            category={child}
                            level={level + 1}
                            activeCategoryId={activeCategoryId}
                            onCategoryClick={onCategoryClick}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};