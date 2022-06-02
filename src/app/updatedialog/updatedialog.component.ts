import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContactService} from "../_services/contact.service";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-updatedialog',
  templateUrl: './updatedialog.component.html',
  styleUrls: ['./updatedialog.component.css']
})
export class UpdatedialogComponent implements OnInit {

  contactForm !: FormGroup;
  constructor(
    private formBuilder : FormBuilder,
    private contactService : ContactService,
    private router : Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    console.log(this.data?.contact);
    this.contactForm = this.formBuilder.group({
      id:this.data.contact.id,
      firstName:[this.data.contact.firstName,Validators.required],
      secondName:[this.data.contact.secondName,Validators.required],
      email:[this.data.contact.email,Validators.required],
      phoneNumber:[this.data.contact.phoneNumber,Validators.required],
      companyId:[this.data.contact.companyId,Validators.required]
    })
  }
  updateContact() {
    console.log("value:",this.contactForm.value);

    //let c = this.contactForm.value;
    //c.phoneNumber = '36' + c.phoneNumber;
    this.contactService.update(this.contactForm.value).subscribe(
      error => {
        console.log("ERRER");
      }
    );
  }
}
