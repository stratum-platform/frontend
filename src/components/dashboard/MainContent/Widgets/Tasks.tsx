import { mockTasks } from '../../../../mocks/dashboard/tasks'

export function Tasks() {

  const showBtn:boolean = mockTasks.length > 5

  return (
    <div className="card">
      <div style={{
          display:'flex',
          justifyContent:'space-between',
          alignItems:'center',
          marginBottom:'1.25rem'
        }}>
        <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '600'
          }}>
            Последние задачи
        </h3>
        <div style={{
          background: 'var(--red-500)',
          color:'white',
          width:'36px',
          height:'36px',
          borderRadius:'8px',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          fontWeight:'600'
          }}>
          {mockTasks.length}
        </div>
      </div>
      
      <ul style={{
        listStyle:'none'
        }}>
        {mockTasks.slice(0, 5).map((task) => (
          <li key={task.id} style={{
            display:'flex',
            justifyContent:'space-between',
            padding:'0.75rem 0',
            borderBottom: '1px solid var(--gray-200)'
            }}>
            <span>{task.title}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <label className="toggle-switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
              <button
                style={{
                  color: 'var(--primary)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.875rem'
                }}
              >
                Редактировать
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div style={{
          marginTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
      {showBtn && (
          <button
            style={{
              padding: '0.6rem 1.25rem',
              background: 'var(--gray-200)',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Просмотреть все →
          </button>
      )}
      <button
        style={{
          padding: '0.6rem 1.25rem',
          background: 'var(--primary)',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Настроить (последние/приоритетные)
      </button>
      </div>

    </div>

  )
}