import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public compareWith(object1: BenhAn, object2: BenhAn) {
   return  object1 && object2 ? object1.id === object2.id : object1 === object2;
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}
