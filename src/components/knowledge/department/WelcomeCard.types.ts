export interface WelcomeCardProps {
    userName: string;
    departmentName: string;
    onArticleCreate?: () => void;
    onQuestionAsk?: () => void;
}