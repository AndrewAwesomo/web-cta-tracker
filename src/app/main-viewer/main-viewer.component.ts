import { Component, OnInit } from '@angular/core';
import { GetTrackerDataService } from '../get-tracker-data.service';
import { Observable, interval } from 'rxjs';


@Component({
  selector: 'app-main-viewer',
  templateUrl: './main-viewer.component.html',
  styleUrls: ['./main-viewer.component.css']
})
export class MainViewerComponent implements OnInit {

  constructor(private dataService: GetTrackerDataService) { }

  etas:any;
  subscr:Observable<any>;
  ngOnInit() {

    // this.subscr = this.dataService.getPosts('41410').interval(1000).subscribe(
    //   data => this.parseData(data)
    // );

    this.subscr = interval(1000).subscribe(this.dataService.getPosts('41410'))
  }

  parseData(data){
    console.log(data['ctatt']['eta']);
    this.etas = data['ctatt']['eta']
    //console.log(JSON.parse(data[0]));
    
  }


  ngOnDestroy() {
    this.subscr.unsubscribe();
  }
}
