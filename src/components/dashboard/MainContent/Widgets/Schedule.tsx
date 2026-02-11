import { mockSchedule } from '../../../../mocks/dashboard/schedule'

export function Schedule() {
  const getShiftTypeText = (type: string) => {
    switch(type) {
      case 'day': return 'Дневная'
      case 'night': return 'Вечерняя'
      case 'day off': return 'Выходной'
      default: return type
    }
  }

  return (
    <div className="card">
      <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.25rem' }}>
        График смен
      </h3>
      <div style={{ display: 'grid', gap: '1rem', fontSize: '0.95rem' }}>
        {mockSchedule.map((schedule) => (
          <div key={schedule.id} id={schedule.id}>
            <strong>{schedule.dayName} ({getShiftTypeText(schedule.type)}):</strong>
            {schedule.shiftTime}
          </div>
        ))}
        
      </div>
      <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
        <button
          style={{
            flex: 1,
            padding: '0.75rem',
            background: 'var(--primary)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Редактировать график
        </button>
        <button
          style={{
            flex: 1,
            padding: '0.75rem',
            background: 'var(--accent)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Запросить смену
        </button>
      </div>
    </div>

    // <div className="bg-white rounded-xl shadow p-6 h-full">
    //   <div className="flex justify-between items-center pb-4 border-b border-gray-200">
    //   <h3 className="text-lg font-semibold text-gray-900">График смен</h3>
    //     <div className="text-white w-9 h-9 rounded-lg p-2 bg-emerald-700 font-medium flex flex-col items-center justify-center text-md"></div>
    //   </div>
      
    //   <div className="space-y-4 pt-3">

    //   </div>
    // </div>
  )
}