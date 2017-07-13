import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.less']
})
export class MainNavigationComponent implements OnInit {

  public productDescription = 'ProfiSle';

  constructor() { }

  ngOnInit() {
  }

}
