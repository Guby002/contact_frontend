import { Component } from '@angular/core';

import { AccountService } from './_services';
import {User} from "./_models";


@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }
    private _user: User;

    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this._user = x);
    }

    logout() {
        this.accountService.logout();
    }
}
