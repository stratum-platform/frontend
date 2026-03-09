import type { SearchBarProps } from './SearchBar.types';

export const SearchBar = ({
    value,
    onChange,
    onSearch,
    placeholder = 'Поиск по базе знаний...',
    inputId = 'search-input',
    showFilterButton = false,
    onFilterToggle,
    filterButtonClass = 'quick-action-btn',
    filterButtonId = 'btn-toggle-filters',
    showCreateButton = false,
    onCreateArticle,
    createButtonClass = 'btn btn-primary',
    createButtonId = 'create-article-btn',
    className = ''
}: SearchBarProps) => {
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSearch();
        }
    };

    return (
        <div className={`search-container ${className}`} >
            <div className="search-box">
                <input
                    type="text"
                    id={inputId}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={placeholder}
                />
                <div
                    className="search-icon"
                    onClick={onSearch}
                >
                    <i className="fas fa-search"></i>
                </div>
            </div>

            {showFilterButton && onFilterToggle && (
                <button
                    id={filterButtonId}
                    onClick={onFilterToggle}
                    className={filterButtonClass}
                >
                    <i className="fas fa-filter"></i>
                    Фильтры
                </button>
            )}

            {showCreateButton && onCreateArticle && (
                <button
                    id={createButtonId}
                    onClick={onCreateArticle}
                    className={createButtonClass}
                >
                    <i className="fas fa-plus"></i>
                    Создать статью
                </button>
            )}
        </div>
    );
};