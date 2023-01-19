import { Lesson } from './../models/lesson';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private http:HttpClient) { }
  apiUrl="https://localhost:7214/api/Lesson/"


getAll():Observable<ListResponseModel<Lesson>>{
let newpath=this.apiUrl+"getall"
return this.http.get<ListResponseModel<Lesson>>(newpath)
}


getById():Observable<SingleResponseModel<Lesson>>{
  let newpath=this.apiUrl+"getbyid"
  return this.http.get<SingleResponseModel<Lesson>>(newpath)
}
}
