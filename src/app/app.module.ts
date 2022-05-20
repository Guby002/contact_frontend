import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';

import { MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';

import {ListContactComponent} from "./contact/list-contact/list-contact.component";;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
;
import { DialogComponent } from './dialog/dialog.component'
;
import { PaginatorComponent } from './paginator/paginator.component'
import {MatTableModule} from "@angular/material/table";
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatButtonModule,
    MatPaginatorModule,
    MatToolbarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule
  ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
      ListContactComponent,
      DialogComponent,
      PaginatorComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };
