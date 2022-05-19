export interface INewTask {
  task: string;
}

export interface ITask extends INewTask {
  id?: number;
  task: string;
  status?: string;
  updatedAt?: string;
  createdAt?: string;
}