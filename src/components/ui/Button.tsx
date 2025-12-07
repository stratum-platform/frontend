import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    variant?: 'primary' | 'login'
}

export function Button({ 
    children,
    variant = 'primary',
    className = '',
    ...props 
}: ButtonProps) {
    const base = "px-4 py-2 rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-500"
    
    const variants = {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        login: "rounded-sm px-4 py-3 bg-deep-blue font-normal text-base text-white cursor-pointer max-w-40 block mr-auto ml-auto",
    } as const
    
    const variantClasses = variants[variant]
    
    return (
        <button 
            className={`${base} ${variantClasses} ${className}`} 
            {...props}
        >
            {children}
        </button>
    )
}