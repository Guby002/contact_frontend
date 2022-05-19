import {NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";



import {DeleteContactComponent} from "./delete-contact/delete-contact.component";
import {GetContactComponent} from "./get-contact/get-contact.component";
import {ListContactComponent} from "./list-contact/list-contact.component";
import {LayoutComponent} from "./layout.component";

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'delete', component: DeleteContactComponent },
      { path: 'get-contact', component: GetContactComponent },
      { path: 'list-contact', component: ListContactComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
