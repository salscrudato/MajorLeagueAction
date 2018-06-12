import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  bets:any;

  constructor(
    private dataService:DataService
  ) { }

  ngOnInit() {
    console.log("in confirm component onInit");
    this.bets = this.dataService.getBets();
  }

}
