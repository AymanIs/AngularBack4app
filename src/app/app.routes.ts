import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

export const routes: Routes = [
    {path:'' , redirectTo:'/todos',pathMatch:'full'} ,
    {path:'home' ,component:HomeComponent ,title:'Home'},
    {path:'todos' ,component:TodosComponent ,title:'Todos'},
    {path:'todos/:id' ,component:TodoDetailsComponent ,title:'todos Details'},
    {path:'contactus' ,component:ContactUsComponent ,title:'Contact Us'},
    {path:'aboutus' ,component:AboutUsComponent ,title:'About Us'},
    {path:'**' ,component:NotFoundComponent ,title:'NotFound'}
];
