import { Component, OnInit } from '@angular/core';
import { GetTrackerDataService } from '../get-tracker-data.service';
import { Observable, Subscription, interval } from 'rxjs';
import * as xml2js from 'xml2js-es6-promise';

@Component({
  selector: 'app-main-viewer',
  templateUrl: './main-viewer.component.html',
  styleUrls: ['./main-viewer.component.css']
})
export class MainViewerComponent implements OnInit {

  constructor(private dataService: GetTrackerDataService) { }

  trainEtas:any;
  busEtas:any;
  subscrt:Subscription;
  subscrb: Subscription;

  ngOnInit() {
    var updateInterval = interval(30000);
    this.callData();
    updateInterval.subscribe(x => this.callData());
  }
  
  callData(){
    this.subscrt = this.dataService.getPostsTrain('41410').subscribe(data => this.parseTrainData(data));
    this.subscrb = this.dataService.getPostsBus('563').subscribe(data => this.parseBusData(data));
  }

  parseTrainData(data){
    this.trainEtas = data['ctatt']['eta'];
    console.log(this.trainEtas);
  }

  parseBusData(data){
    this.busEtas = data;
    this.busEtas = xml2js(data)['__zone_symbol__value']['bustime-response']['prd'];
    console.log(this.busEtas);
  }

  ngOnDestroy() {
    this.subscrt.unsubscribe();
    this.subscrb.unsubscribe();
  }
}
