import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Facility} from "../../model/facility/facility";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Facility[]>{
    return this.httpClient.get<Facility[]>("http://localhost:3000/facility")
  }

  addfacility(facility: Facility) {
    return this.httpClient.post("http://localhost:3000/facility", facility);
  }

  findById(id: number): Observable<Facility> {
    return this.httpClient.get<Facility>("http://localhost:3000/facility/" + id);
  }

  updateFacility(id: number, facility: Facility) {
    return this.httpClient.put("http://localhost:3000/facility/" + id, facility);
  }

  deleteFacility(id: number) {
    return this.httpClient.delete("http://localhost:3000/facility/" + id);
  }
}
