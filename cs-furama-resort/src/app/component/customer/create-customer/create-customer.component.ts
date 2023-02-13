import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
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
  form: FormGroup;

  customerTypeList: CustomerType[] = [];

  constructor(private customerService: CustomerService, private customerTypeService: CustomerTypeService, private  router: Router) {
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl("", [Validators.required, Validators.pattern("^([A-Z]+[a-záàảạãăắằặẵâấầẫậẩéèẻẽẹêếềểễệóòỏõọôốồổỗộơớờởỡợíìỉĩịùúủũụưứửữựỵỷỹýỳ]*[ ])*([A-Z]+[a-záàảạãăắằặẵâấầẫậẩéèẻẽẹêếềểễệóòỏõọôốồổỗộơớờởỡợíìỉĩịùúủũụưứửữựỵỷỹýỳ]*)$")]),
      dateOfBirth: new FormControl("", [Validators.required]),
      gender: new FormControl("", [Validators.required]),
      idCard: new FormControl("", [Validators.required, Validators.pattern("\\d{9,12}$")]),
      phone: new FormControl("", [Validators.required, Validators.pattern("^((\\(84\\)\\+)|0)((90)|(91))[\\d]{7}$")]),
      email: new FormControl("", [Validators.required, Validators.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")]),
      address: new FormControl("", [Validators.required]),
      customerType: new FormControl("", [Validators.required])
    });

    this.customerTypeService.getAll().subscribe(next =>{
      console.log(next);
      this.customerTypeList = next;
    });
  }

  ngOnInit(): void {
  }

  addCustomer() {
    const customer = this.form.value;
    if (this.form.valid){
      this.customerService.addCustomer(customer).subscribe(next =>{
        this.router.navigateByUrl("customer");
        alert("Thêm mới thành công");
      });
    }

  }
}
