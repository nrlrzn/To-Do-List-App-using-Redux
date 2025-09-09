export enum FilterType {
  ALL = 'all',
  ACTIVE = 'active',
  COMPLETED = 'completed',
}
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
