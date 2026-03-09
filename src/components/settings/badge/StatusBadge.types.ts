import type { ReactNode } from 'react';

export type StatusType = 'active' | 'inactive' | 'warning' | 'disabled';

export interface StatusBadgeProps {
  status: StatusType;
  children: ReactNode;
}