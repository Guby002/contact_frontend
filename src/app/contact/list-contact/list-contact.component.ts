import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../_services";
import {first} from "rxjs/operators";
import {ContactService} from "../../_services/contact.service";

@Component({
  templateUrl: './list-contact.component.html',
})
export class ListContactComponent implements OnInit {
  contacts = null;
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.getAll()
      .pipe(first())
      .subscribe(contacts => this.contacts = contacts);
  }

}
