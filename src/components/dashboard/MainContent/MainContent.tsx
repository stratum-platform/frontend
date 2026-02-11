interface MainContentProps {
    children: React.ReactNode
  }
  
  export function MainContent({ children }: MainContentProps) {
    return (
      <>
        {children}
      </>
    )
  }