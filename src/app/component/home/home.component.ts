import { Lesson } from './../../models/lesson';
import { SchoolLesson } from './../../models/schoolLessonDto';
import { SchoolLessonService } from './../../services/school-lesson.service';
import { LessonComponent } from './../lesson/lesson.component';
import { ToastrService } from 'ngx-toastr';
import { SchoolService } from './../../services/school.service';
import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PopupschoolService } from 'src/app/services/popupschool.service';
import { SchoolDto } from 'src/app/models/schoolDto';
import { TriggerService } from 'src/app/services/trigger.service';

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
  currentSchool:number;
  closeList:any[]=[]
 buttonList:any[]=[]
 a:number;
  @ViewChild('modalContainer',{ read: ViewContainerRef }) modalContainer: ViewContainerRef;
  @ViewChild(LessonComponent) private Legggsin: LessonComponent;

sci:any

  constructor(private school: SchoolService,private componentFactoryResolver: ComponentFactoryResolver,private schoolLesson:SchoolLessonService,private shared:PopupschoolService,
    private trigger:TriggerService,
    private toastrService:ToastrService
    ) {}
  ngOnInit(): void {
    this.getAllSchools();
    this.trigger.triggerEvent$.subscribe(data => {
      this.getAllSchools()
    });


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
if(school.selected){
  this.list.forEach(i=>i.selected=false)
}

else{
  this.list.forEach(i=>i.selected=false)
  school.selected=!school.selected
}


this.getSchoolLessson(school.id);
console.log(school.selected)



}

setCurrentSchool(school:any){
  this.currentSchool=school;
  console.log(school)

 }
 getCurrentLessonClass(sc:any){
this.sci=sc
  if(sc==this.currentSchool){


    return  "list-group-item list-group-item-action active list-group-item-success"
  }
  else{
    return "list-group-item list-group-item-action  list-group-item-success"
  }
}
getAllLessonClass(){

  if(!this.currentSchool){
    return "list-group-item list-group-item-action active list-group-item-success"
  }
  else{
    return "list-group-item list-group-item-action  list-group-item-success"
  }
}

getSchoolLessson(id:number){
  this.a=id
this.schoolLesson.getById(id).subscribe(response=>{
  this.listOfSchoolLesson=response.data
 // this.buttonList.push(response.data)

})
}

onClose(data:any){
this.ngOnInit();
}

delete(id:any){

    console.log(id)
this.schoolLesson.deleteLesson(id).subscribe(response=>{
this.toastrService.success(response.message,"Başarılı")
this.getSchoolLessson(this.a);
},errorResponse=>{
  this.toastrService.error(errorResponse.message)
})



  }

}

// detaylar butonuyla gelsın duzenle
