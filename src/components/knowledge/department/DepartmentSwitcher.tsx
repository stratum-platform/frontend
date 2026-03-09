import type { DepartmentSwitcherProps } from './DepartmentSwitcher.types';

export const DepartmentSwitcher = ({
  departments,
  activeDepartment,
  onDepartmentChange,
  lastUpdated = 'сегодня',
  className = ''
}: DepartmentSwitcherProps) => {
  return (
    <div
      className={`department-switcher ${className}`}
      style={{
        background: 'white',
        borderRadius: '16px',
        padding: '1rem 1.5rem',
        marginBottom: '2rem',
        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <span style={{ fontWeight: 600, color: '#2c3e50' }}>🏢 Отдел:</span>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {departments.map((dept) => (
            <button
              key={dept.id}
              className="dept-switch-btn"
              data-dept={dept.id}
              onClick={() => onDepartmentChange(dept.id)}
              style={{
                padding: '0.5rem 1.2rem',
                border: 'none',
                borderRadius: '30px',
                background: activeDepartment === dept.id ? '#3498db' : '#f0f7ff',
                color: activeDepartment === dept.id ? 'white' : '#3498db',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {dept.name}
            </button>
          ))}
        </div>
      </div>
      <div style={{ color: '#6c757d', fontSize: '0.9rem' }}>
        <i className="fas fa-sync-alt" style={{ marginRight: '0.25rem' }}></i>
        Обновлено {lastUpdated}
      </div>
    </div>
  );
};