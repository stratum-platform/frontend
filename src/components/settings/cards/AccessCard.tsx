import { StatusBadge } from '../badge/StatusBadge';
import { ToggleSwitch } from '../toggle/ToggleSwitch';
import type { AccessCardProps } from './AccessCard.types';

export const AccessCard = ({ moduleName, status, departments, onActivate }: AccessCardProps) => (
  <div className="access-card">
    <div className="access-header">
      <div className="module-name">{moduleName}</div>
      <StatusBadge status={status}>
        {status === 'active' ? 'Включён' : 'Отключён'}
      </StatusBadge>
    </div>
    
    {status === 'active' && departments ? (
      departments.map((dept, index) => (
        <ToggleSwitch key={index} label={dept.name} checked={dept.enabled} />
      ))
    ) : (
      <div style={{ textAlign: 'center', color: 'var(--gray-500)', padding: '2rem 0' }}>
        Модуль не активирован<br />
        <button 
          className="mt-3 px-4 py-1.5 bg-yellow-100 text-yellow-800 rounded text-sm"
          onClick={onActivate}
        >
          Активировать в биллинге →
        </button>
      </div>
    )}
  </div>
);