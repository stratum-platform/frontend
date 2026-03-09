import type { PaginationProps } from './Pagination.types';

export const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
    maxVisible = 5,
    className = ''
}: PaginationProps) => {
    const getPageNumbers = () => {
        const pages = [];
        const halfVisible = Math.floor(maxVisible / 2);

        let start = Math.max(1, currentPage - halfVisible);
        let end = Math.min(totalPages, start + maxVisible - 1);

        if (end - start + 1 < maxVisible) {
            start = Math.max(1, end - maxVisible + 1);
        }

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        return pages;
    };

    if (totalPages <= 1) return null;

    return (
        <div
            className={`pagination ${className}`}
            style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.5rem',
                marginTop: '2rem'
            }}
        >
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="btn btn-secondary btn-sm"
                style={{
                    padding: '0.5rem 1rem',
                    border: '1px solid #e9ecef',
                    borderRadius: '6px',
                    background: currentPage === 1 ? '#f8f9fa' : 'white',
                    color: currentPage === 1 ? '#adb5bd' : '#2c3e50',
                    cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                    opacity: currentPage === 1 ? 0.6 : 1
                }}
            >
                <i className="fas fa-chevron-left"></i>
            </button>

            {getPageNumbers().map(page => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`btn ${page === currentPage ? 'btn-primary' : 'btn-secondary'}`}
                    style={{
                        padding: '0.5rem 1rem',
                        borderRadius: '6px',
                        background: page === currentPage ? '#3498db' : 'white',
                        color: page === currentPage ? 'white' : '#2c3e50',
                        cursor: 'pointer',
                        minWidth: '2.5rem',
                        border: page === currentPage ? 'none' : '1px solid #e9ecef'
                    }}
                >
                    {page}
                </button>
            ))}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="btn btn-secondary btn-sm"
                style={{
                    padding: '0.5rem 1rem',
                    border: '1px solid #e9ecef',
                    borderRadius: '6px',
                    background: currentPage === totalPages ? '#f8f9fa' : 'white',
                    color: currentPage === totalPages ? '#adb5bd' : '#2c3e50',
                    cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                    opacity: currentPage === totalPages ? 0.6 : 1
                }}
            >
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    );
};