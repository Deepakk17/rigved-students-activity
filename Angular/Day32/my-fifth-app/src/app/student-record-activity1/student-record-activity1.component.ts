import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-record-activity1',
  templateUrl: './student-record-activity1.component.html',
  styleUrls: ['./student-record-activity1.component.css']
})
export class StudentRecordActivity1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  students =[
    {rollNo:1, Name:'Ajay', marks: 40},
    {rollNo:2, Name:'Vijay', marks: 30},
    {rollNo:3, Name:'Manu', marks: 60},
    {rollNo:4, Name:'Amit', marks: 20},
    {rollNo:5, Name:'Amit', marks: 70},
    {rollNo:6, Name:'Zaheer', marks: 80}
]
  styleattach={}
}
