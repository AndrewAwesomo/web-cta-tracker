import { Component, OnInit } from '@angular/core';
import { BusConfig } from './configs/bus-config';
// import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  busConfig = BusConfig;
  constructor() { }


  ngOnInit() {
  }

}
