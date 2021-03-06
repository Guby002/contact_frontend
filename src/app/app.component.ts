import {Component, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { AccountService } from './_services';
import {User} from "./_models";
import {DialogComponent} from "./dialog/dialog.component";



@Component({  selector: 'my-app',templateUrl: 'app.component.html',styleUrls: ['./app.component.css'] })
export class AppComponent implements OnInit  {


  userType : string | undefined;
  private _user: User;


  set user(value: User) {
    this._user = value;
  }
  get user(): User {
    return this._user;
  }


    constructor(private accountService: AccountService,
                private dialog: MatDialog,
              ) {
    }

  ngOnInit(){
      this.accountService.userSubject.subscribe(x => {
        this._user = x;
        if(x) {
          if (this._user.roles.includes('CREATE')) {
            this.userType = 'ADMIN';
          } else {
            this.userType = 'USER';
          }
        }else{
          this.userType=undefined;
        }
      });

  }
        openDialog()
        {
          this.dialog.open(DialogComponent, {
          });
        }
        logout()
        {
          this.accountService.logout();
        }
}
