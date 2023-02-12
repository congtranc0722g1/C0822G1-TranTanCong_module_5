import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerType} from "../../../model/customer/customer-type";
import {CustomerTypeService} from "../../../service/customer/customer-type.service";
import {needsCleaning} from "@angular/compiler-cli/ngcc/src/packages/build_marker";
import {CustomerService} from "../../../service/customer/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    dateOfBirth: new FormControl(),
    gender: new FormControl(),
    idCard: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    customerType: new FormControl()
  });

  customerTypeList: CustomerType[] = [];

  constructor(private customerService: CustomerService, private customerTypeService: CustomerTypeService, private  router: Router) {
    this.customerTypeService.getAll().subscribe(next =>{
      console.log(next);
      this.customerTypeList = next;
    });
  }

  ngOnInit(): void {
  }

  addCustomer() {
    const customer = this.form.value;
    this.customerService.addCustomer(customer).subscribe(next =>{
      this.router.navigateByUrl("customer");
      alert("Thêm mới thành công");
    })
  }
}
