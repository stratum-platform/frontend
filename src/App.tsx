import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginPage } from './pages/auth/LoginPage'
import { DashboardPage } from './pages/Dashboard-page'
import { ProtectedRoute } from './components/auth/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          } 
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App