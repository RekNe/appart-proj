import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() counterMr :number = 50;
  constructor() { }


  ngOnInit() {
    console.log(this.counterMr);
  }

}