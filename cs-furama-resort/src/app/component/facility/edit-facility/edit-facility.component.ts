import {Component, OnInit} from '@angular/core';
import {FacilityType} from "../../../model/facility/facility-type";
import {RentType} from "../../../model/facility/rent-type";
import {FormControl, FormGroup, Validators} from "@angular/forms";
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

  form: FormGroup;

  public compareWith(object1: Facility, object2: Facility) {
    return object1 && object2 ? object1.id === object2.id : object1 === object2;
  }

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private facilityService: FacilityService, private facilityTypeService: FacilityTypeService, private  rentTypeService: RentTypeService) {
    this.form = new FormGroup({
      id: new FormControl("", [Validators.required]),
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
    if (this.form.valid){
      const facility = this.form.value;
      this.facilityService.updateFacility(facility.id, facility).subscribe(next => {
        this.router.navigateByUrl("facility");
        alert("Chỉnh sửa thành công");
      });
    }

  }

  private getFacility(id: number) {
    this.facilityService.findById(id).subscribe(next => {
      this.form.patchValue(next);
    })
  }
}
