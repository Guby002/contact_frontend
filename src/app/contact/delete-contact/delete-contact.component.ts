import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContactService} from "../../_services/contact.service";
import {ActivatedRoute, Router} from "@angular/router";
import { AlertService} from "../../_services";

@Component({
  templateUrl: './delete-contact.component.html',
})
export class DeleteContactComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: ['', Validators.required],
    });
  }
  get f() { return this.form.controls; }
  onSubmit() {
    this.submitted = true;
    console.log("Form Submitted!");
    if (this.form.valid) {
      console.log("Form Submitted!");
    }
    // reset alerts on submit
    this.alertService.clear();
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.contactService.delete(this.f.id.value)
  }
}
