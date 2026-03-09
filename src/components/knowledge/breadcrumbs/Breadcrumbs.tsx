import type { BreadcrumbsProps, BreadcrumbItem } from './Breadcrumbs.types';

export const Breadcrumbs = ({
    items,
    onItemClick,
    separator = <i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', color: '#6c757d' }}></i>,
    className = '',
    showHomeButton = false,
    onHomeClick
}: BreadcrumbsProps) => {

    const handleItemClick = (item: BreadcrumbItem, e: React.MouseEvent) => {
        e.preventDefault();
        if (onItemClick) {
            onItemClick(item);
        }
    };

    return (
        <div
            className={`breadcrumbs ${className}`}
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1.5rem',
                fontSize: '0.9rem',
                color: '#6c757d',
                flexWrap: 'wrap'
            }}
        >
            {items.map((item, index) => (
                <div key={item.id || `${item.label}-${index}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {index > 0 && separator}

                    {item.href ? (
                        <a
                            href={item.href}
                            onClick={(e) => handleItemClick(item, e)}
                            style={{
                                color: '#3498db',
                                textDecoration: 'none',
                                cursor: onItemClick ? 'pointer' : 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.25rem'
                            }}
                        >
                            {item.icon && <i className={`fas ${item.icon}`}></i>}
                            {item.label}
                        </a>
                    ) : (
                        <span
                            style={{
                                color: index === items.length - 1 ? '#2c3e50' : '#6c757d',
                                fontWeight: index === items.length - 1 ? 500 : 'normal',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.25rem'
                            }}
                        >
                            {item.icon && <i className={`fas ${item.icon}`} style={{ color: '#6c757d' }}></i>}
                            {item.label}
                        </span>
                    )}
                </div>
            ))}

            {showHomeButton && (
                <>
                    {separator}
                    <button
                        onClick={onHomeClick}
                        className="btn btn-secondary btn-sm"
                        style={{
                            marginLeft: 'auto',
                            padding: '0.4rem 1rem',
                            border: '1px solid #e9ecef',
                            borderRadius: '20px',
                            background: '#f8f9fa',
                            color: '#2c3e50',
                            fontSize: '0.85rem',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                        title="Вернуться на главную знаний"
                    >
                        <i className="fas fa-arrow-left"></i>
                        На главную
                    </button>
                </>
            )}
        </div>
    );
};