import { Sidebar } from './Sidebar/Sidebar'
import { Header } from './Header/Header'
import { MainContent } from './MainContent/MainContent'

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen">
      <div className="flex">
        <div className="w-64">
          <Sidebar />
        </div>
        
        <div className="flex-1">
          <Header />
          
          <MainContent>
            {children}
          </MainContent>
        </div>
      </div>
    </div>
  )
}