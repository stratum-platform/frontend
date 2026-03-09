import type { SettingsTableProps } from './SettingsTable.types';

export const SettingsTable = <T extends object>({ headers, rows, renderRow }: SettingsTableProps<T>) => (
  <table className="settings-table">
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map((row, index) => renderRow(row, index))}
    </tbody>
  </table>
);