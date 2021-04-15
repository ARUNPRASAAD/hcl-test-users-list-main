import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { FilterOption } from './filter-option.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userDetail;
  duplicateUserData;
  searchValue: String;
  options: FilterOption[] = [
    {
      value: 'name',
      text: 'Name'
    },
    {
      value: 'username',
      text: 'User Name'
    },
    {
      value: 'email',
      text: 'Email'
    },
    {
      value: 'phone',
      text: 'Phone'
    },
    {
      value: 'website',
      text: 'Website'
    }
  ];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUserDetail();
  }

  getUserDetail() {
    this.usersService.getUsers().subscribe(
      (usrDtl) => {
        this.userDetail = usrDtl;
        this.duplicateUserData = usrDtl;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  filter(val) {
    const criteria = this.searchValue;
    const searchedValue = val.target.value;
    if (criteria && searchedValue.length > 0) {
      this.userDetail = this.duplicateUserData.filter(
        (usr) => {
          if ((usr[`${criteria}`].toLowerCase().indexOf(searchedValue.toLowerCase())) > -1) {
            return usr;
          }
        }
      )
    } else {
      this.userDetail = this.duplicateUserData;
    }

  }

}
