import { School } from './../../models/school';
import { PopupschoolService } from './../../services/popupschool.service';

import { SchoolService } from './../../services/school.service';
import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
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

  @Output() cl=new EventEmitter<any>();

  schoolAddForm:FormGroup
sc:School;
name:string
bol=false;
scid:number


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

this.school.getById(a).subscribe(response=>{
  this.sc=response.data



  this.bol=true;
  if(this.bol){

  }

});




}

saveButton(data:any){

  this.cl.emit(data);

  this.modalPopUp.hide();

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
