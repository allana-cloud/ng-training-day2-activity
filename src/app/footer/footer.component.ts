import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  color;
  constructor(private _globalService: GlobalService) { 
    this.color = 'dark';
  }

  ngOnInit(): void {
    this._globalService.subjectColor.subscribe(
      (color: any) => {
        this.color = color;
      }
    );
  }

}
