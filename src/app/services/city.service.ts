import { SingleResponseModel } from './../models/singleResponseModel';
import { City } from './../models/city';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  constructor(private http:HttpClient) { }
  apiUrl="https://localhost:7214/api/City/"


getAll():Observable<ListResponseModel<City>>{
let newpath=this.apiUrl+"getall"
return this.http.get<ListResponseModel<City>>(newpath)
}

getById():Observable<SingleResponseModel<City>>{
  let newpath=this.apiUrl+"getbyid"
  return this.http.get<SingleResponseModel<City>>(newpath)
}
}

