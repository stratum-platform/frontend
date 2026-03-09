import type { ChangeEvent } from 'react';

export interface ToggleSwitchProps {
  label: string;
  checked: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}