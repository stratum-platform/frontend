import { mockCourses } from '../../../../mocks/dashboard/courses'

export function Courses() {
  const course = mockCourses[0]

  return (
    <div className="card">
      <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.25rem' }}>
        Прогресс обучения
      </h3>
      <div className="progress-container">
        <div className="progress-label">
          <span>Курс «{course.title}»</span>
          <span>{course.completedModules} / {course.modules} модулей</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${course.progress}%` }}></div>
        </div>
      </div>
      <button
        style={{
          width: '100%',
          padding: '0.9rem',
          background: 'var(--accent)',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 600,
          cursor: 'pointer'
        }}
      >
        Продолжить обучение
      </button>
    </div>
  )
}