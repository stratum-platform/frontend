import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}

export function Input({ 
    type = 'text',
    className = '',
    ...props 
}: InputProps) {
    return (
        <input
            type={type}
            className={`w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-deep-blue ${className}`}
            {...props}
        />
    )
}