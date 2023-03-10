import { Injectable } from '@angular/core';
import {Customer} from "../../model/customer/customer";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerType} from "../../model/customer/customer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>("http://localhost:3000/customer");
  }

  addCustomer(customer: any) {
    return this.httpClient.post("http://localhost:3000/customer", customer);
  }

  findById(id: number): Observable<Customer>{
    return this.httpClient.get<Customer>("http://localhost:3000/customer/" + id);
  }

  updateCustomer(id: number, customer: Customer) {
    return this.httpClient.put("http://localhost:3000/customer/" + id, customer);
  }

  deleteCustomer(id: number) {
    return this.httpClient.delete<Customer>("http://localhost:3000/customer/" + id);
  }

  searchTwo(name: string, customerType: string): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>("http://localhost:3000/customer?name_like=" + name + '&customerType.name=' + customerType);
  }

  searchFacility(customerType: string) {
    return this.httpClient.get<Customer[]>("http://localhost:3000/customer?customerType.name=" + customerType);
  }

  searchName(name: string) {
    return this.httpClient.get<Customer[]>("http://localhost:3000/customer?name_like=" + name);
  }
}
