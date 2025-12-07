import { mockSchedule } from '../../../../mocks/dashboard/schedule'

export function Schedule() {
  const getShiftTypeText = (type: string) => {
    switch(type) {
      case 'day': return 'Дневная смена'
      case 'night': return 'Вечерняя смена'
      case 'day off': return 'Выходной'
      default: return type
    }
  }

  return (
    <div className="bg-white rounded-xl shadow p-6 h-full">
      <div className="flex justify-between items-center pb-4 border-b border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900">График смен</h3>
        <div className="text-white w-9 h-9 rounded-lg p-2 bg-emerald-700 font-medium flex flex-col items-center justify-center text-md"></div>
      </div>
      
      <div className="space-y-4 pt-3">
        {mockSchedule.map((schedule) => (
          <div id={schedule.id} className="">
            <p className="bold font-bold">
              {schedule.dayName}
            </p>
            <span className="">
              {schedule.shiftTime} ({getShiftTypeText(schedule.type)})
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}