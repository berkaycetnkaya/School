import { School } from './../../models/schoold';
import { SchoolService } from './../../services/school.service';
import { Component, OnInit } from '@angular/core';

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

  constructor(private school: SchoolService) {}
  ngOnInit(): void {
    this.getAllSchools();

  }

  getAllSchools() {
    this.school.getAll().subscribe((response) => {
      this.schoole = response.data;

      console.log(response.data);
    });
  }

  //visibility:visible

  denem1evet(){
    if(this.deneme1===true){
      this.deneme1=false
    }
    else{
      this.deneme1=true
  }


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
