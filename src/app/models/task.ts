export enum LEVELS{
  "Info",
  "Urgent",
  "Blocking"
}

export interface ITask {
  title : string;
  description : string;
  completed : boolean;
  level : LEVELS;
 }
