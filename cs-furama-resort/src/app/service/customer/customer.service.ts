import { Injectable } from '@angular/core';
import {Customer} from "../../model/customer/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerList: Customer[] = [
    {id: 1, name: "Công", dateOfBirth: "1999-10-20", gender: true, customerType: "Vàng", idCard: "767656787", phone: "09876567453", email: "trantancong@gmail.com", address: "Quảng Nam"},
    {id: 2, name: "Lý", dateOfBirth: "1998-06-19", gender: false, customerType: "Bạc", idCard: "864576479", phone: "09896567467", email: "Ngovanatm@gmail.com", address: "Đà Nẵng"},
    {id: 3, name: "Tiến", dateOfBirth: "1997-04-01", gender: true, customerType: "Kim Cương", idCard: "347653465", phone: "09433567498", email: "alo11234@gmail.com", address: "Quảng Ngãi"}
  ]

  constructor() { }

  getAll(){
    return this.customerList;
  }
}
