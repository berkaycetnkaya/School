import { SchoolLesson } from './../../models/schoolLessonDto';
import { SchoolLessonService } from './../../services/school-lesson.service';
import { PopupschoolService } from './../../services/popupschool.service';
import { Lesson } from './../../models/lesson';
import { LessonService } from './../../services/lesson.service';
import { Component, OnInit, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { AddLesson } from 'src/app/models/addSchoolLesson';


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
bol=false;
currentLesson:Lesson
@Output() cl=new EventEmitter<any>();
lessonOfSc:Lesson[]=[]
allLessons:Lesson[]=[]
restLesson:Lesson[]=[]
scId:number;
sendSc:AddLesson={
  schoolId: 0,
  id: 0,
  lessonId: 0
};

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

this.allLessons=response.data

 let a = []
for (const lesson of this.lessons) {


  a.push(lesson.name)




}

this.listo=a


    })
  }

  getSchoolLesson(){


    let a = this.shared.getSchoolId();
    this.scId=a;
this.schoolLesson.getById(a).subscribe(response=>{
this.listOfSchoolLesson=response.data
this.lessonOfSc=response.data.map(x=>({id:x.lessonId,name:x.lessonName}))


const firstObjects = Object.values(this.allLessons);
const secondObjects = Object.values(this.lessonOfSc);

const result = firstObjects.filter(obj => {
  return !secondObjects.some(o => o.id === obj.id);
});
this.restLesson=result
this.restLesson.map(x=>({id:x.id,name:x.name,selected:false}))


//this.restLesson=this.allLessons.filter(x=>!this.lessonOfSc.includes(x))



// for (const lesson of this.listOfSchoolLesson) {
//   let b = [];
//   b.push(lesson.lessonName)
//   this.listt=b;

// }

//this.listt.push(this.listOfSchoolLesson.forEach(x=>x.lessonName))



let b = []
b= this.listOfSchoolLesson.map(x=>(x.lessonName))

this.listt=b
console.log(b)

//this.listh=this.listo.filter(x=>!this.listt.includes(x))





})



}
setCurrentLesson(sc:any){
  this.currentLesson=sc
  console.log(this.currentLesson)
  console.log(this.scId)
let a = sc.id;
let b = this.scId
console.log(a +""+ b );

  if(sc){
this.sendSc.lessonId=a;
this.sendSc.schoolId=b;
console.log(this.sendSc)
  }

this.cl.emit(this.sendSc);

 }

 getCurrentLessonClass(sc:any){
  if(sc==this.currentLesson){
    return  "list-group-item list-group-item-action active list-group-item-success"
  }
  else{
    return "list-group-item list-group-item-action  list-group-item-success"
  }
}
getAllLessonClass(){

  if(!this.currentLesson){
    return "list-group-item list-group-item-action active list-group-item-success"
  }
  else{
    return "list-group-item list-group-item-action  list-group-item-success"
  }
}

Letsbegin(){
  this.currentLesson=null;
}



  }





