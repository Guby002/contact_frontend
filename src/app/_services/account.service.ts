import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';


import { User } from '../_models';
import {environment} from "../../environments/environment";

@Injectable({ providedIn: 'root' })
export class AccountService {
    public userSubject: BehaviorSubject<User>;
    public user: Observable<User>;
    public _error: boolean=false;
  getUserType() {
    return localStorage.getItem('user');
  }
    constructor(
        private router: Router,
        private http: HttpClient
    ) {
      this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    login({username, password}: { username: any, password: any }) {
        return this.http.post<User>(`http://localhost:8080/api/auth/login`, { username, password })
            .pipe(
            map(user => {
             localStorage.setItem('user', JSON.stringify(user));
              this.userSubject.next(user);
              return user;
            }));
    }
    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/account/login']);
    //  window.location.reload();
    }
    register(user: User) {
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    getAll() {
        return this.http.get<User[]>(`http://localhost:8080/api/user`);
    }

    getById(id: string) {
        return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
    }

    update(id, params) {
        return this.http.put(`${environment.apiUrl}/users/${id}`, params)
            .pipe(map(x => {
                // update stored user if the logged in user updated their own record
                if (id == this.userValue.id) {
                    // update local storage
                    const user = { ...this.userValue, ...params };
                    localStorage.setItem('user', JSON.stringify(user));

                    // publish updated user to subscribers
                    this.userSubject.next(user);
                }
                return x;
            }));
    }

    delete(username: string) {
        return this.http.delete(`http://localhost:8080/api/user/${username}`)
            .pipe(map(x => {
                // auto logout if the logged in user deleted their own record
                if (username === this.userValue.username) {
                    this.logout();
                }
                return x;
            }));
    }
}
