import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BusApiKey, TrainApiKey } from './configs/api-keys';
import { interval } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetTrackerDataService {


  readonly ROOT_URL = 'http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=';

  constructor(private http: HttpClient) { }

  getPosts(trainStation){
    var Url = this.ROOT_URL + TrainApiKey + '&mapid=' + trainStation + '&outputType=JSON';
    console.log('Fetching Data from: ' + Url);
    return this.http.get(Url);
  }
  
}
