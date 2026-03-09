export interface Department {
  id: string;
  name: string;
}

export interface DepartmentSwitcherProps {
  departments: Department[];
  activeDepartment: string;
  onDepartmentChange: (departmentId: string) => void;
  lastUpdated?: string;
  className?: string;
}