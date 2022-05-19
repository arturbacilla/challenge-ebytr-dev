export interface INewTask {
  task: string;
}

export interface ITask extends INewTask {
  id: number;
  status: string;
  updatedAt: string;
  createdAt: string;
}