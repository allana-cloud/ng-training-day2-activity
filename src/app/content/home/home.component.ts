import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  color;
  @Output() submitContent = new EventEmitter<string>();

  constructor(
    private router: ActivatedRoute,
    private _globalService: GlobalService
  ) { }

  ngOnInit(): void {
    this.color = '';
  }

  onClick(): void {
    
    //console.log(this.color);

    if (this.color.length == 0) {      
      this.color = 'bg-dark';      
    }

    this._globalService.subjectColor.next(this.color);
    // this._globalService.subjectColor.subscribe(
    //   () => {
    //     //console.log(this.color);
    //   }
    // );
  }

}
