import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../_models";
import {Contact} from "../_models/contact";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private userSubject: BehaviorSubject<User>;
  public contact: Observable<Contact>;

  constructor(private router: Router,
              private http: HttpClient
  ) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
  }
  getContactorById(id: string){
    return this.http.get(`http://localhost:8080/api/contact/foruser/${id}`);
  }
  getAll(){
    return this.http.get(`http://localhost:8080/api/contact/foruser?pageNo=1`)
  }
}

