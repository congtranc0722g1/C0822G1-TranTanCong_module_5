import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../model/user";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  user: User = {
    // email: "trantancong@gmail.com",
    // password: "trantancong@gmail.com",
    // country: "trantancong@gmail.com",
    // age: 19,
    // gender: true,
    // phone: "trantancong@gmail.com",
  }
  @Output() userSubmit = new EventEmitter();
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
    }, this.validatePassword)
  }

  ngOnInit(): void {
  }

  registerForm() {
    console.log(this.form.value)
    if (this.form.valid) {
      this.userSubmit.emit(this.form.value)
    }
  }

  validatePassword(checkForm: any) {
    let password = checkForm.controls.password.value;
    let confirmPassword = checkForm.controls.confirmPassword.value;
    if (password != confirmPassword) {
      console.log("psw" + password)
      return {"invalidPassword": true}
    }
    return null;
  }

  // createUser() {
  //     this.userSubmit.emit(this.user);
  //   }
  //
  //   // this.user = {
  //   //   email: "trantancong@gmail.com",
  //   //   password: "trantancong@gmail.com",
  //   //   country: "trantancong@gmail.com",
  //   //   age: 19,
  //   //   gender: true,
  //   //   phone: "trantancong@gmail.com",
  //   // }

}
