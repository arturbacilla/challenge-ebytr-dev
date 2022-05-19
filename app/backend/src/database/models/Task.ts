import { DataTypes, Model } from 'sequelize';
import db from '.';
export default class Task extends Model {
    public task: string;
  }
  Task.init({
    id: DataTypes.STRING,
    task: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize: db,
    modelName: 'Task',
    tableName: 'Tasks'
  });