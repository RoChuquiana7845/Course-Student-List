import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableStudentsComponent } from './components/table-students/table-students.component';
import { TableCoursesComponent } from './components/table-courses/table-courses.component';
import { CommonModule } from "@angular/common"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableStudentsComponent,
    TableCoursesComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  courses: boolean = true;
  
  handleChange() { 
    this.courses = !this.courses;
  }
}
