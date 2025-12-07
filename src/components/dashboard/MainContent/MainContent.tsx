interface MainContentProps {
    children: React.ReactNode
  }
  
  export function MainContent({ children }: MainContentProps) {
    return (
      <main className="p-6 bg-gray-100 h-full box-border">
        {children}
      </main>
    )
  }