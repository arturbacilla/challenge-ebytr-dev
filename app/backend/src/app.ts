import * as express from 'express';
import * as cors from 'cors';
import TasksController from './database/controllers/Tasks';

class App {
  public app: express.Express;
  private Tasks = new TasksController();

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(express.json());
    this.app.use(cors());
    this.app.post('/tasks', this.Tasks.new) // endpoint para adicionar tarefas
    this.app.get('/tasks', this.Tasks.getAll) // endpoint pra listar todas as task
    this.app.patch('/tasks/:id', this.Tasks.update) // atualizar a tarefa
    this.app.delete('/tasks/:id', this.Tasks.remove) // deletar a tarefa
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => {
      console.log(`Backend running on port ${PORT} with CORS enabled`);
    });
  }
}

export { App };

export const { app } = new App();