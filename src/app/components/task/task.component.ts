import { Component, Input } from '@angular/core';
import { ITask, LEVELS } from 'src/app/models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

 @Input() task: ITask = {
    title : 'Titulo por defecto',
    description : 'Descripcion por defecto',
    completed : true,
    level : LEVELS.Info
 };

 



}
