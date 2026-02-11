import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar/Sidebar'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'
import { MainContent } from './MainContent/MainContent'

export function DashboardLayout() {
  return (
    <div className="container">

      <Sidebar />
      
      <div className="main-content">
        <Header />
        <MainContent>
          <Outlet />
          <Footer />
        </MainContent>
      </div>
      
    </div>
  )
}