import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoginPage } from './pages/auth/LoginPage'
import { ProtectedRoute } from './components/auth/ProtectedRoute'
import { DashboardLayout } from './components/dashboard/DashboardLayout'
import { DashboardHome } from './pages/DashboardHome'
import { TasksPage } from './pages/tasks/TasksPage'
import { BillingPage } from './pages/billing/BillingPage'
import { SettingsPage } from './pages/settings/SettingsPage'
import { PersonalPage } from './pages/personal/PersonalPage'
import { KnowledgePage } from './pages/knowledge/KnowledgePage'
import { CoursesPage } from './pages/courses/CoursesPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        
        <Route path="/" element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }>
          <Route index element={<DashboardHome />} />
          <Route path="tasks" element={<TasksPage />} />
          <Route path="billing" element={<BillingPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="personal" element={<PersonalPage />} />
          <Route path="knowledge" element={<KnowledgePage />} />
          <Route path="courses" element={<CoursesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App