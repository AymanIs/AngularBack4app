import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';
import { ToDo } from '../to-do';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
 private apiUrl = 'http://localhost:5000/tasks'
  constructor(private httpClient:HttpClient) { }
  getTodos() : Observable<ToDo[]>{
   return this.httpClient.get<ToDo[]>(this.apiUrl)
  }
 
  createTodo(todo: ToDo): Observable<ToDo> {
    // Implement logic to create the todo on your backend
    return this.httpClient.post<ToDo>(this.apiUrl, todo);
  }
  getTodoById(id:any) : Observable<ToDo>{
    return this.httpClient.get<ToDo>(`${this.apiUrl}/${id}`)
   }
   updateTodo(todo :ToDo) : Observable<ToDo>{
      return this.httpClient.put<ToDo>(`${this.apiUrl}/${todo.id}`,todo)
   }
   deleteTodo(todoId :string) : Observable<void>{
    return this.httpClient.delete<void>(`${this.apiUrl}/${todoId}`)
 }
}
