import { Component, OnInit } from '@angular/core';
const Muuri = require('muuri');

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    var grid = new Muuri('.grid',{
      dragEnabled: true,
      
    });
  }

}
