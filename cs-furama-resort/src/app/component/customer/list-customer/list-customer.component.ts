import {Component, OnInit} from '@angular/core';
import {Customer} from "../../../model/customer/customer";
import {CustomerService} from "../../../service/customer/customer.service";
import {Router} from "@angular/router";
import {CustomerTypeService} from "../../../service/customer/customer-type.service";
import {CustomerType} from "../../../model/customer/customer-type";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customerList: Customer[] = [];
  temp: Customer = {};
  customerTypeList: CustomerType[] = [];

  name: string = "";
  customerType: string = "";

  constructor(private customerService: CustomerService, private customerTypeService: CustomerTypeService) {

    this.customerTypeService.getAll().subscribe(next => {
      this.customerTypeList = next;
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customerService.getAll().subscribe(next => {
      console.log(next)
      this.customerList = next;
    });
  }

  deleteCustomer() {
    if (this.temp.id != null) {
      this.customerService.deleteCustomer(this.temp.id).subscribe(next => {
        this.getAll();
        alert("Xóa thành công");
      })
    }
  }

  search(name: string, customerType: string){
    if (name === "" && customerType === ""){
      this.getAll();
    }else if(name !== "" && customerType !== ""){
      this.customerService.searchTwo(name, customerType).subscribe(next => {
        this.customerList = next;
      });
    }else if (name === "" && customerType !== ""){
      this.customerService.searchFacility(customerType).subscribe(next => {
        this.customerList = next;
      })
    }else {
      this.customerService.searchName(name).subscribe(next => {
        this.customerList = next;
      })
    }
  }
}
