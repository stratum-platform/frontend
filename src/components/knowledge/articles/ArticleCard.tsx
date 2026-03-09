import type { ArticleCardProps } from './ArticleCard.types';

export const ArticleCard = ({ article, viewMode, onClick, className = '' }: ArticleCardProps) => {
    const handleClick = () => {
        if (onClick) {
            onClick(article.id);
        }
    };

    if (viewMode === 'grid') {
        return (
            <div
                className={`article-card ${className}`}
                onClick={handleClick}
                style={{
                    background: 'white',
                    borderRadius: '12px',
                    padding: '1.25rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    cursor: 'pointer',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    border: '1px solid #f0f0f0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ flex: 1 }}>
                        <div className="article-title" style={{
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            marginBottom: '0.25rem',
                            color: '#2c3e50'
                        }}>
                            {article.title}
                        </div>
                        <div className="article-meta" style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            fontSize: '0.85rem',
                            color: '#6c757d'
                        }}>
                            <span>
                                <i className="far fa-user" style={{ marginRight: '0.25rem' }}></i>
                                {article.author.name}
                            </span>
                        </div>
                    </div>
                    <div className="article-views" style={{
                        fontSize: '0.85rem',
                        color: '#6c757d',
                        whiteSpace: 'nowrap'
                    }}>
                        <i className="far fa-eye" style={{ marginRight: '0.25rem' }}></i>
                        {article.views}
                    </div>
                </div>

                <div className="article-excerpt" style={{
                    fontSize: '0.9rem',
                    color: '#495057',
                    lineHeight: 1.5,
                    margin: '0.25rem 0'
                }}>
                    {article.excerpt}
                </div>

                <div className="article-footer">
                    <div className="article-tags" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        {article.tags.map(tag => (
                            <span
                                key={tag}
                                className="tag"
                                style={{
                                    background: '#f0f7ff',
                                    color: '#3498db',
                                    padding: '0.2rem 0.6rem',
                                    borderRadius: '16px',
                                    fontSize: '0.75rem'
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    if (viewMode === 'list') {
        return (
            <div
                className={`article-card list-view ${className}`}
                onClick={handleClick}
                style={{
                    background: 'white',
                    borderRadius: '10px',
                    padding: '1rem 1.5rem',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s',
                    border: '1px solid #f0f0f0',
                    display: 'grid',
                    gridTemplateColumns: '1fr auto auto',
                    gap: '1.5rem',
                    alignItems: 'center'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f8f9fa';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                }}
            >
                <div>
                    <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{article.title}</div>
                    <div style={{ fontSize: '0.85rem', color: '#6c757d' }}>
                        <i className="far fa-user" style={{ marginRight: '0.25rem' }}></i>
                        {article.author.name}
                        <span style={{ margin: '0 0.5rem' }}>•</span>
                        <i className="far fa-eye" style={{ marginRight: '0.25rem' }}></i>
                        {article.views}
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {article.tags.slice(0, 2).map(tag => (
                        <span
                            key={tag}
                            style={{
                                background: '#f0f7ff',
                                color: '#3498db',
                                padding: '0.15rem 0.5rem',
                                borderRadius: '12px',
                                fontSize: '0.7rem'
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <i className="fas fa-chevron-right" style={{ color: '#adb5bd' }}></i>
            </div>
        );
    }

    return (
        <div
            className={`article-card compact-view ${className}`}
            onClick={handleClick}
            style={{
                padding: '0.75rem 1rem',
                cursor: 'pointer',
                borderBottom: '1px solid #f0f0f0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f8f9fa';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <i className="far fa-file-alt" style={{ color: '#6c757d' }}></i>
                <div>
                    <span style={{ fontWeight: 500 }}>{article.title}</span>
                    <span style={{ fontSize: '0.8rem', color: '#6c757d', marginLeft: '0.5rem' }}>
                        {article.author.name}
                    </span>
                </div>
            </div>
            <div style={{ fontSize: '0.8rem', color: '#6c757d' }}>
                <i className="far fa-eye" style={{ marginRight: '0.25rem' }}></i>
                {article.views}
            </div>
        </div>
    );
};