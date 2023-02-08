import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl("", [Validators.required, Validators.minLength(6)]),
      country: new FormControl("", [Validators.required]),
      age: new FormControl("", [Validators.required, Validators.min(18)]),
      gender: new FormControl("", [Validators.required]),
      phone: new FormControl("", [Validators.required, Validators.pattern("^\\+84[\\d]{9,10}$")])
    })
  }

  ngOnInit(): void {
  }

  registerForm() {

  }

  validatePassword(control: AbstractControl){
  }
}
