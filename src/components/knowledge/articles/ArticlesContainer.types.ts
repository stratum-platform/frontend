import type { Article } from './ArticleCard.types';
import type { ViewMode } from './ViewToggle.types';

export interface ArticlesContainerProps {
    articles: Article[];
    viewMode: ViewMode;
    title: string;
    description?: string;
    onArticleClick?: (articleId: string) => void;
    loading?: boolean;
    className?: string;
}