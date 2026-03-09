import type { StatusBadgeProps } from './StatusBadge.types';

export const StatusBadge = ({ status, children }: StatusBadgeProps) => {
  const statusClasses: Record<string, string> = {
    active: 'status-active',
    inactive: 'status-inactive',
    warning: 'status-warning',
    disabled: 'status-disabled'
  };

  return (
    <span className={`status-badge ${statusClasses[status] || ''}`}>
      {children}
    </span>
  );
};