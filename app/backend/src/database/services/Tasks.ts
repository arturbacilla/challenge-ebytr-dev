import { INewTask, ITask } from '../interfaces';
import Task from '../models/Task';

export default class Tasks {
  public getAll = async () => {
    const tasks = await Task.findAll({ raw: true });
    if (!tasks) return false;
    return tasks;
  };
  public new = async (task: string) => {
    const created = await Task.create({ task, status: 'Pendente' });
    if (!created) return false;
    return created;
  };

  public remove = async (id: number) => {
    const deleted = await Task.destroy({ where: { id } });
    if (!deleted) return false;
    return deleted;
  };

  public update = async (id: number, newInfo: ITask) => {
    const updated = await Task.update({ ...newInfo }, { where: { id } })
    if (!updated) return false;
    return updated;
  }
}
