import { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import { INewTask } from '../interfaces';
import TasksService from '../services/Tasks';

const { NOT_FOUND, OK, CREATED } = StatusCodes;

export default class Tasks {
  private STasks = new TasksService();

  public getAll = async (req: Request, res: Response) => {
    try {
      const tasks = await this.STasks.getAll();
      if (!tasks) return res.status(NOT_FOUND).json({ message: 'Not found' });
      return res.status(OK).json(tasks);
    } catch (error) {
      console.log(error);
    }
  };

  public new = async (req: Request, res: Response) => {
    const taskinfo: INewTask = req.body; // fazer o middleware pra validar o body

    const { task } = taskinfo;
    try {
      const newTask = await this.STasks.new(task);
      if (!newTask) return res.status(NOT_FOUND).json({ message: 'Not found' });
      return res.status(CREATED).json(newTask);
    } catch (error) {
      console.log(error);
    }
  };

  public remove = async (req: Request, res: Response) => {
    const { id } = req.params;
    const taskId = Number(id);
    try {
      const deleted = await this.STasks.remove(taskId);
      if (!deleted) return res.status(NOT_FOUND).json({ message: 'Not found' });
      return res.status(OK).end();
    } catch (error) {
      console.log(error);
    }
  };

  public update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const taskId = Number(id);
    const newInfo = req.body;
    try {
      const updated = await this.STasks.update(taskId, newInfo);
      if (!updated) return res.status(NOT_FOUND).json({ message: 'Not found' });
      return res.status(OK).json(updated);
    } catch (error) {
      console.log(error);
    }
  };
}