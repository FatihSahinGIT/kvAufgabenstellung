import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FilternamePipe } from '../pipes/filtername.pipe';
import { SingleUserComponent } from './user/single-user/single-user.component';



const appRoutes: Routes = [
  { path: "", component: HomeComponent, pathMatch: 'full' },
  { path: "dashboard", component: UserComponent },
  { path: "create", component: UserFormComponent },
  { path: "user/:id", component: SingleUserComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    UserFormComponent,
    HomeComponent,
    FilternamePipe,
    SingleUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
