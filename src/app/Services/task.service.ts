import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  toDo=[{name:"bath",time:" 5:00"},{name:"eat",time:"12:00"},{name:"sleep ",time:"21:00"}];
  
  newToDoName : string="";
  newToDoTime : string="";
   
  editedName :string="";
  editedTime :string="";
   empty=false;
   toVal=null;

   getTasks(){

    return this.toDo;

    }
    
    addToDo(newToDoName,newToDoTime)
    {
      
      
       
      if(newToDoName!=null&&newToDoTime!=null)
      {
        this.toDo.push({name: newToDoName,time: newToDoTime});
        this.empty=false;
      
      }
      else
      {
        this.empty=true;
      }
          
      this.newToDoName=null;
      this.newToDoTime=null;
     
    }

    delete(todos)
    {
        let index=this.toDo.indexOf(todos);
        this.toDo.splice(index,1);
     
    }
    edit(todos,editedName,editedTime)
    {
        let index= this.toDo.indexOf(todos);
        this.toDo[index].name=editedName;
        this.toDo[index].time=editedTime;
        this.editedName=null;
        this.editedTime=null;
  
        return todos
    }
  

  constructor() { }


}
