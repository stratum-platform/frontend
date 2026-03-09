import type { ToggleSwitchProps } from './ToggleSwitch.types';

export const ToggleSwitch = ({ label, checked, onChange }: ToggleSwitchProps) => (
  <div className="toggle-row">
    <div>{label}</div>
    <label className="toggle-switch">
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={onChange}
        readOnly={!onChange}
      />
      <span className="slider"></span>
    </label>
  </div>
);