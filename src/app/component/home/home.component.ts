import { Lesson } from './../../models/lesson';
import { SchoolLesson } from './../../models/schoolLessonDto';
import { SchoolLessonService } from './../../services/school-lesson.service';
import { LessonComponent } from './../lesson/lesson.component';

import { SchoolService } from './../../services/school.service';
import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PopupschoolService } from 'src/app/services/popupschool.service';
import { SchoolDto } from 'src/app/models/schoolDto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  deneme1 = false;
  schoole: SchoolDto[] = [];
  ola = false;
  berk = { visibility: 'visible' };
  berka = { visibility: 'hidden' };
  list:any[]=[]
  listOfSchoolLesson:SchoolLesson[]=[]

 buttonList:any[]=[]
  @ViewChild('modalContainer',{ read: ViewContainerRef }) modalContainer: ViewContainerRef;
  @ViewChild(LessonComponent) private Legggsin: LessonComponent;



  constructor(private school: SchoolService,private componentFactoryResolver: ComponentFactoryResolver,private schoolLesson:SchoolLessonService,private shared:PopupschoolService) {}
  ngOnInit(): void {
    this.getAllSchools();


  }
  createComponent(school:SchoolLesson){
    this.modalContainer.clear();
    // console.log("afasdfasd");
    const factory = this.componentFactoryResolver.resolveComponentFactory(LessonComponent);
    const componentRef = this.modalContainer.createComponent(factory);
this.shared.setSchoolId(school.id);

// console.log(id)

// console.log(this.shared.getSchoolId())

  }

  getAllSchools() {
    this.school.getAll().subscribe((response) => {
      this.schoole = response.data;

      this.list = response.data.map(x => ({ id: x.id, name: x.name,dateTime: x.buildDate,startDate: x.startDate,endDate: x.endDate ,selected: false }));



    });
  }

  //visibility:visible

  denem1evet(school:any){
 this.list.forEach(i=>i.selected=false)
    school.selected=!school.selected

this.getSchoolLessson(school.id);




}
currentSchool:SchoolDto;
setCurrentSchool(school:SchoolDto){
  this.currentSchool=school;

 }
 getCurrentSchoolClass(school:SchoolDto){
   if(school==this.currentSchool){
     return  "list-group-item active"
   }
   else{
     return "list-group-item"
   }
 }
 getAllSchoolClass(){
   if(!this.currentSchool){
     return "list-group-item active"
   }
   else{
     return "list-group-item"
   }
 }

getSchoolLessson(id:number){
this.schoolLesson.getById(id).subscribe(response=>{
  this.listOfSchoolLesson=response.data
 // this.buttonList.push(response.data)

})
}

onClose(data:any){

}

}

// detaylar butonuyla gelsın duzenle
