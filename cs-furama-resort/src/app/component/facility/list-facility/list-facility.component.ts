import { Component, OnInit } from '@angular/core';
import {Facility} from "../../../model/facility/facility";

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {

  facilityList: Facility[] = [
    {id: 1, name: "House1", facilityType: "House", area: 300, cost: 2000000,maxPeople: 10, rentType: "Năm", standardRoom: "VIP", descriptionOtherConvenience: "Không", poolArea: 20, numbersOfFloors: 3, facilityFree: "Xe đạp", image: "/assets/images/facility1.jpg"},
    {id: 2, name: "Villa1", facilityType: "Villa", area: 200, cost: 1000000,maxPeople: 5, rentType: "Tháng", standardRoom: "Common", descriptionOtherConvenience: "Không", poolArea: 25, numbersOfFloors: 5, facilityFree: "Xe máy", image: "/assets/images/facility2.jpg"},
    {id: 3, name: "Room100", facilityType: "Room", area: 250, cost: 2500000,maxPeople: 3, rentType: "Ngày", standardRoom: "VIP", descriptionOtherConvenience: "Không", poolArea: 50, numbersOfFloors: 4, facilityFree: "Ăn sáng", image: "/assets/images/facility3.jpg"},
    {id: 4, name: "House100", facilityType: "Room", area: 250, cost: 2500000,maxPeople: 3, rentType: "Ngày", standardRoom: "VIP", descriptionOtherConvenience: "Không", poolArea: 50, numbersOfFloors: 4, facilityFree: "Ăn sáng", image: "https://media.baodautu.vn/Images/ngoctan/2017/12/19/Furama_Resort_Danang_-_Cafe_Indochine.jpg"},
    {id: 5, name: "Villa100", facilityType: "Room", area: 250, cost: 2500000,maxPeople: 3, rentType: "Ngày", standardRoom: "VIP", descriptionOtherConvenience: "Không", poolArea: 50, numbersOfFloors: 4, facilityFree: "Ăn sáng", image: "https://galatravel.vn/pic/hotel/2-600-40_636772920499243218_HasThumb.jpg"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
