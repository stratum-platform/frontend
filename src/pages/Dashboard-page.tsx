import { DashboardLayout } from '../components/dashboard/DashboardLayout'
import { Tasks } from '../components/dashboard/MainContent/Widgets/Tasks'
import { Schedule } from '../components/dashboard/MainContent/Widgets/Schedule'
import { Courses } from '../components/dashboard/MainContent/Widgets/Courses'
import { ServicesGrid } from '../components/dashboard/MainContent/Services/ServicesGrid'

export function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <Tasks />
          <Schedule />
          <Courses />
        </div>
        
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Сервисы платформы</h2>
          </div>
          <ServicesGrid />
        </div>
      </div>
    </DashboardLayout>
  )
}