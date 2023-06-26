import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  list!: Array<any>; 
  task!: string;
  form: boolean =false;

  constructor(private taskService: TaskService){
    this.list = taskService.list;
  }

  deleteTask(index: number){
    this.list.splice(index, 1)
  }

  changeStatus(index: number){
    if(this.list[index].completed == false){
      this.list[index].completed = true;
    }else{this.list[index].completed = false;}
  }
  addNewData(){
    let newTask = {
      id: 6,
      task: this.task,
      completed: false
    }

    this.taskService.addTask(newTask);
    this.form = false;
    this.task ='';
  }

  toggleForm(){
    if(this.form == false){
      this.form = true;
    }else{
      this.form = false;
    }
  }


}
