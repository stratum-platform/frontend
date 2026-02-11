import { Tasks } from '../components/dashboard/MainContent/Widgets/Tasks'
import { Schedule } from '../components/dashboard/MainContent/Widgets/Schedule'
import { Courses } from '../components/dashboard/MainContent/Widgets/Courses'
import { ServicesGrid } from '../components/dashboard/MainContent/Services/ServicesGrid'

export function DashboardHome() {
  return (
    <div style={{
      padding: '1.5rem 1.5rem 3rem'
      }}>     
      <div className="dashboard-zone">
        <div className="dashboard-zone-button">
          <button className="add-dashboard-btn" id="openDashboardModal"> <svg width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <path
                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg></button>
          <p className="nav-text dashboard-text">Приборная панель</p>
        </div>

        <div className="dashboard-grid">
          <Tasks />
          <Schedule />
          <Courses />
        </div>

      </div>
      <section style={{
        marginTop:'3rem'
      }}>
        <h2 style={{
          fontSize: '1.4rem',
          fontWeight: '600',
          marginBottom: '1.5rem',}}>
            Сервисы платформы
        </h2>
        <ServicesGrid />
      </section>
    </div>
  )
}

