import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ButtonModule } from 'primeng/button';
import { ToDoComponent } from './components/to-do/to-do.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import Parse from 'parse/dist/parse.min.js'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, ButtonModule, ToDoComponent, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: any = 'AngularTest';

  ngOnInit(): void {
    Parse.initialize('fAWhiHJV3fYeLX9GgrmxCNaB9plko1gDb3TTDRfD', 'dOIMlPUdzXPY6UyVSBVD8aEhm4wLS1EGzyz0Wr0e');
    
    Parse.serverURL = 'https://parseapi.back4app.com/';

    const TestObject = Parse.Object.extend('TestObject');
    const query = new Parse.Query(TestObject);
    query.find().then((results) => {
      console.log('Successfully retrieved ' + results.length + ' objects.');
      // Do something with the returned Parse.Object values
    }, (error) => {
      console.error('Error while fetching TestObject', error);
    });
  }
}
