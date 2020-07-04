import { TaskType } from './taskEnum';

export interface TaskInterface {
  name: string;
  cost: number;
  taskType: TaskType;
  data?: Date;
  mes?: string;
  ano?: number;
  gastoRecorrente?: boolean;
  pagou?: boolean;
}


export class Task {

constructor(
    public name: string,
    public cost: number,
    public taskType: TaskType,
    public data?: Date,
    public mes?: string,
    public ano?: number,
    public gastoRecorrente?: boolean,
    public pagou?: boolean
    ) {
  }
}
