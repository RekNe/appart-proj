import { Injectable } from '@angular/core';
import { Subject } from 'node_modules_old/rxjs';

@Injectable({
  providedIn: 'root'
})
export class PieDataService {

  private data = [];
  public getChartDataEvent = new Subject<any>();

  public setChartData(data:any) :void{
    this.data = data;
  }



  public getChartData() {
    setTimeout(() => {
      this.getChartDataEvent.next(this.data);
    }, 1000);
  }


}
