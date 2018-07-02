import { Component, OnInit } from '@angular/core';
import { GetTrackerDataService } from '../get-tracker-data.service';
import { Observable, Subscription, interval } from 'rxjs';


@Component({
  selector: 'app-main-viewer',
  templateUrl: './main-viewer.component.html',
  styleUrls: ['./main-viewer.component.css']
})
export class MainViewerComponent implements OnInit {

  constructor(private dataService: GetTrackerDataService) { }

  etas:any;
  subscr:Subscription;
  ngOnInit() {
    var updateInterval = interval(30000);
    this.callData();
    updateInterval.subscribe(x => this.callData());
  }

  callData(){
    this.subscr = this.dataService.getPosts('41410').subscribe(data => this.parseData(data));
  }

  parseData(data){
    this.etas = data['ctatt']['eta']    
  }


  ngOnDestroy() {
    this.subscr.unsubscribe();
  }
}
