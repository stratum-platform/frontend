import type { ArticlesContainerProps } from './ArticlesContainer.types';
import { ArticleCard } from './ArticleCard';

export const ArticlesContainer = ({
    articles,
    viewMode,
    title,
    description,
    onArticleClick,
    loading = false,
    className = ''
}: ArticlesContainerProps) => {

    const getGridTemplateColumns = () => {
        switch (viewMode) {
            case 'grid':
                return 'repeat(auto-fill, minmax(280px, 1fr))';
            case 'list':
            case 'compact':
                return '1fr';
            default:
                return 'repeat(auto-fill, minmax(280px, 1fr))';
        }
    };

    if (loading) {
        return (
            <div style={{ textAlign: 'center', padding: '3rem', color: '#6c757d' }}>
                <i className="fas fa-spinner fa-spin" style={{ fontSize: '2rem', marginBottom: '1rem' }}></i>
                <p>Загрузка статей...</p>
            </div>
        );
    }

    return (
        <div className={`articles-container ${className}`}>
            <div style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', color: '#2c3e50', margin: 0 }}>{title}</h2>
                {description && <p style={{ color: '#6c757d', margin: '0.25rem 0 0 0' }}>{description}</p>}
            </div>

            {articles.length > 0 ? (
                <div
                    id="articles-container"
                    className={`articles-${viewMode}`}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: getGridTemplateColumns(),
                        gap: viewMode === 'compact' ? '0' : '1rem'
                    }}
                >
                    {articles.map((article) => (
                        <ArticleCard
                            key={article.id}
                            article={article}
                            viewMode={viewMode}
                            onClick={onArticleClick}
                        />
                    ))}
                </div>
            ) : (
                <div style={{
                    textAlign: 'center',
                    padding: '3rem',
                    color: '#6c757d',
                    background: '#f8f9fa',
                    borderRadius: '12px'
                }}>
                    <i className="fas fa-book-open" style={{ fontSize: '3rem', marginBottom: '1rem', opacity: 0.5 }}></i>
                    <h3 style={{ margin: '0 0 0.5rem 0' }}>Статьи не найдены</h3>
                    <p style={{ margin: 0 }}>Попробуйте изменить параметры поиска или выбрать другую категорию</p>
                </div>
            )}
        </div>
    );
};