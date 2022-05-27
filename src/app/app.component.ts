import {Component, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { AccountService } from './_services';
import {User} from "./_models";
import {DialogComponent} from "./dialog/dialog.component";
import {AuthGuard} from "./_helpers";
import {Router} from "@angular/router";


@Component({ selector: 'app', templateUrl: 'app.component.html' })
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
            width: '30%'
          });
        }
        logout()
        {
          this.accountService.logout();
        }
}
