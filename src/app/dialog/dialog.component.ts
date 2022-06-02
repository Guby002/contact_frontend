import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContactService} from "../_services/contact.service";
import {Observable} from "rxjs";
import {Router, RouterModule} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Contact} from "../_models/contact";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  contactForm !: FormGroup;
  constructor(
    private formBuilder : FormBuilder,
    private contactService : ContactService,
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      firstName:['',Validators.required],
      secondName:['',Validators.required],
      email:['',Validators.required],
      phoneNumber:['',Validators.required],
      companyId:['',Validators.required]
    })
  }
  addContact() {
    console.log(this.contactForm.value);

    //let c = this.contactForm.value;
    //c.phoneNumber = '36' + c.phoneNumber;
   this.contactService.create(this.contactForm.value).subscribe(()=> {
     this.router.navigate(['/contacts']);
   });

  }

}
