import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../service/customer/customer.service";
import {CustomerTypeService} from "../../../service/customer/customer-type.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerType} from "../../../model/customer/customer-type";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
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

  public compareWith(object1: CustomerType, object2: CustomerType){
    return object1 && object2 ? object1.id === object2.id : object1 === object2;
  }


  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService, private customerTypeService: CustomerTypeService, private  router: Router) {
    this.activatedRoute.paramMap.subscribe(next =>{
      const id = +next.get("id");
      this.getCustomer(id);
    });

    this.customerTypeService.getAll().subscribe(next => {
      this.customerTypeList = next;
    })
  }

  ngOnInit(): void {
  }

  updateCustomer() {
    const customer = this.form.value;
    this.customerService.updateCustomer(customer.id, customer).subscribe(next =>{
      this.router.navigateByUrl("customer")
      alert("Chỉnh sửa thành công");
    })
  }

  private getCustomer(id: number) {
    return this.customerService.findById(id).subscribe(next => {
      this.form.patchValue(next);
    });
  }
}
