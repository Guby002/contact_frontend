import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { GetContactComponent } from './get-contact/get-contact.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ContactRoutingModule} from "./contact-routing.module";



@NgModule({

  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContactRoutingModule
  ],
  declarations: [
    DeleteContactComponent,
    ListContactComponent,
    GetContactComponent
  ]
})
export class ContactModule { }
