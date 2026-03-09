import type { ViewToggleProps, ViewMode } from './ViewToggle.types';

export const ViewToggle = ({ currentView, onViewChange, className = '' }: ViewToggleProps) => {
    const views: { mode: ViewMode; icon: string; title: string }[] = [
        { mode: 'grid', icon: 'fa-th-large', title: 'Сетка' },
        { mode: 'list', icon: 'fa-list', title: 'Список' },
        { mode: 'compact', icon: 'fa-align-justify', title: 'Компактный' }
    ];

    return (
        <div
            className={`view-toggle ${className}`}
            style={{
                display: 'flex',
                gap: '0.5rem',
                background: '#f8f9fa',
                padding: '0.25rem',
                borderRadius: '8px'
            }}
        >
            {views.map(({ mode, icon, title }) => (
                <button
                    key={mode}
                    className={`view-toggle-btn ${currentView === mode ? 'active' : ''}`}
                    data-view={mode}
                    onClick={() => onViewChange(mode)}
                    title={title}
                    style={{
                        padding: '0.5rem 1rem',
                        border: 'none',
                        background: currentView === mode ? 'white' : 'transparent',
                        borderRadius: '6px',
                        boxShadow: currentView === mode ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        color: currentView === mode ? '#2c3e50' : '#6c757d'
                    }}
                >
                    <i className={`fas ${icon}`}></i>
                </button>
            ))}
        </div>
    );
};