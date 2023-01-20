import { LessonComponent } from './../lesson/lesson.component';
import { School } from './../../models/schoold';
import { SchoolService } from './../../services/school.service';
import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  deneme1 = false;
  schoole: School[] = [];
  ola = false;
  berk = { visibility: 'visible' };
  berka = { visibility: 'hidden' };
  list:any[]=[]
  @ViewChild('modalContainer',{ read: ViewContainerRef }) modalContainer: ViewContainerRef;

  constructor(private school: SchoolService,private componentFactoryResolver: ComponentFactoryResolver) {}
  ngOnInit(): void {
    this.getAllSchools();

  }
  createComponent(){
    this.modalContainer.clear();
    console.log("afasdfasd");
    const factory = this.componentFactoryResolver.resolveComponentFactory(LessonComponent);
    const componentRef = this.modalContainer.createComponent(factory);
  }

  getAllSchools() {
    this.school.getAll().subscribe((response) => {
      this.schoole = response.data;
      this.list = response.data.map(x => ({ id: x.id, name: x.name,dateTime: x.buildDate,startDate: x.startDate,endDate: x.endDate,cityId: x.cityId,lessonId: x.lessonId,lessonName: x.lessonName,cityName: x.cityName, selected: false }));
      console.log(this.list);
    });
  }

  //visibility:visible

  denem1evet(school:any){

    school.selected=!school.selected
console.log(school.selected)


}
currentSchool:School;
setCurrentSchool(school:School){
  this.currentSchool=school;

 }
 getCurrentSchoolClass(school:School){
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



}
