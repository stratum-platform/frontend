export interface ModuleDepartment {
  name: string;
  enabled: boolean;
}

export type ModuleStatus = 'active' | 'inactive' | 'warning' | 'disabled';

export interface AccessCardProps {
  moduleName: string;
  status: ModuleStatus;
  departments?: ModuleDepartment[];
  onActivate?: () => void;
}