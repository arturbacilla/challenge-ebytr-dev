import { DataTypes, Model } from 'sequelize';
import db from '.';
export default class Task extends Model {
    public id: number;
    public task: string;
    public status: string;
  }
  Task.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: true,
    },
    task: DataTypes.STRING,
    status: DataTypes.STRING,
  }, {
    sequelize: db,
    modelName: 'Task',
    tableName: 'Tasks'
  });