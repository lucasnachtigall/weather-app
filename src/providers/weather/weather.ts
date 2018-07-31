import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
  private apiKey = 'c0d6f40f26068df9307b4bd68cc65bde';
  private url;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.openweathermap.org/data/2.5/weather?units=metric&APPID=' + this.apiKey +'&q=';
  }

  getWeather(city, country){
    return this.http.get(this.url + city + ',' + country);
  }
}
