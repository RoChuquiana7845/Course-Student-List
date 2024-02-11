import { Component, OnInit } from '@angular/core';
import { courses } from './mocks';
import { CommonModule, NgFor } from '@angular/common';
import { Course } from '../../models/course-to';

@Component({
  selector: 'app-table-courses',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './table-courses.component.html',
  styleUrl: './table-courses.component.css'
})
export class TableCoursesComponent implements OnInit {

  public courses?: Course[];

  ngOnInit() {
    this.courses = courses
  }
}
