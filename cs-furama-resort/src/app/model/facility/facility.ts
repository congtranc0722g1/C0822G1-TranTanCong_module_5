export interface Facility {
  id: number;
  name: string;
  facilityType: string;
  area: number;
  cost: number;
  maxPeople: number;
  rentType: string;
  standardRoom : string;
  descriptionOtherConvenience: string;
  poolArea?: number;
  numbersOfFloors?: number;
  facilityFree?: string;
}
