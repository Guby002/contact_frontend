import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
import {CommonModule} from "@angular/common";
import {DeleteContactComponent} from "./delete-contact/delete-contact.component";
import {PaginatorComponent} from "./paginator/paginator.component";

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
    { path: 'home',component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    { path:'delete-contact', component:DeleteContactComponent, canActivate: [AuthGuard]},
    { path:'contacts', component:PaginatorComponent, canActivate: [AuthGuard]},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [CommonModule,RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
