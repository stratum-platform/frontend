import type { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export function Card({ 
    children,
    className = '',
    ...props 
}: CardProps) {
    return (
        <div 
            className={`bg-white rounded-xl shadow-lg px-12 py-25 ${className}`}
            {...props}
        >
            {children}
        </div>
    )
}