import type { CategorySearchProps } from './CategorySearch.types';

export const CategorySearch = ({
    value,
    onChange,
    placeholder = 'Поиск в категориях...',
    className = ''
}: CategorySearchProps) => {
    return (
        <div
            className={`category-search ${className}`}
            style={{
                marginBottom: '1.5rem',
                position: 'relative'
            }}
        >
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                style={{
                    width: '100%',
                    padding: '0.75rem 1rem 0.75rem 2.5rem',
                    border: '1px solid #e9ecef',
                    borderRadius: '30px',
                    fontSize: '0.9rem',
                    background: '#f8f9fa',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                }}
            />
            <i
                className="fas fa-search"
                style={{
                    position: 'absolute',
                    left: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#6c757d',
                    fontSize: '0.9rem'
                }}
            ></i>
        </div>
    );
};