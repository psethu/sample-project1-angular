import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ride',
  templateUrl: './ride.component.html',
  styleUrls: ['./ride.component.scss']
})
export class RideComponent implements OnInit {

  name:string;
  minutes:string;
  miles:string;
  date:string;
  time:string;

  constructor() { }

  ngOnInit(): void {
  }

}
