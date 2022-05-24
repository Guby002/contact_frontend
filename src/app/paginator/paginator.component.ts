import {AfterViewInit, Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorIntl, PageEvent} from '@angular/material/paginator';
import {Contact, PageContact} from "../_models/contact";
import {ActivatedRoute} from "@angular/router";
import {ContactService} from "../_services/contact.service";
import {DialogComponent} from "../dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit{

  contacts= null;
  pageNumber:string="1";
  private contact: Contact;
  constructor(
    private  route: ActivatedRoute,
    private contactService : ContactService,
    private dialog: MatDialog,) {
  }
  ngOnInit(): void {
    this.contactService.getAll(this.pageNumber).subscribe(data =>{
        this.contacts=data
      }
    )
  }
  deleteContact(id:string){
    this.contactService.delete(id).subscribe();
    this.ngOnInit();
  }
  OnPageChange(event : PageEvent){
    console.log(event);
    this.pageNumber=(event.pageIndex+1).toString();
    this.ngOnInit()
  }
  openDialog(id:string){
    this.contactService.getContactorById(id).subscribe(data =>{
      this.contact = data
      console.log(this.contact)
      this.dialog.open(DialogComponent, {
        width:'30%',
        data:{
        firstName:this.contact.firstName,
          secondName:this.contact.secondName,
          email:this.contact.email,
          phoneNumber:this.contact.phoneNumber,
          companyId:this.contact.companyId,
        }
      });

    });
   this.ngOnInit();
  }
}





