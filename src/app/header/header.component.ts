import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Angular';

  subtitle = 'Angular Subtitle'

  color;

  constructor(private _globalService: GlobalService) { 
    this.color = 'dark';
  }

  ngOnInit(): void {
    this.title = this._globalService.toUpperCase(this._globalService.appTitle);
    this.subtitle = this._globalService.appSubtitle;
    
    this._globalService.subjectColor.subscribe(
      (color: any) => {
        this.color = color;
      }
    );    
  }

}
