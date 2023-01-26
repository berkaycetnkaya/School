import { Lesson } from './../../models/lesson';
import { LessonService } from './../../services/lesson.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lessonChild',
  templateUrl: './lessonChild.component.html',
  styleUrls: ['./lessonChild.component.css']
})
export class LessonChildComponent implements OnInit {
lessons:Lesson[]=[]
  constructor(private lessonService:LessonService) { }

  ngOnInit() {
    this.getLessons();
  }

  getLessons(){
    this.lessonService.getAll().subscribe(response=>{

this.lessons=response.data;
console.log(response.data)
    })
  }

}
