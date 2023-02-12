import {Component, OnInit} from '@angular/core';
import {Customer} from "../../../model/customer/customer";
import {CustomerService} from "../../../service/customer/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customerList: Customer[] = [];
  temp: Customer = {};

  constructor(private customerService: CustomerService) {
    this.getAll()
  }

  ngOnInit(): void {
  }

  getAll() {
    this.customerService.getAll().subscribe(next => {
      console.log(next)
      this.customerList = next;
    });
  }

  deleteCustomer() {
    if (this.temp.id != null) {
  this.customerService.deleteCustomer(this.temp.id).subscribe(next =>{
    this.getAll();
    alert("Xóa thành công");
  })
    }
  }
}
