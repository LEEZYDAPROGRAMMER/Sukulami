import { Component, OnInit } from '@angular/core';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  taskss
  constructor(public task: TaskService)
  {
      this.taskss=this.task.getTasks();

 }
 addToDo(newToDoName,newToDoTime)
 {

   this.task.addToDo(newToDoName,newToDoTime);
 }

 delete(todos)
 {
   this.task.delete(todos);

 }

 edit(todos,editedName,editedTime)
 {

   this.task.edit(todos,editedName,editedTime);
 }
  ngOnInit() {
  }

}
