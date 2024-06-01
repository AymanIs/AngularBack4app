import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../to-do';
import { ToDoService } from '../../services/to-do.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{
    todos:ToDo[]=[];
    newToDo :ToDo = {} as ToDo;

    constructor(private todoService : ToDoService){

    }

    ngOnInit(): void {
      this.getTodos()
    }
    getTodos() {
      this.todoService.getTodos().subscribe(x => {
        this.todos = x;
      });
    }
    createTodos():void{
      const newTodo1 = {id:this.newToDo.id , title:this.newToDo.title , completed : false}
      this.newToDo =newTodo1;
      this.todoService.createTodo(newTodo1).subscribe(todo =>{
        this.todos.push(todo);
      })
    }
   
    deleteTodo(todoId: string): void {
      this.todoService.deleteTodo(todoId).subscribe(()=>{
          this.todos = this.todos.filter(todo => todo.id !== todoId);
      }
    )
        
        }
       
     
    
    
}
