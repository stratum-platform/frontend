import { mockCourses } from '../../../../mocks/dashboard/courses'

export function Courses() {
  const course = mockCourses[0]

  return (
    <div className="bg-white rounded-xl shadow p-6 h-full">
      <div className="flex justify-between items-center pb-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Прогресс обучения</h3>
        <div className="text-white w-9 h-9 rounded-lg p-2 bg-green-500 font-medium flex flex-col items-center justify-center text-md">
          {course.progress}%
        </div>
      </div>
      
      <div className="space-y-2 mt-3">
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="from-green-400 to-emerald-500 bg-linear-to-r h-3 rounded-full transition-all duration-300"
            style={{ width: `${course.progress}%` }}
          ></div>
        </div>

        <h4 className="text-sm">Курс "{course.title}"</h4>
        
        <div className="flex justify-between text-sm text-gray-500">
          <span>
            {course.completedModules} из {course.modules} модулей завершено
          </span>
        </div>
      </div>

      
      <button className="mt-6 w-full py-3 bg-gradient-button rounded-lg text-white">
        Продолжить обучение
      </button>
    </div>
  )
}