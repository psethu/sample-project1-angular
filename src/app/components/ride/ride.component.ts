import { Component, OnInit } from '@angular/core';
import {TaxiRide} from '../../models/TaxiRide';
import { TaxiRideService } from '../../services/taxi-ride.service'

@Component({
  selector: 'app-ride',
  templateUrl: './ride.component.html',
  styleUrls: ['./ride.component.scss']
})
export class RideComponent implements OnInit {
public taxiRides : TaxiRide[];

  name:string;
  minutes:string;
  miles:string;
  date:string;
  time:string;

  constructor(private taxiRideService : TaxiRideService) { }

  public getTaxiRides = () => {
    let route: string = 'http://localhost:5000/taxiride';
    this.taxiRideService.getData(route)
    .subscribe((result) => {
      console.log(result);
      this.taxiRides = result as TaxiRide[];
    },
    (error) => {
      console.error(error);
    });
  }

  ngOnInit(): void {
  }

}
