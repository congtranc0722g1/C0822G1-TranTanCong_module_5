import {Component, OnInit} from '@angular/core';
import {MedicalRecord} from "../../model/medical-record";
import {MedicalRecordService} from "../../service/medical-record.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  medicalRecordList: MedicalRecord[] = [];

  temp: MedicalRecord = {};

  constructor(private medicalRecordSever: MedicalRecordService, private toastService: ToastrService) {
    console.log(this.getAll());
    this.getAll();
  }

  ngOnInit(): void {
  }

  getAll() {
    this.medicalRecordSever.getAll().subscribe(next => {
      this.medicalRecordList = next;
    })
  }

  // deleteBenhAn() {
  //   this.benhAnService.delete(this.temp1.id).subscribe(next => {
  //     this.getAll();
  //     alert('Xóa Thành Công')
  //   })
  // }

  delete() {
    this.medicalRecordSever.delete(this.temp.id).subscribe(next => {
      this.getAll()
      this.toastService.success("Xóa Thành Công", "Thông Báo Xóa")
    })
  }
}
