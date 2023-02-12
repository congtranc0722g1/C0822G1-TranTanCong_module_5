import {Component, Input, OnInit} from '@angular/core';
import {Facility} from "../../../model/facility/facility";

@Component({
  selector: 'app-info-facility',
  templateUrl: './info-facility.component.html',
  styleUrls: ['./info-facility.component.css']
})
export class InfoFacilityComponent implements OnInit {
  @Input() detail: Facility;

  constructor() { }

  ngOnInit(): void {
  }

}
