import { ClockService } from '../clock.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css']
})
export class DateTimeComponent implements OnInit {

  clock: Observable<Date>;
  currentDate = new Date();

  constructor(private clockService: ClockService) { }

  ngOnInit(): void {
    this.clock = this.clockService.getClockLocal();
  }

}
