export function AuthLayout({ children }: { children: React.ReactNode }) {
return (
        <div className="min-h-screen bg-gradient-main flex items-center justify-center">
            <div className="max-w-xl w-full">
                {children}
            </div>
        </div>
    )
}