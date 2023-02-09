import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  Userlist: User[] = [
    {email: "vip@gmail.com", password: "thanks", country: "Lao", age: 19, gender: true, phone: "0975667545"}
  ]

  constructor() { }

  ngOnInit(): void {

  }


  createUser(event: any) {
    this.Userlist.push(event)
  }
}
