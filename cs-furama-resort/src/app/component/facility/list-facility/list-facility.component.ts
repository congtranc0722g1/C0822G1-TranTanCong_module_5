import {Component, OnInit} from '@angular/core';
import {Facility} from "../../../model/facility/facility";
import {FacilityService} from "../../../service/facility/facility.service";

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {

  facilityList: Facility[] = [];
  temp: Facility = {};

  constructor(private facilityService: FacilityService) {
    this.getAll();
  }

  ngOnInit(): void {
  }

  getAll() {
    this.facilityService.getAll().subscribe(next => {
      this.facilityList = next;
    })
  }

  deleteFacility() {
    if (this.temp.id != null){
      this.facilityService.deleteFacility(this.temp.id).subscribe(next => {
        this.getAll();
        alert("Xóa thành công");
      })
    }
  }

  detailFacility() {

  }
}
