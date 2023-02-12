import { Component, OnInit } from '@angular/core';
import {FacilityService} from "../../../service/facility/facility.service";
import {FacilityTypeService} from "../../../service/facility/facility-type.service";
import {RentTypeService} from "../../../service/facility/rent-type.service";
import {FacilityType} from "../../../model/facility/facility-type";
import {RentType} from "../../../model/facility/rent-type";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {

  facilityTypeList: FacilityType[] = [];

  rentTypeList: RentType[] = [];

  form: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    facilityType: new FormControl(),
    area: new FormControl(),
    cost: new FormControl(),
    maxPeople: new FormControl(),
    rentType: new FormControl(),
    standardRoom: new FormControl(),
    descriptionOtherConvenience: new FormControl(),
    poolArea: new FormControl(),
    numbersOfFloors: new FormControl(),
    facilityFree: new FormControl(),
    image: new FormControl(),
  });

  constructor(private router: Router, private facilityService: FacilityService, private facilityTypeService: FacilityTypeService, private  rentTypeService: RentTypeService) {
    this.facilityTypeService.getAll().subscribe(next =>{
      this.facilityTypeList = next;
    });

    this.rentTypeService.getAll().subscribe(next =>{
      this.rentTypeList = next;
    });
  }

  ngOnInit(): void {
  }

  addFacility() {
    const facility = this.form.value;
    this.facilityService.addfacility(facility).subscribe(next => {
      alert("Thêm mới thành công");
      this.router.navigateByUrl("facility");
    })
  }
}
