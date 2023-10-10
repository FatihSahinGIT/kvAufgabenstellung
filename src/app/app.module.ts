import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { UserFormComponent } from './user-form/user-form.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: "", component: UserComponent, pathMatch: 'full' },
  { path: "newUser", component: UserFormComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
