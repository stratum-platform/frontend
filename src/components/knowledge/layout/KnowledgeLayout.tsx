import { createContext, useContext } from 'react';
import type { KnowledgeLayoutProps, KnowledgeLayoutContextType, ViewMode } from './KnowledgeLayout.types';

const KnowledgeLayoutContext = createContext<KnowledgeLayoutContextType | null>(null);

export const useKnowledgeLayout = () => {
    const context = useContext(KnowledgeLayoutContext);
    if (!context) {
        throw new Error('useKnowledgeLayout must be used within KnowledgeLayout');
    }
    return context;
};

export const KnowledgeLayout = ({
    children,
    activeDepartment,
    viewMode,
    onViewModeChange,
    title,
    description,
    className = ''
}: KnowledgeLayoutProps) => {

    const setViewMode = (mode: ViewMode) => {
        onViewModeChange(mode);
        localStorage.setItem('knowledgeView', mode);
    };

    const contextValue: KnowledgeLayoutContextType = {
        activeDepartment,
        viewMode,
        setViewMode
    };

    return (
        <KnowledgeLayoutContext.Provider value={contextValue}>
            <div className={`knowledge-layout ${className}`}>
                {(title || description) && (
                    <div className="knowledge-header" style={{
                        marginBottom: '1.5rem'
                    }}>
                        {title && <h1 style={{ fontSize: '1.8rem', margin: '0 0 0.5rem 0' }}>{title}</h1>}
                        {description && <p style={{ color: '#6c757d', margin: 0 }}>{description}</p>}
                    </div>
                )}

                <div className="knowledge-content-wrapper">
                    {children}
                </div>
            </div>
        </KnowledgeLayoutContext.Provider>
    );
};