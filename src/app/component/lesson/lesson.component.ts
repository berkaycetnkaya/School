import { School } from './../../models/school';
import { PopupschoolService } from './../../services/popupschool.service';

import { SchoolService } from './../../services/school.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { SchoolDto } from 'src/app/models/schoolDto';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit, AfterViewInit {
  @ViewChild('myModal') private modalPopUp: ModalDirective;

  schoolAddForm:FormGroup
sc:School;
name:string
bol=false;



  constructor(private formsBuilder:FormBuilder,private toastrService:ToastrService,private school:SchoolService,private shared:PopupschoolService) {

  }

  ngOnInit(): void {

    this.getSchool();
    this.createSchoolForm();



  }
  ngAfterViewInit(): void {
    this.show();



  }

getSchool(){
  let a = this.shared.getSchoolId();
console.log("bu a "+ a)
this.school.getById(a).subscribe(response=>{
  this.sc=response.data
console.log(this.sc.name+" sa")

  console.log(this.sc)
  this.bol=true;
  if(this.bol){
    console.log(response.data)
    console.log(this.sc)
  }

});




}

  show(){
    this.modalPopUp.show();

  }
  close(){
    this.modalPopUp.hide();
  }



  // add(){
  //   if(this.schoolAddForm.valid){
  //     let carModel= Object.assign({},this.schoolAddForm.value)
  //       this.carService.add(carModel).subscribe(data=>{
  //         console.log(data)
  //         this.toastrService.success(data.message,"Başarılı")
  //       },dataError=>{

  //       if (dataError.error.Errors.length>0){
  //        console.log(dataError.error.Errors)
  //        for (let i = 0; i < dataError.error.Errors.length; i++) {
  //         this.toastrService.error(dataError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")

  //        }

  //       }

  //       })


  //   }else{
  //     this.toastrService.error("Formunuz Eksik","Dikkat")
  //   }



  // }

  createSchoolForm(){

  this.schoolAddForm=this.formsBuilder.group({



    name:["",Validators.required],
    buildName:["",Validators.required],
    startDate:["",Validators.required],
    endDate:["",Validators.required],
    cityName:["",Validators.required],



  })




  }
}
