import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { SchoolDto } from '../models/schoolDto';

import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http:HttpClient) { }
  apiUrl="https://localhost:7214/api/School/"


getAll():Observable<ListResponseModel<SchoolDto>>{
let newpath=this.apiUrl+"getall"
return this.http.get<ListResponseModel<SchoolDto>>(newpath)
}

getById(id:number):Observable<SingleResponseModel<SchoolDto>>{
  let newpath=this.apiUrl+"getbyid?id="+id
  return this.http.get<SingleResponseModel<SchoolDto>>(newpath)
}

}
