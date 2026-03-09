import type { ViewMode } from './ViewToggle.types';

export interface ArticleAuthor {
    name: string;
    avatar?: string;
}

export interface Article {
    id: string;
    title: string;
    excerpt: string;
    author: ArticleAuthor;
    views: number;
    tags: string[];
    createdAt?: string;
    updatedAt?: string;
}

export interface ArticleCardProps {
    article: Article;
    viewMode: ViewMode;
    onClick?: (articleId: string) => void;
    className?: string;
}