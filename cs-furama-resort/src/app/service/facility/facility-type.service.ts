import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FacilityType} from "../../model/facility/facility-type";

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<FacilityType[]>{
    return this.httpClient.get<FacilityType[]>("http://localhost:3000/facility-type");
  }
}
