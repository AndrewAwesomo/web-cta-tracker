import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BusApiKey, TrainApiKey } from './configs/api-keys';
import { interval } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetTrackerDataService {


  readonly ROOT_URL_TRAIN = '/api/1.0/ttarrivals.aspx?key=';
  readonly ROOT_URL_BUS = '/bustime/api/v2/getpredictions?key='

  constructor(private http: HttpClient) { }

  getPostsTrain(trainStation){
    var Url = this.ROOT_URL_TRAIN + TrainApiKey + '&mapid=' + trainStation + '&outputType=JSON';
    console.log('Fetching Data from: ' + "http://lapi.transitchicago.com/" + Url);
    return this.http.get(Url);
  }

  getPostsBus(busStation){
    var Url = this.ROOT_URL_BUS + BusApiKey + '&stpid=' + busStation + '&outputType=JSON';
    console.log('Fetching Data from: ' + "http://www.ctabustracker.com/" + Url);
    
    //this.http.get(Url).subscribe(response => this.getData(response));
    return this.http.get(Url, {responseType: 'text'});
  }

  getData(res){
    console.log(res.text());
  }
  
}
