import {Customer} from "../customer/customer";
import {Facility} from "../facility/facility";
import {Employee} from "../employee/employee";

export interface Contract {
  id?: number;
  startDay?: string;
  endDay?: string;
  deposit?: number;
  employee?: Employee
  customer?: Customer;
  facility?: Facility;
}
