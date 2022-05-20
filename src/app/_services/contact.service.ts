import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../_models";
import {Contact, PageContact} from "../_models/contact";
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
  getContactorById(id: string):Observable<Contact>{
    return this.http.get<Contact>(`http://localhost:8080/api/contact/foruser/${id}`);
  }
  getAll():Observable<PageContact>{
    return this.http.get<PageContact>(`http://localhost:8080/api/contact/foruser?pageNo=1`)
  }

  delete(id: string){
    return this.http.delete(`http://localhost:8080/api/contact/${id}`)
  }
  create( contact : any):Observable<any>{
    return this.http.post(`http://localhost:8080/api/contact`,contact)
  }
}

