import { mockTasks } from '../../../../mocks/dashboard/tasks'

export function Tasks() {
  const getPriorityText = (priority: string) => {
    switch(priority) {
      case 'low': return 'Низкий'
      case 'medium': return 'Средний'
      case 'high': return 'Срочно'
      default: return priority
    }
  }

  const showBtn:boolean = mockTasks.length > 3

  return (

    <div className="bg-white rounded-xl shadow p-6 h-full">
      <div className="flex justify-between items-center pb-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Мои задачи</h3>
        <div className="text-white w-9 h-9 rounded-lg p-2 bg-red-500 font-medium flex flex-col items-center justify-center text-md">
          {mockTasks.length}
        </div>
      </div>
      
      <ul className="space-y-4 pt-3">
        {mockTasks.slice(0, 3).map((task) => (
          <li key={task.id} className="flex items-center justify-between gap-3">
            <p className="text-sm">
              {task.title}
            </p>
            <span className={`text-xs
              ${
                task.priority === 'high' ? 'text-red-500' :
                task.priority === 'medium' ? 'text-yellow-500' :
                'text-green-500'
              }`}>
              {getPriorityText(task.priority)}
            </span>
          </li>
        ))}
      </ul>

      {showBtn && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <button className="w-full text-center text-blue-500 hover:text-blue-600 font-medium">
            Смотреть все →
          </button>
        </div>
      )}
      
    </div>
  )
}