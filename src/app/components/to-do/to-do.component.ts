import { Component  , Input} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [
    FormsModule
    
  ],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
    title : string = 'ToDo list';
    test :string=''
    ImageLink:string = 'https://w7.pngwing.com/pngs/670/265/png-transparent-checkmark-done-exam-list-pencil-todo-xomo-basics-icon-thumbnail.png';
    tasks:string[]=[];
    newTask:string='';
    isAvailable:boolean=false;
    addTask(){
      if(this.newTask.trim() !==''){
            this.tasks.push(this.newTask);
            this.newTask='';
            this.isAvailable=true;

      }
      console.log(this.tasks)
    }

    // editTask(index:number ){
    //   let updateTask = prompt('Edit Task : ', this.tasks[index]);
    //   if(updateTask !==null){
    //           this.tasks[index]=updateTask

    //   }
    // }
    editTask(index:number , newTaskEdit:any):string | void{
         if(newTaskEdit.trim() !== ''){
          this.tasks[index]=newTaskEdit;
         }else{
          newTaskEdit =this.tasks[index] ;
          return this.newTask = newTaskEdit

         }
         this.newTask=''
    }


    removeTask(index:number){
     this.tasks.splice(index,1)
     this.isAvailable=this.tasks.length>0
    }
}
