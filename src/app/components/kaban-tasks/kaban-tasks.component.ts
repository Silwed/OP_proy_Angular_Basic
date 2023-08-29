import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { ITask, LEVELS } from '../../models/task';
@Component({
  selector: 'app-kaban-tasks',
  templateUrl: './kaban-tasks.component.html',
  styleUrls: ['./kaban-tasks.component.scss']
})
export class KabanTasksComponent {

  todoTask: ITask[] = [
    {
      title : 'Animaciones',
      description : 'Aprender Animaciones en angular',
      completed : false,
      level : LEVELS.Info
    },
    {
      title : 'Angular cli',
      description : 'Gestionar Angular cli',
      completed : false,
      level : LEVELS.Urgent
    },
    {
      title : 'Build',
      description : 'Aprender a denerar build en angular cli',
      completed : false,
      level : LEVELS.Blocking
    },
    {
      title : 'Deploy',
      description : 'Aprender a desplegar bundles en firebase',
      completed : false,
      level : LEVELS.Info
    }

  ];

  doneTask: ITask[] = [
    {
      title : 'Configurar IDE',
      description : 'Configurar e instalar plugins para VS Code',
      completed : true,
      level : LEVELS.Info
    },
    {
      title : 'Instalar Angular cli',
      description : 'Gestionar Angular cli',
      completed : true,
      level : LEVELS.Urgent
    },
    {
      title : 'Hola Mundo',
      description : 'Crear con angular cli el proyecto inicial',
      completed : true,
      level : LEVELS.Blocking
    }


  ];

  drop(event: CdkDragDrop<ITask[]>): void {
    if (event.previousContainer === event.container) {
      console.log('Misma columna',event.container.data);
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
    
      event.previousContainer.data[event.previousIndex].completed = !event.previousContainer.data[event.previousIndex].completed;
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }

  color(int : number){
    switch (int) {
      case 0: return 'blue';
      case 1: return 'orange';
      case 2: return 'tomato';
      default: return 'white';
  }

}
}
