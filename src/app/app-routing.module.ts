import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
import {CommonModule} from "@angular/common";
import {ListContactComponent} from "./contact/list-contact/list-contact.component";
import {DeleteContactComponent} from "./contact/delete-contact/delete-contact.component";
import {PaginatorComponent} from "./paginator/paginator.component";

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);
const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    { path: 'list-contact',component:ListContactComponent  },
    { path:'delete-contact', component:DeleteContactComponent},
    { path:'contacts', component:PaginatorComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [CommonModule,RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
