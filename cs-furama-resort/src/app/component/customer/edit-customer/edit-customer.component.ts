import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../service/customer/customer.service";
import {CustomerTypeService} from "../../../service/customer/customer-type.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../../model/customer/customer-type";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  form: FormGroup;

  customerTypeList: CustomerType[] = [];

  public compareWith(object1: CustomerType, object2: CustomerType){
    return object1 && object2 ? object1.id === object2.id : object1 === object2;
  }


  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService, private customerTypeService: CustomerTypeService, private  router: Router) {

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
    if (this.form.valid){
      const customer = this.form.value;
      this.customerService.updateCustomer(customer.id, customer).subscribe(next =>{
        this.router.navigateByUrl("customer")
        alert("Chỉnh sửa thành công");
      });
    }

  }

  private getCustomer(id: number) {
    return this.customerService.findById(id).subscribe(next => {
      this.form.patchValue(next);
    });
  }
}
