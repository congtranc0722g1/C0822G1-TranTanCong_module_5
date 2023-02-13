import { Component, OnInit } from '@angular/core';
import {ContractService} from "../../../service/contract/contract.service";
import {Contract} from "../../../model/contract/contract";

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {

  contractList: Contract[] = [];

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
  }

  getAll(){
    this.contractService.getAll().subscribe(next => {
      this.contractList = next;
    })
  }

}
