import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  boxes = [
    { name: 'First',  id:1 },
    { name: 'Second', id:2 },
    { name: 'Third',  id:3 },
    { name: 'Forth',  id:4 }
  ];
  constructor() { }

  ngOnInit() {
  }

}
