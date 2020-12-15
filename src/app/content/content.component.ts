import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  titleShop: string;
  
  constructor(private _globalService: GlobalService) { 
    this.titleShop = ' to Training Activity Day 2'
  }

  ngOnInit(): void {
    // this.titleShop = this._globalService.appTitle;
    // this.titleShop = this.titleShop.toUpperCase();
  }

}
