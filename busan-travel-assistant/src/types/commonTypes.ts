export interface AlertData {
  id: number;
  message: string;
  severity: Severity;
  timestamp: Date;
}

export enum Severity {
  Info = 'info',
  Warning = 'warning',
  Error = 'error',
  Success = 'success',
}