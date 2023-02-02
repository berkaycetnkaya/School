import { SchoolLessonService } from './../../services/school-lesson.service';
import { PopupschoolService } from './../../services/popupschool.service';
import { Lesson } from './../../models/lesson';
import { LessonService } from './../../services/lesson.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SchoolLesson } from 'src/app/models/schoolLessonDto';

@Component({
  selector: 'app-lessonChild',
  templateUrl: './lessonChild.component.html',
  styleUrls: ['./lessonChild.component.css']
})
export class LessonChildComponent implements OnInit,AfterViewInit {
lessons:Lesson[]=[]
id:number;
listOfSchoolLesson:SchoolLesson[]=[]
listo:any[];
listt:any[];
listh:any[];


  constructor(private lessonService:LessonService,private shared:PopupschoolService,private schoolLesson:SchoolLessonService) { }
  ngAfterViewInit(): void {

  }

  ngOnInit() {
    this.getLessons();
    this.getSchoolLesson()



  }

  getLessons(){
    this.lessonService.getAll().subscribe(response=>{

this.lessons=response.data;

 let a = []
for (const lesson of this.lessons) {


  a.push(lesson.name)




}
console.log(a)
this.listo=a


    })
  }

  getSchoolLesson(){


    let a = this.shared.getSchoolId();
this.schoolLesson.getById(a).subscribe(response=>{
this.listOfSchoolLesson=response.data

// for (const lesson of this.listOfSchoolLesson) {
//   let b = [];
//   b.push(lesson.lessonName)
//   this.listt=b;

// }

//this.listt.push(this.listOfSchoolLesson.forEach(x=>x.lessonName))



let b = []
b= this.listOfSchoolLesson.map(x=>x.lessonName)

this.listt=b
console.log(b)

this.listh=this.listo.filter(x=>!this.listt.includes(x))
console.log(this.listh)
console.log(this.listo)
console.log(this.listt)

})



}






  }





