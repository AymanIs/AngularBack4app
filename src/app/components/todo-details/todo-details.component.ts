import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToDo } from '../../to-do';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoService } from '../../services/to-do.service';

@Component({
  selector: 'app-todo-details',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  todo: ToDo | undefined;

  constructor(private route: ActivatedRoute, private todoService: ToDoService, private router: Router) { }

  ngOnInit(): void {
    this.getToDo();
  }

  getToDo() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.todoService.getTodoById(id).subscribe(x => {
      this.todo = x;
    });
  }
  updateToDo():void{
    if(this.todo)
      {
        this.todoService.updateTodo(this.todo).subscribe( x => {
             this.router.navigate(['/todos'])
        })
      }
  }
}