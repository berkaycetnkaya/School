import { SchoolLesson } from './../models/schoolLessonDto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class SchoolLessonService {

  constructor(private http:HttpClient) { }
  apiUrl="https://localhost:7214/api/SchoolLesson/"





getById(id:number):Observable<ListResponseModel<SchoolLesson>>{
  let newpath=this.apiUrl+"getbyid?id="+id
  return this.http.get<ListResponseModel<SchoolLesson>>(newpath)
}

getAll():Observable<ListResponseModel<SchoolLesson>>{
  let newpath=this.apiUrl+"getall"
  return this.http.get<ListResponseModel<SchoolLesson>>(newpath)
  }
}
