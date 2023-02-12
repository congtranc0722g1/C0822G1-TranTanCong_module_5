import {RentType} from "./rent-type";
import {FacilityType} from "./facility-type";

export interface Facility {
  id?: number;
  name?: string;
  facilityType?: FacilityType;
  area?: number;
  cost?: number;
  maxPeople?: number;
  rentType?: RentType;
  standardRoom?: string;
  descriptionOtherConvenience?: string;
  poolArea?: number;
  numbersOfFloors?: number;
  facilityFree?: string;
  image?: string;
}
