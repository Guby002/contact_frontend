import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { AccountService } from './_services';
import {User} from "./_models";
import {DialogComponent} from "./dialog/dialog.component";
import {MatPaginator} from "@angular/material/paginator";
import {PAGE_UP} from "@angular/cdk/keycodes";
import {PaginatorComponent} from "./paginator/paginator.component";


@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }
    private _user: User;

    constructor(private accountService: AccountService,
                private dialog: MatDialog,
              ) {
        this.accountService.user.subscribe(x => this._user = x);
    }

    openDialog() {
     this.dialog.open(DialogComponent, {
          width:'30%'
      });
    }
    logout() {
        this.accountService.logout();
    }
}
