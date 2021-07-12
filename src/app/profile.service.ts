import { Injectable } from '@angular/core';
import { Subject } from 'node_modules_old/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private data = [];
  public getProfileEvent = new Subject<any>();

  public setProfile(data:any) :void{
    this.data = data;
  }



  public getProfile() {
    this.getProfileEvent.next(this.data);
    console.log(this.data);
  }

}
