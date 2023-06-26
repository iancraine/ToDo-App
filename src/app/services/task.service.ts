import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  list = [
    {id: 1, 
    task: 'Mow the lawn',
    completed: false
    },
    {id: 2, 
    task: 'Study for Interview',
    completed: false
    },
    {id: 3, 
    task: 'Clean Room',
    completed: false
    },
    {id: 4, 
    task: 'Grocey Shopping',
    completed: false
    },
    {id: 5, 
    task: 'Pick up mom',
    completed: false
    },
]

addTask(data: any){
  this.list.push(data);
}

  constructor() { }
}
