import { User } from './../table/User';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../profile.service';
import { conditionalExpression } from 'node_modules_old/@babel/types/lib/index-legacy';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public selectedUserId : string;
  constructor(public profService: ProfileService) { }

  userInfo : User={
      id: "",
     title:  "",
     firstName: "",
     lastName: "",
     gender: "",
     email: "",
     dateOfBirth: "",
     registerDate:  "",
     phone:  "",
     picture: "",
     location: null,
  };

  ngOnInit() {
    this.profService.getProfileEvent.subscribe(data => {
      this.updateData(data);
    });
  }

  updateData(data) {
    this.userInfo = data;
  }

  onUpdateData() {
    this.profService.getProfile();
  }

}
