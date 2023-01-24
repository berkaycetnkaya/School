import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupschoolService {

constructor() { }

schoolId:number;

setSchoolId(id:number){
this.schoolId=id;
}

getSchoolId(){
  return this.schoolId;
}




}
