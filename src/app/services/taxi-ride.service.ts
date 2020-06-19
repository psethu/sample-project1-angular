import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaxiRideService {

  constructor(private http: HttpClient) { }

  public getData = (route: string) =>{
    return this.http.get(route);
  }  
}
