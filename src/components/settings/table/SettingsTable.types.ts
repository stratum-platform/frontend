import type { ReactNode } from 'react';

export interface SettingsTableProps<T> {
  headers: string[];
  rows: T[];
  renderRow: (row: T, index: number) => ReactNode;
}