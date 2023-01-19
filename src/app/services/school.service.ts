import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { School } from '../models/schoold';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http:HttpClient) { }
  apiUrl="https://localhost:7214/api/School/"


getAll():Observable<ListResponseModel<School>>{
let newpath=this.apiUrl+"getall"
return this.http.get<ListResponseModel<School>>(newpath)
}

getById():Observable<SingleResponseModel<School>>{
  let newpath=this.apiUrl+"getbyid"
  return this.http.get<SingleResponseModel<School>>(newpath)
}

}
