import { INewTask } from "../interfaces";
import Task from "../models/Task"

export default class Tasks {
  public getAll = async () => {
    const tasks = await Task.findAll({ raw: true });
    if (!tasks) return false;
    return tasks;
  }
  public new = async (task: string) => {
    const created = await Task.create({task, status: 'Pendente'});
    if (!created) return false;
    return created
  }
}