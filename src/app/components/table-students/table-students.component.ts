import { Component, OnInit} from '@angular/core';
import { students } from './mock';
import { CommonModule, NgClass, NgFor} from '@angular/common';
import { Student } from "../../models/student-to"

@Component({
  selector: 'app-table-students',
  standalone: true,
  imports: [CommonModule, NgFor, NgClass],
  templateUrl: './table-students.component.html',
  styleUrl: './table-students.component.css'
})

export class TableStudentsComponent implements OnInit {
  public students?: Student[]

  ngOnInit(): void {
      this.students = students
  }
}
