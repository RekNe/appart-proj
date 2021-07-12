import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  constructor() { }

    now = new Date();

    getClockLocal() : Observable<Date> {
    return interval(1000).pipe(
      mergeMap(() => of(new Date))
    )
  }


}
