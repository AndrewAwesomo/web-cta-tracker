import { Component, OnInit } from '@angular/core';
import { GetTrackerDataService } from '../get-tracker-data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-main-viewer',
  templateUrl: './main-viewer.component.html',
  styleUrls: ['./main-viewer.component.css']
})
export class MainViewerComponent implements OnInit {

  constructor(private dataService: GetTrackerDataService) { }

  etas:any;
  ngOnInit() {

    this.dataService.getPosts('41410').subscribe(
      data => this.parseData(data)
    );

  }

  parseData(data){
    console.log(data['ctatt']['eta']);
    this.etas = data['ctatt']['eta']
    //console.log(JSON.parse(data[0]));
  }
}
