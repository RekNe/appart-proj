import { ProfileService } from './../profile.service';
import { User } from './User';
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { PieDataService } from '../pie-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  response: any[] = [];
  users: User[] = [];
  cols: any[];
  prcntMr: number;
  prcntMrs: number;
  prcntMs: number;
  prcntMiss: number;
  pieData : any[] = [];

  constructor( public userService:UserService, public dataService: PieDataService, public profService: ProfileService ) {

  }

  getResponseArray(): void {
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data.data;
      this.createPieChartData();
      this.dataService.setChartData(this.pieData);

    });
  }

  createPieChartData(){

      //Get percentage occurence for each title type
      this.prcntMr = this.users.reduce((counter, {title}) => title === 'mr' ? counter += 1 : counter, 0)*100/this.users.length;
      this.prcntMrs = this.users.reduce((counter, {title}) => title === 'mrs' ? counter += 1 : counter, 0)*100/this.users.length;
      this.prcntMs = this.users.reduce((counter, {title}) => title === 'ms' ? counter += 1 : counter, 0)*100/this.users.length;
      this.prcntMiss = this.users.reduce((counter, {title}) => title === 'miss' ? counter += 1 : counter, 0)*100/this.users.length;
      this.pieData= [{
        name: 'Mr',
        y: this.prcntMr
    }, {
        name: 'Ms',
        y: this.prcntMs
    }, {
        name: 'Miss',
        y: this.prcntMiss
    }, {
        name: 'Mrs',
        y: this.prcntMrs
    }]

  }



  selectUser(user){
    this.profService.setProfile(user);
  }

  ngOnInit() {

    this.getResponseArray();

    this.cols = [
        { field: 'id', header: 'Id' },
        { field: 'title', header: 'Title' },
        { field: 'firstName', header: 'First Name' },
        { field: 'lastName', header: 'Last Name' },
        { field: 'email', header: 'Email' }
    ];
  }

}
