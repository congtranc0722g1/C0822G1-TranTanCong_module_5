import { Component, OnInit } from '@angular/core';
import {FacilityService} from "../../../service/facility/facility.service";
import {FacilityTypeService} from "../../../service/facility/facility-type.service";
import {RentTypeService} from "../../../service/facility/rent-type.service";
import {FacilityType} from "../../../model/facility/facility-type";
import {RentType} from "../../../model/facility/rent-type";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {

  facilityTypeList: FacilityType[] = [];

  rentTypeList: RentType[] = [];

  form: FormGroup;

  constructor(private router: Router, private facilityService: FacilityService, private facilityTypeService: FacilityTypeService, private  rentTypeService: RentTypeService) {
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl("", [Validators.required]),
      facilityType: new FormControl("", [Validators.required]),
      area: new FormControl("", [Validators.required]),
      cost: new FormControl("", [Validators.required]),
      maxPeople: new FormControl("", [Validators.required]),
      rentType: new FormControl("", [Validators.required]),
      standardRoom: new FormControl("", [Validators.required]),
      descriptionOtherConvenience: new FormControl("", [Validators.required]),
      poolArea: new FormControl("", [Validators.required, Validators.pattern("^\\d+$")]),
      numbersOfFloors: new FormControl("", [Validators.required, Validators.pattern("^\\d+$")]),
      facilityFree: new FormControl("", [Validators.required]),
      image: new FormControl("", [Validators.required]),
    });

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
    if (this.form.valid){
      const facility = this.form.value;
      this.facilityService.addfacility(facility).subscribe(next => {
        alert("Thêm mới thành công");
        this.router.navigateByUrl("facility");
      });
    }

  }
}
