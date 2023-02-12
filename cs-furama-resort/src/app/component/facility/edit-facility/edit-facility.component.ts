import {Component, OnInit} from '@angular/core';
import {FacilityType} from "../../../model/facility/facility-type";
import {RentType} from "../../../model/facility/rent-type";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {FacilityService} from "../../../service/facility/facility.service";
import {FacilityTypeService} from "../../../service/facility/facility-type.service";
import {RentTypeService} from "../../../service/facility/rent-type.service";
import {Facility} from "../../../model/facility/facility";

@Component({
  selector: 'app-edit-facility',
  templateUrl: './edit-facility.component.html',
  styleUrls: ['./edit-facility.component.css']
})
export class EditFacilityComponent implements OnInit {

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

  public compareWith(object1: Facility, object2: Facility) {
    return object1 && object2 ? object1.id === object2.id : object1 === object2;
  }

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private facilityService: FacilityService, private facilityTypeService: FacilityTypeService, private  rentTypeService: RentTypeService) {
    this.activatedRoute.paramMap.subscribe(next => {
      const id = +next.get("id");
      this.getFacility(id);
    })

    this.facilityTypeService.getAll().subscribe(next => {
      this.facilityTypeList = next;
    });

    this.rentTypeService.getAll().subscribe(next => {
      this.rentTypeList = next;
    });
  }

  ngOnInit(): void {
  }

  updateFacility() {
    const facility = this.form.value;
    this.facilityService.updateFacility(facility.id, facility).subscribe(next => {
      this.router.navigateByUrl("facility");
      alert("Chỉnh sửa thành công");
    })
  }

  private getFacility(id: number) {
    this.facilityService.findById(id).subscribe(next => {
      this.form.patchValue(next);
    })
  }
}
