import type { WelcomeCardProps } from './WelcomeCard.types';

export const WelcomeCard = ({ 
  userName, 
  departmentName, 
  onArticleCreate, 
  onQuestionAsk 
}: WelcomeCardProps) => (
  <div className="welcome-card">
    <div>
      <h2>Добро пожаловать, {userName}! 👋</h2>
      <p>
        Вы в отделе <strong>{departmentName}</strong>. Вот что происходит в вашем отделе сегодня.
      </p>
    </div>
    <div className="quick-actions">
      <button 
        className="quick-action-btn primary" 
        onClick={onArticleCreate}
      >
        <i className="fas fa-plus"></i> Создать статью
      </button>
      <button 
        className="quick-action-btn"
        onClick={onQuestionAsk}
      >
        <i className="fas fa-question-circle"></i> Задать вопрос
      </button>
    </div>
  </div>
);